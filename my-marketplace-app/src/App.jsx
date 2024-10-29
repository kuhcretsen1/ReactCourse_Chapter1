import { useState } from 'react';
import './App.css';

function App() {
  const [cart, setCart] = useState([]);
  
  const products = [
    { id: 1, name: 'Товар 1', price: 100 },
    { id: 2, name: 'Товар 2', price: 200 },
    { id: 3, name: 'Товар 3', price: 300 },
  ];

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  return (
    <div className="App">
      <header>
        <h1>Маркетплейс</h1>
      </header>

      <main>
        <h2>Список товарів</h2>
        <div className="product-list">
          {products.map((product) => (
            <div key={product.id} className="product-card">
              <h3>{product.name}</h3>
              <p>Ціна: {product.price} грн</p>
              <button onClick={() => addToCart(product)}>Додати в кошик</button>
            </div>
          ))}
        </div>

        <h2>Кошик</h2>
        <div className="cart">
          {cart.length === 0 ? (
            <p>Кошик порожній</p>
          ) : (
            cart.map((item, index) => (
              <div key={index} className="cart-item">
                <p>{item.name} - {item.price} грн</p>
              </div>
            ))
          )}
        </div>
      </main>
    </div>
  );
}

export default App;
