import Script from "next/script";
import "./head-styles.css";
import "./perf.css";

export const metadata = {
  title: "Best Destination Wedding Resort Near Mumbai",
  description:
    "Touchwood Bliss is a serene, pure veg destination wedding resort in Igatpuri, near Mumbai. Host your dream fairytale wedding in the lap of nature.",
  keywords:
    "best wedding resort near mumbai, best pure veg wedding resort near mumbai, best destination wedding resort near mumbai, destination wedding places near mumbai, destination wedding resort near mumbai, luxury wedding resort near mumbai, destination wedding venue near mumbai, best resorts in mumbai for wedding, wedding resort near mumbai, destination wedding venue in igatpuri, wedding resorts in igatpuri, pure veg destination wedding resort in igatpuri, luxury wedding venue near mumbai, destination wedding locations near mumbai, weekend wedding resort near mumbai, outdoor wedding venue near mumbai, marriage resort near mumbai, best wedding venue near mumbai, premium wedding resort near mumbai, touchwood bliss weddings, touchwood bliss destination wedding",
  alternates: { canonical: "https://touchwoodblissweddings.com/" },
  icons: { icon: "/assets/img/favicon.ico" },
  other: {
    "format-detection": "telephone=yes",
    "geo.position": "19.7005;73.5626",
    "geo.placename": "Igatpuri",
    "geo.region": "IN-MH",
    "og:street-address": "Touchwood Bliss Resort, Igatpuri",
    "og:locality": "Igatpuri",
    "og:region": "MH",
    "og:postal-code": "422403",
    "og:country-name": "India",
    "og:email": "fairytale@touchwoodbliss.com",
  },
  openGraph: {
    title: "Weddings By The Mountains | Touchwood Bliss",
    description:
      "Host your fairytale wedding in the peaceful hills of Igatpuri at Touchwood Bliss – a pure veg destination wedding resort near Mumbai.",
    type: "website",
    url: "https://touchwoodblissweddings.com/",
    siteName: "Touchwood Bliss Weddings",
    images: ["https://touchwoodblissweddings.com/assets/img/footer-logo.png"],
  },
};

export const viewport = { width: "device-width", initialScale: 1 };

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Resort",
  name: "Touchwood Bliss Weddings",
  image: "https://touchwoodblissweddings.com/assets/img/footer-logo.png",
  url: "https://www.touchwoodblissweddings.com/",
  logo: "https://touchwoodblissweddings.com/assets/img/footer-logo.png",
  description:
    "Touchwood Bliss Weddings is a serene nature retreat in Igatpuri, offering pure vegetarian destination wedding packages amidst lush greenery and mountain views.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Plot No. 44, Survey No. 59/3A, Pimpri Pada, Bhavali Dam Road",
    addressLocality: "Igatpuri",
    addressRegion: "Maharashtra",
    postalCode: "422403",
    addressCountry: "India",
  },
  geo: { "@type": "GeoCoordinates", latitude: "19.6783", longitude: "73.5491" },
  telephone: "+91-9326554433",
  email: "fairytale@touchwoodbliss.com",
  priceRange: "₹₹₹",
  openingHours: "Mo-Su 09:00-21:00",
  sameAs: [
    "https://www.instagram.com/touchwoodblissweddings/",
    "https://www.facebook.com/TouchwoodBlissWeddings",
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300..800;1,300..800&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css"
          rel="stylesheet"
          crossOrigin="anonymous"
        />
        <link rel="preconnect" href="https://cdn.jsdelivr.net" />
        <link rel="preconnect" href="https://unpkg.com" />
        <link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet" />
        <link href="/assets/css/owl.carousel.min.css" rel="stylesheet" />
        <link href="/assets/css/owl.theme.default.min.css" rel="stylesheet" />
        <link rel="stylesheet" href="/assets/css/style9.css" />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css"
        />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/flatpickr/dist/flatpickr.min.css" />
        <script
          src="https://kit.fontawesome.com/dcbd9c8466.js"
          crossOrigin="anonymous"
          defer
        ></script>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        {children}

        {/* Analytics / chat, same IDs as the original page */}
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-FPZKX52039" strategy="afterInteractive" />
        <Script id="gtag-init" strategy="afterInteractive">{`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-FPZKX52039');
          gtag('config', 'AW-10836437656');
          gtag('config', 'AW-18159664156');
        `}</Script>
        <Script id="meta-pixel" strategy="afterInteractive">{`
          !function(f,b,e,v,n,t,s)
          {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
          n.callMethod.apply(n,arguments):n.queue.push(arguments)};
          if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
          n.queue=[];t=b.createElement(e);t.async=!0;
          t.src=v;s=b.getElementsByTagName(e)[0];
          s.parentNode.insertBefore(t,s)}(window, document,'script',
          'https://connect.facebook.net/en_US/fbevents.js');
          fbq('init', '1637846254660889');
          fbq('track', 'PageView');
        `}</Script>
        <Script id="tawk" strategy="lazyOnload">{`
          var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
          (function(){
            var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
            s1.async=true;
            s1.src='https://embed.tawk.to/692684bbb7bb89196114612c/1jav7cvoi';
            s1.charset='UTF-8';
            s1.setAttribute('crossorigin','*');
            s0.parentNode.insertBefore(s1,s0);
          })();
        `}</Script>
      </body>
    </html>
  );
}
