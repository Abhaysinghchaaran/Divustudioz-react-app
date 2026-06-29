// Services.jsx
import ServiceCard from "../components/ServiceCard";
import ScriptedMovies from "./ScriptedMovies"; // Import the ScriptedMovies component

function Services() {
  return (
    <div>
      <h1>Our Services</h1>
      <ServiceCard
        title="Scripted Movies"
        description="Development and production of original 
films across multiple genres for digital and 
theatrical platforms"
        link="/services/scriptedMovies"
      />
      <ServiceCard
        title="Series & Episodic Content"
        description="Creation and management of engaging 
long-form and short-form series for OTT, 
television, and digital audiences"
        link="/services/ui-ux-design"
      />
      <ServiceCard
        title="Animation"
        description="2D, 3D, and AI-assisted animation 
              designed for entertainment, education, 
              marketing, and interactive experiences."
        link="/services/security-audit"
      />
    </div>
  );
}

export default Services;