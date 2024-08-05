// import Header from '../components/Header';
// import Footer from '../components/Footer';
// import React, { useState, useEffect } from 'react';
// import { Search, ShoppingCart, Star } from 'lucide-react';
// import { Link } from 'react-router-dom'; // Adjusted to use 'react-router-dom'

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
//   {
//     id: 4,
//     name: "Honey Harvest",
//     rating: 4.6,
//     products: [
//       { id: 10, name: "Orange Blossom Honey", price: 11.99, category: "Raw Honey", image: "/api/placeholder/150/150" },
//       { id: 11, name: "Honey Mustard", price: 6.99, category: "Specialty", image: "/api/placeholder/150/150" },
//       { id: 12, name: "Bee Pollen", price: 20.99, category: "Bee Products", image: "/api/placeholder/150/150" },
//     ]
//   },
//   {
//     id: 5,
//     name: "Pure Honey Essentials",
//     rating: 4.7,
//     products: [
//       { id: 13, name: "Eucalyptus Honey", price: 13.99, category: "Raw Honey", image: "/api/placeholder/150/150" },
//       { id: 14, name: "Beeswax Wraps", price: 12.99, category: "Specialty", image: "/api/placeholder/150/150" },
//       { id: 15, name: "Royal Jelly Capsules", price: 25.99, category: "Bee Products", image: "/api/placeholder/150/150" },
//     ]
//   },
//   {
//     id: 6,
//     name: "Bee Bliss Market",
//     rating: 4.3,
//     products: [
//       { id: 16, name: "Lavender Honey", price: 9.49, category: "Raw Honey", image: "/api/placeholder/150/150" },
//       { id: 17, name: "Honey Soap", price: 7.49, category: "Specialty", image: "/api/placeholder/150/150" },
//       { id: 18, name: "Beeswax Polish", price: 19.99, category: "Bee Products", image: "/api/placeholder/150/150" },
//     ]
//   },
//   {
//     id: 7,
//     name: "The Hive Emporium",
//     rating: 4.4,
//     products: [
//       { id: 19, name: "Buckwheat Honey", price: 14.49, category: "Raw Honey", image: "/api/placeholder/150/150" },
//       { id: 20, name: "Honey Infused Tea", price: 9.99, category: "Specialty", image: "/api/placeholder/150/150" },
//       { id: 21, name: "Bee Venom Cream", price: 22.99, category: "Bee Products", image: "/api/placeholder/150/150" },
//     ]
//   },
//   {
//     id: 8,
//     name: "Bee Happy Shop",
//     rating: 4.6,
//     products: [
//       { id: 22, name: "Wild Berry Honey", price: 12.49, category: "Raw Honey", image: "/api/placeholder/150/150" },
//       { id: 23, name: "Honey Caramels", price: 5.99, category: "Specialty", image: "/api/placeholder/150/150" },
//       { id: 24, name: "Propolis Capsules", price: 21.99, category: "Bee Products", image: "/api/placeholder/150/150" },
//     ]
//   },
//   {
//     id: 9,
//     name: "Nectar & Honey",
//     rating: 4.7,
//     products: [
//       { id: 25, name: "Cinnamon Honey", price: 11.49, category: "Raw Honey", image: "/api/placeholder/150/150" },
//       { id: 26, name: "Honey Infused Hot Sauce", price: 13.99, category: "Specialty", image: "/api/placeholder/150/150" },
//       { id: 27, name: "Beeswax Lip Balm", price: 4.99, category: "Bee Products", image: "/api/placeholder/150/150" },
//     ]
//   },
//   {
//     id: 10,
//     name: "Hive & Harvest",
//     rating: 4.5,
//     products: [
//       { id: 28, name: "Alfalfa Honey", price: 10.49, category: "Raw Honey", image: "/api/placeholder/150/150" },
//       { id: 29, name: "Honey Butter", price: 8.49, category: "Specialty", image: "/api/placeholder/150/150" },
//       { id: 30, name: "Beeswax Lip Balm", price: 5.49, category: "Bee Products", image: "/api/placeholder/150/150" },
//     ]
//   },
//   {
//     id: 11,
//     name: "Bee Sweet Shop",
//     rating: 4.4,
//     products: [
//       { id: 31, name: "Berry Blossom Honey", price: 13.49, category: "Raw Honey", image: "/api/placeholder/150/150" },
//       { id: 32, name: "Honey Mustard Vinaigrette", price: 7.99, category: "Specialty", image: "/api/placeholder/150/150" },
//       { id: 33, name: "Bee Pollen Granules", price: 18.49, category: "Bee Products", image: "/api/placeholder/150/150" },
//     ]
//   },
//   {
//     id: 12,
//     name: "The Sweet Hive",
//     rating: 4.9,
//     products: [
//       { id: 34, name: "Tupelo Honey", price: 15.99, category: "Raw Honey", image: "/api/placeholder/150/150" },
//       { id: 35, name: "Honey Infused Chocolate", price: 12.99, category: "Specialty", image: "/api/placeholder/150/150" },
//       { id: 36, name: "Royal Jelly Face Cream", price: 27.99, category: "Bee Products", image: "/api/placeholder/150/150" },
//     ]
//   },
// ];

