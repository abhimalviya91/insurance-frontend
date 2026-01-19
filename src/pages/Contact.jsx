import "./Contact.css";
import { useState } from "react";
import axios from "axios";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const submitForm = async (e) => {
    e.preventDefault();

    await axios.post("https://insurance-backend-vhwz.onrender.com/api/contact", form)
;

    alert("Message sent successfully!");
    setForm({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <section className="contact-section">
      <div className="container">
        <h2 className="contact-title">Contact Us</h2>
        <p className="contact-subtitle">
          Get in touch for the best Life & Health Insurance guidance
        </p>

        <div className="contact-card">
          <form onSubmit={submitForm}>
            <input
              placeholder="Your Name"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              required
            />

            <input
              type="email"
              placeholder="Email Address"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              required
            />

            <input
              type="tel"
              placeholder="Mobile Number"
              value={form.phone}
              onChange={(e) => setForm({ ...form, phone: e.target.value })}
              required
            />

            <textarea
              placeholder="Your Message"
              value={form.message}
              onChange={(e) =>
                setForm({ ...form, message: e.target.value })
              }
              rows="4"
            ></textarea>

            <button type="submit">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
