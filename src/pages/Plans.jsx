import { useEffect, useState } from "react";
import axios from "axios";
import "./Plans.css";

const Plans = () => {
  const [plans, setPlans] = useState([]);

  useEffect(() => {
    fetchPlans();
  }, []);

  const fetchPlans = async () => {
    const res = await axios.get("https://insurance-backend-vhwz.onrender.com/api/plans")
;
    setPlans(res.data);
  };

  return (
    <div className="plans-section">
      <div className="container">
        <h2 className="plans-title">Our Insurance Plans</h2>
        <p className="plans-subtitle">
          Choose the best Life & Health Insurance plan for your future
        </p>

        <div className="plans-grid">
          {plans.map((plan) => (
            <div className="plan-card" key={plan._id}>
              <h4>{plan.name}</h4>

              <div className="plan-price">
                ₹{plan.price}
                <span> / {plan.term}</span>
              </div>

              <p className="plan-desc">{plan.description}</p>

              <div className="plan-actions">
                <a href="tel:9926282650" className="btn-call">
                  📞 Call Now
                </a>
                <a
                  href="https://wa.me/919926282650"
                  target="_blank"
                  rel="noreferrer"
                  className="btn-whatsapp"
                >
                  💬 WhatsApp
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Plans;
