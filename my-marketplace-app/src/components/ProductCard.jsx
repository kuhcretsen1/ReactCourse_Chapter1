import React from 'react';

const ProductCard = ({ product, onAddToCart }) => {
  return (
    <div style={cardStyle}>
      <h2>{product.title}</h2>
      <p>Ціна: {product.price} грн</p>
      <button onClick={() => onAddToCart(product)}>Додати до кошика</button>
    </div>
  );
};

const cardStyle = {
  border: '1px solid #ddd',
  padding: '16px',
  borderRadius: '8px',
  marginBottom: '16px',
};

export default ProductCard;
