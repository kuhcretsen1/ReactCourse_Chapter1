import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import './App.css';
import Login from './pages/Login';
import { fetchProducts } from './api/productsAPI';

function App() {
  const [cart, setCart] = useState([]);
  const [username, setUsername] = useState(null); 
  const [products, setProducts] = useState([]); // Стан для продуктів
  const [isLoading, setIsLoading] = useState(true); // Стан завантаження
  const [error, setError] = useState(null); // Стан для помилки

  // Завантаження продуктів при першому рендері
  useEffect(() => {
    const loadProducts = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const data = await fetchProducts();
        setProducts(data);
      } catch (err) {
        setError('Помилка при завантаженні товарів');
      } finally {
        setIsLoading(false);
      }
    };

    loadProducts();
  }, []);

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
    setUsername(username); 
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
                    {isLoading ? (
                      <p>Завантаження...</p>
                    ) : error ? (
                      <p>{error}</p>
                    ) : (
                      <>
                        <button onClick={clearCart}>Очистити кошик</button>
                        {products.map((product) => (
                          <div key={product.id} className="product-card">
                            <h3>{product.title}</h3>
                            <p>Ціна: {product.price} грн</p>
                            <button onClick={() => addToCart(product)}>Додати в кошик</button>
                          </div>
                        ))}
                        <h3>Загальна вартість: {total} грн</h3>
                      </>
                    )}
                    <h2>Кошик</h2>
                    <div className="cart">
                      {cart.length === 0 ? (
                        <p>Кошик порожній</p>
                      ) : (
                        cart.map((item, index) => (
                          <div key={index} className="cart-item">
                            <p>{item.title} - {item.price} грн</p>
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
