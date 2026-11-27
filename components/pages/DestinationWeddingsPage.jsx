import HeaderAbout from "@/components/layout/HeaderAbout";
import FooterAbout from "@/components/layout/FooterAbout";

export default function DestinationWeddingsPage() {
  return (
    <>
      <div className="viewport">
        <main className="overflow-hidden">
          <HeaderAbout />
          <section className="position-relative aboutbanner">
            <div className="d-flex justify-content-center align-items-center h-100">
              <h1 className="text-center text-black maintitle top-down-about" style={{ fontSize: "55px" }}>
                The Best Wedding Resort Near Mumbai
              </h1>
            </div>
          </section>
          <section className="sec-padding position-relative abtwedding mt-min-4 aboutmt">
            <img
              decoding="async"
              loading="lazy"
              src="/assets/img/leftbannerleaf.svg"
              className="img-fluid leftleaf"
              data-aos-duration="1100"
              data-aos="flip-down"
              alt=""
            />{" "}
            <img
              decoding="async"
              loading="lazy"
              src="/assets/img/rightleaf.svg"
              className="img-fluid rightleaf"
              data-aos-duration="1100"
              data-aos="flip-down"
              alt=""
            />
            <div className="container-fluid">
              <div className="row justify-content-center">
                <div className="col-lg-9 text-center">
                  <div className="sec_para my-2 pt-4">
                    <p className="z-up" data-aos="fade-up" data-aos-duration="1000" data-aos-offset="100">
                      Imagine taking your wedding vows with the majestic mountains as your witness, surrounded
                      by fresh air, open skies, and the blessings of nature.
                    </p>
                  </div>
                  <div className="sec_para my-2">
                    <p className="z-up" data-aos="fade-up" data-aos-duration="1000" data-aos-offset="120">
                      Just a few hours from Mumbai, there exists a destination where weddings feel deeply
                      personal, beautifully intimate, and truly unforgettable.
                    </p>
                  </div>
                  <div className="sec_para my-2">
                    <p className="z-up" data-aos="fade-up" data-aos-duration="1000" data-aos-offset="120">
                      Welcome to Touchwood Bliss, Igatpuri, one of the most sought-after destination wedding
                      resorts near Mumbai, where families celebrate love amidst nature. Here, weddings are not
                      just events. They are heartcrafted celebrations of togetherness.
                    </p>
                  </div>
                  <div className="mt-2 mt-sm-3 mt-md-5">
                    <a
                      href="https://www.touchwoodbliss.com/igatpuri-resorts-for-wedding.php"
                      className="btn enquirebtn"
                      target="_blank"
                    >
                      Know More
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="sec-padding position-relative destibanner" style={{ height: "700px" }}>
            <div className="head_sec">
              <div className="position-relative">
                <h2
                  className="text-head sec_title "
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  data-aos-offset="100"
                  style={{ fontSize: "30px" }}
                >
                  Fairytale Destination Weddings by the Mountains
                </h2>
                <img
                  decoding="async"
                  loading="lazy"
                  src="/assets/img/btmleaves.png"
                  className="img-fluid btmleaves"
                  alt=""
                />
              </div>
            </div>
          </section>
          <div className="container-fluid position-relative t-up z-up">
            <h2 className="text-center mb-5 text-white">
              Why Choose Touchwood Bliss for Your Destination Wedding
            </h2>
            <div className="row justify-content-center gy-4">
              <div className="col-lg-6">
                <div
                  className="card supercard dflex flex-row align-items-center gap-4 px-5 py-4"
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  data-aos-offset="100"
                >
                  <span>
                    <strong>Scenic Mountain Wedding Venue</strong>
                    <br />
                    {
                      " Celebrate your wedding surrounded by panoramic views of the Sahyadri mountains. The natural backdrop creates breathtaking moments for your pheras and wedding photography."
                    }
                  </span>
                </div>
              </div>
              <div className="col-lg-6">
                <div
                  className="card supercard dflex flex-row align-items-center gap-4 px-5 py-4"
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  data-aos-offset="120"
                >
                  <span>
                    <strong>Perfect Destination Wedding Near Mumbai</strong>
                    <br />
                    {
                      " Located in Igatpuri, just 2.5–3 hours from Mumbai, the venue offers a peaceful destination experience without the hassle of long travel for your guests."
                    }
                  </span>
                </div>
              </div>
              <div className="col-lg-6">
                <div
                  className="card supercard dflex flex-row align-items-center gap-4 px-5 py-4"
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  data-aos-offset="140"
                >
                  <span>
                    <strong>{"Elegant Wedding Lawns & Banquets"}</strong>
                    <br />
                    {
                      " From vibrant haldi ceremonies to grand receptions, our beautifully designed lawns and banquet spaces can host every wedding function seamlessly."
                    }
                  </span>
                </div>
              </div>
              <div className="col-lg-6">
                <div
                  className="card supercard dflex flex-row align-items-center gap-4 px-5 py-4"
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  data-aos-offset="160"
                >
                  <span>
                    <strong>{"Pure Vegetarian & Jain Friendly Weddings"}</strong>
                    <br />
                    {
                      " Touchwood Bliss specializes in pure vegetarian and Jain wedding celebrations, making it a preferred wedding destination for families who value tradition and sattvik hospitality."
                    }
                  </span>
                </div>
              </div>
              <div className="col-lg-6">
                <div
                  className="card supercard dflex flex-row align-items-center gap-4 px-5 py-4"
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  data-aos-offset="180"
                >
                  <span>
                    <strong>{"Guest Stay & Celebration Together"}</strong>
                    <br />
                    {
                      " With comfortable accommodations available for guests, families can celebrate multiple wedding functions together in a relaxed destination setting."
                    }
                  </span>
                </div>
              </div>
            </div>
          </div>
          <section className="wedding-rituals py-5">
            <div className="container-fluid">
              <h2 className="text-center mb-5">Celebrate Every Wedding Ritual Beautifully</h2>
              <div id="weddingCarousel" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <div className="row align-items-center">
                      <div className="col-lg-6">
                        <img
                          decoding="async"
                          src="/assets/img/gallery/haldi/haldi9.webp"
                          className="d-block w-100 rounded"
                          alt="Haldi Ceremony"
                          loading="lazy"
                        />
                      </div>
                      <div className="col-lg-6">
                        <h3>Haldi Ceremony</h3>
                        <p>Bright morning celebrations filled with flowers, music, and happiness.</p>
                      </div>
                    </div>
                  </div>
                  <div className="carousel-item">
                    <div className="row align-items-center">
                      <div className="col-lg-6">
                        <img
                          decoding="async"
                          src="/assets/img/gallery/sangeet/sangeet4.webp"
                          className="d-block w-100 rounded"
                          alt="Mehendi Celebration"
                          loading="lazy"
                        />
                      </div>
                      <div className="col-lg-6">
                        <h3>Mehendi Celebration</h3>
                        <p>
                          Colorful gatherings where family and friends enjoy music, art, and joyful
                          conversations.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="carousel-item">
                    <div className="row align-items-center">
                      <div className="col-lg-6">
                        <img
                          decoding="async"
                          src="/assets/img/gallery/sangeet/sangeet2.webp"
                          className="d-block w-100 rounded"
                          alt="Sangeet Night"
                          loading="lazy"
                        />
                      </div>
                      <div className="col-lg-6">
                        <h3>Sangeet Night</h3>
                        <p>An evening of dance, music, and celebration under the stars.</p>
                      </div>
                    </div>
                  </div>
                  <div className="carousel-item">
                    <div className="row align-items-center">
                      <div className="col-lg-6">
                        <img
                          decoding="async"
                          src="/assets/img/gallery/wedding/wedding7.webp"
                          className="d-block w-100 rounded"
                          alt="Wedding Ceremony"
                          loading="lazy"
                        />
                      </div>
                      <div className="col-lg-6">
                        <h3>Wedding Ceremony</h3>
                        <p>Sacred pheras surrounded by mountains, nature, and blessings.</p>
                      </div>
                    </div>
                  </div>
                  <div className="carousel-item">
                    <div className="row align-items-center">
                      <div className="col-lg-6">
                        <img
                          decoding="async"
                          src="/assets/img/gallery/reception/rec5.webp"
                          className="d-block w-100 rounded"
                          alt="Grand Reception"
                          loading="lazy"
                        />
                      </div>
                      <div className="col-lg-6">
                        <h3>Grand Reception</h3>
                        <p>An elegant evening where families celebrate the beginning of a new journey.</p>
                      </div>
                    </div>
                  </div>
                </div>
                <button
                  className="carousel-control-prev"
                  type="button"
                  data-bs-target="#weddingCarousel"
                  data-bs-slide="prev"
                >
                  <span className="carousel-control-prev-icon" />
                </button>{" "}
                <button
                  className="carousel-control-next"
                  type="button"
                  data-bs-target="#weddingCarousel"
                  data-bs-slide="next"
                >
                  <span className="carousel-control-next-icon" />
                </button>
              </div>
            </div>
          </section>
          <section className="wedding-blog py-5">
            <div className="container-fluid">
              <div className="row justify-content-center">
                <div className="col-lg-10">
                  <h2 className="mb-4">A Wedding Venue Surrounded by Nature</h2>
                  <p>
                    Unlike traditional banquet halls, Touchwood Bliss offers a wedding experience where nature
                    becomes part of the celebration.
                  </p>
                  <p>
                    <strong>Couples love this venue for:</strong>
                  </p>
                  <ul>
                    <li>Stunning mountain views</li>
                    <li>Fresh air and peaceful surroundings</li>
                    <li>Beautiful outdoor lawns for wedding ceremonies</li>
                    <li>Spacious settings for photography and celebrations</li>
                    <li>A calm and spiritual environment perfect for sacred rituals</li>
                  </ul>
                  <p>It is a place where weddings feel soulful and meaningful.</p>
                  <h2 className="mt-5 mb-4">Convenient Location for Guests</h2>
                  <p>One of the biggest advantages of hosting your wedding in Igatpuri is accessibility.</p>
                  <p>
                    <strong>Touchwood Bliss is easily reachable from:</strong>
                  </p>
                  <ul>
                    <li>Mumbai</li>
                    <li>Thane</li>
                    <li>Navi Mumbai</li>
                    <li>Pune</li>
                    <li>Nashik</li>
                  </ul>
                  <p>
                    Guests can enjoy a destination wedding experience without long travel, making it ideal for
                    families planning weddings near Mumbai.
                  </p>
                  <h2 className="mt-5 mb-4">{"Perfect for Intimate & Grand Destination Weddings"}</h2>
                  <p>
                    Whether you are planning a close family celebration or a grand wedding event, Touchwood
                    Bliss offers flexible spaces and arrangements for your special day.
                  </p>
                  <p>
                    <strong>Families choose this venue for:</strong>
                  </p>
                  <ul>
                    <li>Destination weddings near Mumbai</li>
                    <li>Mountain weddings in Igatpuri</li>
                    <li>Pure vegetarian wedding celebrations</li>
                    <li>Jain weddings and cultural ceremonies</li>
                    <li>Nature-inspired wedding experiences</li>
                  </ul>
                  <p>Every wedding here becomes a beautiful story of love, blessings, and togetherness.</p>
                  <h2 className="mt-5 mb-4">Plan Your Dream Wedding Near Mumbai</h2>
                  <p>
                    If you are searching for the best wedding resort near Mumbai, Touchwood Bliss offers the
                    perfect combination of nature, celebration, and heartfelt hospitality.
                  </p>
                  <p>
                    Our team helps you create a seamless wedding experience so that you can focus on what
                    truly matters — celebrating your new journey with the people you love.
                  </p>
                  <h2 className="mt-5 mb-4">Start Your Wedding Journey With Us</h2>
                  <p>
                    {
                      "Your wedding deserves a destination that reflects the beauty of your love story. Celebrate your special day amidst mountains, nature, and heartfelt celebrations at "
                    }
                    <strong>Touchwood Bliss, Igatpuri.</strong>
                  </p>
                  <p className="fw-bold">Enquire Now to Check Availability for Your Wedding Date.</p>
                  <p>Begin your forever in a place where memories are crafted with love.</p>
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
                decoding="async"
                src="/assets/img/whatsapp.png"
                loading="lazy"
                width={60}
                height={60}
                alt="whatsapp icon"
                className="img-fluid"
              />
            </a>
          </div>
          <FooterAbout />
        </main>
      </div>
    </>
  );
}
