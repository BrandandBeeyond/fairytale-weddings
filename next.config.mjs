import fs from "fs";

/** @type {import('next').NextConfig} */
// Every page slug = every content/<slug>.meta.json
const SLUGS = fs.readdirSync(new URL("./content/", import.meta.url)).filter((f) => f.endsWith(".meta.json")).map((f) => f.replace(".meta.json", ""));

const LIVE = "https://www.touchwoodblissweddings.com";

// Static files: Next sends "max-age=0" for /public by default, which makes the browser
// re-check every image on every visit. Cache them instead (a week, refreshed in the
// background for a month) so repeat visits and page-to-page navigation are instant.
const STATIC_CACHE = "public, max-age=604800, stale-while-revalidate=2592000";

const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  compress: true,

  // Old PHP links (about.php, index.php ...) keep working and pass SEO to the new URLs.
  async redirects() {
    return [
      { source: "/index.php", destination: "/", permanent: true },
      ...SLUGS.map((slug) => ({ source: `/${slug}.php`, destination: `/${slug}`, permanent: true })),
    ];
  },

  async headers() {
    return [
      { source: "/assets/:path*", headers: [{ key: "Cache-Control", value: STATIC_CACHE }] },
      { source: "/gallery/:path*", headers: [{ key: "Cache-Control", value: STATIC_CACHE }] },
    ];
  },

  // Safety net only: a file that is NOT in /public/assets is fetched from the live site.
  // Files that exist in /public always win. Run `npm run assets` (it also runs before
  // dev/build) so everything is local and this proxy is never used.
  async rewrites() {
    return {
      fallback: [
        { source: "/assets/img/:path*", destination: `${LIVE}/assets/img/:path*` },
        { source: "/assets/videos/:path*", destination: `${LIVE}/assets/videos/:path*` },
        { source: "/assets/fonts/:path*", destination: `${LIVE}/assets/fonts/:path*` },
      ],
    };
  },
};

export default nextConfig;
