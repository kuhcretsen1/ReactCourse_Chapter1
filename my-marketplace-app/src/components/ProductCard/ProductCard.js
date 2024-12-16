import React from 'react';
import './ProductCard.css';

const ProductCard = ({ product, onAddToCart }) => {
  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} className="product-image" />
      <h3>{product.name}</h3>
      <p>Ціна: {product.price} грн</p>
      <button onClick={() => onAddToCart(product)}>Додати в кошик</button>
    </div>
  );
};

export default ProductCard;
