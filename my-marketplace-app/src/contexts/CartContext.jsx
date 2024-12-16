import React, { createContext, useContext, useMemo, useState } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart((prevCart) => {
      if (prevCart.find((item) => item.id === product.id)) {
        return prevCart;
      }
      return [...prevCart, product];
    });
  };

  const clearCart = () => setCart([]);

  const total = useMemo(() => {
    return cart.reduce((acc, product) => acc + product.price, 0);
  }, [cart]);

  return (
    <CartContext.Provider value={{ cart, addToCart, clearCart, total }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
