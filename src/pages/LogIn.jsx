
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function LogIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Get the user data from sessionStorage
    const storedUser = JSON.parse(sessionStorage.getItem('user'));

    if (storedUser) {
      // Check if the entered credentials match the stored user
      if (email === storedUser.email && password) {
        navigate('/'); // Change to the appropriate route
      } else {
        setError('Invalid email or password.');
      }
    } else {
      setError('No user data found.');
    }
  };
  const register = sessionStorage.getItem('register');
  const registerValue = register !== null ? register : 'true';

  return (
    <>
      <div className="min-h-screen flex items-center justify-center bg-page py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8  p-8 bg-white shadow-lg rounded-lg">
          <div>
            <img className="mx-auto h-24 w-auto" src="/src/assets/imgs/logo1.png" alt="BeeWise logo" />
            <h2 className="mt-6 text-center text-3xl font-bold text-goldD">Log in to your account</h2>
          </div>
          <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
            <input type="hidden" name="remember" defaultValue="true" />
            <div className="rounded-md shadow-sm -space-y-px">
              <div>
                <label htmlFor="email-address" className="sr-only">Email address</label>
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-goldD focus:border-goldD focus:z-10 sm:text-sm"
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
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-goldD focus:border-goldD focus:z-10 sm:text-sm"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>

            {error && <div className="text-red-500 text-center">{error}</div>}

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 text-goldD focus:ring-goldD border-gray-300 rounded"
                />
                <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                  Remember me
                </label>
              </div>

              <div className="text-sm">
                <a href="#" className="font-medium text-goldD hover:text-goldL">
                  Forgot your password?
                </a>
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="w-full bg-goldD hover:bg-goldL text-white font-bold py-2 px-4 rounded-md focus:outline-none focus:ring-goldD focus:border-goldD"
              >
                Log In
              </button>
            </div>
          </form>
          <div className="mt-6 text-center">
            <p className="text-sm text-gray-600">Don't have an account?</p>
            <Link to='/SignUp' className="font-medium text-goldD hover:text-goldL">
              Sign Up
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
