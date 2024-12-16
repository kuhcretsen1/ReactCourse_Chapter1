import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './styles/App.css';
import Login from './pages/Login';
import Marketplace from './pages/Marketplace';
import CartPage from './pages/CartPage';
import Header from './pages/Header';
import { CartProvider } from './contexts/CartContext';
import { UserProvider } from './contexts/UserContext';
import ProtectedRoute from './components/ProtectedRoute';
import AddProduct from './components/AddProduct';
import { ProductsProvider } from './contexts/ProductsContext';
import EditProduct from './pages/EditProduct';
import NotFound from './pages/NotFound.jsx'; 
import Layout from './pages/Layout.jsx';

function App() {
  return (
    <UserProvider>
      <CartProvider>
        <ProductsProvider>
          <Router>
            <div className="App">
              <main>
                <Routes>
                  <Route path="/login" element={<Login />} />
                  <Route path="/" element={<ProtectedRoute element={<Layout><Marketplace /></Layout>} />} />
                  <Route path="/cart" element={<CartPage />} />
                  <Route path="/add-product" element={<ProtectedRoute element={<AddProduct />} />} />
                  <Route path="/edit-product/:id" element={<ProtectedRoute element={<EditProduct />} />} />
                  <Route path="*" element={<NotFound />} /> {/*  */}
                </Routes>
              </main>
            </div>
          </Router>
        </ProductsProvider>
      </CartProvider>
    </UserProvider>
  );
}


export default App;
