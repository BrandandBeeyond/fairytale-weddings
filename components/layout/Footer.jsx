// Used by: 2026-hindu-wedding-dates-with-shubh-muhurat, best-destination-wedding-resorts-near-mumbai, best-fairytale-destination-wedding-resort-near-mumbai, best-mountain-wedding-resort-near-mumbai, best-wedding-destinations-near-mumbai, best-wedding-resorts-near-mumbai, best-wedding-venue-in-igatpuri, destination-wedding-resort-in-igatpuri-mountian-view, destination-wedding-resorts-near-mumbai, destination-wedding-venue-near-mumbai, dos-and-donts-of-planning-a-destination-wedding, fairytale-destination-wedding-igatpuri-touchwood-bliss, fairytale-weddings-by-the-mountains, igatpuri-perfect-for-destination-wedding, low-budget-wedding-resort-in-igatpuri, top-reasons-touchwood-bliss-perfect-pure-veg-wedding-venue, where-dreams-meet-the-mountains, where-forever-begins-magical-mountain-wedding-near-mumbai
export default function Footer() {
  return (
    <>
      <style>{`
    .footermain {
        background-color: #FFE4E4;
        padding: 50px 0;
        z-index: 1;
    }

 .footermain::before {
    content: "";
    position: absolute;
    background: linear-gradient(180deg, rgba(255, 228, 228, 0) 0%, #FFE4E4 100%);
    height: 70px;
    width: 100%;
    top: -45px;
    z-index: -1;
    left: 0;
}

    .whatsapp {
        position: fixed;
        bottom: 110px;
        right: 20px;
        border-radius: 50%;
        z-index: 9;
    }

    .footlogo {
        height: 161px;
        width: auto;
    }

    .footer-head {
        font-family: "Inter", serif;
        font-weight: 600;
        font-size: 20px;
        line-height: 150%;
        letter-spacing: -1.1%;
        color: #656565;
        text-transform: capitalize;
    }

    .foottop {
        position: relative;
        top: -150px;
    }

    .foot-links {
        font-weight: 500;
        font-size: 15px;
        line-height: 150%;
        letter-spacing: -1.1%;
        color: #656565;
        font-family: "Inter", serif;
        text-decoration: none;
        position: relative;
        z-index: 22;
        text-transform: capitalize;
    }

    @media(max-width:700px) {
        .footlogo {
            height: 124px;
            width: auto;
        }

        .footer-head {
            font-size: 12px;
            line-height: 100%;
            text-transform: capitalize;
        }

        .foot-links {
            font-weight: 500;
            font-size: 10px;
            line-height: 14px;
            letter-spacing: -1.1%;
            color: #656565;
            font-family: "Inter", serif;
            text-decoration: none;
            position: relative;
            z-index: 22;
        }

    }
`}</style>
      <footer className="footermain position-relative">
        <div className="container-fluid">
          <div className="row ">
            <div className="col-lg-4">
              <div className="d-flex flex-column flex-sm-column flex-md-row align-items-center">
                <img loading="lazy" src="/assets/img/footer-logo.png" className="img-fluid footlogo" alt="" />
                <ul className="d-flex flex-row align-items-center gap-4 list-unstyled ms-0 ms-sm-0 ms-md-5 mt-3 mt-sm-2 mt-md-0">
                  <li className="social-item">
                    <a href="https://www.facebook.com/profile.php?id=61575598029378" className="social-links">
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
                      href="https://api.whatsapp.com/send?phone=917030060902&text=Hi, I would like to discuss further on the services offered by your Resort. Kindly Connect - Thanks"
                      className="social-links"
                    >
                      <i className="fab fa-whatsapp" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 text-center">
              <h6 className="footer-head">wedding packages</h6>
              <ul className="list-unstyled mt-2">
                <li className="py-1">
                  <a href="/classicweddings" className="foot-links">
                    Classic
                  </a>
                </li>
                <li className="py-1">
                  <a href="/craftedweddings" className="foot-links">
                    Crafted
                  </a>
                </li>
                <li className="py-1">
                  <a href="/heartcraftedweddings" className="foot-links">
                    Heart Crafted
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-lg-2 text-center">
              <h6 className="footer-head">Quick Links</h6>
              <ul className="list-unstyled mt-2">
                <li className="py-1">
                  <a href="/" className="foot-links">
                    Home
                  </a>
                </li>
                <li className="py-1">
                  <a href="/about" className="foot-links">
                    about us
                  </a>
                </li>
                <li className="py-1">
                  <a href="/ourmagic" className="foot-links">
                    our magic
                  </a>
                </li>
                <li className="py-1">
                  <a href="/gallery" className="foot-links">
                    gallery
                  </a>
                </li>
                <li className="py-1">
                  <a href="/blogs" className="foot-links">
                    blogs
                  </a>
                </li>
                <li className="py-1">
                  <a href="/contact" className="foot-links">
                    contact us
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-lg-3 text-center">
              <h6 className="footer-head">contact</h6>
              <ul className="list-unstyled mt-2">
                <li className="py-1">
                  <a href="tel:917030060622" className="nav-link foot-links">
                    +91 7030060622
                  </a>
                </li>
                <li className="py-1">
                  <a href="tel:917030060722" className="nav-link foot-links">
                    +91 7030060722
                  </a>
                </li>
              </ul>
              <h6 className="footer-head">Address</h6>
              <ul className="list-unstyled mt-2">
                <li className="py-1">
                  <a href="" className="foot-links">
                    Touchwood Bliss,
                  </a>
                </li>
                <li className="py-1">
                  <a
                    href="https://www.google.com/maps/place/Touchwood+Bliss+Nature+Retreat/@19.660533,73.5830119,17z/data=!4m9!3m8!1s0x3bdd847511196047:0x4f1bcb471ac6267b!5m2!4m1!1i2!8m2!3d19.660533!4d73.5855922!16s%2Fg%2F11b5ys1h9h?entry=ttu&g_ep=EgoyMDI1MDMyNS4xIKXMDSoASAFQAw%3D%3D"
                    className="foot-links"
                  >
                    {"Bhavali Dam, Road, Bhagatwadi, Igatpuri, "}
                    <br />
                    {" Maharashtra 422403"}
                  </a>
                </li>
              </ul>
              <ul className="list-unstyled mt-2">
                <h6 className="footer-head">Corporate Office</h6>
                <li className="py-1 mt-2">
                  <a
                    href="https://www.google.com/maps/place/Touchwood+World/@19.9911884,73.777106,17z/data=!3m1!4b1!4m6!3m5!1s0x3bddeba0e31a96db:0x4e1e72844d44da35!8m2!3d19.9911884!4d73.7796863!16s%2Fg%2F11hd4_r7f4?entry=ttu&g_ep=EgoyMDI1MDQyMy4wIKXMDSoASAFQAw%3D%3D"
                    className="foot-links"
                  >
                    Touchwood World,Business Bay, Mumbai Naka, Nashik, Maharashtra 422002
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
