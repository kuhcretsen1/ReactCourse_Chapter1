import React from 'react';

const AddressTable = ({ books, onEdit }) => {
  if (books.length === 0) {
    return <p>No data to display.</p>;
  }

  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Phone</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {books.map((book) => (
          <tr key={book.id}>
            <td>{book.id}</td>
            <td>{book.firstName}</td>
            <td>{book.lastName}</td>
            <td>{book.phone}</td>
            <td>
              <button onClick={() => onEdit(book)}>Edit</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default AddressTable;
