import React, { useState } from 'react';
import styled from 'styled-components';

const SearchContainer = styled.div`
  margin-bottom: 2rem;
`;

const SearchInput = styled.input`
  width: 100%;
  padding: 0.5rem;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

function SearchBar() {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    // Implement search functionality here
  };

  return (
    <SearchContainer>
      <SearchInput 
        type="text" 
        placeholder="Search blog posts..."
        value={searchTerm}
        onChange={handleSearch}
      />
    </SearchContainer>
  );
}

export default SearchBar;
