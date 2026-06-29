// src/components/ServiceCard.jsx
import { Link } from "react-router-dom";
import "./ServiceCard.css";

function ServiceCard({ title, description, link }) {
  return (
    <div className="service-card">
      <h2>{title}</h2>
      <p>{description}</p>
      <Link to={link}>View More</Link>
    </div>
  );
}

export default ServiceCard;
