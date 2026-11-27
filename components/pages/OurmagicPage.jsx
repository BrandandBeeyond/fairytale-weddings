import HeaderAbout from "@/components/layout/HeaderAbout";
import FooterAbout from "@/components/layout/FooterAbout";

export default function OurmagicPage() {
  return (
    <>
      <div className="viewport">
        <main className="overflow-hidden">
          <HeaderAbout />
          <section className="position-relative magicbanner">
            <div className="d-flex justify-content-center align-items-center h-100">
              <h2 className="text-center text-black maintitle magic top-down-about">Our Magic</h2>
            </div>
          </section>
          <section className="sec-padding position-relative abtigt mt-min-4">
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
                <div className="col-lg-6 text-center">
                  <h2
                    className="text-head sec_title"
                    data-aos="fade-up"
                    data-aos-duration="1000"
                    data-aos-offset="100"
                  >
                    A Beginning of Forever
                  </h2>
                </div>
                <div className="col-lg-9 text-center">
                  <div
                    className="sec_para my-2 pt-4"
                    data-aos="fade-up"
                    data-aos-duration="1000"
                    data-aos-offset="100"
                  >
                    <p className="z-up">
                      Because your love story deserves the most beautiful beginning. Let us help you create a
                      wedding experience that mirrors your essence, traditions, and dreams. From intimate
                      moments to grand celebrations, we’re here to make every detail unforgettable.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="wedding_decor position-relative d-none d-sm-none d-md-block">
            <div className="container-fluid h-100">
              <div className="row justify-content-center align-items-center h-100">
                <div className="col-lg-12">
                  <div className="row">
                    <div className="col-lg-4 mainweddings">
                      <div className="cl-wedding position-relative">
                        <h4 className="cl-heading">
                          {"Classic "}
                          <br />
                          {" wedding"}
                        </h4>
                        <div className="cl-line" />
                        <div className="cl-para">
                          <p>
                            Rooted in traditions and filled with grace, these weddings celebrate timeless .
                          </p>
                        </div>
                        <button className="btn detailbtn">View Details</button>
                        <div className="wedding-card classy">
                          <div className="wedding-thumb">
                            <img
                              decoding="async"
                              src="/assets/img/weddings/classical.jpg"
                              className="img-fluid object-fit-cover h-100 w-100"
                              alt=""
                              loading="lazy"
                            />
                            <div className="wedding-thumb-well">
                              <img
                                decoding="async"
                                loading="lazy"
                                src="/assets/img/flowers_well.svg"
                                className="img-fluid"
                                alt=""
                              />
                            </div>
                            <div className="wedding-thumb-well-up">
                              <img
                                decoding="async"
                                loading="lazy"
                                src="/assets/img/flowers_well.svg"
                                className="img-fluid"
                                alt=""
                              />
                            </div>
                          </div>
                          <div className="row justify-content-center">
                            <div className="col-lg-8"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 mainweddings">
                      <div className="cl-wedding position-relative">
                        <h4 className="cl-heading">
                          {"Heart crafted "}
                          <br />
                          {" wedding"}
                        </h4>
                        <div className="cl-line" />
                        <div className="cl-para">
                          <p>
                            Personal, soulful, and deeply meaningful — every element reflects your unique
                            journey of love.
                          </p>
                        </div>
                        <button className="btn detailbtn">View Details</button>
                        <div className="wedding-card crafty">
                          <div className="wedding-thumb">
                            <img
                              decoding="async"
                              src="/assets/img/weddings/crafted.jpg"
                              className="img-fluid object-fit-cover h-100 w-100"
                              alt=""
                              loading="lazy"
                            />
                            <div className="wedding-thumb-well">
                              <img
                                decoding="async"
                                loading="lazy"
                                src="/assets/img/flowers_well.svg"
                                className="img-fluid"
                                alt=""
                              />
                            </div>
                            <div className="wedding-thumb-well-up">
                              <img
                                decoding="async"
                                loading="lazy"
                                src="/assets/img/flowers_well.svg"
                                className="img-fluid"
                                alt=""
                              />
                            </div>
                          </div>
                          <div className="row justify-content-center">
                            <div className="col-lg-8"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 mainweddings">
                      <div className="cl-wedding position-relative">
                        <h4 className="cl-heading">
                          {"Crafted "}
                          <br />
                          {" wedding"}
                        </h4>
                        <div className="cl-line" />
                        <div className="cl-para">
                          <p>
                            Creative, vibrant, and full of personality — a joyful celebration styled your way.
                          </p>
                        </div>
                        <button className="btn detailbtn">View Details</button>
                        <div className="wedding-card heartcrafty">
                          <div className="wedding-thumb">
                            <img
                              decoding="async"
                              src="/assets/img/weddings/heartcrafted.png"
                              className="img-fluid object-fit-cover h-100 w-100"
                              alt=""
                              loading="lazy"
                            />
                            <div className="wedding-thumb-well">
                              <img
                                decoding="async"
                                loading="lazy"
                                src="/assets/img/flowers_well.svg"
                                className="img-fluid"
                                alt=""
                              />
                            </div>
                            <div className="wedding-thumb-well-up">
                              <img
                                decoding="async"
                                loading="lazy"
                                src="/assets/img/flowers_well.svg"
                                className="img-fluid"
                                alt=""
                              />
                            </div>
                          </div>
                          <div className="row justify-content-center">
                            <div className="col-lg-8"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <div className="d-block d-sm-block d-md-none" style={{ backgroundColor: "#FFF4F4" }}>
            <section className="wedding-cat-classy">
              <div className="row justify-content-center abs-contentrow">
                <div className="col-9 text-center">
                  <h4 className="cl-heading d-block d-sm-block d-md-none">Classic wedding</h4>
                  <div className="sec_para pt-1 mt-2">
                    <p>
                      Rooted in traditions and filled with grace, these weddings celebrate timeless rituals
                      and heartfelt moments.
                    </p>
                  </div>
                  <button className="btn detailbtn">View Details</button>
                </div>
              </div>
            </section>
            <section className="wedding-cat mt-150">
              <div className="row justify-content-center abs-contentrow">
                <div className="col-9 text-center">
                  <h4 className="cl-heading d-block d-sm-block d-md-none">crafted wedding</h4>
                  <div className="sec_para pt-1 mt-2">
                    <p>Creative, vibrant, and full of personality — a joyful celebration styled your way.</p>
                  </div>
                </div>
              </div>
            </section>
            <section className="wedding-cat-heart mt-150">
              <div className="row justify-content-center abs-contentrow">
                <div className="col-9 text-center">
                  <h4 className="cl-heading d-block d-sm-block d-md-none">heart crafted wedding</h4>
                  <div className="sec_para pt-1 mt-2">
                    <p>
                      Personal, soulful, and deeply meaningful — every element reflects your unique journey of
                      love.
                    </p>
                  </div>
                  <ul className="secul mt-3">
                    <li className="py-1">For generations, weddings at Taj Hotels.</li>
                    <li className="py-1">For generations, weddings at Taj Hotels.</li>
                    <li className="py-1">For generations, weddings at Taj Hotels.</li>
                    <li className="py-1">For generations, weddings at Taj Hotels.</li>
                  </ul>
                </div>
              </div>
            </section>
          </div>
          <section className="sec-wedding-tranditions position-relative pt-5">
            <div className="dhabba-left-secwed">
              <img
                decoding="async"
                loading="lazy"
                src="/assets/img/dhabba_diff.svg"
                className="img-fluid"
                alt=""
              />
            </div>
            <div className="dhabba-right-secwed">
              <img
                decoding="async"
                loading="lazy"
                src="/assets/img/dhabba_diff.svg"
                className="img-fluid"
                alt=""
              />
            </div>
            <div className="container-fluid">
              <div className="row justify-content-center">
                <div className="col-lg-7 text-center">
                  <div
                    className="sec_para d-none d-sm-none d-md-block"
                    data-aos="fade-up"
                    data-aos-duration="1000"
                    data-aos-offset="100"
                  >
                    <p>
                      Every love story deserves a setting that feels just right. At Touchwood Bliss, we turn
                      your vision into moments that stay with you forever — crafted with care, filled with
                      emotion, and wrapped in joy.
                    </p>
                  </div>
                  <div className="d-none d-sm-none d-md-block">
                    <button
                      className="btn planwedding"
                      data-aos="fade-up"
                      data-aos-duration="1000"
                      data-aos-offset="110"
                    >
                      Plan Your wedding
                    </button>
                  </div>
                </div>
              </div>
              <div className="wedding-traditions text-center">
                <h1
                  className="text-black maintitle"
                  data-aos="flip-up"
                  data-aos-duration="1000"
                  data-aos-offset="100"
                >
                  Wedding traditions
                </h1>
                <div className="row mt-5">
                  <div className="col-lg-12">
                    <div className="row align-items-center  py-5 position-relative">
                      <div className="dhabba-left-wedtr">
                        <img
                          decoding="async"
                          loading="lazy"
                          src="/assets/img/dhabba_diff.svg"
                          className="img-fluid"
                          alt=""
                        />
                      </div>
                      <div className="col-lg-6 order-3 order-md-1">
                        <div className="position-relative pt-3 pt-sm-2 pt-md-0">
                          <h4
                            className="text-head sec_title sphead"
                            data-aos="fade-up"
                            data-aos-duration="1000"
                            data-aos-offset="100"
                          >
                            North Indian
                          </h4>
                          <img
                            decoding="async"
                            loading="lazy"
                            src="/assets/img/btmleaves.png"
                            className="img-fluid btmleaves"
                            alt=""
                          />
                        </div>
                        <div
                          className="row justify-content-center"
                          data-aos="fade-up"
                          data-aos-duration="1000"
                          data-aos-offset="100"
                        >
                          <div className="col-lg-8">
                            <div className="sec_para pt-2 mt-4">
                              <span>A grand affair of rituals, music, and colors.</span>
                            </div>
                            <div className="sec_para pt-3">
                              <p>
                                From the vibrant Mehendi to the soulful Phere, North Indian weddings are rich
                                in emotion and celebration. We blend royal elegance with homely hospitality to
                                bring your heritage to life in the most magical way.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6 d-flex justify-content-end pe-0 pe-sm-2 pe-md-2  order-1 order-md-3">
                        <div className="wedding-type position-relative">
                          <img
                            decoding="async"
                            src="/assets/img/weddings/northindian.jpg"
                            className="img-fluid object-fit-cover h-100 w-100"
                            alt=""
                            loading="lazy"
                          />{" "}
                          <img
                            decoding="async"
                            loading="lazy"
                            src="/assets/img/flowers_well.svg"
                            className="img-fluid flower_well"
                            alt=""
                          />
                        </div>
                      </div>
                    </div>
                    <div className="row flex-row-reverse align-items-center position-relative py-5">
                      <div className="dhabba-right-wedtr">
                        <img
                          decoding="async"
                          loading="lazy"
                          src="/assets/img/dhabba_diff.svg"
                          className="img-fluid"
                          alt=""
                        />
                      </div>
                      <div className="col-lg-6 order-3 order-md-1">
                        <div className="position-relative pt-3 pt-sm-2 pt-md-0">
                          <h4
                            className="text-head sec_title sphead"
                            data-aos="fade-up"
                            data-aos-duration="1000"
                            data-aos-offset="100"
                          >
                            Maharastrian
                          </h4>
                          <img
                            decoding="async"
                            loading="lazy"
                            src="/assets/img/btmleaves.png"
                            className="img-fluid btmleaves"
                            alt=""
                          />
                        </div>
                        <div
                          className="row justify-content-center"
                          data-aos="fade-up"
                          data-aos-duration="1000"
                          data-aos-offset="110"
                        >
                          <div className="col-lg-8">
                            <div className="sec_para pt-2 mt-4">
                              <span>Simple, sacred, and deeply meaningful.</span>
                            </div>
                            <div className="sec_para pt-3">
                              <p>
                                From the Antarpat to Sankalp, every ritual in a Maharashtrian wedding is
                                filled with love and devotion. We preserve the authenticity of these age-old
                                traditions while adding our signature touch of grace and charm.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6 order-1 order-md-3 ps-0 ps-sm-2 ps-md-2">
                        <div className="wedding-type position-relative">
                          <img
                            decoding="async"
                            src="/assets/img/weddings/mahawedding.jpg"
                            className="img-fluid object-fit-cover h-100 w-100"
                            alt=""
                            loading="lazy"
                          />{" "}
                          <img
                            decoding="async"
                            loading="lazy"
                            src="/assets/img/flowers_well.svg"
                            className="img-fluid flower_well_left tr-minus-scale"
                            alt=""
                          />
                        </div>
                      </div>
                    </div>
                    <div className="row position-relative align-items-center py-5">
                      <div className="dhabba-left-wedtr">
                        <img
                          decoding="async"
                          loading="lazy"
                          src="/assets/img/dhabba_diff.svg"
                          className="img-fluid"
                          alt=""
                        />
                      </div>
                      <div className="col-lg-6 order-3 order-md-1">
                        <div className="position-relative">
                          <h4
                            className="text-head sec_title sphead"
                            data-aos="fade-up"
                            data-aos-duration="1000"
                            data-aos-offset="100"
                          >
                            Bengali Wedding
                          </h4>
                          <img
                            decoding="async"
                            loading="lazy"
                            src="/assets/img/btmleaves.png"
                            className="img-fluid btmleaves"
                            alt=""
                          />
                        </div>
                        <div
                          className="row justify-content-center"
                          data-aos="fade-up"
                          data-aos-duration="1000"
                          data-aos-offset="110"
                        >
                          <div className="col-lg-8">
                            <div className="sec_para pt-2 mt-4">
                              <span>Elegance in every ritual, grace in every gesture.</span>
                            </div>
                            <div className="sec_para pt-3">
                              <p>
                                Rooted in tradition and rich in symbolism, Bengali weddings reflect joy,
                                cultural pride, and emotional depth. From the Shubho Drishti to the Sindoor
                                Daan, we ensure every moment is captured with authenticity and heart.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6 order-1 order-md-3 d-flex justify-content-end pe-0 pe-sm-2 pe-md-2">
                        <div className="wedding-type position-relative">
                          <img
                            decoding="async"
                            src="/assets/img/weddings/bengali.jpg"
                            className="img-fluid object-fit-cover h-100 w-100"
                            alt=""
                            loading="lazy"
                          />{" "}
                          <img
                            decoding="async"
                            loading="lazy"
                            src="/assets/img/flowers_well.svg"
                            className="img-fluid flower_well"
                            alt=""
                          />
                        </div>
                      </div>
                    </div>
                    <div className="row position-relative flex-row-reverse align-items-center py-5">
                      <div className="dhabba-right-wedtr">
                        <img
                          decoding="async"
                          loading="lazy"
                          src="/assets/img/dhabba_diff.svg"
                          className="img-fluid"
                          alt=""
                        />
                      </div>
                      <div className="col-lg-6 order-3 order-md-1">
                        <div className="position-relative">
                          <h4
                            className="text-head sec_title sphead"
                            data-aos="fade-up"
                            data-aos-duration="1000"
                            data-aos-offset="100"
                          >
                            Winter wedding
                          </h4>
                          <img
                            decoding="async"
                            loading="lazy"
                            src="/assets/img/btmleaves.png"
                            className="img-fluid btmleaves"
                            alt=""
                          />
                        </div>
                        <div
                          className="row justify-content-center"
                          data-aos="fade-up"
                          data-aos-duration="1000"
                          data-aos-offset="110"
                        >
                          <div className="col-lg-8">
                            <div className="sec_para pt-2 mt-4">
                              <span>Warm hearts in the winter breeze.</span>
                            </div>
                            <div className="sec_para pt-3">
                              <p>
                                There’s something magical about saying “I do” as the chilled atmosphere kisses
                                the earth and your love warms the atmosphere. With beautiful décor, cozy
                                celebrations, and enchanting surroundings, winter weddings at Touchwood Bliss
                                are a poetic beginning to forever.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6 order-1 order-md-3 ps-0 ps-sm-2 ps-md-2">
                        <div className="wedding-type position-relative">
                          <img
                            decoding="async"
                            src="/assets/img/weddings/winterwedding.jpg"
                            className="img-fluid object-fit-cover h-100 w-100"
                            alt=""
                            loading="lazy"
                          />{" "}
                          <img
                            decoding="async"
                            loading="lazy"
                            src="/assets/img/flowers_well.svg"
                            className="img-fluid flower_well_left tr-minus-scale"
                            alt=""
                          />
                        </div>
                      </div>
                    </div>
                    <div className="row position-relative align-items-center py-5">
                      <div className="dhabba-left-wedtr">
                        <img
                          decoding="async"
                          loading="lazy"
                          src="/assets/img/dhabba_diff.svg"
                          className="img-fluid"
                          alt=""
                        />
                      </div>
                      <div className="col-lg-6 order-3 order-md-1">
                        <div className="position-relative">
                          <h4
                            className="text-head sec_title sphead"
                            data-aos="fade-up"
                            data-aos-duration="1000"
                            data-aos-offset="100"
                          >
                            Summer wedding
                          </h4>
                          <img
                            decoding="async"
                            loading="lazy"
                            src="/assets/img/btmleaves.png"
                            className="img-fluid btmleaves"
                            alt=""
                          />
                        </div>
                        <div
                          className="row justify-content-center"
                          data-aos="fade-up"
                          data-aos-duration="1000"
                          data-aos-offset="110"
                        >
                          <div className="col-lg-8">
                            <div className="sec_para pt-2 mt-4">
                              <span>Sun-kissed vows and golden moments.</span>
                            </div>
                            <div className="sec_para pt-3">
                              <p>
                                Let nature bloom as your love story unfolds in sunlit greenery and warm
                                breezes. Summer weddings at Touchwood Bliss offer vibrant décor, fresh floral
                                themes, and open-air romance that feels like a dream in daylight.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6 order-1 order-md-3 d-flex justify-content-end pe-0 pe-sm-2 pe-md-2">
                        <div className="wedding-type position-relative">
                          <img
                            decoding="async"
                            src="/assets/img/weddings/summerwedding.jpg"
                            className="img-fluid object-fit-cover h-100 w-100"
                            alt=""
                            loading="lazy"
                          />{" "}
                          <img
                            decoding="async"
                            loading="lazy"
                            src="/assets/img/flowers_well.svg"
                            className="img-fluid flower_well"
                            alt=""
                          />
                        </div>
                      </div>
                    </div>
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
          <FooterAbout />
        </main>
      </div>
    </>
  );
}
