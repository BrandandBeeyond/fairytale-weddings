import fs from "fs";
import path from "path";
import { notFound } from "next/navigation";
import ClientScripts from "@/components/ClientScripts";
import { PAGE_COMPONENTS } from "@/components/pages";
import { BLOG_POSTS } from "@/lib/pages";

export const dynamicParams = false;

export function generateStaticParams() {
  return Object.keys(PAGE_COMPONENTS).map((page) => ({ page }));
}

export async function generateMetadata({ params }) {
  const { page } = await params;
  const file = path.join(process.cwd(), "content", `${page}.meta.json`);
  return fs.existsSync(file) ? JSON.parse(fs.readFileSync(file, "utf8")) : { title: "Touchwood Bliss Weddings" };
}

// Page-specific init script; blog posts share the blogs page script
function initScript(page) {
  if (fs.existsSync(path.join(process.cwd(), "public/assets/js/pages", `${page}-init.js`)))
    return `/assets/js/pages/${page}-init.js`;
  return BLOG_POSTS.includes(page) ? "/assets/js/pages/blogs-init.js" : null;
}

export default async function Page({ params }) {
  const { page } = await params;
  const PageContent = PAGE_COMPONENTS[page];
  if (!PageContent) notFound();
  return (
    <>
      <PageContent />
      <ClientScripts init={initScript(page)} />
    </>
  );
}
