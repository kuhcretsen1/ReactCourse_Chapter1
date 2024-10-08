import React, { useState } from 'react';
import AddressForm from './components/AddressForm';
import AddressTable from './components/AddressTable';

const App = () => {
  const [books, setBooks] = useState([]);
  const [editingBook, setEditingBook] = useState(null);

  const addBook = (newBook) => {
    const id = books.length + 1;
    setBooks([...books, { id, ...newBook }]);
  };

  const handleEdit = (book) => {
    setEditingBook(book);
  };

  const handleUpdate = (updatedBook) => {
    setBooks((prevBooks) =>
      prevBooks.map((book) => (book.id === updatedBook.id ? updatedBook : book))
    );
    setEditingBook(null); 
  };

  return (
    <div>
      <h1>Address Book</h1>
      <AddressForm addBook={addBook} editingBook={editingBook} />
      <AddressTable books={books} onEdit={handleEdit} />
    </div>
  );
};

export default App;
