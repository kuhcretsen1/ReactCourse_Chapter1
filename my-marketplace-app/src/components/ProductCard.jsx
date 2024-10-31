import React from 'react';

const ProductCard = ({ product, onAddToCart }) => {
  return (
    <div style={cardStyle}>
      <h2>{product.name}</h2>
      <p>Ціна: {product.price} грн</p>
      
      <button onClick={() => onAddToCart(product)}>Додати до кошика</button>
    </div>
  );
};

const [isLoading, setIsLoading] = useState(true);
const [error, setError] = useState(null);

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

if (isLoading) return <p>Завантаження...</p>;
if (error) return <p>{error}</p>;

  
const cardStyle = {
  border: '1px solid #ddd',
  padding: '16px',
  borderRadius: '8px',
  marginBottom: '16px',
};

export default ProductCard;
