
import { Navigate } from 'react-router-dom';
import { useUser } from '../contexts/UserContext'; // Не забудь вказати правильний шлях

const ProtectedRoute = ({ element }) => {
  const { username } = useUser();
  return username ? element : <Navigate to="/login" />;
};

export default ProtectedRoute;
