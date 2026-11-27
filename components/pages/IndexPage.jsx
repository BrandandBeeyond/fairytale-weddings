import HeaderIndex from "@/components/layout/HeaderIndex";
import FooterIndex from "@/components/layout/FooterIndex";

export default function IndexPage() {
  return (
    <>
      <div className="viewport">
        <main className="overflow-hidden">
          <HeaderIndex />{" "}
          <style>{`
    .transition-opacity {
        transition: opacity 1s ease-in-out;
    }

    .invisible {
        opacity: 0;
        pointer-events: none;
    }
    
    .mainbanner {
    position: relative;
}

.banner-content {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 2;
    width: 90%;
    max-width: 1200px;
    text-align: center;
}

.banner-content h1 {
    font-family: "Open Sans", sans-serif;
    font-size: 3.8rem;
    font-weight: 600;
    line-height: 1.1;
    color: #fff;
    text-shadow: 0 2px 7px rgba(0,0,0,0.35);
    margin: 0;
}

/* Dark overlay for better readability */
.mainbanner::before {
    content: "";
    position: absolute;
    inset: 0;
    background: rgba(0,0,0,0.25);
    z-index: 1;
}

.image-wrapper,
.image-wrapper img {
    position: relative;
    z-index: 0;
}

/* Tablet */
@media (max-width: 992px) {
    .banner-content {
        left: 6%;
        max-width: 500px;
    }

    .banner-content h1 {
        font-size: 2.8rem;
    }
}

/* Mobile */
@media (max-width: 768px) {
  .banner-content {
    left: 50%;
    right: 50%;
    max-width: 80%;
}

    .banner-content h1 {
        font-size: 1.8rem;
        line-height: 1.2;
        letter-spacing: 1px;
    }
}

/* Small Mobile */
@media (max-width: 480px) {
    .banner-content h1 {
        font-size: 1.4rem;
    }
}
`}</style>{" "}
          <section className="position-relative slider">
            <div
              id="slides"
              className="carousel slide carousel-fade"
              data-bs-ride="carousel"
              data-bs-pause="false"
            >
              <div className="carousel-inner">
                <div className="carousel-item active mainbanner position-relative">
                  <div className="banner-overlay" />
                  <div className="banner-content">
                    <h1>Best Destination Wedding Resort Near Mumbai</h1>
                  </div>
                  <div className="image-wrapper">
                    <picture>
                      <source srcSet="/assets/img/2.webp" type="image/webp" />
                      <source srcSet="/assets/img/2.webp" type="image/jpeg" />
                      <img
                        decoding="async"
                        src="/assets/img/2.webp"
                        className="w-100 h-100"
                        loading="eager"
                        fetchPriority="high"
                        alt="Haldibanner"
                      />
                    </picture>
                  </div>
                </div>
                <div className="carousel-item mainbanner position-relative">
                  <div className="banner-overlay" />
                  <div className="banner-content">
                    <h1>Best Destination Wedding Resort Near Mumbai</h1>
                  </div>
                  <div className="image-wrapper">
                    <picture>
                      <source srcSet="/assets/img/1.webp" type="image/webp" />
                      <source srcSet="/assets/img/1.webp" type="image/jpeg" />
                      <img
                        decoding="async"
                        src="/assets/img/1.webp"
                        className="w-100 h-100"
                        loading="eager"
                        alt="Haldibanner"
                      />
                    </picture>
                  </div>
                </div>
                <div className="carousel-item mainbanner position-relative">
                  <div className="banner-overlay" />
                  <div className="banner-content">
                    <h1>Best Destination Wedding Resort Near Mumbai</h1>
                  </div>
                  <div className="image-wrapper">
                    <picture>
                      <source srcSet="/assets/img/3.webp" type="image/webp" />
                      <source srcSet="/assets/img/3.webp" type="image/jpeg" />
                      <img
                        decoding="async"
                        src="/assets/img/3.webp"
                        className="w-100 h-100"
                        loading="eager"
                        alt="Haldibanner"
                      />
                    </picture>
                  </div>
                </div>
                <div className="carousel-item mainbanner position-relative">
                  <div className="banner-overlay" />
                  <div className="banner-content">
                    <h1>Best Destination Wedding Resort Near Mumbai</h1>
                  </div>
                  <div className="image-wrapper">
                    <picture>
                      <source srcSet="/assets/img/banners/anjsudmusic.jpg" type="image/jpeg" />
                      <img
                        decoding="async"
                        src="/assets/img/banners/anjsudmusic.jpg"
                        className="w-100 h-100"
                        loading="eager"
                        alt="Anjsud Music"
                      />
                    </picture>
                  </div>
                </div>
              </div>
              <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#slides"
                data-bs-slide="prev"
              >
                <span className="carousel-control-prev-icon" />
              </button>{" "}
              <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#slides"
                data-bs-slide="next"
              >
                <span className="carousel-control-next-icon" />
              </button>
            </div>
          </section>
          <section className="sec-padding position-relative mainaward mt-min-4">
            <img
              decoding="async"
              loading="lazy"
              src="/assets/img/fairytale_bg.svg"
              className="img-fluid dhabba-btm-pablo d-none d-sm-none d-md-block"
              alt=""
            />{" "}
            <img
              decoding="async"
              loading="lazy"
              src="/assets/img/leaf-left.svg"
              className="img-fluid leftleaf"
              data-aos-duration="1100"
              data-aos="flip-down"
              alt=""
            />{" "}
            <img
              decoding="async"
              loading="lazy"
              src="/assets/img/leaf-right.svg"
              className="img-fluid rightleaf"
              data-aos-duration="1100"
              data-aos="flip-down"
              alt=""
            />
            <div className="container-fluid text-center h-100">
              <div className="row  justify-content-center">
                <div className="col-lg-7">
                  <h2
                    className="text-head sec_title"
                    data-aos="fade-up"
                    data-aos-duration="1000"
                    data-aos-offset="100"
                  >
                    Honored for Crafting Blissful Experiences
                  </h2>
                </div>
              </div>
              <div className="row awardrow h-100 align-items-center">
                <div className="col-lg-4 col-4">
                  <div className="award_item  d-flex justify-content-center position-relative">
                    <img
                      decoding="async"
                      loading="lazy"
                      src="/assets/img/awards/restguru.png"
                      className="img-fluid restguru_award"
                      alt=""
                    />{" "}
                    <img
                      decoding="async"
                      loading="lazy"
                      src="/assets/img/award.png"
                      className="img-fluid rightaward"
                      alt=""
                    />
                  </div>
                </div>
                <div className="col-lg-4 col-4">
                  <div className="award_item award-item-mid d-flex justify-content-center position-relative">
                    <img
                      decoding="async"
                      loading="lazy"
                      src="/assets/img/awards/wedmewire.jpg"
                      className="img-fluid wedmewire_award"
                      alt=""
                    />{" "}
                    <img
                      decoding="async"
                      loading="lazy"
                      src="/assets/img/award.png"
                      className="img-fluid mainawardimg"
                      alt=""
                    />
                  </div>
                </div>
                <div className="col-lg-4 col-4">
                  <div className="award_item  d-flex justify-content-center position-relative">
                    <img
                      decoding="async"
                      loading="lazy"
                      src="/assets/img/awards/users_choice.jpg"
                      className="img-fluid wedmegood_award"
                      alt=""
                    />{" "}
                    <img
                      decoding="async"
                      loading="lazy"
                      src="/assets/img/award.png"
                      className="img-fluid rightaward"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="sec-padding position-relative planfairytale mt-min-4">
            <img
              decoding="async"
              loading="lazy"
              src="/assets/img/leaf-left.svg"
              className="img-fluid leftleaf"
              data-aos-duration="1100"
              data-aos="flip-down"
              alt=""
            />{" "}
            <img
              decoding="async"
              loading="lazy"
              src="/assets/img/leaf-right.svg"
              className="img-fluid rightleaf"
              data-aos-duration="1100"
              data-aos="flip-down"
              alt=""
            />{" "}
            <img
              decoding="async"
              loading="lazy"
              src="/assets/img/fairytale_bg.svg"
              className="img-fluid dhabba-up"
              alt=""
            />{" "}
            <img
              decoding="async"
              loading="lazy"
              src="/assets/img/fairytale_bg.svg"
              className="img-fluid dhabba-btm"
              alt=""
            />
            <div className="container-fluid">
              <div className="row justify-content-center">
                <div className="col-lg-6 text-center">
                  <h2
                    className="text-head sec_title"
                    data-aos="fade-up"
                    data-aos-duration="1000"
                    data-aos-offset="100"
                  >
                    Destination wedding Resort in Igatpuri
                  </h2>
                </div>
                <div className="col-lg-9 text-center">
                  <div className="sec_para my-2">
                    <p className="z-up" data-aos="fade-up" data-aos-duration="1000" data-aos-offset="100">
                      Are you planning a destination wedding near Mumbai or looking for the perfect wedding
                      resort in Igatpuri? Touchwood Bliss is a nature-inspired retreat nestled amidst the
                      scenic hills of Igatpuri — an ideal location for couples seeking a serene yet
                      sophisticated celebration. As one of the best wedding resorts near Mumbai, we offer a
                      complete wedding experience with in-house catering, themed décor, lawn dining setups,
                      and beautifully designed banquet halls. Our wedding resort in Igatpuri also features
                      luxury rooms and suites for families and guests, ensuring comfort and elegance
                      throughout your special day. Celebrate your dream wedding at Touchwood Bliss — where
                      nature meets luxury in every moment.
                    </p>
                  </div>
                  <div className="sec_para my-2">
                    <p className="z-up" data-aos="fade-up" data-aos-duration="1000" data-aos-offset="100">
                      At Touchwood Bliss, we turn your once-upon-a-time into a beautifully crafted celebration
                      filled with warmth, wonder, and timeless love.
                    </p>
                  </div>
                </div>
                <div className="col-lg-6">
                  <a
                    href="/contact#contactform"
                    className="btn formal-text"
                    data-aos="fade-up"
                    data-aos-duration="1000"
                    data-aos-offset="100"
                  >
                    Plan your fairytale wedding
                  </a>
                </div>
                <div className="col-lg-11 d-flex justify-content-center gap-5 flex-wrap mt-5">
                  <div
                    className="list-1 d-flex justify-content-center flex-column gap-3"
                    data-aos="zoom-in-up"
                    data-aos-duration="1000"
                    data-aos-offset="100"
                  >
                    <i className="bi bi-suit-heart-fill xbigheart counter" data-counter="150+" />{" "}
                    <span className="text-center anim-counters">
                      {"Crafted "}
                      <br />
                      {" wedding"}
                    </span>
                  </div>
                  <div
                    className="list-1 d-flex justify-content-center flex-column gap-3"
                    data-aos="zoom-in-up"
                    data-aos-duration="1000"
                    data-aos-offset="100"
                  >
                    <i className="bi bi-suit-heart-fill xbigheart counter" data-counter="25k" />{" "}
                    <span className="text-center anim-counters">
                      {"Delighted "}
                      <br />
                      {" guests"}
                    </span>
                  </div>
                  <div
                    className="list-1 d-flex justify-content-center flex-column gap-3"
                    data-aos="zoom-in-up"
                    data-aos-duration="1000"
                    data-aos-offset="100"
                  >
                    <i className="bi bi-suit-heart-fill xbigheart counter" data-counter="7" />{" "}
                    <span className="text-center anim-counters">
                      {"Unique "}
                      <br />
                      {" nature locations"}
                    </span>
                  </div>
                  <div
                    className="list-1 d-flex justify-content-center flex-column gap-3"
                    data-aos="zoom-in-up"
                    data-aos-duration="1000"
                    data-aos-offset="100"
                  >
                    <i className="bi bi-suit-heart-fill xbigheart counter" data-counter="100" />{" "}
                    <span className="text-center anim-counters">Strong team</span>
                  </div>
                  <div
                    className="list-1 d-flex justify-content-center flex-column gap-3"
                    data-aos="zoom-in-up"
                    data-aos-duration="1000"
                    data-aos-offset="100"
                  >
                    <i className="bi bi-suit-heart-fill xbigheart counter" data-counter="100" />{" "}
                    <span className="text-center anim-counters">Success Stories</span>
                  </div>
                  <div
                    className="list-1 d-flex justify-content-center flex-column gap-3"
                    data-aos="zoom-in-up"
                    data-aos-duration="1000"
                    data-aos-offset="100"
                  >
                    <i className="bi bi-suit-heart-fill xbigheart counter" data-counter="9" />{" "}
                    <span className="text-center anim-counters">Years of Legacy</span>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="offersec position-relative">
            <div className="container-fluid">
              <div className="row justify-content-center gap-5 text-center">
                <div className="position-relative">
                  <h4 className="text-head sec_title offerhead">What We Offer from the Heart</h4>
                  <img
                    decoding="async"
                    loading="lazy"
                    src="/assets/img/btmleaves.png"
                    className="img-fluid btmleaves"
                    alt=""
                  />
                </div>
                <div className="col-lg-9 mt-3" id="ourvows">
                  <div className="d-flex justify-content-center">
                    <div className="vowring position-relative">
                      <img
                        decoding="async"
                        src="/assets/img/vowcouple.svg"
                        className="img-fluid vowcouple"
                        alt=""
                        loading="lazy"
                      />{" "}
                      <img
                        decoding="async"
                        src="/assets/img/vowring.png"
                        className="img-fluid vowring"
                        alt=""
                        loading="lazy"
                      />
                      <div className="firstvow position-absolute">
                        <div className="vowheart d-flex flex-column text-center">
                          <i className="bi bi-suit-heart-fill heartvow" />{" "}
                          <span className="vowtext">Scenic venue</span>
                        </div>
                      </div>
                      <div className="secondvow position-absolute">
                        <div className="vowheart d-flex flex-column text-center">
                          <i className="bi bi-suit-heart-fill heartvow" />{" "}
                          <span className="vowtext">
                            {"Nutridelicious "}
                            <br />
                            {" Food"}
                          </span>
                        </div>
                      </div>
                      <div className="thirdvow position-absolute">
                        <div className="vowheart d-flex flex-column text-center">
                          <i className="bi bi-suit-heart-fill heartvow" />{" "}
                          <span className="vowtext">Nature Integrate Stay</span>
                        </div>
                      </div>
                      <div className="fourthvow position-absolute">
                        <div className="vowheart d-flex flex-column text-center">
                          <i className="bi bi-suit-heart-fill heartvow" />{" "}
                          <span className="vowtext">
                            {"Thoughtful wedding "}
                            <br />
                            {" essentials"}
                          </span>
                        </div>
                      </div>
                      <div className="fifthvow position-absolute">
                        <div className="vowheart d-flex flex-column text-center">
                          <i className="bi bi-suit-heart-fill heartvow" />{" "}
                          <span className="vowtext">Crafted decor</span>
                        </div>
                      </div>
                      <div className="sixthvow position-absolute">
                        <div className="vowheart d-flex flex-column text-center">
                          <i className="bi bi-suit-heart-fill heartvow" />{" "}
                          <span className="vowtext">
                            {"Creative "}
                            <br />
                            {" Communication"}
                          </span>
                        </div>
                      </div>
                      <div className="seventhvow position-absolute">
                        <div className="vowheart d-flex flex-column text-center">
                          <i className="bi bi-suit-heart-fill heartvow" />{" "}
                          <span className="vowtext">
                            {"Perfect Event "}
                            <br />
                            {" Management"}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="ourwork mt-15">
            <img
              decoding="async"
              loading="lazy"
              src="/assets/img/workdhabba.svg"
              className="img-fluid workcut"
              alt=""
            />
            <div className="ourworkoverlay" />
            <h4 className="text-head sec_title worktitle">Our Heartcrafted Moments</h4>
            <div id="carouselExample" className="carousel slide carousel-fade" data-bs-ride="carousel">
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img
                    decoding="async"
                    src="/assets/img/slider1.jpeg"
                    className="d-block w-100 img-fluid workslide1"
                    alt="..."
                    loading="lazy"
                  />
                </div>
                <div className="carousel-item">
                  <img
                    decoding="async"
                    src="/assets/img/slider2.jpeg"
                    className="d-block w-100 img-fluid workslide2"
                    alt="..."
                    loading="lazy"
                  />
                </div>
                <div className="carousel-item">
                  <img
                    decoding="async"
                    src="/assets/img/slider3.jpeg"
                    className="d-block w-100 img-fluid workslide2"
                    alt="..."
                    loading="lazy"
                  />
                </div>
                <div className="carousel-item">
                  <img
                    decoding="async"
                    src="/assets/img/slider4.jpeg"
                    className="d-block w-100 img-fluid workslide2"
                    alt="..."
                    loading="lazy"
                  />
                </div>
                <div className="carousel-item">
                  <img
                    decoding="async"
                    src="/assets/img/ourwork/work5.jpg"
                    className="d-block w-100 img-fluid workslide2"
                    alt="..."
                    loading="lazy"
                  />
                </div>
              </div>
              <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#carouselExample"
                data-bs-slide="next"
              >
                <i className="bi bi-chevron-right display-1 text-white circle pulse" />
              </button>
            </div>
          </section>
          <section className="testisec position-relative pt-5">
            <img
              decoding="async"
              loading="lazy"
              src="/assets/img/fairytale_bg.svg"
              className="img-fluid dhabba-up-testi"
              alt=""
            />{" "}
            <img
              decoding="async"
              loading="lazy"
              src="/assets/img/dhabba_mid.svg"
              className="img-fluid dhabba-mid-testi"
              alt=""
            />
            <div className="container-fluid">
              <div className="row justify-content-center gap-5 text-center">
                <div className="position-relative">
                  <h4 className="text-head sec_title offerhead">Blessings We Treasure</h4>
                  <img
                    decoding="async"
                    loading="lazy"
                    src="/assets/img/btmleaves.png"
                    className="img-fluid btmleaves"
                    alt=""
                  />
                </div>
                <div className="col-lg-11 my-15">
                  <div className="testimonial-box">
                    <div className="row">
                      <div className="testimonial-items testimonial-carousel owl-carousel owl-theme">
                        <div className="item-testi d-flex align-items-center">
                          <img
                            decoding="async"
                            loading="lazy"
                            src="/assets/img/flowers_well.svg"
                            className="img-fluid flowersuser"
                            alt=""
                          />
                          <div className="testi-thumb">
                            <div className="main_thumbnail overflow-hidden">
                              <img
                                decoding="async"
                                src="/assets/img/ourwork/work2.jpg"
                                className="img-fluid object-fit-cover h-100 w-100"
                                alt=""
                                loading="lazy"
                              />
                            </div>
                          </div>
                          <div className="testi-user d-flex flex-column align-items-center justify-content-center">
                            <h4 className="testi-user-name">{"Saurabh & Rutuja"}</h4>
                            <p>
                              {
                                '"Our wedding at Touchwood Bliss was nothing short of magical. The perfect management team ensured a stress-free celebration, making it the best wedding experience ever. Highly recommend this best wedding resort near Mumbai. Thank you, Touchwood Bliss!"'
                              }
                            </p>
                          </div>
                        </div>
                        <div className="item-testi d-flex align-items-center">
                          <img
                            decoding="async"
                            loading="lazy"
                            src="/assets/img/flowers_well.svg"
                            className="img-fluid flowersuser"
                            alt=""
                          />
                          <div className="testi-thumb">
                            <div className="main_thumbnail overflow-hidden">
                              <img
                                decoding="async"
                                src="/assets/img/new/reviews/omkar_riya.jpg"
                                className="img-fluid object-fit-cover h-100 w-100"
                                alt=""
                                loading="lazy"
                              />
                            </div>
                          </div>
                          <div className="testi-user d-flex flex-column align-items-center justify-content-center">
                            <h4 className="testi-user-name">{"Omkar & riya"}</h4>
                            <p>
                              {
                                '"From stunning decor to seamless planning, Touchwood Bliss is the best venue for a destination wedding. Their perfect management team made our big day stress-free and magical. Thank you, Touchwood Bliss!"'
                              }
                            </p>
                          </div>
                        </div>
                        <div className="item-testi d-flex align-items-center">
                          <img
                            decoding="async"
                            loading="lazy"
                            src="/assets/img/flowers_well.svg"
                            className="img-fluid flowersuser"
                            alt=""
                          />
                          <div className="testi-thumb">
                            <div className="main_thumbnail overflow-hidden">
                              <img
                                decoding="async"
                                src="/assets/img/new/reviews/darshana_sachin.webp"
                                className="img-fluid object-fit-cover h-100 w-100"
                                alt=""
                                loading="lazy"
                              />
                            </div>
                          </div>
                          <div className="testi-user d-flex flex-column align-items-center justify-content-center">
                            <h4 className="testi-user-name">{"Darshana & Sachin"}</h4>
                            <p>
                              {
                                '"Touchwood Bliss has perfect management, making it the best for weddings and receptions. We had the best wedding experience ever and are very happy to have married at Touchwood Bliss. Thank you, Touchwood Bliss!"'
                              }
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="sec-padding my-5">
            <div className="container-fluid">
              <div className="row justify-content-center text-center">
                <div className="position-relative">
                  <h4 className="text-head sec_title offerhead">Proudly Featured On</h4>
                  <img
                    decoding="async"
                    loading="lazy"
                    src="/assets/img/btmleaves.png"
                    className="img-fluid btmleaves"
                    alt=""
                  />
                </div>
                <div className="col-lg-12 col-12 mt-15">
                  <div className="row align-items-center">
                    <div className="col-lg-3 col-6">
                      <div className="d-flex justify-content-center flex-column align-items-center gap-3">
                        <img
                          decoding="async"
                          loading="lazy"
                          src="/assets/img/wedding_wire.png"
                          className="img-fluid wedding_wire"
                          alt=""
                        />{" "}
                        <span>Ratings : 5/5</span> <span className="fw-semibold">300+ Reviews</span>
                      </div>
                    </div>
                    <div className="col-lg-3 col-6 mt-3">
                      <div className="d-flex justify-content-center flex-column align-items-center gap-3">
                        <img
                          decoding="async"
                          loading="lazy"
                          src="/assets/img/wedme_good.png"
                          className="img-fluid wedmegood"
                          alt=""
                        />{" "}
                        <span className="">Ratings : 5/5</span>{" "}
                        <span className="fw-semibold">600+ Reviews</span>
                      </div>
                    </div>
                    <div className="col-lg-3 col-6 mt-3">
                      <div className="d-flex justify-content-center flex-column align-items-center gap-3">
                        <img
                          decoding="async"
                          loading="lazy"
                          src="/assets/img/weddingsutra.jpg"
                          className="img-fluid wedmegood2"
                          alt=""
                        />{" "}
                        <span className="">Ratings : 5/5</span>
                      </div>
                    </div>
                    <div className="col-lg-3 col-6 mt-3">
                      <div className="d-flex justify-content-center flex-column align-items-center gap-3">
                        <img
                          decoding="async"
                          loading="lazy"
                          src="/assets/img/google.png"
                          className="img-fluid wedmegood"
                          alt=""
                        />{" "}
                        <span className="">Ratings : 4.8/5</span>{" "}
                        <span className="fw-semibold">13000+ Reviews</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>{" "}
          <style>{`
    .gallery-item { border-radius: 20px; overflow: hidden; background: #d9d9d9; box-shadow: 0 4px 8px 0 #00000040; }
    .gallery-item img { width: 100%; height: 320px; object-fit: cover; transition: transform .5s ease; }
    .gallery-item:hover img { transform: scale(1.06); }
    .gallery-item.is-video::after { content: "\\25B6"; position: absolute; inset: 0; display: flex; align-items: center; justify-content: center; color: #fff; font-size: 48px; background: rgba(0,0,0,.25); }
    #galleryModal .modal-content { background: transparent; border: 0; }
    #galleryModal .modal-body { text-align: center; padding: 0; }
    #galleryModal img, #galleryModal video { max-width: 100%; max-height: 85vh; border-radius: 20px; }
    @media (max-width: 750px) { .gallery-item { border-radius: 12px; } .gallery-item img { height: 160px; } }
`}</style>{" "}
          <section className="gallery-sec sec-padding position-relative py-5" id="gallery">
            <div className="container-fluid">
              <div className="row justify-content-center text-center">
                <div className="position-relative">
                  <h4 className="text-head sec_title offerhead">Gallery</h4>
                  <img
                    decoding="async"
                    loading="lazy"
                    src="/assets/img/btmleaves.png"
                    className="img-fluid btmleaves"
                    alt=""
                  />
                </div>
                <div className="col-lg-11 mt-15">
                  <div className="row g-3" id="galleryGrid">
                    <div className="col-lg-3 col-md-4 col-6">
                      <a
                        href="#"
                        className="gallery-item d-block position-relative"
                        data-type="image"
                        data-src="/assets/img/slider1.jpeg"
                      >
                        <img
                          decoding="async"
                          loading="lazy"
                          src="/assets/img/slider1.jpeg"
                          className="img-fluid"
                          alt="Wedding moment"
                        />
                      </a>
                    </div>
                    <div className="col-lg-3 col-md-4 col-6">
                      <a
                        href="#"
                        className="gallery-item d-block position-relative"
                        data-type="image"
                        data-src="/assets/img/slider2.jpeg"
                      >
                        <img
                          decoding="async"
                          loading="lazy"
                          src="/assets/img/slider2.jpeg"
                          className="img-fluid"
                          alt="Wedding moment"
                        />
                      </a>
                    </div>
                    <div className="col-lg-3 col-md-4 col-6">
                      <a
                        href="#"
                        className="gallery-item d-block position-relative"
                        data-type="image"
                        data-src="/assets/img/slider3.jpeg"
                      >
                        <img
                          decoding="async"
                          loading="lazy"
                          src="/assets/img/slider3.jpeg"
                          className="img-fluid"
                          alt="Wedding moment"
                        />
                      </a>
                    </div>
                    <div className="col-lg-3 col-md-4 col-6">
                      <a
                        href="#"
                        className="gallery-item d-block position-relative"
                        data-type="image"
                        data-src="/assets/img/slider4.jpeg"
                      >
                        <img
                          decoding="async"
                          loading="lazy"
                          src="/assets/img/slider4.jpeg"
                          className="img-fluid"
                          alt="Wedding moment"
                        />
                      </a>
                    </div>
                    <div className="col-lg-3 col-md-4 col-6">
                      <a
                        href="#"
                        className="gallery-item d-block position-relative"
                        data-type="image"
                        data-src="/assets/img/ourwork/work5.jpg"
                      >
                        <img
                          decoding="async"
                          loading="lazy"
                          src="/assets/img/ourwork/work5.jpg"
                          className="img-fluid"
                          alt="Wedding moment"
                        />
                      </a>
                    </div>
                    <div className="col-lg-3 col-md-4 col-6">
                      <a
                        href="#"
                        className="gallery-item d-block position-relative"
                        data-type="image"
                        data-src="/assets/img/ourwork/work2.jpg"
                      >
                        <img
                          decoding="async"
                          loading="lazy"
                          src="/assets/img/ourwork/work2.jpg"
                          className="img-fluid"
                          alt="Wedding moment"
                        />
                      </a>
                    </div>
                    <div className="col-lg-3 col-md-4 col-6">
                      <a
                        href="#"
                        className="gallery-item d-block position-relative"
                        data-type="image"
                        data-src="/assets/img/1.webp"
                      >
                        <img
                          decoding="async"
                          loading="lazy"
                          src="/assets/img/1.webp"
                          className="img-fluid"
                          alt="Haldi celebration"
                        />
                      </a>
                    </div>
                    <div className="col-lg-3 col-md-4 col-6">
                      <a
                        href="#"
                        className="gallery-item d-block position-relative"
                        data-type="image"
                        data-src="/assets/img/3.webp"
                      >
                        <img
                          decoding="async"
                          loading="lazy"
                          src="/assets/img/3.webp"
                          className="img-fluid"
                          alt="Resort venue"
                        />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="modal fade" id="galleryModal" tabIndex="-1" aria-hidden="true">
              <div className="modal-dialog modal-dialog-centered modal-xl">
                <div className="modal-content">
                  <div className="modal-body" id="galleryModalBody" />
                </div>
              </div>
            </div>
          </section>
          <section className="sec-padding my-5 position-relative h-100">
            <img
              decoding="async"
              loading="lazy"
              src="/assets/img/fairytale_bg.svg"
              className="img-fluid dhabba-up-enquiry"
              alt=""
            />{" "}
            <img
              decoding="async"
              loading="lazy"
              src="/assets/img/fairytale_bg.svg"
              className="img-fluid dhabba-down-enquiry"
              alt=""
            />
            <div className="container-fluid">
              <div className="row justify-content-center">
                <div className="col-lg-10 d-flex justify-content-center align-items-center">
                  <div className="wedding_good">
                    <img
                      decoding="async"
                      loading="lazy"
                      src="/assets/img/wedding_good_inner.svg"
                      className="img-fluid wedding_good_inner"
                      alt=""
                    />{" "}
                    <di className="wedding_good_inner_content">
                      <h5 className="wedding_good_head">A wedding that’s personal to you, rest!</h5>
                      <div className="mt-2 mt-sm-3 mt-md-5">
                        <a href="/contact#contactform" className="btn enquirebtn">
                          Enquire Now
                        </a>
                      </div>
                    </di>
                  </div>
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
          <FooterIndex />
        </main>
      </div>
    </>
  );
}
