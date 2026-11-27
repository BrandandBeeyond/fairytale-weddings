import HeaderAbout from "@/components/layout/HeaderAbout";
import FooterAbout from "@/components/layout/FooterAbout";

export default function ContactPage() {
  return (
    <>
      <div className="viewport">
        <main className="overflow-hidden">
          <HeaderAbout />
          <style>{`
   .gmap iframe{
    width: 100%;
   }
`}</style>{" "}
          <section className="position-relative gallerybanner">
            <div className="d-flex justify-content-center align-items-center h-100">
              <h2 className="text-center text-black maintitle top-down">contact us</h2>
            </div>
          </section>
          <section className="sec-padding position-relative bg-white contactdown mt-min-4">
            <div className="container-fluid py-5 my-4">
              <div className="row justify-content-center pb-5 mb-5">
                <div className="col-lg-6 text-center">
                  <h2 className="text-head sec_title">Book Your Fairytale Wedding Now!</h2>
                </div>
              </div>
            </div>
          </section>
          <section className="contactsec">
            <div className="container-fluid">
              <div className="row justify-content-center rowcard">
                <div className="col-lg-10">
                  <div className="row gy-4 gy-sm-3 gy-md-0">
                    <div className="col-lg-4 d-flex justify-content-center">
                      <div className="card contactcard overflow-hidden border-0">
                        <div className="card-header bg-transparent border-0 p-4 d-flex flex-column justify-content-center align-items-center">
                          <i className="bi bi-telephone display-5 text-secondary" />
                          <ul className="mt-2 mt-sm-2 mt-md-5 list-unstyled">
                            <li>
                              <a href="tel:917030060622" className="small nav-link">
                                +91 7030060622
                              </a>
                            </li>
                            <li>
                              <a href="tel:917030060722" className="small nav-link">
                                +91 7030060722
                              </a>
                            </li>
                          </ul>
                        </div>
                        <div className="card-body d-flex justify-content-center align-items-end">
                          <span className="text-center contactText">Make a call</span>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 d-flex justify-content-center">
                      <div className="card contactcard overflow-hidden border-0">
                        <div className="card-header bg-transparent border-0 p-4 d-flex flex-column justify-content-center align-items-center">
                          <i className="bi bi-envelope-open display-5 text-secondary" />
                          <ul className="mt-2 mt-sm-2 mt-md-5 list-unstyled">
                            <li>
                              <a href="mailto:fairytale@touchwoodbliss.com" className="small nav-link">
                                fairytale@touchwoodbliss.com
                              </a>
                            </li>
                          </ul>
                        </div>
                        <div className="card-body d-flex justify-content-center align-items-end">
                          <span className="text-center contactText">Send a mail</span>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 d-flex justify-content-center">
                      <div className="card contactcard overflow-hidden border-0">
                        <div className="card-header bg-transparent border-0 p-4 d-flex flex-column justify-content-center align-items-center">
                          <i className="bi bi-geo-alt display-5 text-secondary" />
                          <ul className="mt-2 mt-sm-2 mt-md-5 list-unstyled text-center">
                            <li>
                              <a href="tel:" className="small nav-link">
                                Touchwood Bliss, Bhavali Dam, Road, Bhagatwadi, Igatpuri
                              </a>
                            </li>
                          </ul>
                        </div>
                        <div className="card-body d-flex justify-content-center align-items-end">
                          <span className="text-center contactText">Address</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row align-items-center mt-b pb-5" id="contactform">
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
          <section className="gmap overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3757.221976848561!2d73.5830172748226!3d19.66053298166816!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bdd847511196047%3A0x4f1bcb471ac6267b!2sTouchwood%20Bliss%20Nature%20Retreat!5e0!3m2!1sen!2sin!4v1745825075709!5m2!1sen!2sin"
              width={800}
              height={600}
              style={{ border: "0" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
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
