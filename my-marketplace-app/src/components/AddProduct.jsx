import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useProducts } from '../contexts/ProductsContext';
import { useForm } from 'react-hook-form'; 

const AddProduct = () => {
  const { addProduct } = useProducts();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm(); 

  const onSubmit = (data) => {
    addProduct({
      title: data.productName,
      price: parseFloat(data.price),
      description: data.description,
    });
    navigate('/'); 
  };

  
  return (
    <div>
      <h2>Додати новий товар</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label>Назва товару:</label>
          <input
            type="text"
            {...register('productName', { required: 'Product name is required' })}
          />
          {errors.productName && <span>{errors.productName.message}</span>} {/* Показуємо помилку валідації */}
        </div>

        <div>
          <label>Ціна:</label>
          <input
            type="number"
            {...register('price', { required: 'Price is required', valueAsNumber: true })}
          />
          {errors.price && <span>{errors.price.message}</span>}
        </div>

        <div>
          <label>Опис:</label>
          <textarea {...register('description')}></textarea>
        </div>

        <button type="submit">Додати товар</button>
      </form>
    </div>
  );
};

export default AddProduct;
