import "./Auth.css";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <section className="auth-section">
      <div className="auth-card">
        <h3 className="auth-title">Create Account</h3>
        <p className="auth-subtitle">
          Get started with InsuraOne today
        </p>

        <input type="text" placeholder="Full Name" required />
        <input type="email" placeholder="Email Address" required />
        <input type="password" placeholder="Password" required />

        <button className="auth-btn">Register</button>

        <div className="auth-footer">
          Already have an account? <Link to="/login">Login</Link>
        </div>
      </div>
    </section>
  );
};

export default Register;
