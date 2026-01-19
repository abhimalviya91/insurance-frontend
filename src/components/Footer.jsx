import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">

          {/* BRAND */}
          <div className="col-md-4 mb-4">
            <h4 className="footer-brand">InsuraOne</h4>
            <p className="footer-text">
              Trusted Life & Health Insurance solutions.  
              Secure your future with confidence.
            </p>
          </div>

          {/* QUICK LINKS */}
          <div className="col-md-4 mb-4">
            <h5 className="footer-title">Quick Links</h5>
            <ul className="footer-links">
              <li><a href="/">Home</a></li>
              <li><a href="/about">About</a></li>
              <li><a href="/contact">Contact</a></li>
              <li><a href="/login">Login</a></li>
            </ul>
          </div>

          {/* CONTACT */}
          <div className="col-md-4 mb-4">
            <h5 className="footer-title">Contact</h5>
            <p>👨‍💼 Sunil Malviya </p>
            <p>📞 +91 9926282650</p>
            <p>💬 WhatsApp Support</p>
            <p>📍 Seoni Malwa Dist. Narmadapuram MP</p>

            <div className="footer-actions">
              <a href="tel:9926282650" className="footer-btn call">
                Call
              </a>
              <a
                href="https://wa.me/919926282650"
                target="_blank"
                rel="noreferrer"
                className="footer-btn whatsapp"
              >
                WhatsApp
              </a>
            </div>
          </div>

        </div>

        <hr />

        <p className="footer-bottom">
          © {new Date().getFullYear()} InsuraOne. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
