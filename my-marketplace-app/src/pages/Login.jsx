import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = ({ onLogin }) => {
  const [inputValue, setInputValue] = useState('');
  const navigate = useNavigate(); // Додаємо useNavigate

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue) {
      onLogin(inputValue);
      navigate('/'); // Перенаправлення на основну сторінку після входу
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
