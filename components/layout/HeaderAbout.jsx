// Used by: about, blogs, classicweddings, contact, craftedweddings, destination-weddings, gallery, heartcraftedweddings, ourmagic
export default function HeaderAbout() {
  return (
    <>
      <header className="navbar navbar-expand-lg navbar-dark pt-3" id="header">
        <div className="container-fluid">
          <div className="d-flex align-items-center w-100">
            <div className="navbar-brand">
              <a href="/">
                <img
                  decoding="async"
                  loading="lazy"
                  src="/assets/img/fairytale_black.png"
                  className="img-fluid logo"
                  alt="Website Logo"
                />
              </a>
            </div>
            <div className="ms-auto">
              <div className="hamburger-init">
                <span className="bar top-bar" /> <span className="bar middle-bar" />{" "}
                <span className="bar bottom-bar" />
              </div>
              <div className="menu-wrapper">
                <div className="container-fluid">
                  <div className="row">
                    <div className="col-lg-7">
                      <div className="row">
                        <div className="col-lg-6">
                          <div className="main-menu position-relative">
                            <img
                              decoding="async"
                              loading="lazy"
                              src="/assets/img/header_dhabba.svg"
                              className="img-fluid dhabbaheader"
                              alt=""
                            />
                            <ul className="list-unstyled d-flex flex-column justify-content-center justify-content-md-start align-items-center align-items-md-start text-center text-sm-center text-md-start">
                              <li className="menu-item py-2 py-md-3">
                                <a href="/" className="">
                                  <img
                                    decoding="async"
                                    loading="lazy"
                                    src="/assets/img/fairytale_black.png"
                                    className="img-fluid fairytaleheader"
                                    alt=""
                                  />
                                </a>
                              </li>
                              <li className="menu-item py-2 py-md-3">
                                <a href="/" className="menu-link">
                                  Home
                                </a>
                              </li>
                              <li className="menu-item py-2 py-md-3">
                                <a href="/about" className="menu-link">
                                  About us
                                </a>
                              </li>
                              <li className="menu-item py-2 py-md-3">
                                <a href="/destination-weddings" className="menu-link">
                                  Destination wedding
                                </a>
                              </li>
                              <li className="menu-item py-2 py-md-3">
                                <a href="/ourmagic" className="menu-link">
                                  Our magic
                                </a>
                                <ul className="sub-mean ps-3 mt-4 list-unstyled">
                                  <li className="py-1 py-md-2">
                                    <a
                                      href="/classicweddings"
                                      className="submenu-link d-flex align-items-center"
                                    >
                                      <i className="bi bi-chevron-compact-right text-black me-3 fs-4" />
                                      Classic Wedding
                                    </a>
                                  </li>
                                  <li className="py-1 py-md-2">
                                    <a
                                      href="/craftedweddings"
                                      className="submenu-link d-flex align-items-center"
                                    >
                                      <i className="bi bi-chevron-compact-right text-black me-3 fs-4" />
                                      Crafted Wedding
                                    </a>
                                  </li>
                                  <li className="py-1 py-md-2">
                                    <a
                                      href="/heartcraftedweddings"
                                      className="submenu-link d-flex align-items-center"
                                    >
                                      <i className="bi bi-chevron-compact-right text-black me-3 fs-4" />
                                      Heart Crafted Wedding
                                    </a>
                                  </li>
                                </ul>
                              </li>
                              <li className="menu-item py-2 py-md-3">
                                <a href="/gallery" className="menu-link">
                                  Gallery
                                </a>
                              </li>
                              <li className="menu-item py-2 py-md-3">
                                <a href="/contact" className="menu-link">
                                  contact us
                                </a>
                              </li>
                              <li className="menu-item py-2 py-md-3">
                                <a href="/blogs" className="menu-link">
                                  blogs
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="col-lg-6 d-flex flex-column align-items-center align-items-md-start justify-content-center justify-content-md-end">
                          <ul className="d-flex flex-row align-items-center gap-4 list-unstyled mt-3 mt-sm-2 mt-md-0">
                            <li className="social-item">
                              <a
                                href="https://www.facebook.com/profile.php?id=61575598029378"
                                className="social-links"
                              >
                                <i className="fab fa-facebook-f" />
                              </a>
                            </li>
                            <li className="social-item">
                              <a
                                href="https://www.instagram.com/fairytaleweddingsbybliss?utm_source=qr&igsh=MTEyYXRiNDd0bTVwcA=="
                                className="social-links"
                              >
                                <i className="bi bi-instagram" />
                              </a>
                            </li>
                            <li className="social-item">
                              <a href="http://www.linkedin.com/in/touchwoodbliss" className="social-links">
                                <i className="bi bi-linkedin" />
                              </a>
                            </li>
                            <li className="social-item">
                              <a
                                href="https://api.whatsapp.com/send?phone=917030060622&text=Hi, I would like to discuss further on the services offered by your Resort. Kindly Connect - Thanks"
                                className="social-links"
                              >
                                <i className="fab fa-whatsapp" />
                              </a>
                            </li>
                          </ul>
                          <h6 className="fs-5 mt-2">Contact</h6>
                          <ul className="list-unstyled mt-1">
                            <li className="fs-2 py-1">
                              <a href="tel:917030060622" className="nav-link foot-links">
                                +91 7030060622
                              </a>
                            </li>
                            <li className="fs-2 py-1">
                              <a href="tel:917030060722" className="nav-link foot-links">
                                +91 7030060722
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-5"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
