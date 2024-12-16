import React from 'react';

const CartPage = ({ cart, onClearCart, onRemoveItem }) => {
  return (
    <div>
      <h1>Кошик</h1>
      <ul>
        {cart.map((item) => (
          <li key={item.id}>
            {item.name} - {item.price} грн
            <button onClick={() => onRemoveItem(item.id)}>Видалити</button>
          </li>
        ))}
      </ul>
      <button onClick={onClearCart}>Очистити кошик</button>
    </div>
  );
};

export default CartPage;
