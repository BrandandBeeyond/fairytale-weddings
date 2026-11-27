"use client";
import { useEffect } from "react";

// Same scripts, same order as the original index.php
const SCRIPTS = [
  "/assets/js/gsap.min.js",
  "/assets/js/ScrollTrigger.min.js",
  "https://code.jquery.com/jquery-3.7.1.js",
  "https://unpkg.com/aos@2.3.1/dist/aos.js",
  "https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js",
  "https://cdn.jsdelivr.net/npm/flatpickr",
  "/assets/js/owl.carousel.min.js",
  "/assets/js/main.js",
];

// Scripts download in parallel but run in the original order (async = false)
function loadAll(list) {
  return Promise.all(
    list.map(
      (src) =>
        new Promise((resolve) => {
          const s = document.createElement("script");
          s.src = src;
          s.async = false;
          s.onload = resolve;
          s.onerror = resolve; // never block the page
          document.body.appendChild(s);
        })
    )
  );
}

function initGallery() {
  const grid = document.getElementById("galleryGrid");
  const modalEl = document.getElementById("galleryModal");
  const body = document.getElementById("galleryModalBody");
  if (!grid || !modalEl || !body || !window.bootstrap) return;
  const modal = new window.bootstrap.Modal(modalEl);
  grid.querySelectorAll(".gallery-item").forEach((a) => {
    if (a.dataset.type === "video") a.classList.add("is-video");
    a.addEventListener("click", (e) => {
      e.preventDefault();
      body.innerHTML =
        a.dataset.type === "video"
          ? `<video src="${a.dataset.src}" controls autoplay playsinline></video>`
          : `<img src="${a.dataset.src}" alt="">`;
      modal.show();
    });
  });
  modalEl.addEventListener("hidden.bs.modal", () => (body.innerHTML = ""));
}

// Links to pages that are not part of this copy must not navigate anywhere.
// "#" links do nothing; "#gallery" scrolls to the new Gallery section.
function initLinks() {
  document.addEventListener("click", (e) => {
    const a = e.target.closest && e.target.closest("a");
    if (!a) return;
    const href = a.getAttribute("href");
    if (href === "#") {
      e.preventDefault();
    } else if (href === "#gallery") {
      e.preventDefault();
      // close the full-screen menu if it is open
      document.querySelector(".hamburger-init")?.classList.remove("active");
      document.querySelector(".menu-wrapper")?.classList.remove("visible");
      document.body.style.overflow = "";
      document.body.style.height = "";
      document.documentElement.style.overflow = "";
      document.getElementById("gallery")?.scrollIntoView({ behavior: "smooth" });
    }
  });
}

// Wait until the images near the top are decoded so AOS measures real positions
function whenImagesReady() {
  const imgs = [...document.images].filter((i) => !i.complete);
  return Promise.race([
    Promise.all(imgs.map((i) => new Promise((r) => { i.onload = i.onerror = r; }))),
    new Promise((r) => setTimeout(r, 2500)),
  ]);
}

export default function ClientScripts({ init = "/assets/js/home-init.js" }) {
  useEffect(() => {
    if (window.__tbwLoaded) return;
    window.__tbwLoaded = true;
    initLinks();
    (async () => {
      await loadAll(init ? [...SCRIPTS, init] : SCRIPTS);
      // The original scripts wait for DOMContentLoaded / load, which have
      // already happened by now, so fire them once for those listeners.
      document.dispatchEvent(new Event("DOMContentLoaded"));
      window.dispatchEvent(new Event("load"));
      initGallery();
      // React sets "muted" as a property after hydration, so autoplay videos may have been
      // blocked by the browser before that. Make sure they are muted and playing.
      document.querySelectorAll("video[autoplay]").forEach((v) => {
        v.muted = true;
        v.play?.().catch(() => {});
      });
      // re-measure scroll animations once images have taken their real size
      await whenImagesReady();
      window.AOS && window.AOS.refreshHard();
    })();
  }, []);
  return null;
}