// const Marketplace = () => {
//   const [selectedShop, setSelectedShop] = useState(null);
//   const [searchTerm, setSearchTerm] = useState('');
//   const [filteredShops, setFilteredShops] = useState(shops);
//   const [selectedCategory, setSelectedCategory] = useState('All');
//   const [cart, setCart] = useState({});

//   const categories = ['All', ...new Set(shops.flatMap(shop => shop.products.map(product => product.category)))];

//   useEffect(() => {
//     const filtered = shops.filter(shop =>
//       shop.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
//       shop.products.some(product =>
//         product.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
//         (selectedCategory === 'All' || product.category === selectedCategory)
//       )
//     );
//     setFilteredShops(filtered);
//   }, [searchTerm, selectedCategory]);

//   const addToCart = (product) => {
//     setCart(prevCart => ({
//       ...prevCart,
//       [product.id]: (prevCart[product.id] || 0) + 1
//     }));
//   };

  // const [currentSlide, setCurrentSlide] = useState(0);
  // const slides = [
  //   { src: 'https://www.usatoday.com/gcdn/-mm-/b2b05a4ab25f4fca0316459e1c7404c537a89702/c=0-0-1365-768/local/-/media/2021/04/06/USATODAY/usatsports/247WallSt.com-247WS-857254-imageForEntry1-8.jpg?width=1365&height=682&fit=crop&format=pjpg&auto=webp', alt: 'Slide 1' },
  //   { src: 'https://img.freepik.com/free-photo/jar-honey-antique-table-with-fields-flower-background_1268-30585.jpg', alt: 'Slide 2' },
  //   { src: 'https://img.freepik.com/premium-photo/set-bee-products-honey-white-wooden-background-free-space-text-top-view_187166-27229.jpg', alt: 'Slide 3' }
  // ];

  // const nextSlide = () => {
  //   setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  // };

  // const prevSlide = () => {
  //   setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  // };

  // useEffect(() => {
  //   const interval = setInterval(nextSlide, 2000);
  //   return () => clearInterval(interval);
  // }, []);

//   return (
//     <div className='bg-white min-h-screen'>
//       <Header />
//       <div className="max-w-6xl mx-auto py-12">
//         {/* Slider */}
        // <div className="relative overflow-hidden rounded-lg shadow-lg mb-8">
        //   <div className="flex transition-transform duration-500" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
        //     {slides.map((slide, index) => (
        //       <div key={index} className="w-full flex-shrink-0 relative">
        //         <img
        //           src={slide.src}
        //           alt={slide.alt}
        //           className="w-full h-96 object-cover rounded-lg"
        //         />
        //         <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 p-6 text-center">
        //           <h1 className="text-goldL text-3xl font-semibold mb-4">
        //             Elevate Your Beekeeping Journey
        //           </h1>
        //           <p className="text-white text-lg mb-6">
        //             Join our community and gain exclusive access to resources, tips, and tools tailored for beekeepers.
        //           </p>
        //           <Link to="/subscription">
        //             <button className="bg-goldD text-white px-8 py-3 rounded-lg shadow-lg hover:bg-yellow-400 transition focus:outline-none focus:ring-2 focus:ring-goldL">
        //               Get Started Now
        //             </button>
        //           </Link>
        //         </div>
        //       </div>
        //     ))}
        //   </div>
        // </div>

//         {/* Search and Cart */}
//         <header className="flex justify-between items-center mb-8">
//           <h1 className="text-3xl font-bold text-goldD">BeeWise Marketplace</h1>
//           <div className="flex items-center space-x-4">
//             <div className="relative">
//               <input
//                 type="text"
//                 placeholder="Search shops or products"
//                 className="pl-10 pr-4 py-2 border border-gray-300 rounded-full w-64 focus:outline-none focus:ring-2 focus:ring-goldD"
//                 value={searchTerm}
//                 onChange={(e) => setSearchTerm(e.target.value)}
//               />
//               <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-goldD" size={20} />
//             </div>
//             <select
//               className="border border-gray-300 rounded-full px-4 py-2 bg-white text-brown focus:outline-none focus:ring-2 focus:ring-goldD"
//               value={selectedCategory}
//               onChange={(e) => setSelectedCategory(e.target.value)}
//             >
//               {categories.map(category => (
//                 <option key={category} value={category}>{category}</option>
//               ))}
//             </select>
//           </div>
//         </header>

