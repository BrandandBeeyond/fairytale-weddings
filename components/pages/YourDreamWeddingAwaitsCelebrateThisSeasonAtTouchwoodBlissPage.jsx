import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import BlogEnhancer from "@/components/blog/BlogEnhancer";
import { Hero, Stats, SectionTitle, Marquee, CtaBand, Related } from "@/components/blog/BlogParts";

export default function YourDreamWeddingAwaitsCelebrateThisSeasonAtTouchwoodBlissPage() {
  return (
    <>
      <div className="viewport">
        <main className="overflow-hidden">
          <Header />
          <div className="tbw-blog">
            <BlogEnhancer />

            <Hero
              image="/assets/img/best-wedding-resort-near-mumbai.jpeg"
              alt="Best destination wedding in Igatpuri at Touchwood Bliss"
              kicker="Wedding Guide · Touchwood Bliss"
              title="Your Dream Wedding Awaits: Celebrate This Season at Touchwood Bliss"
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
                Imagine your wedding day by the mountains, then let it become real
              </h3>
              <p className="tbw-lead">
                Picture it for a moment. Soft morning light over the hills, your family gathered around
                you, the sound of laughter and mantras carried on cool mountain air. This is the kind of
                wedding many couples dream of, and it is closer than you think.
              </p>
              <p>
                {"At "}
                <strong>Touchwood Bliss</strong>
                {
                  ", in the hills of Igatpuri, a heartcrafted destination wedding is not a distant fantasy. It is a celebration you can plan this season."
                }
              </p>

              <h3 className="mt-5">A Wedding Designed Around Your Story</h3>
              <p>
                No two couples are alike, and no two weddings should look the same. Instead of fitting
                you into a fixed format, the celebration here is shaped around your families, your
                rituals and the mood you want to create, whether that is grand and festive or intimate
                and quiet.
              </p>

              <figure className="tbw-figure">
                <div className="tbw-figure__img">
                  <img src="/assets/img/slider2.jpeg" alt="Sunflower mandap on the lawn" loading="lazy" decoding="async" />
                </div>
                <figcaption>Colour and flowers</figcaption>
              </figure>
              <h3 className="mt-5">What Your Dream Wedding Can Include</h3>
              <ul>
                <li>Mountain-view wedding venues with open, natural surroundings</li>
                <li>Haldi, mehendi, sangeet and wedding ceremonies in one resort</li>
                <li>Comfortable stay for family and guests</li>
                <li>Pure vegetarian cuisine, with Jain food options available</li>
                <li>Dedicated wedding planning and coordination support</li>
              </ul>

              <h3 className="mt-5">Who Will Love Getting Married Here</h3>
              <p>
                Couples who want a wedding that feels peaceful rather than crowded. Families who care
                about togetherness, tradition and good food. Parents who want to enjoy the wedding
                instead of managing it. If that sounds like you, the hills of Igatpuri are worth a visit.
              </p>

              <h3 className="mt-5">Why This Season Is the Right Time</h3>
              <p>
                Good wedding dates do not stay open for long. Starting early gives you a better choice
                of dates, more time to plan calmly and the confidence of knowing your venue is settled
                well before the celebrations begin.
              </p>

              <figure className="tbw-figure">
                <div className="tbw-figure__img">
                  <img src="/assets/img/gallery/barat_swagat/baarat1.webp" alt="Groom arriving in a decorated vintage car" loading="lazy" decoding="async" />
                </div>
                <figcaption>A baraat to remember</figcaption>
              </figure>
              <h3 className="mt-5">Take the First Step</h3>
              <p>
                A wedding is between two people, but a celebration is between two families. If you are
                ready to begin, get in touch with the Touchwood Bliss team, share your dates and ideas,
                and let your dream wedding start taking shape.
              </p>
              <p>
                Your dream wedding is waiting in the hills. All that is left is to say yes.
              </p>

              <h3 className="mt-5">Best Destination Wedding in Igatpuri</h3>
              <p>
                {"A search for the "}
                <strong>best destination wedding in Igatpuri</strong>
                {
                  " usually ends at a venue that feels personal rather than commercial. At Touchwood Bliss, the destination wedding venue in Igatpuri is shaped around your families and rituals, with mountain views, pure veg hospitality and a team that stays with you from planning to the last function."
                }
              </p>
              <h3 className="mt-5">Best Mountain Wedding in Igatpuri and Near Mumbai</h3>
              <p>
                {"For the "}
                <strong>best mountain wedding in Igatpuri</strong>
                {
                  ", the surroundings matter as much as the arrangements. A dream wedding venue near Mumbai should let you celebrate in open air, among hills, with space for both families to relax. That is what a fairytale wedding in Igatpuri looks like at Touchwood Bliss."
                }
              </p>
              <figure className="tbw-figure">
                <div className="tbw-figure__img">
                  <img src="/assets/img/tentlawn.jpg" alt="Fairy-lit lawn aisle at night" loading="lazy" decoding="async" />
                </div>
                <figcaption>A lawn that glows</figcaption>
              </figure>
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
                  { src: "/assets/img/slider1.jpeg", alt: "Guests celebrating beside the pool at Touchwood Bliss" },
                  { src: "/assets/img/farmside.jpg", alt: "Evening lawn setup with hills behind at Touchwood Bliss" },
                  { src: "/assets/img/venuebanner.jpg", alt: "Pastel floral mandap with hills behind it" },
                  { src: "/assets/img/tentlawn.jpg", alt: "Fairy-lit lawn aisle at night" },
                  { src: "/assets/img/poolsidelawn.jpg", alt: "Poolside lawn stage with a carved backdrop" },
                  { src: "/assets/img/weddings/summerwedding.jpg", alt: "Couple on a floating stage beside the pool" },
                  { src: "/assets/img/reception.jpg", alt: "Couple entering their reception under string lights" },
                  { src: "/assets/img/slider2.jpeg", alt: "Sunflower mandap on the lawn" },
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
                  { href: "/best-destination-wedding-resorts-near-mumbai", title: "A Place That Feels Like Your Love Story — Touchwood Bliss, Igatpuri", image: "/assets/img/classic/grand-entry1.jpeg" },
                  { href: "/best-fairytale-destination-wedding-resort-near-mumbai", title: "Wedding by the Mountains: Why Touchwood Bliss is the Perfect Destination Wedding Resort Near Mumbai", image: "/assets/img/slider1.jpeg" },
                  { href: "/best-mountain-wedding-resort-near-mumbai", title: "Best Mountain Wedding Resort Near Mumbai: A Guide to Hill Weddings in the Sahyadris", image: "/assets/img/banners/vowbanner.jpg" },
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
