// Downloads every image/video the pages use into /public/assets so the site is served
// from your own server (fast) instead of being proxied from the live site.
// Runs automatically before `npm run dev` and `npm run build`; existing files are skipped.
//
//   node scripts/fetch-assets.mjs            download what is missing
//   node scripts/fetch-assets.mjs --check    only list what is missing locally
//   node scripts/fetch-assets.mjs --list     list everything the pages reference
//
// Tip: if you have the original PHP project, you can instead copy its assets/img and
// assets/videos folders into public/assets/ and this script will have nothing to do.
import fs from "fs";
import path from "path";

const ROOT = process.cwd();
const HOSTS = [
  "https://www.touchwoodblissweddings.com",
  "https://touchwoodblissweddings.com",
];
const HEADERS = {
  // some hosts/CDNs block the default Node user agent
  "User-Agent":
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0 Safari/537.36",
  Accept: "image/avif,image/webp,image/*,video/*,*/*;q=0.8",
  Referer: "https://www.touchwoodblissweddings.com/",
};

const read = (rel) => {
  const fp = path.join(ROOT, rel);
  return fs.existsSync(fp) ? fs.readFileSync(fp, "utf8") : "";
};
const listDir = (rel, ext) => {
  const dp = path.join(ROOT, rel);
  return fs.existsSync(dp) ? fs.readdirSync(dp).filter((f) => f.endsWith(ext)).map((f) => rel + "/" + f) : [];
};

const wanted = { img: new Set(), videos: new Set() };
function collect(text, kind) {
  const re = new RegExp(`assets\\/${kind}\\/([^"'\\s)>,\\\\]+)`, "g");
  for (const m of text.matchAll(re)) {
    const rel = decodeURIComponent(m[1].split("?")[0].split("#")[0]);
    if (rel && !rel.endsWith("/") && /\.[a-z0-9]{2,5}$/i.test(rel)) wanted[kind].add(rel);
  }
}

for (const f of [
  ...listDir("components/pages", ".jsx"),
  ...listDir("components/layout", ".jsx"),
  "app/layout.js",
  "app/page.js",
  ...listDir("public/assets/js", ".js").filter((f) => !/min\.js$/.test(f)),
  ...listDir("public/assets/js/pages", ".js"),
]) {
  const text = read(f);
  collect(text, "img");
  collect(text, "videos");
}
// CSS refers to ../img/...
for (const m of read("public/assets/css/style9.css").matchAll(/\.\.\/(img|videos)\/([^"'\s)]+)/g)) {
  const rel = decodeURIComponent(m[2].split("?")[0].split("#")[0]);
  if (rel && !rel.endsWith("/")) wanted[m[1]].add(rel);
}

const items = [
  ...[...wanted.img].sort().map((rel) => ({ kind: "img", rel })),
  ...[...wanted.videos].sort().map((rel) => ({ kind: "videos", rel })),
];
const dest = (it) => path.join(ROOT, "public/assets", it.kind, it.rel);
const have = (it) => fs.existsSync(dest(it)) && fs.statSync(dest(it)).size > 0;

if (process.argv.includes("--list")) {
  console.log(items.map((i) => `${i.kind}/${i.rel}`).join("\n"));
  console.log(`\n${items.length} files referenced`);
  process.exit(0);
}

const todo = items.filter((it) => !have(it));
if (process.argv.includes("--check")) {
  console.log(todo.map((i) => `${i.kind}/${i.rel}`).join("\n") || "nothing missing");
  console.log(`\n${todo.length} of ${items.length} files missing locally`);
  process.exit(0);
}
if (!todo.length) {
  console.log(`[assets] all ${items.length} files already local`);
  process.exit(0);
}

console.log(`[assets] downloading ${todo.length} of ${items.length} files...`);

async function grab(it) {
  const urlPath = `/assets/${it.kind}/` + it.rel.split("/").map(encodeURIComponent).join("/");
  for (let attempt = 0; attempt < 3; attempt++) {
    for (const host of HOSTS) {
      try {
        const res = await fetch(host + urlPath, {
          headers: HEADERS,
          signal: AbortSignal.timeout(it.kind === "videos" ? 120000 : 30000),
        });
        // the live server answers missing files with a web page: never save that as an image
        if (!res.ok || /text\/html/i.test(res.headers.get("content-type") || "")) continue;
        const buf = Buffer.from(await res.arrayBuffer());
        if (!buf.length) continue;
        fs.mkdirSync(path.dirname(dest(it)), { recursive: true });
        fs.writeFileSync(dest(it), await shrink(buf, it.rel));
        return true;
      } catch {
        /* try next host / attempt */
      }
    }
    await new Promise((r) => setTimeout(r, 400 * (attempt + 1)));
  }
  return false;
}

// Re-compress big photos once, on download (same file name and format, so nothing in the
// pages changes). Uses sharp, which ships with Next.js; skipped silently if unavailable.
let sharp = null;
try { sharp = (await import("sharp")).default; } catch {}
async function shrink(buf, rel) {
  const ext = path.extname(rel).toLowerCase();
  if (!sharp || buf.length < 150 * 1024 || ![".jpg", ".jpeg", ".png", ".webp"].includes(ext)) return buf;
  try {
    let img = sharp(buf, { animated: ext === ".webp" }).rotate().resize({ width: 2000, withoutEnlargement: true });
    img = ext === ".png" ? img.png({ compressionLevel: 9 })
        : ext === ".webp" ? img.webp({ quality: 80 })
        : img.jpeg({ quality: 80, mozjpeg: true, progressive: true });
    const out = await img.toBuffer();
    return out.length < buf.length ? out : buf;
  } catch { return buf; }
}

let ok = 0;
const failed = [];
const queue = [...todo];
await Promise.all(
  Array.from({ length: 8 }, async () => {
    while (queue.length) {
      const it = queue.shift();
      (await grab(it)) ? ok++ : failed.push(`${it.kind}/${it.rel}`);
    }
  })
);

console.log(`[assets] done: ${ok} downloaded, ${failed.length} failed`);
if (failed.length) {
  console.log(
    "[assets] could not download these (they will be proxied from the live site, or copy them into public/assets/ yourself):\n  " +
      failed.join("\n  ")
  );
}
process.exit(0); // never block dev/build