//         {/* Main Content */}
//         <main>
//           {!selectedShop ? (
//             <>
//               <section className="mb-8">
//                 <h2 className="text-2xl font-bold text-brown mb-4">Top Rated Shops</h2>
//                 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//                   {shops
//                     .sort((a, b) => b.rating - a.rating)
//                     .slice(0, 3)
//                     .map(shop => (
//                       <div
//                         key={shop.id}
//                         className="bg-page border border-gray-200 rounded-lg p-6 cursor-pointer hover:shadow-lg transition"
//                         onClick={() => setSelectedShop(shop)}
//                       >
//                         <h2 className="text-xl font-semibold text-gray-800 mb-2">{shop.name}</h2>
//                         <div className="flex items-center mb-2">
//                           <Star className="text-yellow-400 mr-1" size={18} fill="currentColor" />
//                           <span className="text-gray-700">{shop.rating.toFixed(1)}</span>
//                         </div>
//                         <p className="text-gray-600">{shop.products.length} products</p>
//                       </div>
//                     ))}
//                 </div>
//               </section>

//               <section className="mb-8 ">
//                 <h2 className="text-2xl font-bold text-brown mb-4">All Shops</h2>
//                 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//                   {filteredShops.map(shop => (
//                     <div
//                       key={shop.id}
//                       className="bg-page border border-gray-200 rounded-lg p-6 cursor-pointer hover:shadow-lg transition"
//                       onClick={() => setSelectedShop(shop)}
//                     >
//                       <h2 className="text-xl font-semibold text-gray-800 mb-2">{shop.name}</h2>
//                       <div className="flex items-center mb-2">
//                         <Star className="text-yellow-400 mr-1" size={18} fill="currentColor" />
//                         <span className="text-gray-700">{shop.rating.toFixed(1)}</span>
//                       </div>
//                       <p className="text-gray-600">{shop.products.length} products</p>
//                     </div>
//                   ))}
//                 </div>
//               </section>
//             </>
//           ) : (
//             <div className="mb-8">
//               <h2 className="text-2xl font-bold text-gray-800 mb-4">{selectedShop.name}</h2>
//               <button
//                 onClick={() => setSelectedShop(null)}
//                 className="bg-gray-300 text-gray-800 px-4 py-2 rounded hover:bg-gray-400 transition focus:outline-none"
//               >
//                 Back to Marketplace
//               </button>
//               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
//                 {selectedShop.products.map(product => (
//                   <div key={product.id} className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition">
//                     <img src={product.image} alt={product.name} className="w-full h-40 object-cover mb-4 rounded" />
//                     <h3 className="text-lg font-semibold text-gray-800 mb-2">{product.name}</h3>
//                     <p className="text-green-600 font-bold mb-4">{product.price.toFixed(2)} JD</p>
//                     <button
//                       onClick={() => addToCart(product)}
//                       className="bg-goldD text-white px-4 py-2 rounded hover:bg-yellow-400 transition focus:outline-none"
//                     >
//                       Add to Cart
//                     </button>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           )}
//         </main>
//       </div>
//       <Footer />
//     </div>
//   );
// };

// export default Marketplace;


