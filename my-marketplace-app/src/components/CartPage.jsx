import { useCart } from '../contexts/CartContext';
import { Link, useNavigate } from 'react-router-dom';

const CartPage = () => {
  const { cart, clearCart, total } = useCart();
  const navigate = useNavigate();  // Імпортуємо useNavigate для перенаправлення

  const handleClearCart = () => {
    clearCart();  // Очищаємо кошик
    navigate('/');  // Перехід на сторінку товарів
  };

  return (
    <div>
      <h2>Кошик</h2>
      {cart.length === 0 ? (
        <p>Кошик порожній</p>
      ) : (
        <>
          <div className="cart-items">
            {cart.map((item, index) => (
              <div key={index} className="cart-item">
                <p>{item.title} - {item.price} грн</p>
              </div>
            ))}
          </div>
          <h3>Загальна вартість: {total} грн</h3>
          <button onClick={handleClearCart}>Очистити кошик</button>
          <Link to="/">Продовжити покупки</Link>
        </>
      )}
    </div>
  );
};

export default CartPage;
