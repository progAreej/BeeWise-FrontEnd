// src/pages/ShopsPage.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; // Adjusted to use 'react-router-dom'
import { Search, Star } from 'lucide-react';

const shops = [
    {
      id: 1,
      name: "Buzz's Honey Haven",
      rating: 4.5,
      products: [
        { id: 1, name: "Wildflower Honey", price: 10.99, category: "Raw Honey", image: "/api/placeholder/150/150" },
        { id: 2, name: "Manuka Honey", price: 24.99, category: "Medicinal Honey", image: "/api/placeholder/150/150" },
        { id: 3, name: "Acacia Honey", price: 12.99, category: "Raw Honey", image: "/api/placeholder/150/150" },
      ]
    },
    {
      id: 2,
      name: "Sweet Bee Apiary",
      rating: 4.2,
      products: [
        { id: 4, name: "Raw Honey", price: 8.99, category: "Raw Honey", image: "/api/placeholder/150/150" },
        { id: 5, name: "Honeycomb", price: 15.99, category: "Specialty", image: "/api/placeholder/150/150" },
        { id: 6, name: "Propolis Tincture", price: 18.99, category: "Bee Products", image: "/api/placeholder/150/150" },
      ]
    },
    {
      id: 3,
      name: "Golden Nectar Co.",
      rating: 4.8,
      products: [
        { id: 7, name: "Clover Honey", price: 9.99, category: "Raw Honey", image: "/api/placeholder/150/150" },
        { id: 8, name: "Royal Jelly", price: 29.99, category: "Bee Products", image: "/api/placeholder/150/150" },
        { id: 9, name: "Beeswax Candles", price: 14.99, category: "Specialty", image: "/api/placeholder/150/150" },
      ]
    },
    {
      id: 4,
      name: "Honey Harvest",
      rating: 4.6,
      products: [
        { id: 10, name: "Orange Blossom Honey", price: 11.99, category: "Raw Honey", image: "/api/placeholder/150/150" },
        { id: 11, name: "Honey Mustard", price: 6.99, category: "Specialty", image: "/api/placeholder/150/150" },
        { id: 12, name: "Bee Pollen", price: 20.99, category: "Bee Products", image: "/api/placeholder/150/150" },
      ]
    },
    {
      id: 5,
      name: "Pure Honey Essentials",
      rating: 4.7,
      products: [
        { id: 13, name: "Eucalyptus Honey", price: 13.99, category: "Raw Honey", image: "/api/placeholder/150/150" },
        { id: 14, name: "Beeswax Wraps", price: 12.99, category: "Specialty", image: "/api/placeholder/150/150" },
        { id: 15, name: "Royal Jelly Capsules", price: 25.99, category: "Bee Products", image: "/api/placeholder/150/150" },
      ]
    },
    {
      id: 6,
      name: "Bee Bliss Market",
      rating: 4.3,
      products: [
        { id: 16, name: "Lavender Honey", price: 9.49, category: "Raw Honey", image: "/api/placeholder/150/150" },
        { id: 17, name: "Honey Soap", price: 7.49, category: "Specialty", image: "/api/placeholder/150/150" },
        { id: 18, name: "Beeswax Polish", price: 19.99, category: "Bee Products", image: "/api/placeholder/150/150" },
      ]
    },
    {
      id: 7,
      name: "The Hive Emporium",
      rating: 4.4,
      products: [
        { id: 19, name: "Buckwheat Honey", price: 14.49, category: "Raw Honey", image: "/api/placeholder/150/150" },
        { id: 20, name: "Honey Infused Tea", price: 9.99, category: "Specialty", image: "/api/placeholder/150/150" },
        { id: 21, name: "Bee Venom Cream", price: 22.99, category: "Bee Products", image: "/api/placeholder/150/150" },
      ]
    },
    {
      id: 8,
      name: "Bee Happy Shop",
      rating: 4.6,
      products: [
        { id: 22, name: "Wild Berry Honey", price: 12.49, category: "Raw Honey", image: "/api/placeholder/150/150" },
        { id: 23, name: "Honey Caramels", price: 5.99, category: "Specialty", image: "/api/placeholder/150/150" },
        { id: 24, name: "Propolis Capsules", price: 21.99, category: "Bee Products", image: "/api/placeholder/150/150" },
      ]
    },
    {
      id: 9,
      name: "Nectar & Honey",
      rating: 4.7,
      products: [
        { id: 25, name: "Cinnamon Honey", price: 11.49, category: "Raw Honey", image: "/api/placeholder/150/150" },
        { id: 26, name: "Honey Infused Hot Sauce", price: 13.99, category: "Specialty", image: "/api/placeholder/150/150" },
        { id: 27, name: "Beeswax Lip Balm", price: 4.99, category: "Bee Products", image: "/api/placeholder/150/150" },
      ]
    },
    {
      id: 10,
      name: "Hive & Harvest",
      rating: 4.5,
      products: [
        { id: 28, name: "Alfalfa Honey", price: 10.49, category: "Raw Honey", image: "/api/placeholder/150/150" },
        { id: 29, name: "Honey Butter", price: 8.49, category: "Specialty", image: "/api/placeholder/150/150" },
        { id: 30, name: "Beeswax Lip Balm", price: 5.49, category: "Bee Products", image: "/api/placeholder/150/150" },
      ]
    },
    {
      id: 11,
      name: "Bee Sweet Shop",
      rating: 4.4,
      products: [
        { id: 31, name: "Berry Blossom Honey", price: 13.49, category: "Raw Honey", image: "/api/placeholder/150/150" },
        { id: 32, name: "Honey Mustard Vinaigrette", price: 7.99, category: "Specialty", image: "/api/placeholder/150/150" },
        { id: 33, name: "Bee Pollen Granules", price: 18.49, category: "Bee Products", image: "/api/placeholder/150/150" },
      ]
    },
    {
      id: 12,
      name: "The Sweet Hive",
      rating: 4.9,
      products: [
        { id: 34, name: "Tupelo Honey", price: 15.99, category: "Raw Honey", image: "/api/placeholder/150/150" },
        { id: 35, name: "Honey Infused Chocolate", price: 12.99, category: "Specialty", image: "/api/placeholder/150/150" },
        { id: 36, name: "Royal Jelly Face Cream", price: 27.99, category: "Bee Products", image: "/api/placeholder/150/150" },
      ]
    },
  ];

const ShopsPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredShops, setFilteredShops] = useState(shops);
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', ...new Set(shops.flatMap(shop => shop.products.map(product => product.category)))];

  useEffect(() => {
    const filtered = shops.filter(shop =>
      shop.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      shop.products.some(product =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
        (selectedCategory === 'All' || product.category === selectedCategory)
      )
    );
    setFilteredShops(filtered);
  }, [searchTerm, selectedCategory]);

  return (
    <div className='bg-white min-h-screen'>
      <header className="flex justify-between items-center p-6">
        <h1 className="text-3xl font-bold text-goldD">BeeWise Marketplace</h1>
        <div className="flex items-center space-x-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Search shops or products"
              className="pl-10 pr-4 py-2 border border-gray-300 rounded-full w-64 focus:outline-none focus:ring-2 focus:ring-goldD"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-goldD" size={20} />
          </div>
          <select
            className="border border-gray-300 rounded-full px-4 py-2 bg-white text-brown focus:outline-none focus:ring-2 focus:ring-goldD"
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
            {categories.map(category => (
              <option key={category} value={category}>{category}</option>
            ))}
          </select>
        </div>
      </header>

      <main className="max-w-6xl mx-auto py-12">
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-brown mb-4">All Shops</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredShops.map(shop => (
              <Link key={shop.id} to={`/products/${shop.id}`} className="bg-white border border-gray-200 rounded-lg p-6 cursor-pointer hover:shadow-lg transition">
                <h2 className="text-xl font-semibold text-gray-800 mb-2">{shop.name}</h2>
                <div className="flex items-center mb-2">
                  <Star className="text-yellow-400 mr-1" size={18} fill="currentColor" />
                  <span className="text-gray-700">{shop.rating.toFixed(1)}</span>
                </div>
                <p className="text-gray-600">{shop.products.length} products</p>
              </Link>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default ShopsPage;
