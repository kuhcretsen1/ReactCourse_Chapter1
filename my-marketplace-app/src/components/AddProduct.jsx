import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useProducts } from '../contexts/ProductsContext';

const AddProduct = () => {
  const [title, setTitle] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');
  const { addProduct } = useProducts();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    addProduct({ title, price: parseFloat(price), description });
    navigate('/'); // Повертаємось до маркетплейсу
  };

  return (
    <div>
      <h2>Додати новий товар</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Назва товару:</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Ціна:</label>
          <input
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Опис:</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
        </div>
        <button type="submit">Додати товар</button>
      </form>
    </div>
  );
};

export default AddProduct;
