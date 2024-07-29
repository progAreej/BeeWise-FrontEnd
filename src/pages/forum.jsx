import React, { useState } from 'react';

const Forum = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, password, confirmPassword } = formData;

    if (password !== confirmPassword) {
      setError('Passwords do not match.');
      return;
    }

    // Simulate a successful registration
    setSuccess('Successfully joined the forum! You can now participate in discussions and access exclusive content.');
    setError('');
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6 text-center">Join the Forum</h1>
      
      <section className="mb-12">
        <p className="text-lg mb-4">
          Become a member of our vibrant beekeeping community! Joining the forum allows you to engage in discussions, share experiences, and access exclusive content.
        </p>
        <form onSubmit={handleSubmit} className="bg-white shadow-lg rounded-lg p-8">
          <h2 className="text-3xl font-semibold mb-4">Sign Up</h2>
          
          {error && <p className="text-red-500 mb-4">{error}</p>}
          {success && <p className="text-green-500 mb-4">{success}</p>}

          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-goldD focus:border-goldD sm:text-sm"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-goldD focus:border-goldD sm:text-sm"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-goldD focus:border-goldD sm:text-sm"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">Confirm Password</label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-goldD focus:border-goldD sm:text-sm"
              required
            />
          </div>

          <button
            type="submit"
            className="bg-goldD text-white font-bold py-2 px-4 rounded-lg transition-colors duration-300 hover:bg-goldL"
          >
            Join Now
          </button>
        </form>
      </section>
    </div>
  );
};

export default Forum;
