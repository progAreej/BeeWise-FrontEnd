// // import React from 'react';
// // import { useSpring, animated } from '@react-spring/web'; // For animations
// // import { FaFilter, FaSort, FaSearch } from 'react-icons/fa'; // Icons for UI

// // const products = [
// //   // Example products
// //   {
// //     id: 1,
// //     name: 'Raw Honey',
// //     description: '100% pure, organic raw honey.',
// //     price: '$15.00',
// //     image: 'path_to_image1.png',
// //   },
// //   {
// //     id: 2,
// //     name: 'Beeswax Candles',
// //     description: 'Handcrafted beeswax candles.',
// //     price: '$10.00',
// //     image: 'path_to_image2.png',
// //   },
// //   {
// //     id: 3,
// //     name: 'Honeycomb',
// //     description: 'Fresh honeycomb straight from the hive.',
// //     price: '$20.00',
// //     image: 'path_to_image3.png',
// //   },
// //   // Add more products as needed
// // ];

// // const BrowseProduct = () => {
// //   // Animation for the page transitions
// //   const fadeIn = useSpring({
// //     opacity: 1,
// //     from: { opacity: 0 },
// //     config: { duration: 800 },
// //   });

// //   return (
// //     <animated.div style={fadeIn} className="container mx-auto px-6 py-8 bg-gradient-to-b from-gray-50 to-gray-100">
// //       <h1 className="text-4xl font-extrabold mb-8 text-center text-gray-800">Browse Our Products</h1>

// //       {/* Search and Filter */}
// //       <div className="flex flex-col md:flex-row items-center justify-between mb-8">
// //         <div className="flex items-center border rounded-lg overflow-hidden border-gray-300">
// //           <input
// //             type="text"
// //             placeholder="Search products..."
// //             className="px-4 py-2 w-full border-none outline-none"
// //           />
// //           <FaSearch className="text-gray-600 p-2" />
// //         </div>
// //         <div className="flex items-center mt-4 md:mt-0">
// //           <button className="bg-blue-500 text-white px-4 py-2 rounded-lg flex items-center">
// //             <FaFilter className="mr-2" />
// //             Filter
// //           </button>
// //           <button className="ml-4 bg-blue-500 text-white px-4 py-2 rounded-lg flex items-center">
// //             <FaSort className="mr-2" />
// //             Sort
// //           </button>
// //         </div>
// //       </div>

// //       {/* Product Grid */}
// //       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
// //         {products.map((product) => (
// //           <div key={product.id} className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform hover:scale-105">
// //             <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
// //             <div className="p-6">
// //               <h2 className="text-xl font-semibold mb-2 text-gray-800">{product.name}</h2>
// //               <p className="text-gray-600 mb-4">{product.description}</p>
// //               <p className="text-lg font-bold text-gray-900">{product.price}</p>
// //               <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-lg w-full hover:bg-blue-600">
// //                 Add to Cart
// //               </button>
// //             </div>
// //           </div>
// //         ))}
// //       </div>
// //     </animated.div>
// //   );
// // };

// // export default BrowseProduct;


// // import React, { useState } from 'react';
// // import { useSpring, animated } from '@react-spring/web';
// // import { FaFilter, FaSort, FaSearch, FaBee, FaLeaf, FaShoppingBasket } from 'react-icons/fa';
// import React, { useState } from 'react';
// import { useSpring, animated } from '@react-spring/web';
// import { FaFilter, FaSort, FaSearch, FaBee, FaLeaf, FaShoppingBasket } from 'react-icons/fa';

// // Sample product data
// const productsForBeekeepers = [
//   {
//     id: 1,
//     name: 'Professional Beekeeping Suit',
//     description: 'Complete protection for serious beekeepers.',
//     price: '$129.99',
//     image: 'path_to_beekeeper_suit.jpg',
//   },
//   {
//     id: 2,
//     name: 'Smoker',
//     description: 'Essential tool for calm hive management.',
//     price: '$45.00',
//     image: 'path_to_smoker.jpg',
//   },
//   {
//     id: 3,
//     name: 'Hive Tool Set',
//     description: 'Versatile tools for hive maintenance.',
//     price: '$35.99',
//     image: 'path_to_hive_tools.jpg',
//   },
// ];

// const productsFromBeekeepers = [
//   {
//     id: 1,
//     name: 'Wildflower Honey',
//     description: 'Pure, raw honey from diverse wildflowers.',
//     price: '$18.99',
//     image: 'path_to_wildflower_honey.jpg',
//   },
//   {
//     id: 2,
//     name: 'Beeswax Candles Set',
//     description: 'Handcrafted, natural beeswax candles.',
//     price: '$24.99',
//     image: 'path_to_beeswax_candles.jpg',
//   },
//   {
//     id: 3,
//     name: 'Propolis Tincture',
//     description: 'Natural immune system booster.',
//     price: '$15.99',
//     image: 'path_to_propolis_tincture.jpg',
//   },
// ];

