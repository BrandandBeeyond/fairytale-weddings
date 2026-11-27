import HeaderAbout from "@/components/layout/HeaderAbout";
import FooterAbout from "@/components/layout/FooterAbout";

export default function GalleryPage() {
  return (
    <>
      <div className="viewport">
        <main className="overflow-hidden">
          <HeaderAbout />
          <section className="position-relative gallerybanner">
            <div className="d-flex justify-content-center align-items-center h-100">
              <h2 className="text-center text-black maintitle top-down">Gallery</h2>
            </div>
          </section>
          <section className="sec-padding position-relative abtigt mt-min-4">
            <div className="container-fluid">
              <div className="row justify-content-center">
                <div className="col-lg-6 text-center">
                  <h2
                    className="text-head sec_title"
                    data-aos="fade-up"
                    data-aos-duration="1000"
                    data-aos-offset="100"
                  >
                    Storybook Moments
                  </h2>
                </div>
                <div className="col-lg-9 text-center">
                  <div
                    className="sec_para my-2 pt-4"
                    data-aos="fade-up"
                    data-aos-duration="1000"
                    data-aos-offset="110"
                  >
                    <p className="z-up">
                      Step into a world where every picture tells a story, every setting captures emotion, and
                      every frame holds a memory.
                    </p>
                  </div>
                  <div
                    className="sec_para my-2"
                    data-aos="fade-up"
                    data-aos-duration="1000"
                    data-aos-offset="120"
                  >
                    <p className="z-up">
                      At Touchwood Bliss, each wedding is a canvas of love, curated with care and decorated
                      with meaning. Explore the magic we've created for countless couples , from dreamy setups
                      to emotional rituals - all thoughtfully designed to reflect their journey, their joy,
                      and their forever.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="gallery-sec" id="gallery">
            <div className="container-fluid">
              <div className="row justify-content-center pb-5">
                <div className="col-lg-11">
                  <div className="row mb-5 pb-5">
                    <div className="col-lg-4">
                      <div className="sticky-sidebar d-flex justify-content-center flex-row flex-sm-row flex-md-column flex-wrap gap-3 gap-sm-3 gap-md-5 mb-5">
                        <button className="gallery_tab tab active">Baraat Swagat</button>{" "}
                        <button className="gallery_tab tab">Haldi</button>{" "}
                        <button className="gallery_tab tab">Sangeet</button>{" "}
                        <button className="gallery_tab tab">Wedding</button>{" "}
                        <button className="gallery_tab tab">Reception</button>
                      </div>
                    </div>
                    <div className="col-lg-8 col-12">
                      <div className="tab-content">
                        <div className="row">
                          <div className="col-lg-6 col-6 pe-0 pe-sm-1 pe-md-1">
                            <div className="box-left" id="box1">
                              <img
                                decoding="async"
                                loading="lazy"
                                src="/assets/img/gallery/barat_swagat/baarat1.webp"
                                className="img-fluid object-fit-cover h-100 w-100"
                                alt=""
                              />
                            </div>
                            <div className="box-left" id="box2">
                              <img
                                decoding="async"
                                loading="lazy"
                                src="/assets/img/gallery/barat_swagat/baarat3.webp"
                                className="img-fluid object-fit-cover h-100 w-100"
                                alt=""
                              />
                            </div>
                          </div>
                          <div className="col-lg-6 col-6">
                            <div className="box-right" id="box1">
                              <img
                                decoding="async"
                                loading="lazy"
                                src="/assets/img/gallery/barat_swagat/baarat6.webp"
                                className="img-fluid object-fit-cover h-100 w-100"
                                alt=""
                              />
                            </div>
                            <div className="box-right" id="box2">
                              <img
                                decoding="async"
                                loading="lazy"
                                src="/assets/img/gallery/barat_swagat/baarat4.webp"
                                className="img-fluid object-fit-cover h-100 w-100"
                                alt=""
                              />
                            </div>
                            <div className="box-right" id="box3">
                              <img
                                decoding="async"
                                loading="lazy"
                                src="/assets/img/gallery/barat_swagat/baarat5.webp"
                                className="img-fluid object-fit-cover h-100 w-100"
                                alt=""
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="tab-content hidden">
                        <div className="row">
                          <div className="col-lg-6 col-6 pe-0 pe-sm-1 pe-md-1">
                            <div className="box-left" id="box1">
                              <img
                                decoding="async"
                                loading="lazy"
                                src="/assets/img/gallery/haldi/haldi1.webp"
                                className="img-fluid object-fit-cover h-100 w-100"
                                alt=""
                              />
                            </div>
                            <div className="box-left" id="box2">
                              <img
                                decoding="async"
                                loading="lazy"
                                src="/assets/img/gallery/haldi/haldibride.webp"
                                className="img-fluid object-fit-cover h-100 w-100"
                                alt=""
                              />
                            </div>
                            <div className="box-left" id="box3">
                              <img
                                decoding="async"
                                loading="lazy"
                                src="/assets/img/gallery/haldi/haldi7.webp"
                                className="img-fluid object-fit-cover h-100 w-100"
                                alt=""
                              />
                            </div>
                            <div className="box-left" id="box4">
                              <img
                                decoding="async"
                                loading="lazy"
                                src="/assets/img/gallery/haldi/haldi4.webp"
                                className="img-fluid object-fit-cover h-100 w-100 h-100"
                                alt=""
                              />
                            </div>
                          </div>
                          <div className="col-lg-6 col-6">
                            <div className="box-right" id="box1">
                              <img
                                decoding="async"
                                loading="lazy"
                                src="/assets/img/gallery/haldi/haldi9.webp"
                                className="img-fluid object-fit-cover h-100 w-100"
                                alt=""
                              />
                            </div>
                            <div className="box-right" id="box2">
                              <img
                                decoding="async"
                                loading="lazy"
                                src="/assets/img/gallery/haldi/haldi6.webp"
                                className="img-fluid object-fit-cover h-100 w-100"
                                alt=""
                              />
                            </div>
                            <div className="box-right" id="box3">
                              <img
                                decoding="async"
                                loading="lazy"
                                src="/assets/img/gallery/haldi/haldi3.webp"
                                className="img-fluid object-fit-cover h-100 w-100"
                                alt=""
                              />
                            </div>
                            <div className="box-right" id="box4">
                              <img
                                decoding="async"
                                loading="lazy"
                                src="/assets/img/gallery/haldi/haldi8.webp"
                                className="img-fluid object-fit-cover h-100 w-100"
                                alt=""
                              />
                            </div>
                            <div className="box-right" id="box5">
                              <img
                                decoding="async"
                                loading="lazy"
                                src="/assets/img/gallery/haldi/haldi10.webp"
                                className="img-fluid object-fit-cover h-100 w-100"
                                alt=""
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="tab-content hidden">
                        <div className="row sangeet">
                          <div className="col-lg-6 col-6 pe-0 pe-sm-1 pe-md-1">
                            <div className="box-left" id="box1">
                              <img
                                decoding="async"
                                loading="lazy"
                                src="/assets/img/gallery/sangeet/sangeet1.webp"
                                className="img-fluid object-fit-cover h-100 w-100"
                                alt=""
                              />
                            </div>
                            <div className="box-left" id="box2">
                              <img
                                decoding="async"
                                loading="lazy"
                                src="/assets/img/gallery/sangeet/sangeet2.webp"
                                className="img-fluid object-fit-cover h-100 w-100"
                                alt=""
                              />
                            </div>
                          </div>
                          <div className="col-lg-6 col-6">
                            <div className="box-right" id="box1">
                              <img
                                decoding="async"
                                loading="lazy"
                                src="/assets/img/gallery/sangeet/sangeet3.webp"
                                className="img-fluid object-fit-cover h-100 w-100"
                                alt=""
                              />
                            </div>
                            <div className="box-right" id="box2">
                              <img
                                decoding="async"
                                loading="lazy"
                                src="/assets/img/gallery/sangeet/sangeet4.webp"
                                className="img-fluid object-fit-cover h-100 w-100"
                                alt=""
                              />
                            </div>
                            <div className="box-right" id="box3">
                              <img
                                decoding="async"
                                loading="lazy"
                                src="/assets/img/gallery/sangeet/sangeet5.webp"
                                className="img-fluid object-fit-cover h-100 w-100"
                                alt=""
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="tab-content hidden">
                        <div className="row wedding">
                          <div className="col-lg-6 col-6 pe-0 pe-sm-1 pe-md-1">
                            <div className="box-left" id="box1">
                              <img
                                decoding="async"
                                loading="lazy"
                                src="/assets/img/gallery/wedding/wedding1.webp"
                                className="img-fluid object-fit-cover h-100 w-100"
                                alt=""
                              />
                            </div>
                            <div className="box-left" id="box2">
                              <img
                                decoding="async"
                                loading="lazy"
                                src="/assets/img/gallery/wedding/wedding3.webp"
                                className="img-fluid object-fit-cover h-100 w-100"
                                alt=""
                              />
                            </div>
                            <div className="box-left" id="box3">
                              <img
                                decoding="async"
                                loading="lazy"
                                src="/assets/img/gallery/wedding/wedding7.webp"
                                className="img-fluid object-fit-cover h-100 w-100"
                                alt=""
                              />
                            </div>
                          </div>
                          <div className="col-lg-6 col-6">
                            <div className="box-right" id="box1">
                              <img
                                decoding="async"
                                loading="lazy"
                                src="/assets/img/gallery/wedding/wedding2.webp"
                                className="img-fluid object-fit-cover h-100 w-100"
                                alt=""
                              />
                            </div>
                            <div className="box-right" id="box2">
                              <img
                                decoding="async"
                                loading="lazy"
                                src="/assets/img/gallery/wedding/wedding4.webp"
                                className="img-fluid object-fit-cover h-100 w-100"
                                alt=""
                              />
                            </div>
                            <div className="box-right" id="box3">
                              <img
                                decoding="async"
                                loading="lazy"
                                src="/assets/img/gallery/wedding/wedding5.webp"
                                className="img-fluid object-fit-cover h-100 w-100"
                                alt=""
                              />
                            </div>
                            <div className="box-right" id="box4">
                              <img
                                decoding="async"
                                loading="lazy"
                                src="/assets/img/gallery/wedding/wedding9.webp"
                                className="img-fluid object-fit-cover h-100 w-100"
                                alt=""
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="tab-content hidden">
                        <div className="row">
                          <div className="col-lg-6 col-6 pe-0 pe-sm-1 pe-md-1">
                            <div className="box-left" id="box1">
                              <img
                                decoding="async"
                                loading="lazy"
                                src="/assets/img/gallery/reception/rec1.webp"
                                className="img-fluid object-fit-cover h-100 w-100"
                                alt=""
                              />
                            </div>
                            <div className="box-left" id="box2">
                              <img
                                decoding="async"
                                loading="lazy"
                                src="/assets/img/gallery/reception/rec2.webp"
                                className="img-fluid object-fit-cover h-100 w-100"
                                alt=""
                              />
                            </div>
                            <div className="box-left" id="box3">
                              <img
                                decoding="async"
                                loading="lazy"
                                src="/assets/img/gallery/reception/rec3.webp"
                                className="img-fluid object-fit-cover h-100 w-100"
                                alt=""
                              />
                            </div>
                          </div>
                          <div className="col-lg-6 col-6">
                            <div className="box-right" id="box1">
                              <img
                                decoding="async"
                                loading="lazy"
                                src="/assets/img/gallery/reception/rec4.webp"
                                className="img-fluid object-fit-cover h-100 w-100"
                                alt=""
                              />
                            </div>
                            <div className="box-right" id="box2">
                              <img
                                decoding="async"
                                loading="lazy"
                                src="/assets/img/gallery/reception/rec5.webp"
                                className="img-fluid object-fit-cover h-100 w-100"
                                alt=""
                              />
                            </div>
                            <div className="box-right" id="box3">
                              <img
                                decoding="async"
                                loading="lazy"
                                src="/assets/img/gallery/reception/rec6.webp"
                                className="img-fluid object-fit-cover h-100 w-100"
                                alt=""
                              />
                            </div>
                            <div className="box-right" id="box4">
                              <img
                                decoding="async"
                                loading="lazy"
                                src="/assets/img/gallery/reception/rec8.webp"
                                className="img-fluid object-fit-cover h-100 w-100"
                                alt=""
                              />
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
        </main>
      </div>
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
    </>
  );
}
