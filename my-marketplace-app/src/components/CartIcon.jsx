import { FaShoppingCart } from "react-icons/fa";
import { useCart } from "../contexts/CartContext";
import { Link } from "react-router-dom";

const CartIcon = () => {
  const { cart } = useCart();

  return (
    <div>
      <Link to="/cart">
        <FaShoppingCart size={30} />
        {cart.length > 0 && <span>{cart.length}</span>}
      </Link>
    </div>
  );
};

export default CartIcon;  
