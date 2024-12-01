import { createContext, useContext, useEffect, useState } from 'react';
import { fetchProducts } from '../api/productsAPI'; // API-запит

const ProductsContext = createContext(); // Створення контексту

export const useProducts = () => useContext(ProductsContext); // Хук для використання контексту

export const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  // Завантаження товарів з API
  useEffect(() => {
    const loadProducts = async () => {
      setIsLoading(true);
      try {
        const data = await fetchProducts(); // Завантаження з API
        setProducts(data); // Зберігаємо товари
      } catch (err) {
        console.error('Помилка завантаження товарів:', err);
      } finally {
        setIsLoading(false);
      }
    };

    loadProducts();
  }, []);

  // Додавання нового товару
  const addProduct = (newProduct) => {
    setProducts((prevProducts) => [...prevProducts, { ...newProduct, id: Date.now() }]);
  };

  // Видалення товару
  const deleteProduct = (id) => {
    setProducts((prevProducts) => prevProducts.filter((product) => product.id !== id));
  };

  // Оновлення товару
  const updateProduct = (updatedProduct) => {
    setProducts((prevProducts) =>
      prevProducts.map((product) =>
        product.id === updatedProduct.id ? updatedProduct : product
      )
    );
  };

  return (
    <ProductsContext.Provider
      value={{ products, addProduct, deleteProduct, updateProduct, isLoading }}
    >
      {children}
    </ProductsContext.Provider>
  );
};
