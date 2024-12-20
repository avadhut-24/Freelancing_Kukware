import React from 'react';
import './ProductCard.css'

function ProductCard({ name, category, image, onClick }) {
  return (
    <div className="product-card" onClick={onClick} style={{ cursor: "pointer" }}>
      <img src={image} alt={name} />
      <div className="product-info">
        <p>{category}</p>
        <h4>{name}</h4>
      </div>
    </div>
  );
}

export default ProductCard;
