import "./Auth.css";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <section className="auth-section">
      <div className="auth-card">
        <h3 className="auth-title">Welcome Back</h3>
        <p className="auth-subtitle">
          Login to manage your insurance account
        </p>

        <input type="email" placeholder="Email Address" required />
        <input type="password" placeholder="Password" required />

        <button className="auth-btn">Login</button>

        <div className="auth-footer">
          Don’t have an account? <Link to="/register">Register</Link>
        </div>
      </div>
    </section>
  );
};

export default Login;
