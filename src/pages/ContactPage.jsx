// src/pages/Contact.jsx
import React from "react";
import ContactForm from "../components/ContactForm";

function Contact() {
  return (
    <div className="contact-page">
      <h1>Contact Us</h1>
      <p>We’d love to hear from you. Fill out the form below:</p>
      <ContactForm />
    </div>
  );
}

export default Contact;
