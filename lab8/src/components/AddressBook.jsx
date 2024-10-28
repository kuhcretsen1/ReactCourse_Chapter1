import React, { useState } from "react";
import AddressTable from "./AddressTable";
import AddressForm from "./AddressForm";
import SearchInput from "./SearchInput";

const AddressBook = () => {
  const [books, setBooks] = useState([]);
  const [newAddress, setNewAddress] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [editingBook, setEditingBook] = useState(null);

  const handleAddBook = (newBook) => {
    setBooks((prevBooks) => [...prevBooks, newBook]);
  };

  const handleEditBook = (book) => {
    setEditingBook(book);
  };

  const handleRemoveBook = (id) => {
    setBooks(books.filter((book) => book.id !== id));
  };

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const filteredBooks = books.filter((book) =>
    book.firstName.toLowerCase().includes(searchQuery.toLowerCase()) ||
    book.lastName.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      <AddressForm addBook={editingBook ? handleEditBook : handleAddBook} editingBook={editingBook} />
      <SearchInput searchQuery={searchQuery} handleSearchChange={handleSearchChange} />
      <AddressTable books={filteredBooks} onEdit={handleEditBook} onRemoveBook={handleRemoveBook} />
    </div>
  );
};

export default AddressBook;
