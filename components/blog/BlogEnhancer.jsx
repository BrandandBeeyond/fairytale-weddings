"use client";
import { useEffect, useRef } from "react";
import "./blog-extras.css";

// Adds the interactive bits of the blog layout:
//  - reading progress bar
//  - scroll reveal (.tbw-reveal and every direct child of .tbw-article -> .is-in)
//  - count-up numbers ([data-count])
//  - hero parallax
//  - "In this guide" contents box for long articles
// Render <BlogEnhancer /> once inside every page that uses <div className="tbw-blog">.
export default function BlogEnhancer() {
  const bar = useRef(null);

  useEffect(() => {
    const root = document.querySelector(".tbw-blog");
    if (!root) return;
    root.classList.add("js-ready");

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const bg = root.querySelector(".tbw-hero__bg");
    const article = root.querySelector(".tbw-article");

    // ----- contents box -----
    let toc = null;
    if (article && !article.querySelector(".tbw-toc")) {
      const h2s = [...article.querySelectorAll("h2")];
      const heads = h2s.length >= 3 ? h2s : [...article.querySelectorAll("h3")];
      if (heads.length >= 4) {
        toc = document.createElement("details");
        toc.className = "tbw-toc";
        toc.open = true;
        const sum = document.createElement("summary");
        sum.textContent = "In this guide";
        const list = document.createElement("ol");
        heads.forEach((h, i) => {
          if (!h.id) h.id = `tbw-sec-${i + 1}`;
          const li = document.createElement("li");
          const a = document.createElement("a");
          a.href = `#${h.id}`;
          a.textContent = h.textContent.trim();
          li.appendChild(a);
          list.appendChild(li);
        });
        toc.append(sum, list);
        // place it after the intro, right before the first heading
        let anchor = heads[0];
        while (anchor.parentElement && anchor.parentElement !== article) anchor = anchor.parentElement;
        article.insertBefore(toc, anchor.parentElement === article ? anchor : article.firstChild);
      }
    }

    // ----- progress bar + parallax -----
    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        const max = document.documentElement.scrollHeight - window.innerHeight;
        const p = max > 0 ? Math.min(1, window.scrollY / max) : 0;
        if (bar.current) bar.current.style.transform = `scaleX(${p})`;
        if (bg && !reduce && window.scrollY < window.innerHeight * 1.3) {
          bg.style.transform = `translate3d(0, ${window.scrollY * 0.22}px, 0) scale(1.08)`;
        }
        ticking = false;
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    // ----- reveal on scroll -----
    const revealIO = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("is-in");
            revealIO.unobserve(e.target);
          }
        });
      },
      // threshold 0 so very tall blocks still reveal
      { threshold: 0, rootMargin: "0px 0px -8% 0px" }
    );
    if (article) {
      [...article.children].forEach((el) => el.classList.add("tbw-reveal"));
    }
    root.querySelectorAll(".tbw-reveal").forEach((el) => revealIO.observe(el));

    // ----- count-up numbers -----
    const format = (el, value) => {
      const decimals = Number(el.dataset.decimals || 0);
      const n = decimals ? value.toFixed(decimals) : Math.round(value).toLocaleString("en-IN");
      el.textContent = n + (el.dataset.suffix || "");
    };
    const run = (el) => {
      const end = Number(el.dataset.count);
      if (reduce) return format(el, end);
      const t0 = performance.now();
      const dur = 1600;
      const tick = (now) => {
        const t = Math.min(1, (now - t0) / dur);
        const eased = 1 - Math.pow(1 - t, 3);
        format(el, end * eased);
        if (t < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    };
    const countIO = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            run(e.target);
            countIO.unobserve(e.target);
          }
        });
      },
      { threshold: 0.6 }
    );
    root.querySelectorAll("[data-count]").forEach((el) => {
      format(el, 0);
      countIO.observe(el);
    });

    return () => {
      window.removeEventListener("scroll", onScroll);
      revealIO.disconnect();
      countIO.disconnect();
      if (toc && toc.parentNode) toc.parentNode.removeChild(toc);
    };
  }, []);

  return (
    <div className="tbw-progress" aria-hidden="true">
      <div className="tbw-progress__bar" ref={bar} />
    </div>
  );
}
