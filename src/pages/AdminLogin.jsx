import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const AdminLogin = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = async () => {
    try {
      const res = await axios.post(
        `${process.env.REACT_APP_API_BASE}/api/auth/login`,
        { email, password }
      );

      localStorage.setItem("adminToken", res.data.token);
      navigate("/admin-dashboard");
    } catch (err) {
      alert("Invalid credentials");
    }
  };

  return (
    <>
      <input onChange={(e) => setEmail(e.target.value)} />
      <input type="password" onChange={(e) => setPassword(e.target.value)} />
      <button onClick={login}>Login</button>
    </>
  );
};

export default AdminLogin;
