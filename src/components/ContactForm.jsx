// src/components/ContactForm.jsx
import React, { useState } from "react";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "../firebase";
import "./ContactForm.css";


function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    company: "",
    interest: "",
    sampleLink: "",
  });

  const [status, setStatus] = useState({
    loading: false,
    error: "",
    success: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setStatus({ loading: true, error: "", success: "" });

    try {
      const payload = {
        name: formData.name.trim(),
        email: formData.email.trim(),
        message: formData.message.trim(),
        company: formData.company.trim(),
        interest: formData.interest,
        sampleLink: formData.sampleLink.trim(),
        createdAt: serverTimestamp(),
      };

      const docRef = await addDoc(collection(db, "contact_submissions"), payload);

      // Optional: confirm write was acknowledged by Firestore
      console.log("Contact submission saved with id:", docRef.id);

      setFormData({ name: "", email: "", message: "", company: "", interest: "", sampleLink: "" });
      setStatus({ loading: false, error: "", success: "Thanks! Your message has been sent." });
    } catch (err) {
      console.error("Firestore submit error:", err);
      // Show more info in case it’s a rules/auth configuration issue
      setStatus({
        loading: false,
        error: err?.message ? `Failed to send: ${err.message}` : "Failed to send. Please try again.",
        success: "",
      });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="contact-form">
      <label>
        Name:
        <input type="text" name="name" value={formData.name} onChange={handleChange} required />
      </label>

      <label>
        Email:
        <input type="email" name="email" value={formData.email} onChange={handleChange} required />
      </label>

      <label>
        Message:
        <textarea name="message" value={formData.message} onChange={handleChange} required />
      </label>

      <label>
        Company:
        <input type="text" name="company" value={formData.company} onChange={handleChange} />
      </label>

      <label>
        I'm interested in:
        <select name="interest" value={formData.interest} onChange={handleChange} required>
          <option value="">-- Select an option --</option>
          <option value="datasets">Datasets</option>
          <option value="partner">Become a partner</option>
        </select>
      </label>

      <label>
        Sample link:
        <input
          type="url"
          name="sampleLink"
          value={formData.sampleLink}
          onChange={handleChange}
          placeholder="https://... (optional)"
        />
      </label>

      {status.error ? <p className="contact-error">{status.error}</p> : null}
      {status.success ? <p className="contact-success">{status.success}</p> : null}

      <button type="submit" disabled={status.loading}>
        {status.loading ? "Sending..." : "Send"}
      </button>
    </form>
  );
}

export default ContactForm;

