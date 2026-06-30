// src/components/ServiceCard.jsx
import { Link } from "react-router-dom";
import "./ServiceCard.css";

function ServiceCard({ title, description, link }) {
  return (
    <div className="service-card">
      <h2>{title}</h2>
      <p>
        {description}{" "}
        {link && (
          <Link to={link} className="view-more">
            View More
          </Link>
        )}
      </p>
    </div>
  );
}

export default ServiceCard;
