import IndexPage from "@/components/pages/IndexPage";
import ClientScripts from "@/components/ClientScripts";

export default function Home() {
  return (
    <>
      {/* Hero images are preloaded on the home page only (React hoists these into <head>) */}
      <link rel="preload" as="image" href="/assets/img/2.webp" fetchPriority="high" />
      <link rel="preload" as="image" href="/assets/img/1.webp" />
      <link rel="preload" as="image" href="/assets/img/3.webp" />
      <link rel="preload" as="image" href="/assets/img/banners/anjsudmusic.jpg" />
      <IndexPage />
      <ClientScripts init="/assets/js/home-init.js" />
    </>
  );
}
