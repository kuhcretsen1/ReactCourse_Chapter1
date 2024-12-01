import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>404</h1>
      <p>Сторінку не знайдено!</p>
      <Link to="/">Повернутись на головну</Link>
    </div>
  );
};

export default NotFound;
