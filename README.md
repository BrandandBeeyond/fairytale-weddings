# Touchwood Bliss Weddings – Next.js

```bash
npm install
npm run dev        # http://localhost:3000
npm run build && npm start
```

## Images (read this first)
All images/videos must live in `public/assets/img` and `public/assets/videos`, so they are
served from your own server with long cache headers. Two ways to fill them:

1. **Automatic:** `npm run assets` (also runs before `dev` and `build`). It downloads every file
   the pages reference from the live site, with retries. `npm run assets:check` lists what is
   still missing locally.
2. **Manual:** copy the `assets/img` and `assets/videos` folders of your old PHP project into
   `public/assets/`. Then nothing needs downloading.

Until a file is local, it is proxied from the live site (works, but slower). After the first
successful `npm run assets`, commit `public/assets/img` so every deploy already has the files.

## How it is built
Every page is a real React (JSX) component – no HTML files, no `dangerouslySetInnerHTML`.

- `components/pages/*Page.jsx` – one component per page (home = `IndexPage.jsx`)
- `components/pages/index.js` – slug → component map (served at `/<slug>`)
- `components/layout/Header*.jsx`, `Footer*.jsx` – shared headers/footers (each file lists the pages using it)
- `content/<slug>.meta.json` – title / description / canonical per page
- `app/layout.js` – head: meta tags, fonts, Bootstrap, AOS, analytics, Tawk
- `app/page.js` (home) and `app/[page]/page.js` (all other pages, pre-rendered as static HTML)
- `components/ClientScripts.js` – loads the original scripts (jQuery, GSAP, Owl, AOS…) in the original order
- `public/assets/css|js|fonts` – original CSS, JS and fonts

## Speed
- All pages are statically pre-rendered at build time.
- Below-the-fold images use `loading="lazy"` + `decoding="async"`; hero images are preloaded/eager.
- `npm run assets` downloads images into `public/assets` and re-compresses big photos (same name and
  format, max 2000px wide, quality 80) with `sharp`, so they are much smaller.
- `/assets` and `/gallery` are served with long cache headers.

## Adding a blog post
1. Create `components/pages/MyPostPage.jsx` (copy an existing post).
2. Register it in `components/pages/index.js` and add the slug to `BLOG_POSTS` in `lib/pages.js`.
3. Add `content/<slug>.meta.json`.

Old `*.php` URLs redirect to the new clean URLs.

## Gallery section (home page)
Edit the tiles in `components/pages/IndexPage.jsx` (search for `galleryGrid`). Put your files in
`public/gallery/` and use:

```jsx
<div className="col-lg-3 col-md-4 col-6">
  <a href="#" className="gallery-item d-block position-relative" data-type="image" data-src="/gallery/photo1.jpg">
    <img loading="lazy" decoding="async" src="/gallery/photo1.jpg" className="img-fluid" alt="" />
  </a>
</div>
```
For a video use `data-type="video" data-src="/gallery/videos/reel1.mp4"` and a poster image inside the `<img>`.

## Blog images
All images used by the blogs page and the blog posts are included in `public/assets/img`
(original files from the live site, unchanged). Four broken image links were fixed:
`blog1.jpeg` → `blog1.jpg`, the two `/images/...` banners on the blogs page → `/assets/img/...`,
the missing `monsoonwed.jpg` banner → `/assets/img/banners/why_igatpuri.jpg`, and the Cloudinary
images (which did not load) → local photos (`slider1-3.jpeg`, `reception.jpg`, `tentlawn.jpg`).
