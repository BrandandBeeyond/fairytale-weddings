import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import BlogEnhancer from "@/components/blog/BlogEnhancer";
import { Hero, Stats, SectionTitle, Marquee, CtaBand, Related } from "@/components/blog/BlogParts";

export default function BestDestinationWeddingResortsNearMumbaiPage() {
  return (
    <>
      <div className="viewport">
        <main className="overflow-hidden">
          <Header />
          <div className="tbw-blog">
            <BlogEnhancer />

            <Hero
              image="/assets/img/classic/grand-entry1.jpeg"
              alt="Destination Wedding Resort Near Mumbai"
              kicker="Wedding Guide · Touchwood Bliss"
              title="A Place That Feels Like Your Love Story — Touchwood Bliss, Igatpuri"
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
              <p className="tbw-lead">
                Some love stories deserve more than just a venue… they deserve a setting that feels as
                magical as the journey itself.
              </p>
              <p>
                At Touchwood Bliss by Fairytale Weddings, your wedding doesn’t begin with décor or
                rituals—it begins with a feeling. The kind you get when you arrive, pause for a moment,
                and just know this is where it’s meant to happen.
              </p>
              <p>
                If you’ve been searching for the best destination wedding resorts near Mumbai, this is
                where it stops feeling like a checklist… and starts feeling like something deeply
                personal.
              </p>
              <h3 className="mt-4">A Wedding Set in the Heart of the Mountains</h3>
              <p>
                There’s something incredibly intimate about getting married amidst mountains. The quiet,
                the stillness, and the way nature gently holds space for your most important moments—it
                transforms everything.
              </p>
              <p>
                {
                  "As you take your vows surrounded by endless greens and open skies, you understand why choosing a mountain view wedding resort near Mumbai & Nashik isn’t just about aesthetics… it’s about emotion, presence, and connection."
                }
              </p>
              <h3 className="mt-4">A Complete Destination Wedding Experience</h3>
              <p>
                What truly sets Touchwood Bliss apart is how effortlessly it blends beauty with ease.
                Beyond the views, it offers a complete, all-in-one destination wedding experience—where
                food, stay, and planning come together seamlessly.
              </p>
              <p>
                From thoughtfully curated pure veg and Jain cuisine that every guest can enjoy, to
                comfortable accommodations that keep your loved ones close, every detail is designed to
                make your celebration feel smooth and connected.
              </p>
              <p>
                No rushing between venues, no coordination chaos—just time spent with the people who
                matter most.
              </p>
              <figure className="tbw-figure">
                <div className="tbw-figure__img">
                  <img src="/assets/img/slider1.jpeg" alt="Guests celebrating beside the pool at Touchwood Bliss" loading="lazy" decoding="async" />
                </div>
                <figcaption>Celebrate by the pool</figcaption>
              </figure>
              <h3 className="mt-4">{"Not Just Luxury, But Warmth & Personalisation"}</h3>
              <p>
                Touchwood Bliss isn’t loud luxury—it’s warm, intentional, and deeply personal. Every
                corner feels like it’s waiting to be filled with your laughter, your chaos, your story.
              </p>
              <p>
                Whether it’s a sundowner haldi glowing in golden light, a heartfelt phera ceremony under
                the sky, or a starlit sangeet that turns into a night you never want to end, nothing here
                feels staged—it all feels real.
              </p>
              <h3 className="mt-4">People Who Understand Your Wedding</h3>
              <p>
                Among all the wedding resorts near Mumbai, what makes this place different is the people
                behind it. The team doesn’t just execute weddings—they understand them.
              </p>
              <p>
                They take your vision, your emotions, even the little unspoken details, and bring it all
                together effortlessly with in-house décor and planning that lets you truly be present in
                your own celebration.
              </p>
              <h3 className="mt-4">Why Couples Call It the Best Wedding Resort in Igatpuri</h3>
              <p>
                Somewhere between slow, peaceful mornings and joy-filled nights, it becomes clear why so
                many couples call it the best wedding resort in Igatpuri.
              </p>
              <p>Not because everything is picture-perfect—but because everything feels right.</p>
              <figure className="tbw-figure">
                <div className="tbw-figure__img">
                  <img src="/assets/img/weddings/summerwedding.jpg" alt="Couple on a floating stage beside the pool" loading="lazy" decoding="async" />
                </div>
                <figcaption>Heartcrafted moments</figcaption>
              </figure>
              <h3 className="mt-4">A Wedding You Will Always Remember</h3>
              <p>
                Because at the end of it all, you won’t remember every detail. You’ll remember the way
                your heart felt in those moments.
              </p>
              <p>And Touchwood Bliss makes sure it feels unforgettable. ✨</p>
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
                  { href: "/best-fairytale-destination-wedding-resort-near-mumbai", title: "Wedding by the Mountains: Why Touchwood Bliss is the Perfect Destination Wedding Resort Near Mumbai", image: "/assets/img/slider1.jpeg" },
                  { href: "/best-mountain-wedding-resort-near-mumbai", title: "Best Mountain Wedding Resort Near Mumbai: A Guide to Hill Weddings in the Sahyadris", image: "/assets/img/banners/vowbanner.jpg" },
                  { href: "/best-wedding-destinations-near-mumbai", title: "Best Wedding Destinations Near Mumbai for a Dream Celebration", image: "/assets/img/banners/why_igatpuri.jpg" },
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
