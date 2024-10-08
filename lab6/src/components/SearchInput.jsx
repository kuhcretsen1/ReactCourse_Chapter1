import React from 'react'
import useFetch from '../hooks/useFetch';

const SearchInput = ({searchQuery,handleSearchChange}) => {
  return (
<input
        type="text"
        placeholder="Search..."
        value={searchQuery}
        onChange={handleSearchChange}
      />
  )
}

export default SearchInput
