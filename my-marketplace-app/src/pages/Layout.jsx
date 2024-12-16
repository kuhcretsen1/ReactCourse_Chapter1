import Header from '../pages/Header';

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <Header /> {}
      <main className="main-content">
        {children} {}
      </main>
      <footer className="footer">
        <p>© 2023 Marketplace</p> {}
      </footer>
    </div>
  );
};

export default Layout;
