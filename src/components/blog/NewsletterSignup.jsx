import React, { useState } from 'react';
import styled from 'styled-components';

const SignupContainer = styled.div`
  background-color: #f0f0f0;
  padding: 1rem;
  border-radius: 8px;
  margin-bottom: 2rem;
`;

const SignupForm = styled.form`
  display: flex;
  flex-direction: column;
`;

const SignupInput = styled.input`
  margin-bottom: 1rem;
  padding: 0.5rem;
`;

const SignupButton = styled.button`
  background-color: #ffd700;
  color: #333;
  border: none;
  padding: 0.5rem;
  cursor: pointer;
  &:hover {
    background-color: #ffcc00;
  }
`;

function NewsletterSignup() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement newsletter signup functionality here
    console.log(`Signing up with email: ${email}`);
  };

  return (
    <SignupContainer>
      <h3>Subscribe to Our Newsletter</h3>
      <SignupForm onSubmit={handleSubmit}>
        <SignupInput 
          type="email" 
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <SignupButton type="submit">Subscribe</SignupButton>
      </SignupForm>
    </SignupContainer>
  );
}

export default NewsletterSignup;