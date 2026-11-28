import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import BlogEnhancer from "@/components/blog/BlogEnhancer";
import { Hero, Stats, SectionTitle, Marquee, CtaBand, Related } from "@/components/blog/BlogParts";

export default function MakeThisWeddingSeasonUnforgettableTouchwoodBlissResortIgatpuriPage() {
  return (
    <>
      <div className="viewport">
        <main className="overflow-hidden">
          <Header />
          <div className="tbw-blog">
            <BlogEnhancer />

            <Hero
              image="/assets/img/slider3.jpeg"
              alt="Best wedding resort in Igatpuri - Touchwood Bliss Resort"
              kicker="Wedding Guide · Touchwood Bliss"
              title="Make This Wedding Season Unforgettable with Touchwood Bliss Resort, Igatpuri"
              meta={["Touchwood Bliss, Igatpuri", "3 min read", "Destination wedding guide"]}
              fx="petals"
            />

            <Stats
              items={[
                { value: 4.8, decimals: 1, suffix: "/5", label: "Google rating" },
                { value: 13000, suffix: "+", label: "Google reviews" },
                { value: 600, suffix: "+", label: "WedMeGood reviews" },
                { value: 300, suffix: "+", label: "WeddingWire reviews" },
              ]}
            />

            <article className="tbw-article">
              <h3 className="mb-3">
                A simple guide to planning a stress-free destination wedding near Mumbai
              </h3>
              <p className="tbw-lead">
                The wedding season is here, and with it comes the excitement, and the pressure, of
                planning the biggest celebration of your life. The good news is that an unforgettable
                wedding does not have to be a stressful one. It starts with choosing the right venue.
              </p>
              <p>
                {"Set in the hills of Igatpuri, "}
                <strong>Touchwood Bliss Resort</strong>
                {
                  " brings the venue, the stay, the food and the planning together in one place, so you can spend your energy on the people who matter."
                }
              </p>

              <h3 className="mt-5">What Makes a Wedding Season Truly Unforgettable</h3>
              <h4 className="mt-4">1. A Setting That Feels Special</h4>
              <p>
                Mountains, open lawns and fresh air make every function look and feel beautiful without
                heavy styling. Nature does much of the decorating for you.
              </p>
              <h4 className="mt-4">2. Everything in One Place</h4>
              <p>
                When the venue, guest accommodation, catering and wedding coordination sit under one
                roof, there are fewer vendors to chase and fewer things that can go wrong.
              </p>
              <ul>
                <li>Wedding venues and décor</li>
                <li>Comfortable guest stay</li>
                <li>Food and catering</li>
                <li>Planning and on-ground coordination</li>
              </ul>
              <h4 className="mt-4">3. Food Your Family Will Love</h4>
              <p>
                Touchwood Bliss is a pure vegetarian resort and can accommodate Jain food preferences,
                which means no compromises for guests who follow dietary traditions.
              </p>
              <h4 className="mt-4">4. Time for Togetherness</h4>
              <p>
                A destination wedding gives both families days, not hours, to be together. That shared
                time is what guests talk about long after the wedding is over.
              </p>

              <figure className="tbw-figure">
                <div className="tbw-figure__img">
                  <img src="/assets/img/tentlawn.jpg" alt="Fairy-lit lawn aisle at night" loading="lazy" decoding="async" />
                </div>
                <figcaption>A lawn that glows</figcaption>
              </figure>
              <h3 className="mt-5">A Quick Checklist Before You Book</h3>
              <ul>
                <li>Shortlist your preferred wedding dates and a backup date or two</li>
                <li>Estimate your guest count and how many will need rooms</li>
                <li>Decide which functions you want, such as haldi, mehendi, sangeet and pheras</li>
                <li>Ask exactly what the package includes before you confirm</li>
                <li>Visit the venue in person if you can, and see the spaces for yourself</li>
              </ul>

              <h3 className="mt-5">Why Igatpuri Works So Well</h3>
              <p>
                Igatpuri offers the calm of the Sahyadri hills while staying within a comfortable drive
                of Mumbai and Nashik. Guests arrive without a long journey and still feel like they have
                gone far away from the everyday.
              </p>

              <h3 className="mt-5">Let&rsquo;s Plan Your Celebration</h3>
              <p>
                This season, choose a wedding that feels easy, warm and unforgettable. Reach out to the
                Touchwood Bliss team to check dates, see what is included and start shaping a
                celebration that is truly yours.
              </p>

              <figure className="tbw-figure">
                <div className="tbw-figure__img">
                  <img src="/assets/img/slider4.jpeg" alt="Floral stage by the pool with mountains behind" loading="lazy" decoding="async" />
                </div>
                <figcaption>Open-air ceremonies</figcaption>
              </figure>
              <h3 className="mt-5">Best Wedding Resort in Igatpuri</h3>
              <p>
                {"Choosing the "}
                <strong>best wedding resort in Igatpuri</strong>
                {
                  " is easier when you know what to compare: the setting, the guest rooms, the food, the planning support and how much of it is handled in one place. Touchwood Bliss Resort is an all-inclusive wedding resort in Igatpuri where venue, stay, catering and coordination come together."
                }
              </p>
              <h3 className="mt-5">Best Destination Wedding Near Mumbai</h3>
              <p>
                {"For families who want the "}
                <strong>best destination wedding near Mumbai</strong>
                {
                  " without a long journey, Igatpuri is a natural choice. It offers mountain scenery and a calm atmosphere while staying within easy reach of Mumbai, Nashik and Pune, which makes it a practical destination wedding resort for guests travelling from different cities."
                }
              </p>
              <h3 className="mt-5">Explore More Wedding Venue Guides</h3>
              <ul>
                <li><a href="/best-wedding-venue-in-igatpuri">Best wedding venue in Igatpuri</a></li>
                <li><a href="/best-mountain-wedding-resort-near-mumbai">Best mountain wedding resort near Mumbai</a></li>
                <li><a href="/best-destination-wedding-resorts-near-mumbai">Best destination wedding resorts near Mumbai</a></li>
                <li><a href="/destination-wedding-resorts-near-mumbai">Destination wedding resorts near Mumbai</a></li>
                <li><a href="/dos-and-donts-of-planning-a-destination-wedding">Dos and don&rsquo;ts of planning a destination wedding</a></li>
              </ul>
            </article>

            <section className="tbw-section">
              <SectionTitle eyebrow="Moments" title="A glimpse of Touchwood Bliss" />
              <Marquee
                images={[
                  { src: "/assets/img/venuebanner.jpg", alt: "Pastel floral mandap with hills behind it" },
                  { src: "/assets/img/tentlawn.jpg", alt: "Fairy-lit lawn aisle at night" },
                  { src: "/assets/img/poolsidelawn.jpg", alt: "Poolside lawn stage with a carved backdrop" },
                  { src: "/assets/img/weddings/summerwedding.jpg", alt: "Couple on a floating stage beside the pool" },
                  { src: "/assets/img/reception.jpg", alt: "Couple entering their reception under string lights" },
                  { src: "/assets/img/slider2.jpeg", alt: "Sunflower mandap on the lawn" },
                  { src: "/assets/img/slider4.jpeg", alt: "Floral stage by the pool with mountains behind" },
                  { src: "/assets/img/haldi_decor.jpeg", alt: "Yellow Haldi setup beside the pool" },
                ]}
              />
            </section>

            <section className="tbw-section">
              <CtaBand
                title="Ready to plan your fairytale wedding?"
                text="Share your dates and ideas with the Touchwood Bliss team and let your celebration start taking shape in the hills of Igatpuri."
              />
            </section>

            <section className="tbw-section">
              <SectionTitle eyebrow="Keep reading" title="More wedding guides" />
              <Related
                items={[
                  { href: "/monsoon-wedding-resort-in-igatpuri-touchwood-bliss", title: "", image: "/assets/img/whatsapp.png" },
                  { href: "/2026-hindu-wedding-dates-with-shubh-muhurat", title: "2026 Wedding Muhurat Dates", image: "/assets/img/weddingm/muhurt-banner.png" },
                  { href: "/say-i-do-in-the-beautiful-hills-of-touchwood-bliss", title: "This Wedding Season, Say ‘I Do’ in the Beautiful Hills of Touchwood Bliss", image: "/assets/img/banners/vowbanner.jpg" },
                ]}
              />
            </section>
          </div>

          <div className="whatsapp">
            <a
              href="https://api.whatsapp.com/send?phone=917030060902&text=Hi, I would like to discuss further on the services offered by your Resort. Kindly Connect - Thanks"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="/assets/img/whatsapp.png"
                loading="lazy"
                width={60}
                height={60}
                alt="whatsapp icon"
                className="img-fluid"
              />
            </a>
          </div>
          <Footer />
        </main>
      </div>
    </>
  );
}
