import { Link } from "react-router-dom";
import CartIcon from "../components/CartIcon";

const Header = () => {
  return (
    <header>
      <div>
        <h1>Marketplace</h1>
      </div>
      <div>
        <CartIcon />
      </div>
    </header>
  );
};

export default Header;
