import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import './App.css';
import Login from './pages/Login';
import Marketplace from './pages/Marketplace';
import { fetchProducts } from './api/productsAPI';
import { CartProvider } from "./contexts/CartContext";
import { UserProvider, useUser } from "./contexts/UserContext";
import CartPage from './components/CartPage';
import Header from './pages/Header';

function App() {
  return (
    <UserProvider>
      <CartProvider>
        <Router>
        <Header /> {/* Хедер тут буде відображатись на всіх сторінках */}
          <div className="App">
            <header>
              <h1>Маркетplace</h1>
            </header>
            <main>
              <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/" element={<ProtectedRoute />} />
                <Route path="/cart" element={<CartPage />} /> {/* маршрут для кошика */}
              </Routes>
            </main>
          </div>
        </Router>
      </CartProvider>
    </UserProvider>
  );
}

const ProtectedRoute = () => {
  const { username } = useUser();
  return username ? <Marketplace /> : <Navigate to="/login" />;
};

export default App;
