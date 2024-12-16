import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useUser } from '../contexts/UserContext';

const Login = () => {
  const [inputValue, setInputValue] = useState('');
  const navigate = useNavigate();
  const { setUsername } = useUser(); 

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue) {
      setUsername(inputValue); 
      navigate('/'); 
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
