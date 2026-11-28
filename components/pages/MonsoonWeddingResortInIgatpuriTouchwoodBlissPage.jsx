import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import BlogEnhancer from "@/components/blog/BlogEnhancer";
import {
  Hero,
  Stats,
  Split,
  SectionTitle,
  Cards,
  Marquee,
  Timeline,
  Quote,
  Faq,
  FaqSchema,
  CtaBand,
  Related,
} from "@/components/blog/BlogParts";

const FAQS = [
  {
    q: "Is the monsoon a good time for a wedding in Igatpuri?",
    a: "Yes, if you plan for it. The hills turn deep green, mist rolls over the valley and the air stays cool, which many couples find far more beautiful than a dry-season wedding. The key is choosing a venue that has covered and open options, so the weather becomes part of the setting instead of a worry.",
  },
  {
    q: "What happens if it rains on the wedding day?",
    a: "A good monsoon wedding always has a Plan B that is decorated and ready. At Touchwood Bliss, the lawn setups and the banquet halls give you both an open-air and a covered option, and the team helps you decide closer to the function based on the sky.",
  },
  {
    q: "Is the food at Touchwood Bliss pure vegetarian?",
    a: "Yes. Touchwood Bliss is a pure veg destination wedding resort near Mumbai, with in-house catering for every function. Jain food options can be arranged on request.",
  },
  {
    q: "How far is Igatpuri from Mumbai?",
    a: "Igatpuri is roughly 120 km from Mumbai, which is usually a drive of around two and a half to three hours depending on traffic and the weather. Plan a little extra travel time for guests during heavy rain.",
  },
  {
    q: "Can my family and guests stay at the resort?",
    a: "Yes. The resort has luxury rooms and suites, so family and guests can stay on site and move between functions without travelling in the rain.",
  },
];