// const BrowseProducts = () => {
//   const [activeTab, setActiveTab] = useState('forBeekeepers');

//   const fadeIn = useSpring({
//     opacity: 1,
//     from: { opacity: 0 },
//     config: { duration: 800 },
//   });

//   const ProductGrid = ({ products }) => (
//     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//       {products.map((product) => (
//         <div key={product.id} className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform hover:scale-105">
//           <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
//           <div className="p-6">
//             <h2 className="text-xl font-semibold mb-2 text-amber-800">{product.name}</h2>
//             <p className="text-gray-600 mb-4">{product.description}</p>
//             <p className="text-lg font-bold text-amber-600">{product.price}</p>
//             <button className="mt-4 bg-amber-500 text-white px-4 py-2 rounded-lg w-full hover:bg-amber-600 transition duration-300">
//               Add to Cart
//             </button>
//           </div>
//         </div>
//       ))}
//     </div>
//   );

//   return (
//     <animated.div style={fadeIn} className="min-h-screen bg-gradient-to-b from-amber-50 to-amber-100">
//       <header className="bg-amber-600 text-white py-6">
//         <div className="container mx-auto px-6">
//           <h1 className="text-4xl font-extrabold text-center">Bee Wise Market</h1>
//           <p className="text-center mt-2">Your one-stop shop for all things beekeeping</p>
//         </div>
//       </header>

//       <main className="container mx-auto px-6 py-8">
//         <section className="mb-12">
//           <h2 className="text-3xl font-bold text-amber-800 mb-6">Discover Our Products</h2>
//           <div className="flex justify-center space-x-4 mb-8">
//             <button
//               onClick={() => setActiveTab('forBeekeepers')}
//               className={`px-6 py-2 rounded-full ${
//                 activeTab === 'forBeekeepers' ? 'bg-amber-600 text-white' : 'bg-white text-amber-600'
//               } transition duration-300`}
//             >
//               <FaBee className="inline-block mr-2" />
//               For Beekeepers
//             </button>
//             <button
//               onClick={() => setActiveTab('fromBeekeepers')}
//               className={`px-6 py-2 rounded-full ${
//                 activeTab === 'fromBeekeepers' ? 'bg-amber-600 text-white' : 'bg-white text-amber-600'
//               } transition duration-300`}
//             >
//               <FaLeaf className="inline-block mr-2" />
//               From Beekeepers
//             </button>
//           </div>

//           <div className="flex flex-col md:flex-row items-center justify-between mb-8">
//             <div className="flex items-center border rounded-lg overflow-hidden border-amber-300 bg-white">
//               <input
//                 type="text"
//                 placeholder="Search products..."
//                 className="px-4 py-2 w-full border-none outline-none"
//               />
//               <FaSearch className="text-amber-600 p-2" />
//             </div>
//             <div className="flex items-center mt-4 md:mt-0">
//               <button className="bg-amber-500 text-white px-4 py-2 rounded-lg flex items-center hover:bg-amber-600 transition duration-300">
//                 <FaFilter className="mr-2" />
//                 Filter
//               </button>
//               <button className="ml-4 bg-amber-500 text-white px-4 py-2 rounded-lg flex items-center hover:bg-amber-600 transition duration-300">
//                 <FaSort className="mr-2" />
//                 Sort
//               </button>
//             </div>
//           </div>

//           {activeTab === 'forBeekeepers' ? (
//             <ProductGrid products={productsForBeekeepers} />
//           ) : (
//             <ProductGrid products={productsFromBeekeepers} />
//           )}
//         </section>

//         <section className="mb-12 bg-white rounded-lg shadow-lg p-8">
//           <h2 className="text-3xl font-bold text-amber-800 mb-6">Why Choose Bee Wise?</h2>
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//             <div className="text-center">
//               <FaBee className="text-5xl text-amber-500 mx-auto mb-4" />
//               <h3 className="text-xl font-semibold mb-2">Quality Assured</h3>
//               <p className="text-gray-600">All products vetted for the highest quality standards</p>
//             </div>
//             <div className="text-center">
//               <FaLeaf className="text-5xl text-amber-500 mx-auto mb-4" />
//               <h3 className="text-xl font-semibold mb-2">Sustainably Sourced</h3>
//               <p className="text-gray-600">Supporting eco-friendly beekeeping practices</p>
//             </div>
//             <div className="text-center">
//               <FaShoppingBasket className="text-5xl text-amber-500 mx-auto mb-4" />
//               <h3 className="text-xl font-semibold mb-2">Wide Selection</h3>
//               <p className="text-gray-600">Everything you need for beekeeping and beyond</p>
//             </div>
//           </div>
//         </section>
//       </main>

