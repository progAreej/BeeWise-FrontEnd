import React from 'react';
import styled from 'styled-components';

const CategoryContainer = styled.div`
  margin-bottom: 2rem;
`;

const CategoryItem = styled.a`
  display: block;
  padding: 0.5rem;
  color: #333;
  text-decoration: none;
  &:hover {
    background-color: #f0f0f0;
  }
`;

function CategoryList({ categories }) {
  return (
    <CategoryContainer>
      <h3>Categories</h3>
      {categories.map(category => (
        <CategoryItem href={`#${category}`} key={category}>{category}</CategoryItem>
      ))}
    </CategoryContainer>
  );
}

export default CategoryList;