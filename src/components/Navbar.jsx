import React, { useState } from "react";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="logoContainer">
        <img src={logo} alt="Logo" className="logo" />
      </div>

      {/* Hamburger button — only visible on mobile */}
      <button
        className={`hamburger ${isOpen ? "open" : ""}`}
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle menu"
      >
        <span />
        <span />
        <span />
      </button>

      {/* Nav links — horizontal on desktop, dropdown on mobile */}
      <ul className={`navLinks ${isOpen ? "open" : ""}`}>
        <li><Link to="/" className="link" onClick={() => setIsOpen(false)}>Home</Link></li>
        <li><Link to="/about" className="link" onClick={() => setIsOpen(false)}>About</Link></li>
        <li><Link to="/services" className="link" onClick={() => setIsOpen(false)}>Services</Link></li>
        <li><Link to="/contact" className="link" onClick={() => setIsOpen(false)}>Contact</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;