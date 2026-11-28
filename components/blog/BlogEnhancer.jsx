"use client";
import { useEffect, useRef } from "react";
import "./blog-extras.css";

// Adds the interactive bits of the blog layout:
//  - reading progress bar
//  - scroll reveal (.tbw-reveal -> .is-in)
//  - count-up numbers ([data-count])
//  - hero parallax
// Render <BlogEnhancer /> once inside every page that uses <div className="tbw-blog">.
export default function BlogEnhancer() {
  const bar = useRef(null);

  useEffect(() => {
    const root = document.querySelector(".tbw-blog");
    if (!root) return;
    root.classList.add("js-ready");

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const bg = root.querySelector(".tbw-hero__bg");

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
      { threshold: 0.14, rootMargin: "0px 0px -6% 0px" }
    );
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
    };
  }, []);

  return (
    <div className="tbw-progress" aria-hidden="true">
      <div className="tbw-progress__bar" ref={bar} />
    </div>
  );
}
