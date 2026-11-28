// Reusable building blocks for the animated blog layout.
// These are plain server components (no hooks). Image paths are always passed in from
// the page files so `npm run assets` can find and download them.

export function Hero({ image, alt, kicker, title, meta = [], fx }) {
  const words = title.split(" ");
  const drops = Array.from({ length: 46 }, (_, i) => ({
    left: `${(i * 23) % 100}%`,
    delay: `${((i * 0.37) % 2).toFixed(2)}s`,
    dur: `${(0.9 + (i % 5) * 0.18).toFixed(2)}s`,
  }));
  const petals = Array.from({ length: 22 }, (_, i) => ({
    left: `${(i * 29) % 100}%`,
    delay: `${((i * 0.9) % 9).toFixed(2)}s`,
    dur: `${8 + (i % 6)}s`,
  }));
  return (
    <section className="tbw-hero">
      <img className="tbw-hero__bg" src={image} alt={alt} fetchPriority="high" />
      {fx === "rain" && (
        <div className="tbw-fx" aria-hidden="true">
          {drops.map((d, i) => (
            <span key={i} className="tbw-drop" style={{ left: d.left, "--delay": d.delay, "--dur": d.dur }} />
          ))}
        </div>
      )}
      {fx === "petals" && (
        <div className="tbw-fx" aria-hidden="true">
          {petals.map((p, i) => (
            <span key={i} className="tbw-petal" style={{ left: p.left, "--delay": p.delay, "--dur": p.dur }} />
          ))}
        </div>
      )}
      <div className="tbw-wrap tbw-hero__inner">
        <span className="tbw-hero__kicker">{kicker}</span>
        <h1 className="tbw-hero__title tbw-wide">
          {words.map((w, i) => (
            <span key={i}>
              <span className="tbw-word" style={{ "--i": i }}>
                {w}
              </span>
              {i < words.length - 1 ? " " : ""}
            </span>
          ))}
        </h1>
        <div className="tbw-hero__meta">
          {meta.map((m) => (
            <span key={m}>{m}</span>
          ))}
        </div>
      </div>
      <div className="tbw-scrollcue" aria-hidden="true" />
    </section>
  );
}

