// src/pages/ProductsPage.js
import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom'; // Adjusted to use 'react-router-dom'
import { Star } from 'lucide-react';
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

const ProductsPage = () => {
  const { shopId } = useParams();
  const [selectedShop, setSelectedShop] = useState(null);

  useEffect(() => {
    const shop = shops.find(shop => shop.id === shopId);
    setSelectedShop(shop);
  }, [shopId]);

  return (
    <div className='bg-white min-h-screen'>
      <header className="p-6">
        <h1 className="text-3xl font-bold text-goldD">Shop Products</h1>
      </header>

      <main className="max-w-6xl mx-auto py-12">
        {selectedShop ? (
          <>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">{selectedShop.name}</h2>
            <button
              onClick={() => window.history.back()}
              className="bg-gray-300 text-gray-800 px-4 py-2 rounded hover:bg-gray-400 transition focus:outline-none"
            >
              Back to Shops
            </button>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
              {selectedShop.products.map(product => (
                <div key={product.id} className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition">
                  <img src={product.image} alt={product.name} className="w-full h-40 object-cover mb-4 rounded" />
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">{product.name}</h3>
                  <p className="text-green-600 font-bold mb-4">${product.price.toFixed(2)}</p>
                  <button className="bg-goldD text-white px-4 py-2 rounded hover:bg-yellow-400 transition focus:outline-none">
                    Add to Cart
                  </button>
                </div>
              ))}
            </div>
          </>
        ) : (
          <p>Shop not found.</p>
        )}
      </main>
    </div>
  );
};

export default ProductsPage;
