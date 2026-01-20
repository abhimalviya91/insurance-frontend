import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg premium-navbar sticky-top">
      <div className="container">
        <Link className="navbar-brand brand-text" to="/">
          InsuraOne
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#mainNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="mainNav">
          <ul className="navbar-nav ms-auto nav-links">
            <li className="nav-item">
              <NavLink className="nav-link" to="/" end>
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/plans" end>
                Plans
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/about">
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/contact">
                Contact
              </NavLink>
            </li>
          </ul>

          {/* ACTIONS */}
          <div className="nav-actions">
            <NavLink to="/login" className="login-btn">
              Login
            </NavLink>

            <a href="tel:9926282650" className="nav-btn call">
              📞 Call
            </a>

            <a
              href="https://wa.me/919926282650"
              target="_blank"
              rel="noreferrer"
              className="nav-btn whatsapp"
            >
              💬 WhatsApp
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
