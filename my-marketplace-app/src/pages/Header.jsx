import CartIcon from "../components/CartIcon";
import { useUser } from "../contexts/UserContext";

const Header = () => {
  const { username, logout } = useUser();

  return (
    <header>
      <div>
        <h1>Marketplace</h1>
      </div>
      <div>
        <CartIcon />
        {username && (
          <button onClick={logout} style={{ marginLeft: "1rem" }}>
            Вийти
          </button>
        )}
      </div>
    </header>
  );
};

export default Header;