//       <footer className="bg-amber-800 text-white py-8">
//         <div className="container mx-auto px-6 text-center">
//           <p>&copy; 2024 Bee Wise Market. All rights reserved.</p>
//           <p className="mt-2">Buzzing with excellence in beekeeping supplies and products.</p>
//         </div>
//       </footer>
//     </animated.div>
//   );
// };

// export default BrowseProducts;
import React, { useState } from 'react';
import { useSpring, animated } from '@react-spring/web';
import { FaFilter, FaSort, FaSearch, FaHive, FaLeaf, FaShoppingBasket } from 'react-icons/fa'; // Use FaHive instead of FaBee
import Header from '../components/Header';
import Footer from '../components/Footer';
// ... rest of your component

const BrowseProduct = () => {
  const [activeTab, setActiveTab] = useState('forBeekeepers');

  const fadeIn = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    config: { duration: 800 },
  });

  // Sample product data
  const productsForBeekeepers = [
    {
      id: 1,
      name: 'Professional Beekeeping Suit',
      description: 'Complete protection for serious beekeepers.',
      price: '$129.99',
      image: 'https://i5.walmartimages.com/seo/YFY-Professional-Beekeeping-Suit-for-Men-Women-Cotton-Beekeeper-Outfit-with-Gloves-Ventilated-Veil-Hood-Jacket-XXL-Cream-White_a0bb868c-4b96-4047-8941-adcbcb2fb67e.de0289d153962848b5c37b8056af0c2f.jpeg',
    },
    {
      id: 2,
      name: 'Smoker',
      description: 'Essential tool for calm hive management.',
      price: '$45.00',
      image: 'https://m.media-amazon.com/images/I/71BYRUH0VFL._AC_UF894,1000_QL80_.jpg',
    },
    {
      id: 3,
      name: 'Hive Tool Set',
      description: 'Versatile tools for hive maintenance.',
      price: '$35.99',
      image: 'path_to_hive_tools.jpg',
    },
    {
      id: 4,
      name: 'Bee Brush',
      description: 'Soft brush for gentle hive inspection.',
      price: '$12.99',
      image: 'path_to_bee_brush.jpg',
    },
    {
      id: 5,
      name: 'Queen Excluder',
      description: 'Keeps the queen in the brood box.',
      price: '$15.00',
      image: 'path_to_queen_excluder.jpg',
    },
    {
      id: 6,
      name: 'Bee Feeder',
      description: 'Provides food during low nectar flow.',
      price: '$9.99',
      image: 'path_to_bee_feeder.jpg',
    },
    {
      id: 7,
      name: 'Hive Stand',
      description: 'Elevates hive for better ventilation.',
      price: '$49.99',
      image: 'path_to_hive_stand.jpg',
    },
    {
      id: 8,
      name: 'Beekeeper Gloves',
      description: 'Durable gloves for handling bees.',
      price: '$19.99',
      image: 'path_to_beekeeper_gloves.jpg',
    },
    {
      id: 9,
      name: 'Beekeeping Book',
      description: 'Comprehensive guide for beginners.',
      price: '$22.99',
      image: 'path_to_beekeeping_book.jpg',
    },
    {
      id: 10,
      name: 'Honey Extractor',
      description: 'Efficient tool for honey extraction.',
      price: '$199.99',
      image: 'path_to_honey_extractor.jpg',
    },
  ];
  
  const productsFromBeekeepers = [
    {
      id: 1,
      name: 'Wildflower Honey',
      description: 'Pure, raw honey from diverse wildflowers.',
      price: '$18.99',
      image: 'path_to_wildflower_honey.jpg',
    },
    {
      id: 2,
      name: 'Beeswax Candles Set',
      description: 'Handcrafted, natural beeswax candles.',
      price: '$24.99',
      image: 'path_to_beeswax_candles.jpg',
    },
    {
      id: 3,
      name: 'Propolis Tincture',
      description: 'Natural immune system booster.',
      price: '$15.99',
      image: 'path_to_propolis_tincture.jpg',
    },
    {
      id: 4,
      name: 'Bee Pollen',
      description: 'Nutrient-rich bee pollen granules.',
      price: '$12.99',
      image: 'path_to_bee_pollen.jpg',
    },
    {
      id: 5,
      name: 'Raw Honeycomb',
      description: 'Delicious honeycomb straight from the hive.',
      price: '$29.99',
      image: 'path_to_raw_honeycomb.jpg',
    },
    {
      id: 6,
      name: 'Beeswax Lip Balm',
      description: 'Moisturizing lip balm made with beeswax.',
      price: '$3.99',
      image: 'path_to_beeswax_lip_balm.jpg',
    },
    {
      id: 7,
      name: 'Honey Mustard',
      description: 'Gourmet honey mustard sauce.',
      price: '$7.99',
      image: 'path_to_honey_mustard.jpg',
    },
    {
      id: 8,
      name: 'Beeswax Wraps',
      description: 'Eco-friendly food storage wraps.',
      price: '$19.99',
      image: 'path_to_beeswax_wraps.jpg',
    },
    {
      id: 9,
      name: 'Royal Jelly',
      description: 'Premium royal jelly for health benefits.',
      price: '$49.99',
      image: 'path_to_royal_jelly.jpg',
    },
    {
      id: 10,
      name: 'Honey-Infused Skincare Set',
      description: 'Nourishing skincare products with honey.',
      price: '$39.99',
      image: 'path_to_honey_infused_skincare_set.jpg',
    },
  ];
  

  const ProductGrid = ({ products }) => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {products.map((product) => (
        <div key={product.id} className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform hover:scale-105">
          <div>
          <img src={product.image} alt={product.name} className="w-96 h-48 object-cover" />
          </div>
          {/* <img src={product.image} alt={product.name} className="w-96 h-48 object-cover" /> */}
          <div className="p-6">
            <h2 className="text-xl font-semibold mb-2 text-amber-800">{product.name}</h2>
            <p className="text-gray-600 mb-4">{product.description}</p>
            <p className="text-lg font-bold text-amber-600">{product.price}</p>
            <button className="mt-4 bg-amber-500 text-white px-4 py-2 rounded-lg w-full hover:bg-amber-600 transition duration-300">
              Add to Cart
            </button>
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <animated.div style={fadeIn} className="min-h-screen bg-gradient-to-b from-amber-50 to-amber-100">
        <Header/>
      <header className="bg-amber-600 text-white py-6">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl font-extrabold text-center">Bee Wise Market</h1>
          <p className="text-center mt-2">Your one-stop shop for all things beekeeping</p>
        </div>
      </header>

      <main className="container mx-auto px-6 py-8">
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-amber-800 mb-6">Discover Our Products</h2>
          <div className="flex justify-center space-x-4 mb-8">
            <button
              onClick={() => setActiveTab('forBeekeepers')}
              className={`px-6 py-2 rounded-full ${
                activeTab === 'forBeekeepers' ? 'bg-amber-600 text-white' : 'bg-white text-amber-600'
              } transition duration-300`}
            >
              <FaHive className="inline-block mr-2" />
              For Beekeepers
            </button>
            <button
              onClick={() => setActiveTab('fromBeekeepers')}
              className={`px-6 py-2 rounded-full ${
                activeTab === 'fromBeekeepers' ? 'bg-amber-600 text-white' : 'bg-white text-amber-600'
              } transition duration-300`}
            >
              <FaLeaf className="inline-block mr-2" />
              From Beekeepers
            </button>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-between mb-8">
            <div className="flex items-center border rounded-lg overflow-hidden border-amber-300 bg-white">
              <input
                type="text"
                placeholder="Search products..."
                className="px-4 py-2 w-full border-none outline-none"
              />
              <FaSearch className="text-amber-600 p-2" />
            </div>
            <div className="flex items-center mt-4 md:mt-0">
              <button className="bg-amber-500 text-white px-4 py-2 rounded-lg flex items-center hover:bg-amber-600 transition duration-300">
                <FaFilter className="mr-2" />
                Filter
              </button>
              <button className="ml-4 bg-amber-500 text-white px-4 py-2 rounded-lg flex items-center hover:bg-amber-600 transition duration-300">
                <FaSort className="mr-2" />
                Sort
              </button>
            </div>
          </div>

          {activeTab === 'forBeekeepers' ? (
            <ProductGrid products={productsForBeekeepers} />
          ) : (
            <ProductGrid products={productsFromBeekeepers} />
          )}
        </section>

        <section className="mb-12 bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-3xl font-bold text-amber-800 mb-6">Why Choose Bee Wise?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <FaHive className="text-5xl text-amber-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Quality Assured</h3>
              <p className="text-gray-600">All products vetted for the highest quality standards</p>
            </div>
            <div className="text-center">
              <FaLeaf className="text-5xl text-amber-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Sustainably Sourced</h3>
              <p className="text-gray-600">Supporting eco-friendly beekeeping practices</p>
            </div>
            <div className="text-center">
              <FaShoppingBasket className="text-5xl text-amber-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Wide Selection</h3>
              <p className="text-gray-600">Everything you need for beekeeping and beyond</p>
            </div>
          </div>
        </section>
      </main>

     <Footer/>
    </animated.div>
  );
};

export default BrowseProduct;
