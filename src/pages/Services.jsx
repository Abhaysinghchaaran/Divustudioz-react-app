// src/pages/Services.jsx
import ServiceCard from "../components/ServiceCard";

function Services() {
  return (
    <div className="services-container">
      <h1>Our Services</h1>
      <div className="services-grid">
        <ServiceCard
          title="Scripted Movies"
          description="Development and production of original films across multiple genres for digital and theatrical platforms."
          link="/services/scriptedMovies"
        />
        <ServiceCard
          title="Series & Episodic Content"
          description="Creation and management of engaging long-form and short-form series for OTT, television, and digital audiences."
          link="/services/episodicContent"
        />
        <ServiceCard
          title="Animation"
          description="2D, 3D, and AI-assisted animation designed for entertainment, education, marketing, and interactive experiences."
          link="/services/animation"
        />
        <ServiceCard
          title="Egocentric Content"
          description="Large-scale first-person (POV) content and real-world activity datasets for robotics, computer vision, and physical AI."
          link="/services/EgocentricContent"
        />
        <ServiceCard
          title="News & Informational"
          description="Digital-first news, factual storytelling, documentary-style reporting, and current affairs content."
          link="/services/Information"
        />
        <ServiceCard
          title="Interactive Animation"
          description="Immersive, interactive animated experiences for digital platforms, gaming ecosystems, education, and emerging technologies."
          link="/services/interactiveAnimation"
        />
      </div>
    </div>
  );
}

export default Services;
