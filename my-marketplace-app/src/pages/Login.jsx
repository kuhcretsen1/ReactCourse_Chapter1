import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useUser } from '../contexts/UserContext';

const Login = () => {
  const [inputValue, setInputValue] = useState('');
  const navigate = useNavigate();
  const { setUsername } = useUser(); // Отримуємо функцію для встановлення імені користувача з контексту

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue) {
      setUsername(inputValue); // Встановлюємо ім'я користувача в контексті
      navigate('/'); // Перенаправляємо на основну сторінку після входу
    }
  };

  return (
    <div className="login">
      <h2>Увійдіть до системи</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Ваше ім'я"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          required
        />
        <button type="submit">Увійти</button>
        
      </form>
    </div>
  );
};

export default Login;
