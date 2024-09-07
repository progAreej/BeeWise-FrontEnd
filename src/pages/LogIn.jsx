

import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function LogIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const validateEmail = () => /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
  const validatePassword = () => password.length > 0; // Adjust validation as needed

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateEmail()) {
      setError('Invalid email');
      return;
    }
    if (!validatePassword()) {
      setError('Password cannot be empty');
      return;
    }

    try {
      const response = await axios.post('http://localhost:3000/api/users/login', { email, password });

      sessionStorage.setItem('token', response.data.token);

      navigate('/'); // Redirect to home page or another protected route
    } catch (err) {
      setError(err.response?.data?.message || 'An error occurred. Please try again.');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-page py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 p-8 bg-white shadow-lg rounded-lg">
        <div>
          <img className="mx-auto h-24 w-auto" src="/src/assets/imgs/logo1.png" alt="BeeWise logo" />
          <h2 className="mt-6 text-center text-3xl font-bold text-goldD">Log in to your account</h2>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="space-y-4">
            <div>
              <label htmlFor="email-address" className="sr-only">Email address</label>
              <input
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-goldD focus:border-goldD focus:z-10 sm:text-sm"
                placeholder="Email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="password" className="sr-only">Password</label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-goldD focus:border-goldD focus:z-10 sm:text-sm"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>

          {error && <div className="text-red-500 text-center">{error}</div>}

          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-goldD hover:bg-goldL focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-goldD"
            >
              Log In
            </button>
          </div>
          <div className="text-sm text-center">
            Don't have an account? <Link to="/signup" className="font-medium text-goldL hover:text-goldD">Sign up</Link>
          </div>
        </form>
      </div>
    </div>
  );
}
