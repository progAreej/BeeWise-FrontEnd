import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const SellProduct = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    companyName: '',
    productDescription: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for signing up! Check your email for next steps to set up your seller account.');
    // Here you would typically send the form data to your server
  };

  return (
    <div className="min-h-screen bg-page font-sans">
      <Header/>
      <header className="bg-goldL py-6 text-center">
        <h1 className="text-4xl font-bold text-gray-800">Bee Wise</h1>
        <p className="text-xl text-gray-700">The sweetest place to sell your honey products</p>
      </header>

      <main className="container mx-auto px-6 py-12 animate-fade-in">
        <h2 className="text-3xl font-bold mb-4 text-yellow-600">Join Our Hive of Sellers</h2>
        <p className="text-lg mb-8">Sign up to start selling your beekeeping products on Bee Wise!</p>

        <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-lg mb-12">
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            placeholder="Full Name"
            className="block w-full p-3 mb-4 border border-gray-300 rounded-lg"
            required
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email Address"
            className="block w-full p-3 mb-4 border border-gray-300 rounded-lg"
            required
          />
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Create Password"
            className="block w-full p-3 mb-4 border border-gray-300 rounded-lg"
            required
          />
          <input
            type="text"
            name="companyName"
            value={formData.companyName}
            onChange={handleChange}
            placeholder="Company Name"
            className="block w-full p-3 mb-4 border border-gray-300 rounded-lg"
          />
          <textarea
            name="productDescription"
            value={formData.productDescription}
            onChange={handleChange}
            placeholder="Tell us about your products"
            rows="4"
            className="block w-full p-3 mb-4 border border-gray-300 rounded-lg"
          />
          <button type="submit" className="w-full bg-goldL text-white py-3 rounded-lg hover:bg-yellow-600 transition-colors">
            Sign Up to Sell
          </button>
        </form>

        <div className="flex flex-wrap -mx-2">
          <div className="w-full md:w-1/3 px-2 mb-4">
            <div className="bg-white p-6 rounded-lg shadow-lg h-full">
              <h3 className="text-2xl font-semibold mb-2 text-yellow-600">Easy Setup</h3>
              <p>Upload your products and start selling in minutes.</p>
            </div>
          </div>
          <div className="w-full md:w-1/3 px-2 mb-4">
            <div className="bg-white p-6 rounded-lg shadow-lg h-full">
              <h3 className="text-2xl font-semibold mb-2 text-yellow-600">Wide Reach</h3>
              <p>Connect with bee enthusiasts and honey lovers across the globe.</p>
            </div>
          </div>
          <div className="w-full md:w-1/3 px-2 mb-4">
            <div className="bg-white p-6 rounded-lg shadow-lg h-full">
              <h3 className="text-2xl font-semibold mb-2 text-yellow-600">Secure Payments</h3>
              <p>Receive payments safely and quickly for every sale.</p>
            </div>
          </div>
        </div>
      </main>
      <Footer/>
    </div>
  );
};

export default SellProduct;
