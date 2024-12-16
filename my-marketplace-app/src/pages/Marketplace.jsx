import { useState } from 'react';
import { useCart } from '../contexts/CartContext';
import { useProducts } from '../contexts/ProductsContext';
import { Link } from 'react-router-dom';
import '../styles/Marketplace.css';

const Marketplace = () => {
  const { addToCart, clearCart } = useCart();
  const { products } = useProducts();
  const [filterText, setFilterText] = useState('');
  const [sortOption, setSortOption] = useState('');
  const [currentPage, setCurrentPage] = useState(1); 
  const itemsPerPage = 5; 

  const handleFilterChange = (e) => setFilterText(e.target.value);
  const handleSortChange = (e) => setSortOption(e.target.value);

 
  const filteredProducts = products
    .filter((product) =>
      product.title.toLowerCase().includes(filterText.toLowerCase())
    )
    .sort((a, b) => {
      if (sortOption === 'priceAsc') return a.price - b.price;
      if (sortOption === 'priceDesc') return b.price - a.price;
      if (sortOption === 'name') return a.title.localeCompare(b.title);
      return 0;
    });

  const indexOfLastProduct = currentPage * itemsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - itemsPerPage;
  const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="marketplace">
      <div className="marketplace-header">
        <h2>Marketplace</h2>
        <div className="filters">
          <input
            type="text"
            placeholder="Фільтрувати товари"
            value={filterText}
            onChange={handleFilterChange}
            className="filter-input"
          />
          <select value={sortOption} onChange={handleSortChange} className="sort-select">
            <option value="">Сортувати...</option>
            <option value="priceAsc">Ціна (за зростанням)</option>
            <option value="priceDesc">Ціна (за спаданням)</option>
            <option value="name">Назва</option>
          </select>
        </div>
        <div className="actions">
          <Link to="/add-product" className="button-link">
            Додати новий товар
          </Link>
          <button onClick={clearCart} className="clear-cart-button">
            Очистити кошик 
          </button>
        </div>
      </div>

      <div className="product-grid">
        {currentProducts.length === 0 ? (
          <p>Товари не знайдено</p>
        ) : (
          currentProducts.map((product) => (
            <div key={product.id} className="product-card">
              <h3>{product.title}</h3>
              <p>Ціна: {product.price} грн</p>
              <button onClick={() => addToCart(product)} className="add-to-cart-button">
                Додати в кошик
              </button>
            </div>
          ))
        )}
      </div>

      {/* */}
      <div className="pagination">
        {Array.from({ length: Math.ceil(filteredProducts.length / itemsPerPage) }).map((_, index) => (
          <button
            key={index + 1}
            onClick={() => paginate(index + 1)}
            className={currentPage === index + 1 ? 'active' : ''}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Marketplace;
