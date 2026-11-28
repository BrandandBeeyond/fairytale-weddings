import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import BlogEnhancer from "@/components/blog/BlogEnhancer";
import {
  Hero,
  Stats,
  Split,
  SectionTitle,
  Marquee,
  Compare,
  Duo,
  Quote,
  Faq,
  FaqSchema,
  CtaBand,
  Related,
} from "@/components/blog/BlogParts";

const FAQS = [
  {
    q: "Is Igatpuri cheaper than Goa for a destination wedding?",
    a: "Often, yes, once you count the whole picture. A drive of a few hours from Mumbai removes flights and long transfers for your guests, and fewer travel days usually means fewer nights of stay to arrange. Actual costs depend on guest count, dates and the package you choose, so ask for a quote for your own plan.",
  },
  {
    q: "Is Touchwood Bliss a pure vegetarian wedding venue?",
    a: "Yes. Touchwood Bliss is a pure veg destination wedding resort, which many families find makes planning the menu and the rituals much simpler. Jain options can be arranged on request.",
  },
  {
    q: "Which is better for elderly guests, Goa or Igatpuri?",
    a: "Igatpuri is easier for most families with grandparents or young children, because the journey from Mumbai is a few hours by road or rail instead of a long drive or a flight. The resort also lets guests stay on site, which keeps movement between functions short.",
  },
  {
    q: "Can we hold all the wedding functions at one place?",
    a: "Yes. Haldi, mehendi, sangeet and the wedding ceremony can all be hosted at the resort, with in-house catering and rooms for family and guests.",
  },
  {
    q: "What is the best time for a destination wedding in Igatpuri?",
    a: "The hills are pleasant for much of the year, and the monsoon months bring green hills and mist if you want a more dramatic setting. Winter evenings are cool and clear. Share your dates with the team and they can suggest the best format for the season.",
  },
];

