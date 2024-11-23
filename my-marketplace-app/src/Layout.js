import Header from '../components/Header';

const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      <main>{children}</main>
      <footer>© 2023 Marketplace</footer>
    </div>
  );
};

export default Layout;
