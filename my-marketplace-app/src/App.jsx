import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom'; // Використовуйте Routes замість Switch у версії 6
import './App.css';
import Login from './pages/Login';

function App() {
  const [cart, setCart] = useState([]);
  const [username, setUsername] = useState(null); 

  const products = [
    { id: 1, name: 'Товар 1', price: 100 },
    { id: 2, name: 'Товар 2', price: 200 },
    { id: 3, name: 'Товар 3', price: 300 },
  ];

  const addToCart = (product) => {
    if (!cart.some((item) => item.id === product.id)) {
      setCart([...cart, product]);
    }
  };

  const total = cart.reduce((acc, item) => acc + item.price, 0);

  const clearCart = () => {
    setCart([]);
  };

  const handleLogin = (username) => {
    setUsername(username); // Збереження ім'я користувача
  };

  return (
    <Router>
      <div className="App">
        <header>
          <h1>Маркетplace</h1>
        </header>

        <main>
          <Routes>
            <Route path="/login" element={<Login onLogin={handleLogin} />} />
            <Route
              path="/"
              element={
                username ? (
                  <>
                    <h2>Список товарів</h2>
                    <button onClick={clearCart}>Очистити кошик</button>
                    {products.map((product) => (
                      <div key={product.id} className="product-card">
                        <h3>{product.name}</h3>
                        <p>Ціна: {product.price} грн</p>
                        <button onClick={() => addToCart(product)}>Додати в кошик</button>
                      </div>
                    ))}
                    <h3>Загальна вартість: {total} грн</h3>
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
                  </>
                ) : (
                  <Navigate to="/login" />
                )
              }
            />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
