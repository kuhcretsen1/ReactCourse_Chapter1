import Header from '../pages/Header'; // Імпортуємо Header

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <Header /> {/* Заголовок сайту, можна додавати навігацію та інші елементи */}
      <main className="main-content">
        {children} {/* Це місце для дочірніх компонентів (вміст конкретної сторінки) */}
      </main>
      <footer className="footer">
        <p>© 2023 Marketplace</p> {/* Футер, який можна змінювати */}
      </footer>
    </div>
  );
};

export default Layout;