export default function MonsoonWeddingResortInIgatpuriTouchwoodBlissPage() {
  return (
    <>
      <div className="viewport">
        <main className="overflow-hidden">
          <Header />
          <div className="tbw-blog">
            <BlogEnhancer />

            <Hero
              image="/assets/img/farmside.jpg"
              alt="Misty hills and an evening lawn setup at Touchwood Bliss, Igatpuri"
              kicker="Monsoon Weddings · Igatpuri"
              title="Monsoon Wedding Resort in Igatpuri: Rain, Mist and a Wedding to Remember"
              meta={["Touchwood Bliss", "6 min read", "Destination wedding guide"]}
              fx="rain"
            />

            <Stats
              items={[
                { value: 4.8, decimals: 1, suffix: "/5", label: "Google rating" },
                { value: 13000, suffix: "+", label: "Google reviews" },
                { value: 600, suffix: "+", label: "WedMeGood reviews" },
                { value: 300, suffix: "+", label: "WeddingWire reviews" },
              ]}
            />

            <section className="tbw-section">
              <div className="tbw-narrow tbw-reveal">
                <p className="tbw-lead">
                  Most couples plan a wedding around the rain. A few plan with the rain, and end up with the
                  photographs everyone talks about for years. In the Sahyadri hills near Igatpuri, the
                  monsoon is not the problem to solve. It is the best set designer you will ever hire.
                </p>
                <p>
                  If you are searching for a <strong>monsoon wedding resort in Igatpuri</strong>, this guide
                  explains why the season works so well, what a rain-ready venue must have, and how a
                  wedding day can be planned so that nothing depends on the weather.
                </p>
              </div>
            </section>

            <Split
              image="/assets/img/weddings/summerwedding.jpg"
              alt="A couple celebrating beside the pool with green hills behind them at Touchwood Bliss"
              eyebrow="The setting"
              title="Why Igatpuri turns magical in the monsoon"
              caption="Green hills, open sky"
            >
              <p>
                From June to September the hills around Igatpuri change completely. Slopes turn a deep,
                glowing green, thin waterfalls appear on the ridges and low clouds drift through the valley
                in the evening. The air is cool, the light is soft and nothing looks harsh in a photograph.
              </p>
              <p>
                It also happens to be a calmer time for venues. With fewer weddings competing for the same
                weekends, couples often find it easier to get the dates and the attention they want.
              </p>
            </Split>

            <section className="tbw-section" style={{ background: "var(--tbw-blush, #fff4f4)" }}>
              <SectionTitle eyebrow="Before you book" title="What a rain-ready wedding resort must have">
                <p>Six things worth checking at any hill venue before you fall for the view.</p>
              </SectionTitle>
              <Cards
                items={[
                  {
                    title: "Open and covered options",
                    text: "A lawn for the pheras when the sky is clear, and a hall or covered space that feels just as special when it is not.",
                  },
                  {
                    title: "A Plan B that is decorated",
                    text: "Not a bare backup room. The alternate venue should be styled and ready so the switch feels natural.",
                  },
                  {
                    title: "Stay on the property",
                    text: "Guests who sleep at the resort never have to travel between rooms and functions in heavy rain.",
                  },
                  {
                    title: "Décor that glows in grey light",
                    text: "Florals, warm lights and reflective details look richer on a cloudy evening than in harsh sunshine.",
                  },
                  {
                    title: "Hot, fresh in-house food",
                    text: "Catering from the resort's own kitchen keeps food hot and the menu flexible when timings shift.",
                  },
                  {
                    title: "One coordination team",
                    text: "A single team handling venue, décor, food and stay can change plans in minutes instead of hours.",
                  },
                ]}
              />
            </section>

            <section className="tbw-section">
              <SectionTitle eyebrow="Moments" title="Evenings that glow" />
              <Marquee
                images={[
                  { src: "/assets/img/tentlawn.jpg", alt: "Fairy-lit lawn aisle at night" },
                  { src: "/assets/img/reception.jpg", alt: "Couple entering their reception under string lights" },
                  { src: "/assets/img/gallery/sangeet/sangeet1.webp", alt: "Sangeet stage with colourful lights" },
                  { src: "/assets/img/gallery/wedding/wedding2.webp", alt: "Couple under a floral mandap" },
                  { src: "/assets/img/poolsidelawn.jpg", alt: "Poolside lawn stage with a carved backdrop" },
                  { src: "/assets/img/gallery/reception/rec1.webp", alt: "Couple seated in a heart-shaped floral frame" },
                  { src: "/assets/img/venuebanner.jpg", alt: "Pastel floral mandap with hills behind" },
                  { src: "/assets/img/heartcrafted/heart_haldi.jpeg", alt: "Blue and white Haldi setup with florals" },
                ]}
              />
            </section>

            <Split
              image="/assets/img/tentlawn.jpg"
              alt="A lawn aisle lit by hundreds of hanging lights at night"
              eyebrow="Décor"
              title="Décor that loves soft light"
              caption="Lights over the lawn"
              flip
            >
              <p>
                Rain changes how a wedding looks, and the right décor works with it. Hanging lights turn a
                drizzle into a shimmer. Fresh flowers look deeper in cool light. Reflective floors and water
                features double every glow.
              </p>
              <p>
                At Touchwood Bliss, themed décor is part of the wedding experience, so the styling for your
                lawn and your covered space can be planned together from the first conversation.
              </p>
            </Split>

            <section className="tbw-section" style={{ background: "var(--tbw-blush, #fff4f4)" }}>
              <SectionTitle eyebrow="Plan the day" title="A monsoon wedding day, planned with a Plan B">
                <p>An example of how one wedding day can flow when both options are ready.</p>
              </SectionTitle>
              <Timeline
                items={[
                  {
                    time: "Morning",
                    title: "Haldi among the marigolds",
                    text: "A covered, flower-filled setup keeps the Haldi playful and dry, with the hills visible in the background.",
                  },
                  {
                    time: "Afternoon",
                    title: "Lunch, rest and a sky check",
                    text: "A pure veg lunch, time to rest in the rooms, and an honest look at the weather with your planning team.",
                  },
                  {
                    time: "Late afternoon",
                    title: "Choose the venue for the pheras",
                    text: "Lawn if it is clear, hall if it is not. Because both are styled, the decision takes minutes, not panic.",
                  },
                  {
                    time: "Evening",
                    title: "Varmala and pheras",
                    text: "Soft light, cool air and the sound of the hills. This is the part couples remember longest.",
                  },
                  {
                    time: "Night",
                    title: "Sangeet and dinner under lights",
                    text: "Music, dance floor and warm food, with every guest a short walk from their room.",
                  },
                ]}
              />
            </section>

            <Quote
              text="From stunning decor to seamless planning, Touchwood Bliss is the best venue for a destination wedding. Their management team made our big day stress-free and magical."
              by="Omkar & Riya"
            />

            <Split
              image="/assets/img/reception.jpg"
              alt="Bride and groom making an entrance at a lit-up reception"
              eyebrow="Smart tips"
              title="Four tips for planning a monsoon wedding"
              caption="Plan early, stay flexible"
            >
              <p>
                <strong>Book early.</strong> Good weekends fill up quickly, even in the rainy season, so start
                six to eight months ahead if you can.
              </p>
              <p>
                <strong>Tell guests about the travel.</strong> Share the route, expected drive time and a note
                to leave early. Rain can slow the ghats.
              </p>
              <p>
                <strong>Choose weather-friendly outfits.</strong> Lighter fabrics, sensible footwear for the
                lawn and a spare set for the baraat help everyone relax.
              </p>
              <p>
                <strong>Brief your photographer.</strong> Mist, wet flowers and reflections make some of the
                best frames, as long as the photographer knows to look for them.
              </p>
            </Split>

            <section className="tbw-section">
              <SectionTitle eyebrow="Good to know" title="Monsoon wedding questions, answered" />
              <Faq items={FAQS} />
              <FaqSchema items={FAQS} />
            </section>

            <section className="tbw-section">
              <CtaBand
                title="Let the rain be part of your love story"
                text="Share your dates and ideas with the Touchwood Bliss team and plan a monsoon wedding that is ready for every kind of weather."
              />
            </section>

            <section className="tbw-section">
              <SectionTitle eyebrow="Keep reading" title="More wedding guides" />
              <Related
                items={[
                  {
                    href: "/best-mountain-wedding-resort-near-mumbai",
                    title: "Best mountain wedding resort near Mumbai",
                    image: "/assets/img/weddings/weddingbanner.webp",
                  },
                  {
                    href: "/best-wedding-venue-in-igatpuri",
                    title: "Best wedding venues in Igatpuri, function by function",
                    image: "/assets/img/venuebanner.jpg",
                  },
                  {
                    href: "/dos-and-donts-of-planning-a-destination-wedding",
                    title: "Dos and don’ts of planning a destination wedding",
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