export default function IgatpuriVsGoaDestinationWeddingNearMumbaiPage() {
  return (
    <>
      <div className="viewport">
        <main className="overflow-hidden">
          <Header />
          <div className="tbw-blog">
            <BlogEnhancer />

            <Hero
              image="/assets/img/slider1.jpeg"
              alt="Wedding guests celebrating beside the pool at Touchwood Bliss, Igatpuri"
              kicker="Igatpuri vs Goa"
              title="Why Couples Are Choosing Igatpuri Over Goa for Destination Weddings Near Mumbai"
              meta={["Touchwood Bliss", "6 min read", "Venue comparison"]}
              fx="petals"
            />

            <Stats
              items={[
                { value: 120, suffix: " km", label: "Mumbai to Igatpuri (approx.)" },
                { value: 590, suffix: " km", label: "Mumbai to Goa by road (approx.)" },
                { value: 100, suffix: "%", label: "Pure veg kitchen" },
                { value: 4.8, decimals: 1, suffix: "/5", label: "Google rating" },
              ]}
            />

            <section className="tbw-section">
              <div className="tbw-narrow tbw-reveal">
                <p className="tbw-lead">
                  For years, “destination wedding” has quietly meant one word: Goa. Beaches, sunsets and
                  a holiday mood. But a growing number of Mumbai couples are asking a different question.
                  What if the destination is not a flight away, and the wedding feels like home?
                </p>
                <p>
                  If you are comparing a <strong>destination wedding near Mumbai</strong>, here is an honest
                  look at Igatpuri and Goa, and why so many families are settling on the hills.
                </p>
              </div>
            </section>

            <Split
              image="/assets/img/weddings/summerwedding.jpg"
              alt="A couple on a floating stage beside the pool, with hills behind"
              eyebrow="Getting there"
              title="The travel problem nobody budgets for"
              caption="A few hours, not a flight"
            >
              <p>
                A wedding is a family event, and that includes grandparents, young cousins and relatives who
                rarely travel. Getting a hundred guests to Goa means flights or a very long road journey,
                luggage handling and at least one extra night of stay for most of them.
              </p>
              <p>
                Igatpuri is around two and a half to three hours from Mumbai by road, and it also sits on the
                Mumbai to Nashik rail route. Guests arrive rested, on time and in a good mood.
              </p>
            </Split>

            <section className="tbw-section" style={{ background: "#fff4f4" }}>
              <SectionTitle eyebrow="Side by side" title="Igatpuri vs Goa at a glance">
                <p>A simple comparison of what matters most to wedding families.</p>
              </SectionTitle>
              <Compare
                head={["What matters", "Goa", "Igatpuri (Touchwood Bliss)"]}
                rows={[
                  [
                    "Getting there",
                    "Flights or a very long drive; most guests need extra travel days.",
                    "A few hours from Mumbai by road or rail; easy for all ages.",
                  ],
                  [
                    "Setting",
                    "Beaches, sea breeze and sunset ceremonies.",
                    "Green hills, open lawns and mountain views behind the mandap.",
                  ],
                  [
                    "Food",
                    "Pure veg menus usually need special arrangements.",
                    "A pure veg kitchen, with Jain options available on request.",
                  ],
                  [
                    "Elders and kids",
                    "Long transfers between venues and stays.",
                    "Stay on site, short walks between functions.",
                  ],
                  [
                    "Dates",
                    "Peak weekends are crowded and the monsoon is hard on outdoor plans.",
                    "Pleasant for much of the year, with covered and open options.",
                  ],
                  [
                    "Rituals",
                    "Possible, but venues are often designed for beach parties first.",
                    "Haldi, mehendi, sangeet and pheras all at one resort.",
                  ],
                ]}
              />
              <div className="tbw-narrow tbw-reveal" style={{ marginTop: 28 }}>
                <p>
                  <strong>Where Goa still wins:</strong> if your dream is a barefoot beach ceremony and a
                  weekend of nightlife, nothing in the hills replaces the sea. This comparison is for couples
                  whose priority is family, food and ease.
                </p>
              </div>
            </section>

            <section className="tbw-section">
              <SectionTitle eyebrow="Moments" title="What a hill wedding looks like" />
              <Marquee
                images={[
                  { src: "/assets/img/ourwork/work2.jpg", alt: "Couple under a floral mandap with colour smoke" },
                  { src: "/assets/img/gallery/barat_swagat/baarat1.webp", alt: "Groom arriving in a vintage car for the baraat" },
                  { src: "/assets/img/slider3.jpeg", alt: "Couple under a sunflower arch" },
                  { src: "/assets/img/classic/fwedding1.jpeg", alt: "Floral mandap with hills in the background" },
                  { src: "/assets/img/gallery/wedding/wedding1.webp", alt: "Bride and groom under a floral canopy" },
                  { src: "/assets/img/slider4.jpeg", alt: "Proposal-style moment on a yellow stage by the pool" },
                  { src: "/assets/img/crafted/crafted_sangeet1.jpeg", alt: "Sangeet entrance lit in purple and green" },
                  { src: "/assets/img/venuedecor.jpg", alt: "Pastel floral mandap against the mountains" },
                ]}
              />
            </section>

            <Split
              image="/assets/img/gallery/barat_swagat/baarat1.webp"
              alt="A baraat arriving in a vintage car decorated with flowers"
              eyebrow="Rituals"
              title="Traditions feel at home in the hills"
              caption="A baraat to remember"
              flip
            >
              <p>
                The mandap, the baraat, the haldi and the pheras all look natural against green slopes and
                open sky. Families do not have to adapt their rituals to a beach party. The venue adapts to
                them.
              </p>
              <p>
                With pure veg catering, in-house décor and a team that coordinates every function, your
                parents can enjoy the wedding rather than manage it.
              </p>
            </Split>

            <section className="tbw-section" style={{ background: "#fff4f4" }}>
              <SectionTitle eyebrow="Decide with confidence" title="Which one is right for you?" />
              <Duo
                left={{
                  title: "Choose Goa if you want…",
                  points: [
                    "A beach ceremony as the main attraction",
                    "A small, holiday-style guest list that is happy to fly",
                    "Nightlife and a weekend-trip feel",
                  ],
                }}
                right={{
                  title: "Choose Igatpuri if you want…",
                  points: [
                    "Your whole family there, comfortable and together",
                    "A pure veg menu and rituals done the traditional way",
                    "Every function, stay and meal at one resort",
                    "A calm, scenic setting only a few hours from Mumbai",
                  ],
                }}
              />
            </section>

            <Quote
              text="Our wedding at Touchwood Bliss was nothing short of magical. The perfect management team ensured a stress-free celebration."
              by="Saurabh & Rutuja"
            />

            <section className="tbw-section">
              <SectionTitle eyebrow="Good to know" title="Igatpuri vs Goa: your questions" />
              <Faq items={FAQS} />
              <FaqSchema items={FAQS} />
            </section>

            <section className="tbw-section">
              <CtaBand
                title="Bring the destination closer to home"
                text="Tell the Touchwood Bliss team about your guest list and dates, and see how a hill wedding in Igatpuri can fit your family."
              />
            </section>

            <section className="tbw-section">
              <SectionTitle eyebrow="Keep reading" title="More wedding guides" />
              <Related
                items={[
                  {
                    href: "/best-wedding-destinations-near-mumbai",
                    title: "Best wedding destinations near Mumbai for a dream celebration",
                    image: "/assets/img/weddings/weddingbanner.webp",
                  },
                  {
                    href: "/low-budget-wedding-resort-in-igatpuri",
                    title: "Low budget wedding resort in Igatpuri",
                    image: "/assets/img/reception.jpg",
                  },
                  {
                    href: "/igatpuri-perfect-for-destination-wedding",
                    title: "Why Igatpuri is perfect for a destination wedding",
                    image: "/assets/img/slider2.jpeg",
                  },
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
