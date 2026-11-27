import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export default function BestDestinationWeddingResortsNearMumbaiPage() {
  return (
    <>
      <div className="viewport">
        <main className="overflow-hidden">
          <Header />
          <section className="position-relative">
            <div className="position-relative">
              <img
                src="/assets/img/classic/grand-entry1.jpeg"
                className="img-fluid rounded h-700 mb-4"
                style={{ objectPosition: "bottom" }}
                alt="Destination Wedding Resort Near Mumbai"
              />
            </div>
          </section>
          <section className="sec-padding position-relative">
            <div className="container">
              <h1 className="text-head sec_title offerhead">
                A Place That Feels Like Your Love Story — Touchwood Bliss, Igatpuri
              </h1>
              <div className="row justify-content-center mt-5">
                <div className="col-lg-10">
                  <p>
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
                  <h3 className="mt-4">A Wedding You Will Always Remember</h3>
                  <p>
                    Because at the end of it all, you won’t remember every detail. You’ll remember the way
                    your heart felt in those moments.
                  </p>
                  <p>And Touchwood Bliss makes sure it feels unforgettable. ✨</p>
                </div>
              </div>
            </div>
          </section>
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
