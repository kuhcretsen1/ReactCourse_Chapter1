import { useState, useEffect } from 'react';
import { fetchProducts } from '../api/productsAPI';
import { useCart } from '../contexts/CartContext';
import { useUser } from '../contexts/UserContext';
import ProductForm from '../components/ProductForm';

const Marketplace = () => {
  const { cart, addToCart, clearCart, total } = useCart(); // використання addToCart з useCart
  const { username } = useUser();

  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [sortOrder, setSortOrder] = useState(null);
  const [filterText, setFilterText] = useState('');
  const [editingProduct, setEditingProduct] = useState(null);

  useEffect(() => {
    const loadProducts = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const data = await fetchProducts(page);
        setProducts((prevProducts) => [...prevProducts, ...data]);
      } catch (err) {
        setError('Помилка при завантаженні товарів');
      } finally {
        setIsLoading(false);
      }
    };

    loadProducts();
  }, [page]);

  const loadMoreProducts = () => {
    setPage((prevPage) => prevPage + 1);
  };

  const handleFilterChange = (e) => {
    setFilterText(e.target.value);
  };

  const handleAddOrUpdateProduct = (product) => {
    if (product.id) {
      // Оновлення товару
      setProducts((prevProducts) =>
        prevProducts.map((p) => (p.id === product.id ? product : p))
      );
    } else {
      // Додавання нового товару
      setProducts((prevProducts) => [
        ...prevProducts,
        { ...product, id: Date.now() },
      ]);
    }
    setEditingProduct(null); // Скидаємо редагований товар
  };

  const handleEditProduct = (product) => {
    setEditingProduct(product); // Заповнюємо форму для редагування товару
  };

  const handleDeleteProduct = (productId) => {
    setProducts((prevProducts) =>
      prevProducts.filter((product) => product.id !== productId)
    );
  };

  const sortedAndFilteredProducts = products
    .filter((product) =>
      product.title.toLowerCase().includes(filterText.toLowerCase())
    )
    .sort((a, b) => {
      if (sortOrder === 'asc') {
        return a.price - b.price;
      } else if (sortOrder === 'desc') {
        return b.price - a.price;
      }
      return 0;
    });

  return (
    <div>
      <h2>Список товарів</h2>
      <input
        type="text"
        placeholder="Фільтрувати товари"
        value={filterText}
        onChange={handleFilterChange}
      />

      <ProductForm onSubmit={handleAddOrUpdateProduct} existingProduct={editingProduct} />

      {isLoading ? (
        <p>Завантаження...</p>
      ) : error ? (
        <p>{error}</p>
      ) : (
        <>
          <button onClick={clearCart}>Очистити кошик</button>

          {/* Кнопки сортування */}
          <button onClick={() => setSortOrder('asc')}>Сортувати за ціною (зростання)</button>
          <button onClick={() => setSortOrder('desc')}>Сортувати за ціною (спадання)</button>
          <button onClick={() => setSortOrder(null)}>Скинути сортування</button>

          {sortedAndFilteredProducts.map((product, index) => (
            <div key={`${product.id}-${index}`} className="product-card">
              <h3>{product.title}</h3>
              <p>Ціна: {product.price} грн</p>
              <button onClick={() => addToCart(product)}>Додати в кошик</button>
              <button onClick={() => handleEditProduct(product)}>Редагувати</button>
              <button onClick={() => handleDeleteProduct(product.id)}>Видалити</button>
            </div>
          ))}
          <button onClick={loadMoreProducts}>Завантажити більше</button>
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
    </div>
  );
};

export default Marketplace;
