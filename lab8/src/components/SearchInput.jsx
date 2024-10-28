import React from 'react';

const SearchInput = ({ searchQuery, handleSearchChange }) => {
  return (
    <input
      type="text"
      placeholder="Search..."
      value={searchQuery}
      onChange={handleSearchChange}
    />
  );
};

export default SearchInput;
