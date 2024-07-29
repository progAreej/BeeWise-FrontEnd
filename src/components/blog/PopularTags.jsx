import React from 'react';
import styled from 'styled-components';

const TagsContainer = styled.div`
  margin-bottom: 2rem;
`;

const TagCloud = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
`;

const Tag = styled.a`
  background-color: #e0e0e0;
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
  color: #333;
  text-decoration: none;
  font-size: 0.9rem;
  &:hover {
    background-color: #d0d0d0;
  }
`;

function PopularTags({ tags }) {
  return (
    <TagsContainer>
      <h3>Popular Tags</h3>
      <TagCloud>
        {tags.map(tag => (
          <Tag href={`#${tag}`} key={tag}>{tag}</Tag>
        ))}
      </TagCloud>
    </TagsContainer>
  );
}

export default PopularTags;