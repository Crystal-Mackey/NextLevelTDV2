import React from 'react';

function ServiceCard({ title, description, imageUrl }) {
  return (
    <div className="service-card">
      <img src={imageUrl} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

export default ServiceCard;
