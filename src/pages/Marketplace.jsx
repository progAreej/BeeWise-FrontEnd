// // src/pages/Marketplace.js
// import React, { useState, useEffect } from 'react';

// function Marketplace() {
//   const [products, setProducts] = useState([]);

//   useEffect(() => {
//     // Fetch products from an API or database
//     // For now, we'll use dummy data
//     setProducts([
//       { id: 1, name: 'Honey Jar', price: 10, image: 'honey.jpg' },
//       { id: 2, name: 'Beehive', price: 150, image: 'beehive.jpg' },
//       { id: 3, name: 'Beekeeper Suit', price: 80, image: 'suit.jpg' },
//     ]);
//   }, []);

//   return (
//     <div className="container mx-auto px-4 py-8">
//       <h1 className="text-4xl font-bold mb-8">Beekeeping Marketplace</h1>
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//         {products.map(product => (
//           <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden">
//             <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
//             <div className="p-6">
//               <h2 className="text-xl font-semibold mb-2">{product.name}</h2>
//               <p className="text-gray-600 mb-4">${product.price}</p>
//               <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">Add to Cart</button>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Marketplace;



import React from 'react';

const Marketplace = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6 text-center">Marketplace</h1>

      <section id="browse-products" className="mb-12">
        <h2 className="text-3xl font-semibold mb-4">Browse Products</h2>
        <p className="text-lg mb-4">
          Explore a variety of beekeeping products, tools, and supplies available in our marketplace. Find everything you need for your beekeeping journey.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {/* Example Product Card */}
          <ProductCard
            name="Beekeeping Suit"
            price="$150.00"
            description="A high-quality beekeeping suit to ensure safety and comfort during hive inspections."
            imageUrl="/src/assets/imgs/product1.jpg"
          />
          <ProductCard
            name="Hive Tool Set"
            price="$45.00"
            description="Essential tools for hive management, including scrapers and hive tools."
            imageUrl="/src/assets/imgs/product2.jpg"
          />
          <ProductCard
            name="Honey Extractor"
            price="$300.00"
            description="A manual honey extractor to help you efficiently harvest honey from your hives."
            imageUrl="/src/assets/imgs/product3.jpg"
          />
          {/* Add more ProductCard components as needed */}
        </div>
        <a href="/marketplace" className="mt-8 inline-block bg-goldD text-white font-bold py-2 px-6 rounded-xl transition-colors duration-300 hover:bg-goldL">
          View All Products
        </a>
      </section>

      <section id="my-listings">
        <h2 className="text-3xl font-semibold mb-4">My Listings</h2>
        <p className="text-lg mb-4">
          Manage your own product listings in our marketplace. Add new products, edit existing ones, or remove items from your inventory.
        </p>
        <div className="bg-white shadow-lg rounded-lg p-6">
          <h3 className="text-2xl font-semibold mb-4">Your Listings</h3>
          <ul className="list-disc list-inside ml-4">
            <li className="mb-4">
              <div className="flex flex-col">
                <span className="text-xl font-semibold">Beehive Starter Kit</span>
                <span className="text-gray-600">Price: $200.00</span>
                <p className="mt-2 text-gray-700">A complete kit to start your beekeeping adventure, including a hive, frames, and a basic tool set.</p>
                <div className="mt-2 flex space-x-4">
                  <a href="#" className="text-blue-500 hover:underline">Edit</a>
                  <a href="#" className="text-red-500 hover:underline">Delete</a>
                </div>
              </div>
            </li>
            {/* Add more listing items as needed */}
          </ul>
          <a href="/add-listing" className="mt-6 inline-block bg-goldD text-white font-bold py-2 px-6 rounded-xl transition-colors duration-300 hover:bg-goldL">
            Add New Listing
          </a>
        </div>
      </section>
    </div>
  );
};

const ProductCard = ({ name, price, description, imageUrl }) => (
  <div className="bg-white shadow-lg rounded-lg overflow-hidden">
    <img src={imageUrl} alt={name} className="w-full h-48 object-cover" />
    <div className="p-6">
      <h3 className="text-xl font-semibold mb-2">{name}</h3>
      <p className="text-gray-700 mb-4">{description}</p>
      <span className="text-lg font-bold">{price}</span>
    </div>
  </div>
);

export default Marketplace;
