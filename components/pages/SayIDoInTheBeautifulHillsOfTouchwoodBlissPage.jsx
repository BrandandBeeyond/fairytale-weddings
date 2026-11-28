import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import BlogEnhancer from "@/components/blog/BlogEnhancer";
import { Hero, Stats, SectionTitle, Marquee, CtaBand, Related } from "@/components/blog/BlogParts";

export default function SayIDoInTheBeautifulHillsOfTouchwoodBlissPage() {
  return (
    <>
      <div className="viewport">
        <main className="overflow-hidden">
          <Header />
          <div className="tbw-blog">
            <BlogEnhancer />

            <Hero
              image="/assets/img/banners/vowbanner.jpg"
              alt="Best mountain wedding in Igatpuri at Touchwood Bliss"
              kicker="Wedding Guide · Touchwood Bliss"
              title="This Wedding Season, Say ‘I Do’ in the Beautiful Hills of Touchwood Bliss"
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
                A mountain wedding where the setting does half the work and the people do the rest
              </h3>
              <p className="tbw-lead">
                Every wedding season, couples ask the same question: where do we celebrate so that it
                feels like more than just an event? For many families the answer lies in the hills.
                Fresh air, open skies, green slopes and quiet mornings change the way a wedding feels
                from the very first day.
              </p>
              <p>
                {"Nestled in the mountains of Igatpuri, "}
                <strong>Touchwood Bliss</strong>
                {
                  " is a destination wedding resort designed for couples who want their celebration to be calm, beautiful and deeply personal."
                }
              </p>

              <h3 className="mt-5">Why Couples Are Choosing the Hills</h3>
              <p>
                City banquet halls offer convenience, but they rarely offer memories. A hill setting does
                the opposite. It slows everyone down, gives families time to be together and turns
                ordinary moments into photographs you will keep for life.
              </p>
              <ul>
                <li>Open lawns and mountain views as a natural backdrop for every ceremony</li>
                <li>A peaceful, private atmosphere away from the noise of the city</li>
                <li>Cooler, pleasant evenings that suit long wedding celebrations</li>
                <li>Easy reach from Mumbai and Nashik, so guests travel without fuss</li>
              </ul>

              <figure className="tbw-figure">
                <div className="tbw-figure__img">
                  <img src="/assets/img/gallery/barat_swagat/baarat1.webp" alt="Groom arriving in a decorated vintage car" loading="lazy" decoding="async" />
                </div>
                <figcaption>A baraat to remember</figcaption>
              </figure>
              <h3 className="mt-5">A Venue Where Every Ritual Finds Its Place</h3>
              <p>
                From the haldi in soft morning light to the pheras under an open sky, the mountains give
                each ritual its own mood. The mehendi can be relaxed and joyful, the sangeet lively, and
                the wedding ceremony quiet and heartfelt, all within the same resort.
              </p>
              <p>
                Because the celebration stays in one place, there is no rushing between venues. Families
                can enjoy each function instead of managing it.
              </p>

              <h3 className="mt-5">Pure Vegetarian Hospitality, Made With Care</h3>
              <p>
                Food holds a special place at Indian weddings. Touchwood Bliss is a pure vegetarian
                venue, and it can cater to Jain food preferences as well, so every family can celebrate
                with complete comfort. Warm, homely hospitality is the thread that runs through the whole
                stay.
              </p>

              <h3 className="mt-5">Marriage Is Between Two People, a Wedding Is Between Two Families</h3>
              <p>
                That belief shapes how weddings are planned here. Instead of a rushed, event-style
                schedule, the focus is on togetherness: relaxed mornings, time for blessings, shared
                meals and moments where both families simply enjoy each other&rsquo;s company.
              </p>

              <figure className="tbw-figure">
                <div className="tbw-figure__img">
                  <img src="/assets/img/tentlawn.jpg" alt="Fairy-lit lawn aisle at night" loading="lazy" decoding="async" />
                </div>
                <figcaption>A lawn that glows</figcaption>
              </figure>
              <h3 className="mt-5">Plan Your Wedding Season Dates Early</h3>
              <p>
                Auspicious dates fill up quickly, especially at mountain venues. If you are dreaming of
                saying &lsquo;I do&rsquo; in the hills this season, speak to the Touchwood Bliss team as
                early as you can to check availability, understand what is included and plan a
                celebration that feels like yours.
              </p>
              <p>
                Because the best weddings are not only seen. They are felt, remembered and cherished
                forever.
              </p>

              <h3 className="mt-5">Best Mountain Wedding in Igatpuri</h3>
              <p>
                {"If you are searching for the "}
                <strong>best mountain wedding in Igatpuri</strong>
                {
                  ", look for a venue that gives you the hills as a backdrop, not just a view from the window. Touchwood Bliss is a mountain wedding venue near Mumbai where the lawns, the open skies and the surrounding Sahyadri slopes are part of every ceremony."
                }
              </p>
              <h3 className="mt-5">Best Destination Wedding in Igatpuri for Wedding Season</h3>
              <p>
                {"Couples looking for the "}
                <strong>best destination wedding in Igatpuri</strong>
                {
                  " often want the same things: a calm setting, comfortable stay for guests, pure vegetarian food and a team that handles the details. That is the experience Touchwood Bliss, a wedding resort in Igatpuri, is built around, and it makes a wedding venue near Mumbai and Nashik easy for guests to reach."
                }
              </p>
              <figure className="tbw-figure">
                <div className="tbw-figure__img">
                  <img src="/assets/img/slider4.jpeg" alt="Floral stage by the pool with mountains behind" loading="lazy" decoding="async" />
                </div>
                <figcaption>Open-air ceremonies</figcaption>
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
                  { src: "/assets/img/slider4.jpeg", alt: "Floral stage by the pool with mountains behind" },
                  { src: "/assets/img/haldi_decor.jpeg", alt: "Yellow Haldi setup beside the pool" },
                  { src: "/assets/img/gallery/wedding/wedding2.webp", alt: "Couple under a floral mandap" },
                  { src: "/assets/img/gallery/reception/rec1.webp", alt: "Couple in a heart-shaped floral frame" },
                  { src: "/assets/img/slider3.jpeg", alt: "Couple under a sunflower arch" },
                  { src: "/assets/img/gallery/wedding/wedding1.webp", alt: "Bride and groom under a floral canopy" },
                  { src: "/assets/img/slider1.jpeg", alt: "Guests celebrating beside the pool at Touchwood Bliss" },
                  { src: "/assets/img/farmside.jpg", alt: "Evening lawn setup with hills behind at Touchwood Bliss" },
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
                  { href: "/top-reasons-touchwood-bliss-perfect-pure-veg-wedding-venue", title: "Top Reasons Touchwood Bliss Is the Perfect Pure Veg Wedding Venue", image: "/assets/img/best-wedding-resort-near-mumbai.jpeg" },
                  { href: "/where-forever-begins-magical-mountain-wedding-near-mumbai", title: "Where Forever Begins: A Magical Mountain Wedding Near Mumbai at Touchwood Bliss", image: "/assets/img/slider3.jpeg" },
                  { href: "/your-dream-wedding-awaits-celebrate-this-season-at-touchwood-bliss", title: "Your Dream Wedding Awaits: Celebrate This Season at Touchwood Bliss", image: "/assets/img/best-wedding-resort-near-mumbai.jpeg" },
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
