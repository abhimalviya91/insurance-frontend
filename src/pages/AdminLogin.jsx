import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AdminLogin = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const loginAdmin = async (e) => {
    e.preventDefault();

    try {
      console.log(process.env.REACT_APP_API_BASE);
      const res = await axios.post(
        
        `${process.env.REACT_APP_API_BASE}/api/auth/login`,
        {
          email,
          password,
        }
      );

      // 🔑 TOKEN SAVE (MOST IMPORTANT LINE)
      localStorage.setItem("adminToken", res.data.token);

      console.log("TOKEN SAVED:", res.data.token); // debug

      navigate("/admin-dashboard");
    } catch (err) {
      console.error("LOGIN ERROR:", err.response?.data);
      alert("Invalid credentials");
    }
  };

  return (
    <div className="container py-5">
      <h3>Admin Login</h3>

      <form onSubmit={loginAdmin}>
        <input
          className="form-control mb-2"
          placeholder="Admin Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          className="form-control mb-3"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="submit" className="btn btn-primary w-100">
          Login
        </button>
      </form>
    </div>
  );
};

export default AdminLogin;
