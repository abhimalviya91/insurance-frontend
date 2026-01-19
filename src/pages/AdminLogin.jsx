import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AdminLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const loginAdmin = async (e) => {
    e.preventDefault(); // 🔥 MOST IMPORTANT LINE

    console.log("LOGIN FUNCTION CALLED");

    try {
      const res = await axios.post("https://insurance-backend-vhwz.onrender.com/api/admin-login", {
        email,
        password,
      });

      console.log("LOGIN SUCCESS:", res.data);

      localStorage.setItem("adminToken", res.data.token);
      window.location.href = "/admin-dashboard";
    } catch (err) {
      console.log("LOGIN ERROR:", err);
      alert("Login failed");
    }
  };

  return (
    <div className="auth-wrapper">
      <div className="auth-card">
        <h3>Admin Login</h3>

        {/* ✅ FORM CONTROLLED PROPERLY */}
        <form onSubmit={loginAdmin}>
          <input
            type="email"
            placeholder="Email"
            required
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            placeholder="Password"
            required
            onChange={(e) => setPassword(e.target.value)}
          />

          <button type="submit" className="auth-btn">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default AdminLogin;
