import React from 'react';
import styled from 'styled-components';

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
`;

const PostCard = styled.article`
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  overflow: hidden;
`;

const PostImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

const PostContent = styled.div`
  padding: 1rem;
`;

function PostGrid({ posts }) {
  return (
    <Grid>
      {posts.map(post => (
        <PostCard key={post.id}>
          <PostImage src={post.imageUrl} alt={post.title} />
          <PostContent>
            <h3>{post.title}</h3>
            <p>{post.excerpt}</p>
            <p>By {post.author} on {post.date}</p>
          </PostContent>
        </PostCard>
      ))}
    </Grid>
  );
}

export default PostGrid;