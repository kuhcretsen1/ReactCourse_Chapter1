import { createContext, useContext, useEffect, useState } from 'react';
import { fetchProducts } from '../api/productsAPI'; 

const ProductsContext = createContext(); 

export const useProducts = () => useContext(ProductsContext); 

export const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const loadProducts = async () => {
      setIsLoading(true);
      try {
        const data = await fetchProducts(); 
        setProducts(data); // Зберігаємо товари
      } catch (err) {
        console.error('Помилка завантаження товарів:', err);
      } finally {
        setIsLoading(false);
      }
    };

    loadProducts();
  }, []);

  const addProduct = (newProduct) => {
    setProducts((prevProducts) => [...prevProducts, { ...newProduct, id: Date.now() }]);
  };

  const deleteProduct = (id) => {
    setProducts((prevProducts) => prevProducts.filter((product) => product.id !== id));
  };

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
