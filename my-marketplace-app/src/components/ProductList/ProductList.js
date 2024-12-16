import React from 'react';
import ProductCard from '../ProductCard/ProductCard';

const ProductList = ({ products, onAddToCart }) => {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap' }}>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} onAddToCart={onAddToCart} />
      ))}
    </div>
  );
};

export default ProductList;
