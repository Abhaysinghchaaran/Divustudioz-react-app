// src/components/ContactForm.jsx
import React, { useState } from "react";
import "./ContactForm.css";

function ContactForm() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "", company: "", interest: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Here you’d add API call or email service integration
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
        <select
          name="interest"
          value={formData.interest}
          onChange={handleChange}
          required
        >
          <option value="">-- Select an option --</option>
          <option value="datasets">Datasets</option>
          <option value="partner">Become a partner</option>
        </select>
      </label>
      <button type="submit">Send</button>
    </form>
  );
}

export default ContactForm;
