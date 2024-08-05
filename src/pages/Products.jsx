// import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom'; // Adjusted to use 'react-router-dom'
// import { ShoppingCart, Star } from 'lucide-react';
// import Header from '../components/Header';
// import Footer from '../components/Footer';

// const shops = [
//   {
//     id: 1,
//     name: "Buzz's Honey Haven",
//     rating: 4.5,
//     products: [
//       { id: 1, name: "Wildflower Honey", price: 10.99, category: "Raw Honey", image: "/api/placeholder/150/150" },
//       { id: 2, name: "Manuka Honey", price: 24.99, category: "Medicinal Honey", image: "/api/placeholder/150/150" },
//       { id: 3, name: "Acacia Honey", price: 12.99, category: "Raw Honey", image: "/api/placeholder/150/150" },
//     ]
//   },
//   {
//     id: 2,
//     name: "Sweet Bee Apiary",
//     rating: 4.2,
//     products: [
//       { id: 4, name: "Raw Honey", price: 8.99, category: "Raw Honey", image: "/api/placeholder/150/150" },
//       { id: 5, name: "Honeycomb", price: 15.99, category: "Specialty", image: "/api/placeholder/150/150" },
//       { id: 6, name: "Propolis Tincture", price: 18.99, category: "Bee Products", image: "/api/placeholder/150/150" },
//     ]
//   },
//   {
//     id: 3,
//     name: "Golden Nectar Co.",
//     rating: 4.8,
//     products: [
//       { id: 7, name: "Clover Honey", price: 9.99, category: "Raw Honey", image: "/api/placeholder/150/150" },
//       { id: 8, name: "Royal Jelly", price: 29.99, category: "Bee Products", image: "/api/placeholder/150/150" },
//       { id: 9, name: "Beeswax Candles", price: 14.99, category: "Specialty", image: "/api/placeholder/150/150" },
//     ]
//   },
// ];

// const Products = () => {
//   const [selectedShop, setSelectedShop] = useState(null);
//   const [cart, setCart] = useState({});

//   const addToCart = (product) => {
//     setCart(prevCart => ({
//       ...prevCart,
//       [product.id]: (prevCart[product.id] || 0) + 1
//     }));
//   };

//   const removeFromCart = (product) => {
//     setCart(prevCart => {
//       const newCart = { ...prevCart };
//       if (newCart[product.id] > 1) {
//         newCart[product.id]--;
//       } else {
//         delete newCart[product.id];
//       }
//       return newCart;
//     });
//   };

//   const getTotalCartItems = () => {
//     return Object.values(cart).reduce((sum, quantity) => sum + quantity, 0);
//   };

//   useEffect(() => {
//     // Fetch selected shop from a query parameter or other method
//     const shopId = 1; // Replace with actual logic to get selected shop ID
//     const shop = shops.find(shop => shop.id === shopId);
//     setSelectedShop(shop);
//   }, []);

//   return (
//     <div className='bg-white min-h-screen'>
//       <Header />
//       <div className="max-w-6xl mx-auto py-12">
//         {/* Back to Marketplace Button */}
//         <Link to="/marketplace">
//           <button 
//             className="bg-gray-300 text-gray-800 px-4 py-2 rounded hover:bg-gray-400 transition focus:outline-none mb-8"
//           >
//             Back to Marketplace
//           </button>
//         </Link>

//         {/* Shop Details */}
//         {selectedShop ? (
//           <>
//             <h1 className="text-3xl font-bold text-brown mb-4">{selectedShop.name}</h1>
//             <div className="mb-8">
//               <h2 className="text-2xl font-bold text-brown mb-4">Products</h2>
//               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//                 {selectedShop.products.map(product => (
//                   <div key={product.id} className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition">
//                     <img src={product.image} alt={product.name} className="w-full h-40 object-cover mb-4 rounded" />
//                     <h3 className="text-lg font-semibold text-gray-800 mb-2">{product.name}</h3>
//                     <p className="text-green-600 font-bold mb-4">${product.price.toFixed(2)}</p>
//                     <button 
//                       onClick={() => addToCart(product)}
//                       className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600 transition focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
//                     >
//                       Add to Cart
//                     </button>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </>
//         ) : (
//           <p className="text-center text-gray-500">Loading shop details...</p>
//         )}
//       </div>
//       <Footer />
//     </div>
//   );
// };

// export default Products;


import { useParams } from 'react-router-dom';
// import { shops } from '../pages/Marketplace'; // Adjust import based on where your shops data is located

function ProductsPage() {
  const { shopId } = useParams();
  const shop = shops.find(shop => shop.id === parseInt(shopId));

  if (!shop) return <div>Shop not found</div>;

  return (
    <section className="p-8">
      {/* <h2 className="text-2xl font-bold mb-4">{shop.name} Products</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {shop.products.map(product => (
          <div key={product.id} className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition">
            <img src={product.image} alt={product.name} className="w-full h-40 object-cover mb-4 rounded" />
            <h3 className="text-lg font-semibold text-gray-800 mb-2">{product.name}</h3>
            <p className="text-green-600 font-bold mb-4">${product.price.toFixed(2)}</p>
            <button 
              className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600 transition focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div> */}
    </section>
  );
}

export default ProductsPage;