export function Stats({ items }) {
  return (
    <div className="tbw-wrap">
      <div className="tbw-stats">
        {items.map((s, i) => (
          <div key={s.label} className="tbw-stat tbw-reveal tbw-reveal--zoom" style={{ "--d": `${i * 0.1}s` }}>
            <span
              className="tbw-stat__num"
              data-count={s.value}
              data-decimals={s.decimals || 0}
              data-suffix={s.suffix || ""}
            >
              {s.value}
              {s.suffix || ""}
            </span>
            <span className="tbw-stat__label">{s.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export function Split({ image, alt, eyebrow, title, caption, flip = false, children }) {
  return (
    <section className="tbw-section">
      <div className="tbw-wrap">
        <div className={`tbw-split${flip ? " tbw-split--flip" : ""}`}>
          <div className={`tbw-split__media tbw-reveal ${flip ? "tbw-reveal--right" : "tbw-reveal--left"}`}>
            <div className="tbw-split__img">
              <img src={image} alt={alt} loading="lazy" decoding="async" />
              {caption && <span className="tbw-split__cap">{caption}</span>}
            </div>
          </div>
          <div className={`tbw-reveal ${flip ? "tbw-reveal--left" : "tbw-reveal--right"}`}>
            {eyebrow && <span className="tbw-eyebrow">{eyebrow}</span>}
            <h2 className="tbw-h2">{title}</h2>
            {children}
          </div>
        </div>
      </div>
    </section>
  );
}

export function SectionTitle({ eyebrow, title, children }) {
  return (
    <div className="tbw-narrow tbw-reveal" style={{ textAlign: "center", marginBottom: 36 }}>
      {eyebrow && <span className="tbw-eyebrow">{eyebrow}</span>}
      <h2 className="tbw-h2">{title}</h2>
      {children}
    </div>
  );
}

export function Cards({ items }) {
  return (
    <div className="tbw-wrap">
      <div className="tbw-cards">
        {items.map((c, i) => (
          <div key={c.title} className="tbw-card tbw-reveal" style={{ "--d": `${(i % 3) * 0.12}s` }}>
            <h3>{c.title}</h3>
            <p>{c.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

// Auto-scrolling photo strip. The list is rendered twice for a seamless loop.
export function Marquee({ images }) {
  const loop = [...images, ...images];
  return (
    <div className="tbw-marquee" aria-label="Photo gallery">
      <div className="tbw-marquee__track">
        {loop.map((img, i) => (
          <figure key={i} aria-hidden={i >= images.length ? "true" : undefined}>
            <img src={img.src} alt={i >= images.length ? "" : img.alt} loading="lazy" decoding="async" />
          </figure>
        ))}
      </div>
    </div>
  );
}

export function Timeline({ items }) {
  return (
    <div className="tbw-narrow">
      <div className="tbw-timeline">
        {items.map((t, i) => (
          <div key={t.title} className="tbw-tl tbw-reveal tbw-reveal--left" style={{ "--d": `${i * 0.06}s` }}>
            <span className="tbw-tl__time">{t.time}</span>
            <h3>{t.title}</h3>
            <p>{t.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export function Quote({ text, by }) {
  return (
    <section className="tbw-quote tbw-reveal">
      <blockquote>{text}</blockquote>
      <cite>{by}</cite>
    </section>
  );
}

export function Compare({ head, rows }) {
  return (
    <div className="tbw-wrap tbw-reveal">
      <div className="tbw-table-wrap">
        <table className="tbw-table">
          <thead>
            <tr>
              {head.map((h) => (
                <th key={h}>{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((r) => (
              <tr key={r[0]}>
                <th scope="row">{r[0]}</th>
                {r.slice(1).map((c, i) => (
                  <td key={i}>{c}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export function Duo({ left, right }) {
  const Box = ({ data, hl }) => (
    <div className={`tbw-duo__box${hl ? " tbw-duo__box--hl" : ""} tbw-reveal ${hl ? "tbw-reveal--right" : "tbw-reveal--left"}`}>
      <h3>{data.title}</h3>
      <ul>
        {data.points.map((p) => (
          <li key={p}>{p}</li>
        ))}
      </ul>
    </div>
  );
  return (
    <div className="tbw-wrap">
      <div className="tbw-duo">
        <Box data={left} />
        <Box data={right} hl />
      </div>
    </div>
  );
}

export function Faq({ items }) {
  return (
    <div className="tbw-narrow tbw-faq">
      {items.map((f, i) => (
        <details key={f.q} className="tbw-reveal" style={{ "--d": `${i * 0.07}s` }}>
          <summary>{f.q}</summary>
          <div>
            <p>{f.a}</p>
          </div>
        </details>
      ))}
    </div>
  );
}

// SEO: FAQ rich-result markup
export function FaqSchema({ items }) {
  const json = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(json) }} />;
}

export function CtaBand({ title, text }) {
  return (
    <div className="tbw-wrap tbw-reveal tbw-reveal--zoom">
      <div className="tbw-cta">
        <h2>{title}</h2>
        <p>{text}</p>
        <div className="tbw-btns">
          <a className="tbw-btn tbw-btn--solid" href="/contact#contactform">
            Plan your fairytale wedding
          </a>
          <a
            className="tbw-btn tbw-btn--ghost"
            href="https://api.whatsapp.com/send?phone=917030060902&text=Hi, I would like to discuss further on the services offered by your Resort. Kindly Connect - Thanks"
            target="_blank"
            rel="noreferrer"
          >
            Chat on WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}

export function Related({ items }) {
  return (
    <div className="tbw-wrap">
      <div className="tbw-related">
        {items.map((r, i) => (
          <a key={r.href} href={r.href} className="tbw-rel tbw-reveal" style={{ "--d": `${i * 0.1}s` }}>
            <div className="tbw-rel__img">
              <img src={r.image} alt={r.title} loading="lazy" decoding="async" />
            </div>
            <div className="tbw-rel__body">
              <span>Read next</span>
              <h4>{r.title}</h4>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
