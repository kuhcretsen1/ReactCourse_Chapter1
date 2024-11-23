import { useState, useEffect } from 'react';

const ProductForm = ({ onSubmit, existingProduct }) => {
  const [title, setTitle] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');

  useEffect(() => {
    if (existingProduct) {
      setTitle(existingProduct.title);
      setPrice(existingProduct.price);
      setDescription(existingProduct.description);
    }
  }, [existingProduct]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title || !price) {
      alert('Будь ласка, заповніть всі поля.');
      return;
    }

    const product = {
      title,
      price: parseFloat(price),
      description,
      id: existingProduct ? existingProduct.id : null,
    };

    onSubmit(product); // передаємо оновлені або нові дані в Marketplace
    resetForm(); // очищуємо форму після збереження
  };

  const resetForm = () => {
    setTitle('');
    setPrice('');
    setDescription('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Назва товару"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="number"
        placeholder="Ціна"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />
      <textarea
        placeholder="Опис товару"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button type="submit">{existingProduct ? 'Оновити товар' : 'Додати товар'}</button>
    </form>
  );
};

export default ProductForm;
