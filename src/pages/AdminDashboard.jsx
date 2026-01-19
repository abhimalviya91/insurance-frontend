import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

// 🔗 LIVE BACKEND BASE URL
const API_BASE = "https://insurance-backend-vhwz.onrender.com";

const AdminDashboard = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("adminToken");

  const [plans, setPlans] = useState([]);
  const [leads, setLeads] = useState([]);

  const [form, setForm] = useState({
    name: "",
    price: "",
    term: "",
    description: "",
  });

  const [editId, setEditId] = useState(null);

  // 🔐 Protect route + initial data load
  useEffect(() => {
    if (!token) {
      navigate("/admin-login");
      return;
    }

    fetchPlans();
    fetchLeads();
  }, [token, navigate]);

  // 📥 Fetch insurance plans
  const fetchPlans = async () => {
    try {
      const res = await axios.get(`${API_BASE}/api/plans`);
      setPlans(res.data);
    } catch (err) {
      console.error("FETCH PLANS ERROR:", err);
    }
  };

  // ➕ Add / ✏️ Update plan
  const submitPlan = async () => {
    try {
      if (editId) {
        await axios.put(
          `${API_BASE}/api/plans/${editId}`,
          form,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setEditId(null);
      } else {
        await axios.post(
          `${API_BASE}/api/plans`,
          form,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
      }

      setForm({ name: "", price: "", term: "", description: "" });
      fetchPlans();
    } catch (err) {
      console.error("SUBMIT ERROR:", err.response?.data);
      alert("Action failed");
    }
  };

  // ❌ Delete plan
  const deletePlan = async (id) => {
    if (!window.confirm("Delete this plan?")) return;

    try {
      await axios.delete(
        `${API_BASE}/api/plans/${id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      fetchPlans();
    } catch (err) {
      console.error("DELETE PLAN ERROR:", err);
    }
  };

  // ✏️ Edit plan
  const editPlan = (plan) => {
    setEditId(plan._id);
    setForm({
      name: plan.name,
      price: plan.price,
      term: plan.term,
      description: plan.description,
    });
  };

  // 📩 Fetch contact leads
  const fetchLeads = async () => {
    try {
      const res = await axios.get(`${API_BASE}/api/contact`);
      setLeads(res.data);
    } catch (err) {
      console.error("FETCH LEADS ERROR:", err);
    }
  };

  // ❌ Delete lead
  const deleteLead = async (id) => {
    if (!window.confirm("Delete this lead?")) return;

    try {
      await axios.delete(`${API_BASE}/api/contact/${id}`);
      fetchLeads();
    } catch (err) {
      console.error("DELETE LEAD ERROR:", err);
    }
  };

  // 🚪 Logout
  const logout = () => {
    localStorage.removeItem("adminToken");
    navigate("/admin-login");
  };

  return (
    <div className="container py-5">
      {/* HEADER */}
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h3>Admin Dashboard</h3>
        <button className="btn btn-danger btn-sm" onClick={logout}>
          Logout
        </button>
      </div>

      {/* ADD / EDIT PLAN */}
      <div className="card p-4 mb-5">
        <h5 className="mb-3">
          {editId ? "Edit Insurance Plan" : "Add Insurance Plan"}
        </h5>

        <input
          className="form-control mb-2"
          placeholder="Plan Name"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />

        <input
          className="form-control mb-2"
          placeholder="Price"
          value={form.price}
          onChange={(e) => setForm({ ...form, price: e.target.value })}
        />

        <input
          className="form-control mb-2"
          placeholder="Term"
          value={form.term}
          onChange={(e) => setForm({ ...form, term: e.target.value })}
        />

        <textarea
          className="form-control mb-3"
          placeholder="Description"
          value={form.description}
          onChange={(e) =>
            setForm({ ...form, description: e.target.value })
          }
        />

        <button className="btn btn-primary" onClick={submitPlan}>
          {editId ? "Update Plan" : "Add Plan"}
        </button>
      </div>

      {/* PLANS LIST */}
      <h5 className="mb-3">All Insurance Plans</h5>

      {plans.map((p) => (
        <div
          key={p._id}
          className="card p-3 mb-2 d-flex flex-row justify-content-between align-items-center"
        >
          <div>
            <strong>{p.name}</strong>
            <br />
            ₹{p.price} | {p.term}
          </div>

          <div>
            <button
              className="btn btn-sm btn-warning me-2"
              onClick={() => editPlan(p)}
            >
              Edit
            </button>
            <button
              className="btn btn-sm btn-danger"
              onClick={() => deletePlan(p._id)}
            >
              Delete
            </button>
          </div>
        </div>
      ))}

      {/* CONTACT LEADS */}
      <h4 className="mt-5 mb-3">Contact Leads</h4>

      <div className="card p-3">
        <table className="table mb-0">
          <thead>
            <tr>
              <th>Name</th>
              <th>Phone</th>
              <th>Email</th>
              <th>Message</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {leads.map((l) => (
              <tr key={l._id}>
                <td>{l.name}</td>
                <td>{l.phone}</td>
                <td>{l.email}</td>
                <td>{l.message}</td>
                <td>
                  <button
                    className="btn btn-sm btn-danger"
                    onClick={() => deleteLead(l._id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminDashboard;
