import HeaderAbout from "@/components/layout/HeaderAbout";
import FooterAbout from "@/components/layout/FooterAbout";

export default function ClassicweddingsPage() {
  return (
    <>
      <div className="viewport">
        <main className="overflow-hidden">
          <HeaderAbout />
          <section className="position-relative classic_wedding_banner">
            <div className="d-flex justify-content-center align-items-center h-100">
              <h2 className="text-center text-black maintitle top-down-more">Classic weddings</h2>
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
                <h2
                  className="text-head sec_title text-center"
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  data-aos-offset="100"
                >
                  Making Your Wedding Dreams Come True
                </h2>
                <div className="col-lg-9 text-center">
                  <div
                    className="sec_para my-2 pt-4"
                    data-aos="fade-up"
                    data-aos-duration="1000"
                    data-aos-offset="100"
                  >
                    <p className="z-up">
                      A classic wedding isn’t just about rituals—it’s about the warmth in your parents’ eyes
                      during the pheras, the gentle smile you exchange when you finally sit side by side, and
                      the shared silence that says “this is forever.”
                    </p>
                  </div>
                  <div
                    className="sec_para my-2"
                    data-aos="fade-up"
                    data-aos-duration="1000"
                    data-aos-offset="110"
                  >
                    <p className="z-up">
                      At Touchwood Bliss, we honour the beauty of age-old traditions and wrap them in gentle,
                      personal touches. From the sacred sound of mantras to the floral fragrance in the air,
                      every detail is thoughtfully crafted to feel familiar, soulful, and unforgettable. This
                      is where simplicity shines, where every emotion matters, and where your story is
                      celebrated just the way you imagined.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="guest_swagat">
            <div className="row align-items-center">
              <div className="col-lg-6 col-6 d-flex align-items-center flex-column position-relative">
                <img
                  decoding="async"
                  loading="lazy"
                  src="/assets/img/dhabba_mid.svg"
                  className="img-fluid dhabba dhabba-left"
                  alt=""
                />
                <h3
                  className="classic_heads"
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  data-aos-offset="100"
                >
                  Guest Swagat
                </h3>
                <div className="row justify-content-center">
                  <div className="col-lg-8 col-10">
                    <div
                      className="sec_para text-center"
                      data-aos="fade-up"
                      data-aos-duration="1000"
                      data-aos-offset="105"
                    >
                      <p>
                        With folded hands, warm smiles, refreshing welcome drinks, and the rhythm of
                        traditional music, we make sure each guest feels seen, loved, and a part of your
                        special journey.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-6">
                <div className="swagat-1 position-relative">
                  <img
                    decoding="async"
                    loading="lazy"
                    src="/assets/img/classic/swagat-1.jpeg"
                    className="img-fluid"
                    alt=""
                  />{" "}
                  <img
                    decoding="async"
                    loading="lazy"
                    src="/assets/img/classic/swgat-2.jpeg"
                    className="img-fluid classy_guest_child"
                    data-aos="flip-up"
                    data-aos-duration="1000"
                    data-aos-offset="100"
                    alt=""
                  />
                </div>
              </div>
            </div>
            <div className="container-fluid pt-120">
              <div className="row justify-content-center">
                <div className="col-lg-9">
                  <div className="row align-items-center">
                    <div className="col-lg-6 col-6">
                      <img
                        decoding="async"
                        loading="lazy"
                        src="/assets/img/classic/haldi_decor1.jpeg"
                        className="img-fluid haldidecor5"
                        alt=""
                      />
                    </div>
                    <div className="col-lg-6 col-6 d-flex align-items-center flex-column position-relative">
                      <img
                        decoding="async"
                        loading="lazy"
                        src="/assets/img/dhabba_mid.svg"
                        className="img-fluid dhabba dhabba-right"
                        alt=""
                      />
                      <h3
                        className="classic_heads"
                        data-aos="fade-up"
                        data-aos-duration="1000"
                        data-aos-offset="100"
                      >
                        haldi
                      </h3>
                      <div className="row justify-content-center">
                        <div className="col-lg-8">
                          <div
                            className="sec_para text-center"
                            data-aos="fade-up"
                            data-aos-duration="1000"
                            data-aos-offset="105"
                          >
                            <p>
                              The laughter. The playful turmeric smudges. The cousins chasing each other. The
                              tears of joy in your mother’s eyes. Haldi is not just a ritual—it’s a burst of
                              yellow sunshine, blessings and pure emotion.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row justify-content-center mt-5">
                  <div className="col-lg-10">
                    <div className="row align-items-center">
                      <div className="col-lg-5 d-flex justify-content-center">
                        <div className="haldi-2 position-relative">
                          <img
                            decoding="async"
                            loading="lazy"
                            src="/assets/img/classic/divtya_budhlya.jpeg"
                            className="img-fluid"
                            data-aos="flip-up"
                            data-aos-duration="1000"
                            data-aos-offset="100"
                            alt=""
                          />
                        </div>
                      </div>
                      <div className="col-lg-7">
                        <div
                          className="sec_para text-center"
                          data-aos="fade-up"
                          data-aos-duration="1000"
                          data-aos-offset="100"
                        >
                          <p>
                            We set the stage for a celebration that feels just like home… vibrant, chaotic,
                            and full of heart.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="haldi_mandap">
              <div className="booke">
                <img
                  decoding="async"
                  loading="lazy"
                  src="/assets/img/booke.svg"
                  className="img-fluid bookeimg"
                  alt=""
                />
              </div>
            </div>
            <div className="row mt-5">
              <div className="col-lg-5 col-5 d-flex align-items-center flex-column position-relative">
                <img
                  decoding="async"
                  loading="lazy"
                  src="/assets/img/dhabba_mid.svg"
                  className="img-fluid dhabba dhabba-left-sangeet"
                  alt=""
                />
                <h3
                  className="classic_heads pt-120 pt-half"
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  data-aos-offset="100"
                >
                  sangeet
                </h3>
                <div className="row justify-content-center">
                  <div className="col-lg-8">
                    <div
                      className="sec_para text-center"
                      data-aos="fade-up"
                      data-aos-duration="1000"
                      data-aos-offset="110"
                    >
                      <p>
                        Under the sparkle of lights and sound of dhols, your sangeet becomes more than a
                        performance—it becomes a memory.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-7 col-7">
                <div className="sangeet_setup position-relative">
                  <img
                    decoding="async"
                    loading="lazy"
                    src="/assets/img/classic/sangeet3.jpeg"
                    className="img-fluid classy_sangeet_child"
                    data-aos="flip-up"
                    data-aos-duration="1000"
                    data-aos-offset="100"
                    alt=""
                  />{" "}
                  <img
                    decoding="async"
                    loading="lazy"
                    src="/assets/img/classic/sangeet1.jpeg"
                    className="img-fluid"
                    alt=""
                  />{" "}
                  <img
                    decoding="async"
                    loading="lazy"
                    src="/assets/img/ring.svg"
                    className="img-fluid ring"
                    alt=""
                  />
                </div>
                <div className="col-lg-12 d-flex justify-content-center">
                  <div className="sangeet_main">
                    <img
                      decoding="async"
                      loading="lazy"
                      src="/assets/img/classic/sangeet2.jpeg"
                      className="img-fluid"
                      alt=""
                    />
                  </div>
                </div>
              </div>
              <div className="col-lg-12">
                <div className="row justify-content-center pt-120 pt-half">
                  <div className="col-lg-9 col-10 text-center">
                    <div
                      className="sec_para"
                      data-aos="fade-up"
                      data-aos-duration="1000"
                      data-aos-offset="100"
                    >
                      <p>
                        At Touchwood Bliss, your stage is not just for dancing—it’s for celebrating bonds that
                        make your story whole.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row mt-5">
              <div className="col-lg-6 col-6">
                <div className="grand_entry">
                  <img
                    decoding="async"
                    loading="lazy"
                    src="/assets/img/classic/grand-entry1.jpeg"
                    className="img-fluid"
                    alt=""
                  />{" "}
                  <img
                    decoding="async"
                    loading="lazy"
                    src="/assets/img/classic/entry2.jpeg"
                    className="img-fluid classy_entry_child"
                    data-aos="flip-up"
                    data-aos-duration="1000"
                    data-aos-offset="100"
                    alt=""
                  />
                </div>
              </div>
              <div className="col-lg-6 col-6 d-flex justify-content-center flex-column align-items-center position-relative">
                <img
                  decoding="async"
                  loading="lazy"
                  src="/assets/img/dhabba_mid.svg"
                  className="img-fluid dhabba dhabba-right-entry d-none d-sm-none d-md-block"
                  alt=""
                />
                <h3
                  className="classic_heads pt-0 pt-sm-3 pt-md-5"
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  data-aos-offset="100"
                >
                  Grand Entries
                </h3>
                <div className="row justify-content-center">
                  <div className="col-lg-8 col-12">
                    <div
                      className="sec_para text-center px-5"
                      data-aos="fade-up"
                      data-aos-duration="1000"
                      data-aos-offset="100"
                    >
                      <p>
                        That walk towards the mandap. That first glimpse of your partner. That burst of music
                        and cheer as your name echoes through the crowd. Grand entries at Touchwood Bliss
                        aren’t just about glamour
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row pt-160">
              <div className="col-lg-6 col-6 d-flex justify-content-center align-items-center flex-column pt-0 pt-sm-3 pt-md-5 position-relative">
                <img
                  decoding="async"
                  loading="lazy"
                  src="/assets/img/dhabba_mid.svg"
                  className="img-fluid dhabba dhabba-left-fairytale"
                  alt=""
                />
                <h3
                  className="classic_heads text-center"
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  data-aos-offset="100"
                >
                  {"Fairytale "}
                  <br />
                  {" weddings"}
                </h3>
                <div className="row justify-content-center">
                  <div className="col-lg-8">
                    <div
                      className="sec_para text-center"
                      data-aos="fade-up"
                      data-aos-duration="1000"
                      data-aos-offset="100"
                    >
                      <p>
                        Every fairytale has a beginning—and yours starts here. With floral mandaps, pastel
                        skies, and soulful music, we bring alive the wedding you’ve imagined since childhood.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-6">
                <div className="wedding position-relative">
                  <img
                    decoding="async"
                    loading="lazy"
                    src="/assets/img/classic/fwedding1.jpeg"
                    className="img-fluid fwed"
                    alt=""
                  />{" "}
                  <img
                    decoding="async"
                    loading="lazy"
                    src="/assets/img/classic/fwedding2.jpeg"
                    className="img-fluid fwed_child"
                    alt=""
                  />{" "}
                  <img
                    decoding="async"
                    loading="lazy"
                    src="/assets/img/varmala.png"
                    className="img-fluid varmala"
                    alt=""
                  />{" "}
                  <img
                    decoding="async"
                    loading="lazy"
                    src="/assets/img/flowers_well.svg"
                    className="img-fluid flowewell_wedd"
                    alt=""
                  />
                </div>
              </div>
              <div className="col-lg-12">
                <div className="row justify-content-center pt-160">
                  <div className="col-lg-11 col-9 text-center">
                    <div
                      className="sec_para"
                      data-aos="fade-up"
                      data-aos-duration="1000"
                      data-aos-offset="100"
                    >
                      <p>
                        At Touchwood Bliss, we blend nature, nostalgia, and nuances to make your love story
                        feel like it’s straight out of a dream… only, it’s real.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row pt-5">
              <div className="col-lg-7 col-7">
                <div className="reception position-relative">
                  <img
                    decoding="async"
                    loading="lazy"
                    src="/assets/img/dhabba_mid.svg"
                    className="img-fluid dhabba dhabba-left-reception"
                    alt=""
                  />{" "}
                  <img
                    decoding="async"
                    loading="lazy"
                    src="/assets/img/classic/reception1.jpeg"
                    className="img-fluid"
                    alt=""
                  />{" "}
                  <img
                    decoding="async"
                    loading="lazy"
                    src="/assets/img/classic/reception2.jpeg"
                    className="img-fluid classy_reception_child"
                    data-aos="flip-up"
                    data-aos-duration="1000"
                    data-aos-offset="100"
                    alt=""
                  />
                </div>
              </div>
              <div className="col-lg-5 col-5 position-relative">
                <img
                  decoding="async"
                  loading="lazy"
                  src="/assets/img/dhabba_mid.svg"
                  className="img-fluid dhabba dhabba-right-reception"
                  alt=""
                />
                <h3 className="classic_heads text-center">Reception</h3>
                <div className="row justify-content-center">
                  <div className="col-lg-8">
                    <div
                      className="sec_para text-center"
                      data-aos="fade-up"
                      data-aos-duration="1000"
                      data-aos-offset="100"
                    >
                      <p>
                        The reception is where families blend, stories unfold, and laughter echoes under the
                        stars. With fairy lights overhead and emotions running deep, it’s not just a
                        gathering—it’s the beautiful afterglow of your new beginning.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="container-fluid pt-160 pb-160 position-relative">
              <img
                decoding="async"
                loading="lazy"
                src="/assets/img/dhabba_mid.svg"
                className="img-fluid d-none d-sm-none d-md-block dhabba dhabba-form-left"
                alt=""
              />{" "}
              <img
                decoding="async"
                loading="lazy"
                src="/assets/img/dhabba_mid.svg"
                className="img-fluid d-none d-sm-none d-md-block dhabba dhabba-form-right"
                alt=""
              />
              <div className="row justify-content-center mt-5 py-5">
                <h3
                  className="classic_heads text-center"
                  data-aos="flip-up"
                  data-aos-duration="1000"
                  data-aos-offset="100"
                >
                  {"Plan "}
                  <br />
                  {" your dream wedding now"}
                </h3>
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
