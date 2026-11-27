import HeaderAbout from "@/components/layout/HeaderAbout";
import FooterAbout from "@/components/layout/FooterAbout";

export default function AboutPage() {
  return (
    <>
      <div className="viewport">
        <main className="overflow-hidden">
          <HeaderAbout />
          <section className="position-relative aboutbanner">
            <div className="d-flex justify-content-center align-items-center h-100">
              <h2 className="text-center text-black maintitle top-down-about">About Us</h2>
            </div>
          </section>
          <section className="sec-padding position-relative abtigt mt-min-4 aboutmt">
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
                      {
                        "Touchwood Bliss is Asia’s 1st & Only Pure Veg Family Nature Retreat With 10,500+ Heartfelt Reviews and a 4.8 Rating on Google Touchwood Bliss is more than a destination — it's a feeling."
                      }
                    </p>
                  </div>
                  <div className="sec_para my-2">
                    <p className="z-up" data-aos="fade-up" data-aos-duration="1000" data-aos-offset="120">
                      A sanctuary nestled amidst the mountains, where nature whispers blessings, and
                      celebrations are wrapped in warmth, simplicity, and soul.This is where you don’t just
                      get married.This is where your forever begins — with the mountains as your witness, and
                      love all around you.
                    </p>
                  </div>
                  <div className="mt-2 mt-sm-3 mt-md-5">
                    <a href="https://www.touchwoodbliss.com/" className="btn enquirebtn" target="_blank">
                      Know More
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="sec-padding position-relative igtbanner">
            <div className="head_sec">
              <div className="position-relative">
                <h4
                  className="text-head sec_title igthead"
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  data-aos-offset="100"
                >
                  Why Igatpuri
                </h4>
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
            <div className="row justify-content-center">
              <div className="col-lg-10">
                <div className="row justify-content-center gy-4">
                  <div className="col-lg-6">
                    <div
                      className="card supercard dflex flex-row align-items-center gap-5 px-5"
                      data-aos="fade-up"
                      data-aos-duration="1000"
                      data-aos-offset="100"
                    >
                      <img
                        decoding="async"
                        loading="lazy"
                        src="/assets/img/natural_beauty.svg"
                        className="img-fluid"
                        width={100}
                        alt=""
                      />{" "}
                      <span className="text-center">Breathtaking Natural Beauty</span>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div
                      className="card supercard dflex flex-row align-items-center gap-5 px-5"
                      data-aos="fade-up"
                      data-aos-duration="1000"
                      data-aos-offset="120"
                    >
                      <img
                        decoding="async"
                        loading="lazy"
                        src="/assets/img/peace.svg"
                        className="img-fluid"
                        width={100}
                        alt=""
                      />{" "}
                      <span className="text-center">Peace That Feels Like Home</span>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div
                      className="card supercard dflex flex-row align-items-center gap-5 px-5"
                      data-aos="fade-up"
                      data-aos-duration="1000"
                      data-aos-offset="120"
                    >
                      <img
                        decoding="async"
                        loading="lazy"
                        src="/assets/img/atomosphere.svg"
                        className="img-fluid"
                        width={100}
                        alt=""
                      />{" "}
                      <span className="text-center">Pleasant Weather All Year Round</span>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div
                      className="card supercard dflex flex-row align-items-center gap-5 px-5"
                      data-aos="fade-up"
                      data-aos-duration="1000"
                      data-aos-offset="120"
                    >
                      <img
                        decoding="async"
                        loading="lazy"
                        src="/assets/img/connectivity.svg"
                        className="img-fluid"
                        width={100}
                        alt=""
                      />{" "}
                      <span className="text-center">{"Easy Accessibility from Mumbai & Nashik"}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <section className="d-none d-sm-none d-md-block d-lg-block">
            <div className="wrapper">
              <div className="horizontal-scroll-1">
                <div className="h-section first sec-padding vows">
                  <div className="d-flex justify-content-center align-items-center h-100 vowsec">
                    <h2
                      className="text-vow"
                      data-aos="flip-up"
                      data-aos-duration="1000"
                      data-aos-offset="100"
                    >
                      our vows
                    </h2>
                  </div>
                </div>
                <div className="h-section second position-relative">
                  <div className="vow-num">
                    <span>1.</span>
                  </div>
                  <div className="row">
                    <div className="col-lg-5">
                      <div className="vow-desk-img">
                        <img
                          decoding="async"
                          loading="lazy"
                          src="/assets/img/vows/scenic_venue.jpeg"
                          className="img-fluid object-fit-cover"
                          alt=""
                        />
                      </div>
                    </div>
                    <div className="col-lg-7">
                      <div className="mt-5 py-5">
                        <h2 className="text-vow-desk">scenic Venue</h2>
                        <div className="vowsec_para my-3">
                          <p className="mb-0">
                            Get married amidst 360° panoramic mountain views, open skies, and natural beauty
                            that feels like a blessing. From grand lawns to intimate cafés, every venue space
                            at Touchwood Bliss is nature-wrapped and celebration-ready.
                          </p>
                        </div>
                        <ul className="mt-3 list-unstyled">
                          <li>
                            <div className="vowsec_para my-3">
                              <p className="mb-0">
                                <strong>Location</strong>
                              </p>
                              <p className="mb-0">
                                • IGATPURI - On scenic Bhavli Dam road, at the wellness capital of India
                              </p>
                            </div>
                          </li>
                          <li>
                            <div className="vowsec_para my-3">
                              <p className="mb-0">
                                <strong>Surrounded By</strong>
                              </p>
                              <p className="mb-0">• Sahyadri Ranges</p>
                            </div>
                          </li>
                          <li>
                            <div className="vowsec_para my-3">
                              <p className="mb-0">
                                <strong>Connectivity</strong>
                              </p>
                              <p className="mb-0">• Mumbai - Agra highway - 3 Kms</p>
                            </div>
                          </li>
                          <li>
                            <div className="vowsec_para my-3">
                              <p className="mb-0">
                                <strong>Project Highlights</strong>
                              </p>
                              <p className="mb-0">• 360° Panoramic Mountain View</p>
                              <p className="mb-0">
                                • Asia’s 1st pure veg retreat with 90% open space and 10% construction
                              </p>
                              <p className="mb-0">
                                • 100 acres of most scenic natural surrounding with panoramic mountain view
                              </p>
                              <p className="mb-0">• Surrounded by nature (Sahyadri, Kalsubai)</p>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="h-section third position-relative">
                  <div className="vow-num">
                    <span>2.</span>
                  </div>
                  <div className="row">
                    <div className="col-lg-5">
                      <div className="vow-desk-img">
                        <img
                          decoding="async"
                          loading="lazy"
                          src="/assets/img/vows/nutri_food.webp"
                          className="img-fluid object-fit-cover"
                          alt=""
                        />
                      </div>
                    </div>
                    <div className="col-lg-7">
                      <div className="mt-5 py-5">
                        <h2 className="text-vow-desk">Nutridelicious Food</h2>
                        <div className="vowsec_para my-3">
                          <p className="mb-0">
                            Treat your guests to award-winning, multi-cuisine, pure-veg food. From Roots Café
                            to Flavours of Bliss, every meal is curated with wellness, flavour, and love —
                            with Jain options and handcrafted menus for every moment.
                          </p>
                        </div>
                        <ul className="mt-3 list-unstyled">
                          <li>
                            <div className="vowsec_para my-3">
                              <p className="mb-0">
                                <strong>Award Winning Multi-Cuisine</strong>
                              </p>
                              <p className="mb-0">• Pure Veg Flavours of Bliss</p>
                            </div>
                          </li>
                          <li>
                            <div className="vowsec_para my-3">
                              <p className="mb-0">
                                <strong>7 Meal-Course</strong>
                              </p>
                              <p className="mb-0">
                                • Breakfast, Lunch, Hi-Tea, Pre-Function Snacks, Dinner, Post Dinner Snacks
                              </p>
                            </div>
                          </li>
                          <li>
                            <div className="vowsec_para my-3">
                              <p className="mb-0">
                                <strong>Dining Experience</strong>
                              </p>
                              <p className="mb-0">• Dedicated Dining Area</p>
                              <p className="mb-0">• Meals with Wellness Quotient</p>
                            </div>
                          </li>
                          <li>
                            <div className="vowsec_para my-3">
                              <p className="mb-0">
                                <strong>Our Speciality</strong>
                              </p>
                              <p className="mb-0">• Jain Food</p>
                            </div>
                          </li>
                          <li>
                            <div className="vowsec_para my-3">
                              <p className="mb-0">
                                <strong>Recognitions</strong>
                              </p>
                              <p className="mb-0">• No. 1 in India in ‘pure veg’ restaurant category</p>
                              <p className="mb-0">(TripAdvisor, Google)</p>
                            </div>
                          </li>
                          <li>
                            <div className="vowsec_para my-3">
                              <p className="mb-0">
                                <strong>Our Signature Dining Spaces</strong>
                              </p>
                              <p className="mb-0">• Roots Café</p>
                              <p className="mb-0">• Flavours of Bliss</p>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="h-section fourth position-relative">
                  <div className="vow-num">
                    <span>3.</span>
                  </div>
                  <div className="row">
                    <div className="col-lg-5">
                      <div className="vow-desk-img">
                        <img
                          decoding="async"
                          loading="lazy"
                          src="/assets/img/vows/integrated_stay.jpg"
                          className="img-fluid"
                          alt=""
                        />
                      </div>
                    </div>
                    <div className="col-lg-7">
                      <div className="mt-5 py-5">
                        <h2 className="text-vow-desk">Nature integrated Stay</h2>
                        <div className="vowsec_para my-3">
                          <p className="mb-0">
                            Reconnect with calm through our stay experiences — be it glamping tents, cozy
                            courtyard villas, or farm-view retreats. Every space is designed to keep you close
                            to nature, without compromising on comfort or elegance.
                          </p>
                        </div>
                        <ul className="mt-3 list-unstyled">
                          <div className="row">
                            <div className="col-lg-6">
                              <li>
                                <div className="vowsec_para my-3">
                                  <p className="mb-0">
                                    <strong>FARMSYDE VILLAS</strong>
                                  </p>
                                  <p className="mb-0">• Total No. Of Villas – 4</p>
                                  <p className="mb-0">• Total No. of Rooms – 20</p>
                                  <p className="mb-0">
                                    • Rooms Per Villa – 5 Rooms (1 Family Room + 4 Couple Rooms)
                                  </p>
                                  <p className="mb-0">
                                    • 1 Family Seating Area • 1 Kitchen • Attached Private Garden
                                  </p>
                                </div>
                              </li>
                            </div>
                            <div className="col-lg-6">
                              <li>
                                <div className="vowsec_para my-3">
                                  <p className="mb-0">
                                    <strong>Occupancy</strong>
                                  </p>
                                  <p className="mb-0">• Family Room – Up to 6 Guests</p>
                                  <p className="mb-0">• Couple Room – Up to 4 Guests</p>
                                  <p className="mb-0">• 1 Mini Kitchen / Pantry with Family Room</p>
                                  <p className="mb-0">• Accommodation Up to 22 Guests per Villa</p>
                                </div>
                              </li>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-lg-6">
                              <li>
                                <div className="vowsec_para my-3">
                                  <p className="mb-0">
                                    <strong>COURTYARD VILLAS</strong>
                                  </p>
                                  <p className="mb-0">• Total No. Of Villas – 4</p>
                                  <p className="mb-0">• Total No. of Rooms – 16</p>
                                  <p className="mb-0">
                                    • Rooms Per Villa – 4 Rooms (3 Couple Rooms, 1 Family Room)
                                  </p>
                                  <p className="mb-0">• Attached Verandah</p>
                                </div>
                              </li>
                            </div>
                            <div className="col-lg-6">
                              <li>
                                <div className="vowsec_para my-3">
                                  <p className="mb-0">
                                    <strong>Occupancy</strong>
                                  </p>
                                  <p className="mb-0">• Accommodation Up to 20 Guests Per Villa</p>
                                  <p className="mb-0">• Family Room – Up to 6 Guests</p>
                                  <p className="mb-0">• Couple Room – Up to 4 Guests</p>
                                </div>
                              </li>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-lg-6">
                              <li>
                                <div className="vowsec_para my-3">
                                  <p className="mb-0">
                                    <strong>GLAMPING TENTS</strong>
                                  </p>
                                  <p className="mb-0">• Total No. Of Tents – 6</p>
                                  <p className="mb-0">
                                    • Each tent with private verandah and panoramic mountain view
                                  </p>
                                </div>
                              </li>
                            </div>
                            <div className="col-lg-6">
                              <li>
                                <div className="vowsec_para my-3">
                                  <p className="mb-0">
                                    <strong>Occupancy</strong>
                                  </p>
                                  <p className="mb-0">• Accommodation Up to 6 to 8 people Per Tent</p>
                                </div>
                              </li>
                            </div>
                          </div>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="h-section fifth position-relative">
                  <div className="vow-num">
                    <span>4.</span>
                  </div>
                  <div className="row">
                    <div className="col-lg-5">
                      <div className="vow-desk-img">
                        <img
                          decoding="async"
                          loading="lazy"
                          src="/assets/img/vows/wedd_essentials.webp"
                          className="img-fluid object-fit-cover"
                          style={{ objectPosition: "bottom" }}
                          alt=""
                        />
                      </div>
                    </div>
                    <div className="col-lg-7">
                      <div className="mt-5 py-5">
                        <h2 className="text-vow-desk">
                          {"Wedding "}
                          <br />
                          {" Essentials"}
                        </h2>
                        <div className="vowsec_para my-3">
                          <p className="mb-0">
                            From Raj Tilak to Ghodi, varmala to Akshata, and even custom hampers — we ensure
                            every tradition is honored and every ritual flows effortlessly, leaving you free
                            to simply enjoy the moment.
                          </p>
                        </div>
                        <ul className="mt-3 list-unstyled">
                          <li>
                            <div className="vowsec_para my-3">
                              <p className="mb-0">
                                <strong>From Royal Welcome to Graceful Varmala Setups</strong>
                              </p>
                              <p className="mb-0">
                                • Every tiny detail is seamlessly handled so your focus stays on the moments
                                that matter.
                              </p>
                            </div>
                          </li>
                          <li>
                            <div className="vowsec_para my-3">
                              <p className="mb-0">
                                <strong>Raj Tilak</strong>
                              </p>
                            </div>
                          </li>
                          <li>
                            <div className="vowsec_para my-3">
                              <p className="mb-0">
                                <strong>Welcome Essentials</strong>
                              </p>
                              <p className="mb-0">{"• Welcome Garland (for Men & Women)"}</p>
                              <p className="mb-0">• Room Kit</p>
                              <p className="mb-0">• Welcome Hamper</p>
                            </div>
                          </li>
                          <li>
                            <div className="vowsec_para my-3">
                              <p className="mb-0">
                                <strong>Ceremonial Elements</strong>
                              </p>
                              <p className="mb-0">• Band</p>
                              <p className="mb-0">• Ghodi</p>
                              <p className="mb-0">• Varmala</p>
                              <p className="mb-0">• Akshada</p>
                              <p className="mb-0">• Pheta</p>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="h-section sixth position-relative">
                  <div className="vow-num">
                    <span>5.</span>
                  </div>
                  <div className="row">
                    <div className="col-lg-5">
                      <div className="vow-desk-img">
                        <img
                          decoding="async"
                          loading="lazy"
                          src="/assets/img/vows/creative_decor.jpg"
                          className="img-fluid object-fit-cover"
                          style={{ objectPosition: "30% 20%" }}
                          alt=""
                        />
                      </div>
                    </div>
                    <div className="col-lg-7">
                      <div className="mt-5 py-5">
                        <h2 className="text-vow-desk">Creative Decor</h2>
                        <div className="vowsec_para my-3">
                          <p className="mb-0">
                            Whether it’s Haldi or Pheras, your décor is not just aesthetic — it’s expressive.
                            Each celebration space is styled with purpose and beauty, curated to reflect your
                            love story with color, culture, and creativity.
                          </p>
                        </div>
                        <ul className="mt-3 list-unstyled">
                          <li>
                            <div className="vowsec_para my-3">
                              <p className="mb-0">
                                <strong>Wedding Ceremonies</strong>
                              </p>
                            </div>
                          </li>
                          <li>
                            <div className="vowsec_para d-flex flex-row flex-wrap gap-3 my-3">
                              <a href="/gallery#gallery" className="btn btn-sm gallerybtn">
                                Baraat Swagat
                              </a>{" "}
                              <a href="/gallery#gallery" className="btn btn-sm gallerybtn">
                                Haldi
                              </a>{" "}
                              <a href="/gallery#gallery" className="btn btn-sm gallerybtn">
                                Mahera
                              </a>{" "}
                              <a href="/gallery#gallery" className="btn btn-sm gallerybtn">
                                Sangeet
                              </a>{" "}
                              <a href="/gallery#gallery" className="btn btn-sm gallerybtn">
                                Engagement
                              </a>{" "}
                              <a href="/gallery#gallery" className="btn btn-sm gallerybtn">
                                Phera
                              </a>{" "}
                              <a href="/gallery#gallery" className="btn btn-sm gallerybtn">
                                Varmala
                              </a>{" "}
                              <a href="/gallery#gallery" className="btn btn-sm gallerybtn">
                                Reception
                              </a>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="h-section sixth position-relative">
                  <div className="vow-num">
                    <span>6.</span>
                  </div>
                  <div className="row">
                    <div className="col-lg-5">
                      <div className="vow-desk-img">
                        <img
                          decoding="async"
                          loading="lazy"
                          src="/assets/img/vows/creative_communication.webp"
                          className="img-fluid object-fit-cover"
                          alt=""
                        />
                      </div>
                    </div>
                    <div className="col-lg-7">
                      <div className="mt-5 py-5">
                        <h2 className="text-vow-desk">Creative Communication</h2>
                        <div className="vowsec_para my-3">
                          <p className="mb-0">
                            Your story deserves to be told with beauty and heart. From elegant invites to
                            on-ground storytelling, we help you build emotional connections through design,
                            messaging, and personalized wedding narratives.
                          </p>
                        </div>
                        <ul className="mt-3 list-unstyled">
                          <li>
                            <div className="vowsec_para my-3">
                              <p className="mb-0">
                                <strong>{"Wedding Stationery & Signage"}</strong>
                              </p>
                            </div>
                          </li>
                          <li>
                            <div className="vowsec_para my-3">
                              <p className="mb-0">• Digital Invite</p>
                              <p className="mb-0">• Video Invite</p>
                              <p className="mb-0">• Save The Date</p>
                              <p className="mb-0">• Reminder Creative</p>
                              <p className="mb-0">• Thank You Creative</p>
                              <p className="mb-0">• Itinerary</p>
                              <p className="mb-0">• 3 Photo Standees</p>
                              <p className="mb-0">• 3 Highway Signage</p>
                              <p className="mb-0">• Welcome Board</p>
                              <p className="mb-0">• Haldi Board</p>
                              <p className="mb-0">• Insta Photo Frame</p>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="h-section sixth position-relative">
                  <div className="vow-num">
                    <span>7.</span>
                  </div>
                  <div className="row">
                    <div className="col-lg-5">
                      <div className="vow-desk-img">
                        <img
                          decoding="async"
                          loading="lazy"
                          src="/assets/img/vows/perfect_event.jpg"
                          className="img-fluid object-fit-cover"
                          alt=""
                        />
                      </div>
                    </div>
                    <div className="col-lg-7">
                      <div className="mt-5 py-5">
                        <h2 className="text-vow-desk">Perfect Event Management</h2>
                        <div className="vowsec_para my-3">
                          <p className="mb-0">
                            Relax and celebrate while our expert team manages every detail. From flow to
                            hospitality, timing to coordination, your wedding is in the hands of people who
                            care as deeply as you do.
                          </p>
                        </div>
                        <ul className="mt-3 list-unstyled">
                          <li>
                            <div className="vowsec_para my-3">
                              <p className="mb-0">• Dedicated Team of Professionals</p>
                              <p className="mb-0">• Skilled On-ground Team Members</p>
                              <p className="mb-0">•End-to-End Event Solutions</p>
                              <p className="mb-0">{"• Artists & Talent Management"}</p>
                              <p className="mb-0">• PPO/Shadow/Male-Female Hostess</p>
                              <p className="mb-0">• Special entries, Pandit, Makeup artist</p>
                              <p className="mb-0">{"• Photographer & Videography Team"}</p>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="sec-padding vows d-block d-sm-block d-md-none d-lg-none">
            <div className="d-flex justify-content-center align-items-center h-100 vowsec">
              <h2 className="text-vow" data-aos="flip-up" data-aos-duration="1000" data-aos-offset="100">
                our vows
              </h2>
            </div>
          </section>
          <section className="vowwmob d-block d-sm-block d-md-none d-lg-none py-3">
            <div className="container">
              <h5 className="vowmob-text">Our Vows</h5>
              <div className="row mt-4">
                <div className="col-12 d-flex justify-content-center flex-column align-items-center">
                  <div className="card vowcard sticky-card overflow-hidden">
                    <div className="card-body vowcardbody text-center p-0">
                      <div className="p-3">
                        <h4 className="vowhead">1.</h4>
                        <div className="mt-3">
                          <h3 className="vow-subtext">scenic Venue</h3>
                          <div className="vowsec_para my-3">
                            <p>
                              Get married amidst 360° panoramic mountain views, open skies, and natural beauty
                              that feels like a blessing. From grand lawns to intimate cafés, every venue
                              space at Touchwood Bliss is nature-wrapped and celebration-ready.
                            </p>
                          </div>
                          <div className="vowsec_para">
                            <p>
                              <strong>Location</strong>
                              {" - IGATPURI : On scenic Bhavali Dam road, at the wellness capital of India"}
                            </p>
                            <ul className="list-unstyled">
                              <li>
                                <div className="vowsec_para my-3">
                                  <p className="mb-0">
                                    <strong>Surrounded By</strong>
                                    {" : Sahyadri Ranges"}
                                  </p>
                                </div>
                              </li>
                              <li>
                                <div className="vowsec_para my-3">
                                  <p className="mb-0">
                                    <strong>Connectivity</strong>
                                  </p>
                                  <p className="mb-0">• Mumbai - Agra highway - 3 Kms</p>
                                  <p className="mb-0">• Samruddhi Highway - 1 KMs</p>
                                  <p className="mb-0">• Igatpuri railway station - 8 Kms (15 mins)</p>
                                </div>
                              </li>
                              <li>
                                <div className="vowsec_para my-3">
                                  <p className="mb-0">
                                    <strong>Project Area</strong>
                                  </p>
                                  <p className="mb-0">• 10 Acres</p>
                                </div>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="card-footer p-0 border-0">
                      <img
                        decoding="async"
                        loading="lazy"
                        src="/assets/img/vows/scenic_venue.jpeg"
                        className="img-fluid rounded-4"
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="card vowcard sticky-card overflow-hidden">
                    <div className="card-body vowcardbody text-center p-0">
                      <div className="p-3">
                        <h4 className="vowhead">2.</h4>
                        <div className="mt-3">
                          <h3 className="vow-subtext">Nutridelicious Food</h3>
                          <div className="vowsec_para my-3">
                            <p>
                              Treat your guests to award-winning, multi-cuisine, pure-veg food. From Roots
                              Café to Flavours of Bliss, every meal is curated with wellness, flavour, and
                              love — with Jain options and handcrafted menus for every moment.
                            </p>
                          </div>
                          <div className="vowsec_para">
                            <p>
                              <strong>Dining Experience</strong>
                            </p>
                            <ul className="list-unstyled">
                              <li>
                                <div className="vowsec_para my-3">
                                  <p className="mb-0">
                                    • 7 Meal-Course: Breakfast, Lunch, Hi-Tea, Pre-Function Snacks, Dinner,
                                    Post Dinner Snacks
                                  </p>
                                </div>
                              </li>
                              <li>
                                <div className="vowsec_para my-3">
                                  <p className="mb-0">• Dedicated Dining Area</p>
                                </div>
                              </li>
                              <li>
                                <div className="vowsec_para my-3">
                                  <p className="mb-0">• Meals with Wellness Quotient</p>
                                </div>
                              </li>
                              <li>
                                <div className="vowsec_para my-3">
                                  <p className="mb-0">• Our Speciality – Jain Food</p>
                                </div>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="card-footer p-0 border-0">
                      <img
                        decoding="async"
                        loading="lazy"
                        src="/assets/img/vows/nutri_food.webp"
                        className="img-fluid rounded-4"
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="card vowcard sticky-card overflow-hidden">
                    <div className="card-body vowcardbody text-center p-0">
                      <div className="p-3">
                        <h4 className="vowhead">3.</h4>
                        <div className="mt-3">
                          <h3 className="vow-subtext">Nature integrated Stay</h3>
                          <div className="vowsec_para my-3">
                            <p>
                              Reconnect with calm through our stay experiences — be it glamping tents, cozy
                              courtyard villas, or farm-view retreats. Every space is designed to keep you
                              close to nature, without compromising on comfort or elegance.
                            </p>
                          </div>
                          <div className="vowsec_para">
                            <p>
                              <strong>Accommodation</strong>
                            </p>
                            <ul className="list-unstyled">
                              <li>
                                <div className="vowsec_para my-3">
                                  <p className="mb-0">
                                    <strong>Farmsyde Villas</strong>
                                    {" (4 Villas, 20 Rooms)"}
                                  </p>
                                  <p className="mb-0">• 5 Rooms/Villa (1 Family + 4 Couple)</p>
                                </div>
                              </li>
                              <li>
                                <div className="vowsec_para my-3">
                                  <p className="mb-0">
                                    <strong>Courtyard Villas</strong>
                                    {" (4 Villas, 16 Rooms)"}
                                  </p>
                                  <p className="mb-0">• 4 Rooms/Villa (3 Couple + 1 Family)</p>
                                </div>
                              </li>
                              <li>
                                <div className="vowsec_para my-3">
                                  <p className="mb-0">
                                    <strong>Glamping Tents</strong>
                                    {" (6 Tents)"}
                                  </p>
                                  <p className="mb-0">• Private Verandah, Mountain View</p>
                                </div>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className="card-footer p-0 border-0">
                        <img
                          decoding="async"
                          loading="lazy"
                          src="/assets/img/vows/integrated_stay.jpg"
                          className="img-fluid rounded-4"
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                  <div className="card vowcard sticky-card overflow-hidden">
                    <div className="card-body vowcardbody text-center p-0">
                      <div className="p-3">
                        <h4 className="vowhead">4.</h4>
                        <div className="mt-3">
                          <h3 className="vow-subtext">Wedding Essentials</h3>
                          <div className="vowsec_para my-3">
                            <p>
                              From Raj Tilak to Ghodi, varmala to Akshata, and even custom hampers — we ensure
                              every tradition is honored and every ritual flows effortlessly, leaving you free
                              to simply enjoy the moment.
                            </p>
                          </div>
                          <div className="vowsec_para">
                            <p>
                              <strong>Raj Tilak</strong>
                            </p>
                            <ul className="list-unstyled">
                              <li>
                                <div className="vowsec_para my-3">
                                  <p className="mb-0">{"• Welcome Garland (for Men & Women)"}</p>
                                </div>
                              </li>
                              <li>
                                <div className="vowsec_para my-3">
                                  <p className="mb-0">• Room Kit</p>
                                </div>
                              </li>
                              <li>
                                <div className="vowsec_para my-3">
                                  <p className="mb-0">• Welcome Hamper</p>
                                </div>
                              </li>
                              <li>
                                <div className="vowsec_para my-3">
                                  <p className="mb-0">• Band</p>
                                </div>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="card-footer p-0 border-0">
                      <img
                        decoding="async"
                        loading="lazy"
                        src="/assets/img/vows/wedd_essentials.webp"
                        className="img-fluid rounded-4"
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="card vowcard sticky-card overflow-hidden">
                    <div className="card-body vowcardbody text-center p-0">
                      <div className="p-3">
                        <h4 className="vowhead">5.</h4>
                        <div className="mt-3">
                          <h3 className="vow-subtext">Creative Decor</h3>
                          <div className="vowsec_para my-3">
                            <p>
                              Whether it’s Haldi or Pheras, your décor is not just aesthetic — it’s
                              expressive. Each celebration space is styled with purpose and beauty, curated to
                              reflect your love story with color, culture, and creativity.
                            </p>
                          </div>
                          <div className="vowsec_para">
                            <p>
                              <strong>Wedding Ceremonies</strong>
                            </p>
                            <ul className="list-unstyled">
                              <li>
                                <div className="vowsec_para my-3">
                                  <p className="mb-0">• Baraat Swagat</p>
                                </div>
                              </li>
                              <li>
                                <div className="vowsec_para my-3">
                                  <p className="mb-0">• Haldi</p>
                                </div>
                              </li>
                              <li>
                                <div className="vowsec_para my-3">
                                  <p className="mb-0">• Mahera</p>
                                </div>
                              </li>
                              <li>
                                <div className="vowsec_para my-3">
                                  <p className="mb-0">• Sangeet / Engagement</p>
                                </div>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="card-footer p-0 border-0">
                      <img
                        decoding="async"
                        loading="lazy"
                        src="/assets/img/vows/creative_decor.jpg"
                        className="img-fluid rounded-4"
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="card vowcard sticky-card overflow-hidden">
                    <div className="card-body vowcardbody text-center p-0">
                      <div className="p-3">
                        <h4 className="vowhead">6.</h4>
                        <div className="mt-3">
                          <h3 className="vow-subtext">Creative Communication</h3>
                          <div className="vowsec_para my-3">
                            <p>
                              Your story deserves to be told with beauty and heart. From elegant invites to
                              on-ground storytelling.
                            </p>
                          </div>
                          <div className="vowsec_para">
                            <p>
                              <strong>{"Wedding Stationery & Signage"}</strong>
                            </p>
                            <ul className="list-unstyled">
                              <li>
                                <div className="vowsec_para my-3">
                                  <p className="mb-0">• Digital Invite</p>
                                </div>
                              </li>
                              <li>
                                <div className="vowsec_para my-3">
                                  <p className="mb-0">• Video Invite</p>
                                </div>
                              </li>
                              <li>
                                <div className="vowsec_para my-3">
                                  <p className="mb-0">• Save The Date</p>
                                </div>
                              </li>
                              <li>
                                <div className="vowsec_para my-3">
                                  <p className="mb-0">• Reminder Creative</p>
                                </div>
                              </li>
                              <li>
                                <div className="vowsec_para my-3">
                                  <p className="mb-0">• Thank You Creative</p>
                                </div>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="card-footer p-0 border-0">
                      <img
                        decoding="async"
                        loading="lazy"
                        src="/assets/img/vows/creative_communication.webp"
                        className="img-fluid rounded-4"
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="card vowcard sticky-card overflow-hidden">
                    <div className="card-body vowcardbody text-center p-0">
                      <div className="p-3">
                        <h4 className="vowhead">7.</h4>
                        <div className="mt-3">
                          <h3 className="vow-subtext">Perfect Event Management</h3>
                          <div className="vowsec_para my-3">
                            <p>
                              Relax and celebrate while our expert team manages every detail. From flow to
                              hospitality, timing to coordination.
                            </p>
                          </div>
                          <div className="vowsec_para">
                            <ul className="list-unstyled">
                              <li>
                                <div className="vowsec_para my-3">
                                  <p className="mb-0">• Dedicated Team of Professionals</p>
                                </div>
                              </li>
                              <li>
                                <div className="vowsec_para my-3">
                                  <p className="mb-0">• Skilled On-ground Team Members</p>
                                </div>
                              </li>
                              <li>
                                <div className="vowsec_para my-3">
                                  <p className="mb-0">• End-to-End Event Solutions</p>
                                </div>
                              </li>
                              <li>
                                <div className="vowsec_para my-3">
                                  <p className="mb-0">• Reminder Creative</p>
                                </div>
                              </li>
                              <li>
                                <div className="vowsec_para my-3">
                                  <p className="mb-0">{"• Helpers & Assistance"}</p>
                                </div>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="card-footer p-0 border-0">
                      <img
                        decoding="async"
                        loading="lazy"
                        src="/assets/img/vows/perfect_event.jpg"
                        className="img-fluid rounded-4"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <div id="end-vow" />
          <section className="bg-bridalvilla position-relative">
            <img
              decoding="async"
              loading="lazy"
              src="/assets/img/fairytale_bg.svg"
              className="img-fluid dhabba-up-bridalvilla"
              alt=""
            />
            <div className="container-fluid">
              <div className="row align-items-center">
                <div className="col-lg-6">
                  <div className="bridal-villa overflow-hidden">
                    <img
                      decoding="async"
                      loading="lazy"
                      src="/assets/img/banners/nehavilla.jpg"
                      className="img-fluid h-100 object-fit-cover"
                      alt=""
                    />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="bridal-villa-content text-center">
                    <span className="text-subhead sec_title py-0">Introducing</span>
                    <h4
                      className="text-head sec_title igthead aos-init py-0"
                      data-aos="fade-up"
                      data-aos-duration="1000"
                      data-aos-offset="100"
                    >
                      Bridal Villa
                    </h4>
                    <div className="sec_para">
                      <p>
                        At Touchwood Bliss, we turned that dream into reality Crafted not with concrete, but
                        with care. Surrounded not by walls, but by Mountains, tall trees, and the soothing
                        scent of nature.
                      </p>
                    </div>
                    <div className="sec_para">
                      <p>
                        Here, surrounded by nature, family, and quiet joy — she writes the first lines of her
                        forever
                      </p>
                    </div>
                    <div className="sec_para">
                      <p>
                        A place where every window frames a blessing, every corner holds a prayer, and every
                        heartbeat feels at home. Because a bride’s journey doesn’t start at the aisle
                      </p>
                    </div>
                    <div className="sec_para">
                      <p>It starts here Where she’s loved, nurtured, and held by nature itself</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="awardsec position-relative pt-5">
            <img
              decoding="async"
              loading="lazy"
              src="/assets/img/dhabba_diff.svg"
              className="img-fluid dhabba-up-awards"
              alt=""
            />{" "}
            <img
              decoding="async"
              loading="lazy"
              src="/assets/img/dhabba_mid.svg"
              className="img-fluid dhabba-mid-awards"
              alt=""
            />
            <div className="container-fluid">
              <div className="row justify-content-center align-items-center h-100 gap-5 text-center">
                <div className="position-relative">
                  <h4
                    className="text-head sec_title certifyhead"
                    data-aos="fade-up"
                    data-aos-duration="1000"
                    data-aos-offset="100"
                  >
                    Our certifications
                  </h4>
                  <img
                    decoding="async"
                    loading="lazy"
                    src="/assets/img/btmleaves.png"
                    className="img-fluid btmleaves"
                    alt=""
                  />
                </div>
                <div className="col-lg-11 my-15">
                  <div className="testimonial-box position-relative" style={{ top: "120px" }}>
                    <div className="testimonial-items certificate-carousel owl-carousel owl-theme">
                      <div className="item">
                        <div className="row">
                          <div className="col-lg-6 col-6 mb-4">
                            <div className="award_item d-flex justify-content-center position-relative">
                              <img
                                decoding="async"
                                loading="lazy"
                                src="/assets/img/awards/users_choice.jpg"
                                className="img-fluid users_choice"
                                alt=""
                              />{" "}
                              <img
                                decoding="async"
                                loading="lazy"
                                src="/assets/img/award.png"
                                className="img-fluid awardimg"
                                alt=""
                              />
                              <div className="award_text">
                                {"Users Choice Award "}
                                <br />
                                2024
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-6 col-6 mb-4">
                            <div className="award_item d-flex justify-content-center position-relative">
                              <img
                                decoding="async"
                                loading="lazy"
                                src="/assets/img/awards/couple_choice_2023.jpg"
                                className="img-fluid users_choice"
                                alt=""
                              />{" "}
                              <img
                                decoding="async"
                                loading="lazy"
                                src="/assets/img/award.png"
                                className="img-fluid awardimg"
                                alt=""
                              />
                              <div className="award_text">
                                {"Couple Choice Award "}
                                <br />
                                2023
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-6 col-6 mt-15">
                            <div className="award_item d-flex justify-content-center position-relative">
                              <img
                                decoding="async"
                                loading="lazy"
                                src="/assets/img/awards/lokmat_lifestyle.png"
                                className="img-fluid lokmataward"
                                alt=""
                              />{" "}
                              <img
                                decoding="async"
                                loading="lazy"
                                src="/assets/img/award.png"
                                className="img-fluid awardimg"
                                alt=""
                              />
                              <div className="award_text">
                                {"Lokmat-lifestyle Award "}
                                <br />
                                2019
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-6 col-6 mt-15">
                            <div className="award_item d-flex justify-content-center position-relative">
                              <img
                                decoding="async"
                                loading="lazy"
                                src="/assets/img/awards/travel_hospitality.png"
                                className="img-fluid travel_hospitality"
                                alt=""
                              />{" "}
                              <img
                                decoding="async"
                                loading="lazy"
                                src="/assets/img/award.png"
                                className="img-fluid awardimg"
                                alt=""
                              />
                              <div className="award_text">{"Travel & Hospitality Award"}</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="guest_sec position-relative">
            <img
              decoding="async"
              loading="lazy"
              src="/assets/img/dhabba_mid.svg"
              className="img-fluid dhabba-mid-opbsec"
              alt=""
            />
            <div className="row align-items-center">
              <div className="col-lg-4 col-12">
                <div className="position-relative text-center text-sm-center text-md-start">
                  <h4 className="text-head sec_title certifyhead">Our esteemed guest</h4>
                  <img
                    decoding="async"
                    loading="lazy"
                    src="/assets/img/btmleaves.png"
                    className="img-fluid btmleaves1"
                    alt=""
                  />
                </div>
                <div className="sec_para text-center text-sm-start text-md-start  mt-4 pt-5">
                  <p>
                    Once the wedding day/events came, we didn't have to worry about a thing and could spend
                    time with our guests/family and enjoyed our wedding.
                  </p>
                </div>
              </div>
              <div className="col-lg-8">
                <div className="testimonial-items guest-carousel owl-carousel owl-theme">
                  <div className="guest_item d-flex flex-column align-items-center justify-content-center w-100">
                    <div className="guest_thumb">
                      <img
                        decoding="async"
                        loading="lazy"
                        src="/assets/img/new/guest/gadkari.jpg"
                        className="img-fluid object-fit-cover h-100 w-100"
                        style={{ objectPosition: "72% 55%" }}
                        alt=""
                      />
                    </div>
                    <div className="guest_para text-center mt-3">
                      <p>
                        {
                          "Shri. Nitin Gadkariji -One of India's most Loved Leader & Nature Lover, for a 2 day intimate family wedding."
                        }
                      </p>
                    </div>
                  </div>
                  <div className="guest_item d-flex flex-column align-items-center justify-content-center w-100">
                    <div className="guest_thumb">
                      <img
                        decoding="async"
                        loading="lazy"
                        src="/assets/img/new/guest/ravishankarji.jpg"
                        className="img-fluid object-fit-cover h-100 w-100"
                        style={{ objectPosition: "72% 55%" }}
                        alt=""
                      />
                    </div>
                    <div className="guest_para text-center mt-3">
                      <p>
                        {
                          "Our founder Kapil Surana­ at Bangalore Art of Living centre for a Divine Meet & Greet with Gurudev Sri Sri Ravishankarji"
                        }
                      </p>
                    </div>
                  </div>
                  <div className="guest_item d-flex flex-column align-items-center justify-content-center w-100">
                    <div className="guest_thumb">
                      <img
                        decoding="async"
                        loading="lazy"
                        src="/assets/img/new/guest/1.jpg"
                        className="img-fluid object-fit-cover h-100 w-100"
                        style={{ objectPosition: "70% 55%" }}
                        alt=""
                      />
                    </div>
                    <div className="guest_para text-center mt-3">
                      <p>
                        Melodious Bollywood Singer Kavita Krishnamurthy with her friends celebrating the tunes
                        of mother nature at Touchwood Bliss
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="opbsec sec-padding position-relative">
            <div className="opbsec_content">
              <h4 className="opb_title text-center">OUR PEOPLE OUR BRAND</h4>
              <div className="sec_para pplbrand text-center">
                <p>
                  Once the wedding day/events came, we didn't have to worry about a thing and could spend time
                  with our guests/family and enjoyed our wedding.
                </p>
              </div>
            </div>
          </section>
          <section className="form_sec position-relative py-40">
            <img
              decoding="async"
              loading="lazy"
              src="/assets/img/dhabba_diff.svg"
              className="img-fluid dhabba-up-formsec"
              alt=""
            />{" "}
            <img
              decoding="async"
              loading="lazy"
              src="/assets/img/dhabba_mid.svg"
              className="img-fluid dhabba-mid-formsec"
              alt=""
            />
            <div className="container-fluid">
              <div className="row align-items-center mt-5">
                <div className="col-lg-4">
                  <h4 className="form_head">Plan your dream wedding now</h4>
                </div>
                <div className="col-lg-8">
                  <form action="" className="row mt-4 mb-5 pb-5 gy-4">
                    <div className="col-lg-6 col-6">
                      <input
                        type="text"
                        className="form-control inputcontrol p-2 p-sm-3 p-md-3"
                        placeholder="Bride first Name"
                      />
                    </div>
                    <div className="col-lg-6 col-6">
                      <input
                        type="text"
                        className="form-control inputcontrol p-2 p-sm-3 p-md-3"
                        placeholder="Bride Last Name"
                      />
                    </div>
                    <div className="col-lg-6 col-6">
                      <input
                        type="text"
                        className="form-control inputcontrol p-2 p-sm-3 p-md-3"
                        placeholder="Groom first Name"
                      />
                    </div>
                    <div className="col-lg-6 col-6">
                      <input
                        type="text"
                        className="form-control inputcontrol p-2 p-sm-3 p-md-3"
                        placeholder="Groom Last Name"
                      />
                    </div>
                    <div className="col-lg-12">
                      <input
                        type="text"
                        id="weddingDate"
                        name="weddingDate"
                        className="form-control inputcontrol p-2 p-sm-3 p-md-3"
                        placeholder="Select Wedding Date"
                      />
                    </div>
                    <div className="col-lg-6">
                      <input
                        type="tel"
                        className="form-control inputcontrol p-2 p-sm-3 p-md-3"
                        placeholder="Enter Contact No"
                      />
                    </div>
                    <div className="col-lg-6">
                      <input
                        type="email"
                        className="form-control inputcontrol p-2 p-sm-3 p-md-3"
                        placeholder="Enter Email"
                      />
                    </div>
                    <div className="col-lg-12">
                      <textarea
                        name=""
                        className="form-control inputcontrol p-2 p-sm-3 p-md-3"
                        rows="4"
                        placeholder="Description"
                      />
                    </div>
                    <div className="text-end">
                      <button className="sendform-btn">send</button>
                    </div>
                  </form>
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
