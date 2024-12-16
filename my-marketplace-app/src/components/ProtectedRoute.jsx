
import { Navigate } from 'react-router-dom';
import { useUser } from '../contexts/UserContext'; 

const ProtectedRoute = ({ element }) => {
  const { username } = useUser();
  return username ? element : <Navigate to="/login" />;
};

export default ProtectedRoute;
