// src/pages/HomePage.jsx
import React from "react";
import "./HomePage.css"; 

function HomePage() {
  return (
    
    <div className="homepage">

      <div className="Hero"><h1>DIVUSTUDIOZ</h1>
        <h2>Creating Content. Capturing Reality. Powering Intelligence.</h2>
      </div>

      {/* New Highlights Section */}
      <section className="highlights">
        <div className="highlight">
          <h3>Creative + Technical Expertise</h3>
          <p>A unique blend of media production capability and real world data acquisition infrastructure.</p>
        </div>
        <div className="highlight">
          <h3>Scalable Production Network</h3>
          <p>Ability to execute projects across multiple locations, formats, and content categories.</p>
        </div>
        <div className="highlight">
          <h3>Future-Focused Vision</h3>
          <p>Positioned at the intersection of entertainment, AI, immersive media, and emerging technologies.</p>
        </div>
        <div className="highlight">
          <h3>Global Collaboration</h3>
          <p>Built to serve clients, studios, technology companies, startups, research organizations, and digital platforms worldwide.</p>
        </div>
      </section>
    </div>
  );
}

export default HomePage;
