import { FaShoppingCart } from "react-icons/fa";

const ProductCard = ({ product, onAddToCart }) => {
  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} />
      <h2>{product.name}</h2>
      <p>{product.price} грн</p>
      <button onClick={() => onAddToCart(product)}>
        <FaShoppingCart /> Додати до кошика
      </button>
    </div>
  );
};

export default ProductCard;
