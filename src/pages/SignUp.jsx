import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';

const SignUp = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [role, setRole] = useState('customer'); // Default role is 'customer'
  const [errorMessage, setErrorMessage] = useState('');

  const navigate = useNavigate();

  const validateName = () => /^[a-zA-Z\s]+$/.test(username);
  const validateEmail = () => /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
  const validatePassword = () => /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+=[{\]};:<>|.,?/-]).{6,}$/.test(password);
  const passwordsMatch = () => password === confirmPassword;

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateName() || !validateEmail() || !validatePassword() || !passwordsMatch()) {
      setErrorMessage('Please ensure all fields are valid and passwords match.');
      return;
    }

    try {
      const response = await axios.post('http://localhost:3000/api/users/signup', {
        username,
        email,
        password,
        confirmPassword,
        role,
      });

      if (response.status === 201) {
        alert("User registered successfully!");
        navigate('/login');
      }
    } catch (error) {
      setErrorMessage(error.response?.data?.message || 'Error signing up');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-page py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 p-8 bg-white shadow-lg rounded-xl">
        <div>
          <img
            className="mx-auto h-20 w-auto"
            src="/src/assets/imgs/logo1.png"
            alt="BeeWise logo"
          />
          <h2 className="mt-6 text-center text-3xl font-bold text-goldD">
            Start your journey
          </h2>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="space-y-4">
            <div>
              <label htmlFor="username" className="sr-only">Username</label>
              <input
                id="username"
                name="username"
                type="text"
                autoComplete="username"
                required
                className="appearance-none  relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-goldL focus:border-goldL sm:text-sm"
                placeholder="Full Name"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="email" className="sr-only">Email Address</label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="appearance-none  relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500  rounded-md text-gray-900 focus:outline-none focus:ring-goldL focus:border-goldL  sm:text-sm"
                placeholder="Email Address"
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
                className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-goldL focus:border-goldL sm:text-sm"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="confirm-password" className="sr-only">Confirm Password</label>
              <input
                id="confirm-password"
                name="confirmPassword"
                type="password"
                required
                className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-goldL focus:border-goldL sm:text-sm"
                placeholder="Confirm Password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </div>
          </div>

          {errorMessage && <div className="text-red-500 text-center">{errorMessage}</div>}

          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-goldD hover:bg-goldL focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-goldD"
            >
              Sign Up
            </button>
          </div>
          <div className="text-sm text-center">
            Already have an account? <Link to="/login" className="font-medium text-goldD hover:text-goldL">Log in</Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
