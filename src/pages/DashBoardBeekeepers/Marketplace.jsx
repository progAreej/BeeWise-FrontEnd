// import React from 'react';

// const Marketplace = () => (
//   <div>
//     <h2 className="text-xl font-semibold mb-4">Marketplace</h2>
//     <div className="bg-white p-6 rounded-lg shadow">
//       <h3 className="text-lg font-semibold mb-2">Available Products</h3>
//       <ul>
//         <li className="border-b py-2">
//           <a href="#" className="text-blue-600 hover:underline">Product 1</a> - <span>$100</span>
//         </li>
//         <li className="border-b py-2">
//           <a href="#" className="text-blue-600 hover:underline">Product 2</a> - <span>$150</span>
//         </li>
//         {/* Add more products as needed */}
//       </ul>
//     </div>
//   </div>
// );

// export default Marketplace;


import React from 'react';

// Sample products data
const products = [
  { id: 1, name: 'Product 1', price: '$100' },
  { id: 2, name: 'Product 2', price: '$150' },
  // Add more products as needed
];

const Marketplace = () => (
  <div>
    <h2 className="text-xl font-semibold mb-4">Marketplace</h2>
    <div className="bg-white p-6 rounded-lg shadow">
      <h3 className="text-lg font-semibold mb-2">Available Products</h3>
      <ul>
        {products.map(product => (
          <li key={product.id} className="border-b py-2">
            <a href="#" className="text-blue-600 hover:underline">{product.name}</a> - <span>{product.price}</span>
          </li>
        ))}
      </ul>
    </div>
  </div>
);

export default Marketplace;
