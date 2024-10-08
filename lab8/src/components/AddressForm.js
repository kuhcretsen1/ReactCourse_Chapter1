import React, { useState, useEffect } from 'react';

const AddressForm = ({ addBook, editingBook }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phone, setPhone] = useState('');
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!firstName) newErrors.firstName = 'The first name is required';
    if (!lastName) newErrors.lastName = 'The last name is required';
    if (!phone) newErrors.phone = 'The phone is required';
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length) {
      setErrors(validationErrors);
    } else {
      if (editingBook) {
        editingBook.firstName = firstName;
        editingBook.lastName = lastName;
        editingBook.phone = phone;
      } else {
        
        addBook({ firstName, lastName, phone });
      }
      setFirstName('');
      setLastName('');
      setPhone('');
      setErrors({});
    }
  };

  useEffect(() => {
    if (editingBook) {
      setFirstName(editingBook.firstName);
      setLastName(editingBook.lastName);
      setPhone(editingBook.phone);
    } else {
      setFirstName('');
      setLastName('');
      setPhone('');
    }
  }, [editingBook]);

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>First Name:</label>
        <input 
          type="text" 
          value={firstName} 
          onChange={(e) => setFirstName(e.target.value)} 
        />
        {errors.firstName && <p style={{ color: 'red' }}>{errors.firstName}</p>}
      </div>
      <div>
        <label>Last Name:</label>
        <input 
          type="text" 
          value={lastName} 
          onChange={(e) => setLastName(e.target.value)} 
        />
        {errors.lastName && <p style={{ color: 'red' }}>{errors.lastName}</p>}
      </div>
      <div>
        <label>Phone:</label>
        <input 
          type="text" 
          value={phone} 
          onChange={(e) => setPhone(e.target.value)} 
        />
        {errors.phone && <p style={{ color: 'red' }}>{errors.phone}</p>}
      </div>
      <button type="submit">{editingBook ? 'Update Contact' : 'Add Contact'}</button>
    </form>
  );
};

export default AddressForm;
