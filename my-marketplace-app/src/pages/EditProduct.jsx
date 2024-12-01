import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useProducts } from '../contexts/ProductsContext';

const EditProduct = () => {
  const { id } = useParams(); // Отримання ID товару з URL
  const navigate = useNavigate();
  const { products, updateProduct } = useProducts();

  const [productData, setProductData] = useState({
    title: '',
    price: '',
    description: '',
  });

  useEffect(() => {
    const product = products.find((p) => p.id === Number(id));
    if (product) {
      setProductData(product);
    } else {
      navigate('/'); // Якщо товар не знайдено, перенаправляємо на головну
    }
  }, [id, products, navigate]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProductData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateProduct(productData); // Оновлення товару
    navigate('/'); // Повернення до списку товарів
  };

  return (
    <div>
      <h2>Редагувати товар</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Назва:</label>
          <input
            type="text"
            name="title"
            value={productData.title}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Ціна:</label>
          <input
            type="number"
            name="price"
            value={productData.price}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Опис:</label>
          <textarea
            name="description"
            value={productData.description}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <button type="submit">Зберегти</button>
      </form>
    </div>
  );
};

export default EditProduct;
