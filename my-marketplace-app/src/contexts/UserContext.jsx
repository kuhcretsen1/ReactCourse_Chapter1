import { createContext, useContext, useState } from 'react';

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [username, setUsername] = useState(null);

  const logout = () => {
    setUsername(null); // Очистити ім'я користувача
    localStorage.removeItem('authToken'); // Якщо є токен авторизації, видаляємо його
    window.location.href = '/login'; // Перенаправлення на сторінку входу
  };

  return (
    <UserContext.Provider value={{ username, setUsername, logout }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);