import Header from '../components/Header';
import Footer from '../components/Footer';
import React, { useState, useEffect } from 'react';
import { Search, ShoppingCart, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

// ... (keep the existing shops array)

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

const Marketplace = () => {
  const [selectedShop, setSelectedShop] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredShops, setFilteredShops] = useState(shops);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [cart, setCart] = useState({});
  const [cartCount, setCartCount] = useState(0);

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

  const addToCart = (product) => {
    setCart(prevCart => {
      const newCart = {
        ...prevCart,
        [product.id]: (prevCart[product.id] || 0) + 1
      };
      const newCount = Object.values(newCart).reduce((sum, count) => sum + count, 0);
      setCartCount(newCount);
      return newCart;
    });
  };

  // ... (keep the existing slider code)
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    { src: 'https://www.usatoday.com/gcdn/-mm-/b2b05a4ab25f4fca0316459e1c7404c537a89702/c=0-0-1365-768/local/-/media/2021/04/06/USATODAY/usatsports/247WallSt.com-247WS-857254-imageForEntry1-8.jpg?width=1365&height=682&fit=crop&format=pjpg&auto=webp', alt: 'Slide 1' },
    { src: 'https://img.freepik.com/free-photo/jar-honey-antique-table-with-fields-flower-background_1268-30585.jpg', alt: 'Slide 2' },
    { src: 'https://img.freepik.com/premium-photo/set-bee-products-honey-white-wooden-background-free-space-text-top-view_187166-27229.jpg', alt: 'Slide 3' }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className='bg-white min-h-screen'>
      <Header />
      <div className="max-w-6xl mx-auto py-12">
        {/* Slider */}
        {/* ... (keep the existing slider code) */}
        <div className="relative overflow-hidden rounded-lg shadow-lg mb-8">
          <div className="flex transition-transform duration-500" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
            {slides.map((slide, index) => (
              <div key={index} className="w-full flex-shrink-0 relative">
                <img
                  src={slide.src}
                  alt={slide.alt}
                  className="w-full h-96 object-cover rounded-lg"
                />
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 p-6 text-center">
                  <h1 className="text-goldL text-3xl font-semibold mb-4">
                    Elevate Your Beekeeping Journey
                  </h1>
                  <p className="text-white text-lg mb-6">
                    Join our community and gain exclusive access to resources, tips, and tools tailored for beekeepers.
                  </p>
                  <Link to="/subscription">
                    <button className="bg-goldD text-white px-8 py-3 rounded-lg shadow-lg hover:bg-yellow-400 transition focus:outline-none focus:ring-2 focus:ring-goldL">
                      Get Started Now
                    </button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* Search, Cart, and Category Filter */}
        <header className="flex justify-between items-center mb-8">
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
            <div className="relative">
              <Link to="/cart">
              
              <ShoppingCart className="text-goldD cursor-pointer" size={24} />
              </Link>
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                  {cartCount}
                </span>
              )}
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main>
          {!selectedShop ? (
            <>
              <section className="mb-8">
                <h2 className="text-2xl font-bold text-brown mb-4">Top Rated Shops</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {shops
                    .sort((a, b) => b.rating - a.rating)
                    .slice(0, 3)
                    .map(shop => (
                      <div
                        key={shop.id}
                        className="bg-page border border-gray-200 rounded-lg p-6 cursor-pointer hover:shadow-lg transition"
                        onClick={() => setSelectedShop(shop)}
                      >
                        <h2 className="text-xl font-semibold text-gray-800 mb-2">{shop.name}</h2>
                        <div className="flex items-center mb-2">
                          <Star className="text-yellow-400 mr-1" size={18} fill="currentColor" />
                          <span className="text-gray-700">{shop.rating.toFixed(1)}</span>
                        </div>
                        <p className="text-gray-600">{shop.products.length} products</p>
                      </div>
                    ))}
                </div>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-brown mb-4">All Shops</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredShops.map(shop => (
                    <div
                      key={shop.id}
                      className="bg-page border border-gray-200 rounded-lg p-6 cursor-pointer hover:shadow-lg transition"
                      onClick={() => setSelectedShop(shop)}
                    >
                      <h2 className="text-xl font-semibold text-gray-800 mb-2">{shop.name}</h2>
                      <div className="flex items-center mb-2">
                        <Star className="text-yellow-400 mr-1" size={18} fill="currentColor" />
                        <span className="text-gray-700">{shop.rating.toFixed(1)}</span>
                      </div>
                      <p className="text-gray-600">{shop.products.length} products</p>
                    </div>
                  ))}
                </div>
              </section>
            </>
          ) : (
            <div className="mb-8">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-gray-800">{selectedShop.name}</h2>
                <button
                  onClick={() => setSelectedShop(null)}
                  className="bg-gray-300 text-gray-800 px-4 py-2 rounded hover:bg-gray-400 transition focus:outline-none"
                >
                  Back to Marketplace
                </button>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {selectedShop.products.map(product => (
                  <div key={product.id} className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition">
                    <img src={product.image} alt={product.name} className="w-full h-40 object-cover mb-4 rounded" />
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">{product.name}</h3>
                    <p className="text-green-600 font-bold mb-4">{product.price.toFixed(2)} JD</p>
                    <button
                      onClick={() => addToCart(product)}
                      className="bg-goldD text-white px-4 py-2 rounded hover:bg-yellow-400 transition focus:outline-none flex items-center justify-center w-full"
                    >
                      <ShoppingCart size={18} className="mr-2" />
                      Add to Cart
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default Marketplace;