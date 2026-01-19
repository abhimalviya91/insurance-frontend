import "./Home.css";

const Home = () => {
  return (
    <>
      {/* HERO SECTION */}
      <section className="hero-section d-flex align-items-center">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <h1 className="hero-title">
                Secure Your <span>Life & Health</span>
                <br />
                with InsuraOne
              </h1>
              <p className="hero-subtitle">
                Trusted LIC & Health Insurance solutions tailored for you and
                your family. Secure today. Relax tomorrow.
              </p>

              <div className="hero-buttons">
                <a
                  href="tel:9876543210"
                  className="btn btn-primary btn-lg me-3 premium-btn call-btn"
                >
                  📞<span>Call Now</span>
                </a>

                <a
                  href="https://wa.me/919876543210"
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-outline-success btn-lg premium-btn whatsapp-btn"
                >
                  💬<span>WhatsApp</span>
                </a>
              </div>
            </div>

            <div className="col-lg-6 text-center mt-4 mt-lg-0">
              <div className="hero-card">
                <h4>Why Choose InsuraOne?</h4>
                <ul>
                  <li>✔ LIC Authorized Advisor</li>
                  <li>✔ Best Health Insurance Plans</li>
                  <li>✔ Claim Support Assistance</li>
                  <li>✔ 100% Transparent Guidance</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="services-section">
        <div className="container">
          <h2 className="section-title">Our Services</h2>

          <div className="row mt-4">
            <div className="col-md-4">
              <div className="service-card">
                <h5>Life Insurance (LIC)</h5>
                <p>
                  Secure your family’s future with trusted LIC life insurance
                  plans.
                </p>
              </div>
            </div>

            <div className="col-md-4">
              <div className="service-card">
                <h5>Health Insurance</h5>
                <p>
                  Comprehensive medical coverage for you and your loved ones.
                </p>
              </div>
            </div>

            <div className="col-md-4">
              <div className="service-card">
                <h5>Policy Support</h5>
                <p>
                  End-to-end assistance for policy selection & claim process.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST STRIP */}
      <section className="trust-strip">
        <div className="container">
          <div className="row text-center">
            <div className="col-md-4">
              <h3>10+ Years</h3>
              <p>Experience</p>
            </div>
            <div className="col-md-4">
              <h3>1000+</h3>
              <p>Happy Clients</p>
            </div>
            <div className="col-md-4">
              <h3>24×7</h3>
              <p>Customer Support</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;