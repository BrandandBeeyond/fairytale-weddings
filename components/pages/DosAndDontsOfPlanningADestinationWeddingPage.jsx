import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import BlogEnhancer from "@/components/blog/BlogEnhancer";
import { Hero, Stats, SectionTitle, Marquee, CtaBand, Related } from "@/components/blog/BlogParts";

export default function DosAndDontsOfPlanningADestinationWeddingPage() {
  return (
    <>
      <div className="viewport">
        <main className="overflow-hidden">
          <Header />
          <div className="tbw-blog">
            <BlogEnhancer />

            <Hero
              image="/assets/img/crafted/crafted_haldi2.jpeg"
              alt="Dos and Don’ts of Planning a Destination Wedding"
              kicker="Wedding Guide · Touchwood Bliss"
              title="Dos and Don’ts While Planning a Destination Wedding"
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
                A Practical Guide to Creating a Stress-Free, Heartcrafted Celebration by the Mountains
              </h3>
              <p className="tbw-lead">
                A destination wedding is not just about a beautiful location. It is about creating an
                unforgettable experience where love, families, rituals, and memories come together
                effortlessly.
              </p>
              <p>
                While a fairytale destination wedding sounds magical, planning it requires clarity,
                foresight, and thoughtful decision-making. If you are dreaming of a mountain destination
                wedding, this guide will help you plan wisely and avoid common mistakes.
              </p>
              <p>
                {"Below is a curated list of essential "}
                <strong>dos and don’ts of planning a destination wedding</strong>, especially for couples
                seeking a nature-inspired, family-friendly wedding destination in India.
              </p>
              <h3 className="mt-5">✅ DOs of Planning a Destination Wedding</h3>
              <h4 className="mt-4">1. Do Choose a Destination That Feels Meaningful</h4>
              <p>
                Choose a destination that resonates emotionally, not just visually. The best destination
                wedding locations offer serenity, privacy, and togetherness for both families.
              </p>
              <p>
                Mountain and nature-surrounded venues naturally create a calm atmosphere, making wedding
                rituals more soulful and celebrations more memorable.
              </p>
              <h4 className="mt-4">2. Do Opt for an All-Inclusive Destination Wedding Venue</h4>
              <p>
                One of the smartest decisions is choosing an all-inclusive destination wedding resort.
              </p>
              <ul>
                <li>Wedding venues and décor</li>
                <li>Guest accommodation</li>
                <li>Food and catering</li>
                <li>Wedding planning and coordination</li>
                <li>Guest communication and logistics</li>
              </ul>
              <p>
                An all-in-one venue minimizes stress, avoids vendor coordination issues, and ensures a
                seamless experience for families.
              </p>
              <h4 className="mt-4">3. Do Prioritise Guest Comfort</h4>
              <p>
                A destination wedding is a shared experience. Comfortable stays, walkable venues, warm
                hospitality, and thoughtful planning allow guests to relax and truly enjoy the
                celebration.
              </p>
              <h4 className="mt-4">4. Do Plan Your Wedding Around the Right Season</h4>
              <p>
                Weather plays a vital role, especially for mountain weddings. Choosing the right season
                ensures smooth ceremonies, beautiful décor execution, and happy guests.
              </p>
              <h4 className="mt-4">5. Do Create Time for Connection</h4>
              <p>
                Beyond rituals, plan moments for family bonding, leisure time in nature, gratitude
                circles, and quiet conversations. These moments transform a wedding into a meaningful
                journey.
              </p>
              <figure className="tbw-figure">
                <div className="tbw-figure__img">
                  <img src="/assets/img/weddings/winterwedding.jpg" alt="Pastel floral mandap with a mirrored aisle" loading="lazy" decoding="async" />
                </div>
                <figcaption>Winter wedding charm</figcaption>
              </figure>
              <h3 className="mt-5">❌ DON’Ts of Planning a Destination Wedding</h3>
              <h4 className="mt-4">1. Don’t Choose a Venue Based Only on Instagram</h4>
              <p>
                A visually stunning venue may not always be operationally strong. Always check on-ground
                experience, wedding team expertise, weather backup plans, and logistics flow.
              </p>
              <h4 className="mt-4">2. Don’t Overload the Wedding Itinerary</h4>
              <p>
                Too many functions and tight schedules can exhaust guests. Destination weddings feel best
                when events flow naturally with ample breathing space.
              </p>
              <h4 className="mt-4">3. Don’t Ignore Food Preferences</h4>
              <p>
                Food is deeply emotional at Indian weddings. Ensure your venue can cater to diverse
                preferences, including pure vegetarian and Jain food, without compromising on quality.
              </p>
              <h4 className="mt-4">4. Don’t Delay Key Decisions</h4>
              <p>
                Finalising dates, guest count, and packages early helps avoid availability issues, cost
                escalations, and last-minute stress.
              </p>
              <h4 className="mt-4">5. Don’t Treat Your Wedding as Just an Event</h4>
              <p>
                A destination wedding is a journey. When emotions, family values, and meaningful
                experiences are prioritised over glamour, the celebration becomes truly special.
              </p>
              <h3 className="mt-5">Choosing the Right Destination Makes All the Difference</h3>
              <p>
                For couples seeking a nature-inspired, pure vegetarian, family-centric fairytale wedding
                destination in India, places that combine mountains, warmth, and holistic wedding services
                truly stand out.
              </p>
              <p>
                {"Nestled amidst the serene mountains of Igatpuri, "}
                <strong>Touchwood Bliss</strong>
                {
                  " is designed for couples who believe that marriage is between two people, but a wedding is between two families."
                }
              </p>
              <p>
                With nature-integrated venues, homely hospitality, pure veg cuisine, and complete
                destination wedding solutions, Touchwood Bliss transforms weddings into heartcrafted
                celebrations.
              </p>
              <p>
                Plan your destination wedding with intention, not impulse. Because the best weddings are
                not just seen — they are felt, remembered, and cherished forever.
              </p>
            </article>

            <section className="tbw-section">
              <SectionTitle eyebrow="Moments" title="A glimpse of Touchwood Bliss" />
              <Marquee
                images={[
                  { src: "/assets/img/poolsidelawn.jpg", alt: "Poolside lawn stage with a carved backdrop" },
                  { src: "/assets/img/weddings/summerwedding.jpg", alt: "Couple on a floating stage beside the pool" },
                  { src: "/assets/img/reception.jpg", alt: "Couple entering their reception under string lights" },
                  { src: "/assets/img/slider2.jpeg", alt: "Sunflower mandap on the lawn" },
                  { src: "/assets/img/slider4.jpeg", alt: "Floral stage by the pool with mountains behind" },
                  { src: "/assets/img/haldi_decor.jpeg", alt: "Yellow Haldi setup beside the pool" },
                  { src: "/assets/img/gallery/wedding/wedding2.webp", alt: "Couple under a floral mandap" },
                  { src: "/assets/img/gallery/reception/rec1.webp", alt: "Couple in a heart-shaped floral frame" },
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
                  { href: "/fairytale-destination-wedding-igatpuri-touchwood-bliss", title: "Fairytale Destination Wedding in Igatpuri: Venues, Views & Vows at Touchwood Bliss", image: "/assets/img/slider3.jpeg" },
                  { href: "/fairytale-weddings-by-the-mountains", title: "Fairytale Weddings by the Mountains", image: "/assets/img/banners/classic_weddings.webp" },
                  { href: "/igatpuri-perfect-for-destination-wedding", title: "Why Igatpuri Is the Perfect Destination for Weddings Near Mumbai", image: "/assets/img/best-wedding-resort-near-mumbai.jpeg" },
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
