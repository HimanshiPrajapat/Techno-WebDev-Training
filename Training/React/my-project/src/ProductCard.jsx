import React from 'react';
import './ProductCard.css'; // Assuming you create a separate CSS file

const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <img src={product.image} alt={product.title} className="product-image" />
      <h2 className="product-title">{product.title}</h2>
      <p className="product-price">${product.price}</p>
      <p className="product-description">
        {product.description.length > 100 ? product.description.slice(0, 100) + '...' : product.description}
      </p>
    </div>
  );
};

export default ProductCard;
