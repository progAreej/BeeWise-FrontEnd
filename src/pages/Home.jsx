import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import 'swiper/css/bundle';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectCoverflow } from 'swiper/modules';

const Home = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleAnswer = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: 'What is beekeeping?',
      answer: 'Beekeeping, also known as apiculture, is the maintenance of bee colonies, commonly in hives, by humans. It involves the care and management of bees to produce honey and other bee-related products.',
    },
    {
      question: 'How can I start beekeeping?',
      answer: 'Starting beekeeping involves getting the right equipment, understanding bee behavior, and learning about hive management. We offer comprehensive guides and resources to help you get started.',
    },
    {
      question: 'What products do you offer?',
      answer: 'We offer a variety of bee-related products including pure honey, beeswax candles, and complete beekeeping kits. Check out our marketplace for more details.',
    },
    {
      question: 'Why are bees important to the ecosystem?',
      answer: 'Bees play a crucial role in pollinating plants, which is essential for the production of fruits, vegetables, and seeds. They help maintain biodiversity and support the growth of trees and flowers.',
    },
    {
      question: 'How can I join the Bee Wise community?',
      answer: 'Joining the Bee Wise community is easy. Sign up on our website to access resources, join discussions, and participate in events. We welcome beekeepers of all levels to share their experiences and learn from each other.',
    },
  ];

  return (
    <div className='bg-page'>
      {/* Hero Section */}
      <div
        className="hero-section bg-fixed bg-cover bg-center   h-screen p-8 relative transition-transform duration-500 ease-in-out"
        style={{ backgroundImage: 'url(/src/assets/imgs/beekeep2.png)' }}
      >
        <Header />
        <div className="flex items-center justify-center h-full">
          <div className="text-center text-white mb-12">
            <h1 className="text-4xl md:text-6xl font-bold mb-12 animate__animated animate__fadeIn animate__delay-1s">
              Welcome to <span className='text-goldD'>Bee</span>Wise
            </h1>
            <p className="text-lg md:text-2xl mb-20 animate__animated animate__fadeIn animate__delay-2s">
              Discover sustainable beekeeping practices and high-quality bee products.
            </p>
            <Link
              to="/LogIn"
              className="bg-goldD hover:bg-goldL text-white font-bold py-4 px-8 rounded-xl transition-colors duration-300 transform hover:scale-105"
            >
              Explore Now
            </Link>
          </div>
        </div>
      </div>

      <section className="py-12">
           <div className="container mx-auto px-6 text-center">
            <h2 className="text-4xl font-bold text-goldD">Welcome to Bee Wise</h2>
             <p className="mt-4 text-brown">Your one-stop destination for everything beekeeping. Whether you're starting out or an experienced beekeeper, we have something for everyone.</p>
             </div>
         </section>

      {/* Section 1: Introduction to Beekeeping */}
      <section className="bg-page py-12">
        <div className="container mx-auto px-4 my-12">
          <div className="flex flex-col md:flex-row items-center">
            {/* Text Section */}
            <div className="md:w-1/2 mb-8 md:mb-0 px-4">
              <h2 className="text-4xl font-bold text-center md:text-left mb-6 text-goldD animate__animated animate__fadeIn animate__delay-1s">
                Discover the World of Bees & Beekeeping
              </h2>
              <p className="text-lg text-gray-800 mb-6 animate__animated animate__fadeIn animate__delay-2s">
                Bees are indispensable to our environment, acting as key pollinators for numerous plants and crops. Their intricate social structure, from the queen to the worker bees, and their remarkable behaviors make them a fascinating subject for study.
              </p>
              <p className="text-lg text-gray-800 mb-6 animate__animated animate__fadeIn animate__delay-3s">
                Beekeeping, or apiculture, is more than just honey production. It’s an art and science of managing bee colonies, understanding their needs, and ensuring their health and productivity. This practice enriches our lives by providing honey and supporting biodiversity.
              </p>
            </div>
            {/* Image Section */}
            <div className="md:w-1/2 px-4">
              <img
                src="/src/assets/imgs/Bees & Beekeeping.png"
                alt="Beekeeping"
                className="w-full h-auto object-cover rounded-lg shadow-xl border border-goldD transition-transform duration-500 hover:scale-105"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Products & Services */}
      <section className="py-16">
        <h2 className="text-4xl font-extrabold text-gray-900 text-center mb-12 animate__animated animate__fadeIn animate__delay-1s">
          Discover Our Products & Services
        </h2>
        <div className="container mx-auto max-w-7xl px-2  py-20">
          <Swiper
            effect="coverflow"
            grabCursor={true}
            centeredSlides={true}
            loop={true}
            slidesPerView={6}
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 40,
              modifier: 1,
              slideShadows: false,
            }}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            modules={[Autoplay, EffectCoverflow]}
            className="swiper-container"
            breakpoints={{
              640: { slidesPerView: 1, spaceBetween: 5 },
              768: { slidesPerView: 2, spaceBetween: 10 },
              1024: { slidesPerView: 6, spaceBetween: 30 },
            }}
          >
            {/* SwiperSlide Content */}
            {[
              {
                img: '/src/assets/imgs/bee-suit.jpg',
                title: 'Protective Bee Suit',
                description: 'High-quality suit offering full-body protection against stings.',
              },
              {
                img: '/src/assets/imgs/honey-extractor.jpg',
                title: 'Honey Extractor',
                description: 'Efficient extractor ensuring pure honey without damaging the comb.',
              },
              {
                img: '/src/assets/imgs/beekeeping-kit.jpg',
                title: 'Beekeeping Starter Kit',
                description: 'Complete kit with essential tools for starting your beekeeping journey.',
              },
              {
                img: '/src/assets/imgs/pollination-service.jpg',
                title: 'Pollination Service',
                description: 'Enhance crop yields with our professional pollination services.',
              },
              {
                img: '/src/assets/imgs/pollination-service.jpg',
                title: 'Pollination Service',
                description: 'Enhance crop yields with our professional pollination services.',
              },
              {
                img: '/src/assets/imgs/pollination-service.jpg',
                title: 'Pollination Service',
                description: 'Enhance crop yields with our professional pollination services.',
              },
            ].map((item, index) => (
              <SwiperSlide key={index} className="flex justify-center transition-transform duration-500 hover:scale-105">
                <div className="bg-white rounded-xl shadow-lg overflow-hidden w-80 mx-auto transform transition-transform duration-300 hover:scale-105">
                  <img src={item.img} alt={item.title} className="w-full h-48 object-cover transition-transform duration-300 transform hover:scale-105" />
                  <div className="p-6">
                    <h3 className="text-2xl font-bold text-gray-800 mb-2 transition-colors duration-300 hover:text-goldL">{item.title}</h3>
                    <p className="text-gray-600 mb-4 transition-opacity duration-300 hover:opacity-70">{item.description}</p>
                    <Link
                      to="#"
                      className="inline-block bg-yellow-500 text-white py-2 px-6 rounded-full shadow hover:bg-yellow-600 transition-transform duration-300 transform hover:scale-105"
                    >
                      Learn More
                    </Link>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>


      <section className="py-12 bg-page">
         <div className="container mx-auto px-6">
           <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
             {/* Learn About Beekeeping */}
             <div className="bg-white p-6 rounded shadow-md">
               <h3 className="text-xl font-bold">Learn About Beekeeping</h3>
               <p className="mt-2 text-gray-700">Explore our extensive collection of blogs, articles, and guides tailored to help you get started with beekeeping.</p>
               <a href="#" className="mt-4 inline-block text-yellow-500 hover:underline">Read More</a>
             </div>
             {/* Resources & Tools */}
            <div className="bg-white p-6 rounded shadow-md">
               <h3 className="text-xl font-bold">Resources & Tools</h3>
               <p className="mt-2 text-gray-700">Find essential resources, including raw material suppliers and the best geographical locations for beekeeping in Jordan.</p>
               <a href="#" className="mt-4 inline-block text-yellow-500 hover:underline">Explore Resources</a>
             </div>
             {/* Community Spotlight */}
             <div className="bg-white p-6 rounded shadow-md">
               <h3 className="text-xl font-bold">Community Spotlight</h3>
               <p className="mt-2 text-gray-700">Join discussions, share your experiences, and connect with fellow beekeepers in our vibrant community.</p>
               <a href="#" className="mt-4 inline-block text-yellow-500 hover:underline">Join the Community</a>
             </div>
           </div>
         </div>
       </section>


      {/* Section 3: Call to Action */}
      <section
  className="cta-section items-left py-16 text-white relative overflow-hidden bg-cover bg-center bg-fixed"
  style={{ backgroundImage: 'url(/src/assets/imgs/Vector2.png)' }}
>
  <div
    className="absolute inset-0 overflow-hidden z-0 bg-cover bg-center"
    style={{ backgroundImage: 'url(/src/assets/imgs/Vector.png)' }}
  ></div>
  
  <div className="relative max-w-7xl mx-auto px-4">
    <h2 className="text-4xl font-extrabold mb-4 text-gray-900 leading-tight animate__animated animate__fadeIn animate__delay-1s">
      Ready to Dive into Beekeeping?
    </h2>
    <p className="text-lg mb-8 animate__animated animate__fadeIn animate__delay-2s">
      Join us today and start your journey into the fascinating world of beekeeping. Explore our products, services, and resources designed to help you succeed.
    </p>
    <div className="flex justify-center">
      <Link
        to="/shop"
        className="bg-white text-yellow-500 py-3 px-8 rounded-full uppercase font-bold text-base tracking-wide transition-transform transform hover:scale-105 hover:bg-yellow-100"
      >
        Shop Now
      </Link>
    </div>
  </div>
</section>


      {/* Section 4: FAQs */}
      <section className="faq-section py-16 text-brown">
  <div className="container mx-auto flex  justify-center">
    <div className="w-full lg:w-1/2 px-4 mb-8 ">
      <h2 className="text-2xl text-brown font-extrabold text-center mb-8 animate__animated animate__fadeIn animate__delay-1s">
        <span className="text-6xl text-goldD">F</span>requently<br />
        <span className="text-6xl text-goldD">A</span>sked <br />
        <span className="text-6xl text-goldD">Q</span>uestions <br />
      </h2>
    </div>
    <div className="w-full lg:w-2/3 px-4 text-brown">
      {faqs.map((faq, index) => (
        <div
          key={index}
          className="bg-white border border-gray-200 rounded-lg shadow-md mb-4 transition-all duration-300 ease-in-out"
        >
          <button
            className="w-full px-4 py-2 text-left text-gray-900 font-bold focus:outline-none transition-transform duration-300 hover:scale-105"
            onClick={() => toggleAnswer(index)}
          >
            <h3 className="text-xl transition-colors duration-300 hover:text-goldL">{faq.question}</h3>
          </button>
          {openIndex === index && (
            <div className="px-4 py-2 text-gray-700 transition-opacity duration-300 ease-in-out">
              <p>{faq.answer}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  </div>
</section>

      <Footer />
    </div>
  );
};

export default Home;


// // src/Home.js
// import React from 'react';
// // import './index.css'; // Ensure Tailwind CSS is imported

// const Home = () => {
//   return (
//     <div className="font-sans antialiased bg-gray-100">
//       {/* Navbar */}
//       <nav className="bg-white shadow-md">
//         <div className="container mx-auto px-6 py-3 flex justify-between items-center">
//           <div>
//             <a href="#" className="text-2xl font-bold text-gray-800 hover:text-gray-700">Bee Wise</a>
//           </div>
//           <div className="flex space-x-4">
//             <a href="#" className="text-gray-800 hover:text-gray-600">Home</a>
//             <a href="#" className="text-gray-800 hover:text-gray-600">Learn</a>
//             <a href="#" className="text-gray-800 hover:text-gray-600">Community</a>
//             <a href="#" className="text-gray-800 hover:text-gray-600">Marketplace</a>
//             <a href="#" className="text-gray-800 hover:text-gray-600">Events</a>
//             <a href="#" className="text-gray-800 hover:text-gray-600">About Us</a>
//             <a href="#" className="text-gray-800 hover:text-gray-600">Contact</a>
//             <a href="#" className="px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-400">Login / Register</a>
//           </div>
//         </div>
//       </nav>

//       {/* Hero Section */}
//       <section className="bg-cover bg-center h-96 text-white" style={{ backgroundImage: "url('path/to/your/hero-image.jpg')" }}>
//         <div className="container mx-auto h-full flex items-center justify-center">
//           <div className="text-center">
//             <h1 className="text-4xl font-bold">Empowering Beekeepers, Connecting Communities</h1>
//             <p className="mt-4 text-lg">Discover the art of beekeeping and join a vibrant community of enthusiasts.</p>
//             <a href="#" className="mt-6 px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-400">Join Our Community</a>
//           </div>
//         </div>
//       </section>

//       {/* Introduction */}
//       <section className="py-12">
//         <div className="container mx-auto px-6 text-center">
//           <h2 className="text-3xl font-bold">Welcome to Bee Wise</h2>
//           <p className="mt-4 text-gray-700">Your one-stop destination for everything beekeeping. Whether you're starting out or an experienced beekeeper, we have something for everyone.</p>
//         </div>
//       </section>

//       {/* Featured Sections */}
//       <section className="py-12 bg-gray-200">
//         <div className="container mx-auto px-6">
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//             {/* Learn About Beekeeping */}
//             <div className="bg-white p-6 rounded shadow-md">
//               <h3 className="text-xl font-bold">Learn About Beekeeping</h3>
//               <p className="mt-2 text-gray-700">Explore our extensive collection of blogs, articles, and guides tailored to help you get started with beekeeping.</p>
//               <a href="#" className="mt-4 inline-block text-yellow-500 hover:underline">Read More</a>
//             </div>
//             {/* Resources & Tools */}
//             <div className="bg-white p-6 rounded shadow-md">
//               <h3 className="text-xl font-bold">Resources & Tools</h3>
//               <p className="mt-2 text-gray-700">Find essential resources, including raw material suppliers and the best geographical locations for beekeeping in Jordan.</p>
//               <a href="#" className="mt-4 inline-block text-yellow-500 hover:underline">Explore Resources</a>
//             </div>
//             {/* Community Spotlight */}
//             <div className="bg-white p-6 rounded shadow-md">
//               <h3 className="text-xl font-bold">Community Spotlight</h3>
//               <p className="mt-2 text-gray-700">Join discussions, share your experiences, and connect with fellow beekeepers in our vibrant community.</p>
//               <a href="#" className="mt-4 inline-block text-yellow-500 hover:underline">Join the Community</a>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Marketplace Highlights */}
//       <section className="py-12">
//         <div className="container mx-auto px-6">
//           <h2 className="text-3xl font-bold text-center">Marketplace Highlights</h2>
//           <p className="mt-4 text-gray-700 text-center">Browse and buy the best honey, beeswax, and beekeeping equipment from our trusted sellers.</p>
//           <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
//             {/* Product Example */}
//             <div className="bg-white p-6 rounded shadow-md">
//               <img src="path/to/product-image.jpg" alt="Product Name" className="w-full h-48 object-cover rounded" />
//               <h3 className="text-xl font-bold mt-4">Product Name</h3>
//               <p className="mt-2 text-gray-700">$20.00</p>
//               <a href="#" className="mt-4 inline-block text-yellow-500 hover:underline">View Product</a>
//             </div>
//             {/* Add more products as needed */}
//           </div>
//         </div>
//       </section>

//       {/* Upcoming Events */}
//       <section className="py-12 bg-gray-200">
//         <div className="container mx-auto px-6 text-center">
//           <h2 className="text-3xl font-bold">Upcoming Events</h2>
//           <p className="mt-4 text-gray-700">Stay updated with the latest events, workshops, and community gatherings related to beekeeping.</p>
//           <a href="#" className="mt-6 px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-400">View All Events</a>
//         </div>
//       </section>

//       {/* News & Announcements */}
//       <section className="py-12">
//         <div className="container mx-auto px-6">
//           <h2 className="text-3xl font-bold text-center">News & Announcements</h2>
//           <p className="mt-4 text-gray-700 text-center">Check out the latest news, updates, and special offers from Bee Wise.</p>
//           <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
//             {/* Announcement Example */}
//             <div className="bg-white p-6 rounded shadow-md">
//               <h3 className="text-xl font-bold">New Blog Post: The Basics of Beekeeping</h3>
//               <p className="mt-2 text-gray-700">Learn the essential steps to start your beekeeping journey in our latest blog post.</p>
//               <a href="#" className="mt-4 inline-block text-yellow-500 hover:underline">Read More</a>
//             </div>
//             {/* Add more announcements as needed */}
//           </div>
//         </div>
//       </section>

//       {/* Subscription Call to Action */}
//       <section className="py-12 bg-yellow-500">
//         <div className="container mx-auto px-6 text-center text-white">
//           <h2 className="text-3xl font-bold">Stay Connected with Bee Wise</h2>
//           <p className="mt-4">Subscribe to our newsletter for the latest tips, events, and exclusive offers.</p>
//           <form className="mt-6 flex justify-center">
//             <input type="email" className="p-2 rounded-l bg-white text-gray-800" placeholder="Your email" />
//             <button type="submit" className="p-2 bg-gray-800 text-white rounded-r hover:bg-gray-700">Subscribe</button>
//           </form>
//         </div>
//       </section>

//       {/* Footer */}
//       <footer className="bg-gray-800 text-white py-6">
//         <div className="container mx-auto px-6">
//           <div className="flex flex-wrap justify-between">
//             <div className="w-full md:w-1/4">
//               <h3 className="text-lg font-bold">Bee Wise</h3>
//               <p className="mt-2">Your gateway to the world of beekeeping. Discover, learn, and connect with our community.</p>
//             </div>
//             <div className="w-full md:w-1/4">
//               <h3 className="text-lg font-bold">Quick Links</h3>
//               <ul className="mt-2">
//                 <li><a href="#" className="text-gray-400 hover:underline">Home</a></li>
//                 <li><a href="#" className="text-gray-400 hover:underline">Learn</a></li>
//                 <li><a href="#" className="text-gray-400 hover:underline">Community</a></li>
//                 <li><a href="#" className="text-gray-400 hover:underline">Marketplace</a></li>
//                 <li><a href="#" className="text-gray-400 hover:underline">Events</a></li>
//                 <li><a href="#" className="text-gray-400 hover:underline">About Us</a></li>
//                 <li><a href="#" className="text-gray-400 hover:underline">Contact</a></li>
//               </ul>
//             </div>
//             <div className="w-full md:w-1/4">
//               <h3 className="text-lg font-bold">Follow Us</h3>
//               <div className="flex space-x-4 mt-2">
//                 <a href="#" className="text-gray-400 hover:text-white">Facebook</a>
//                 <a href="#" className="text-gray-400 hover:text-white">Twitter</a>
//                 <a href="#" className="text-gray-400 hover:text-white">Instagram</a>
//               </div>
//             </div>
//           </div>
//           <div className="mt-6 text-center text-gray-400">
//             &copy; 2024 Bee Wise. All rights reserved.
//           </div>
//         </div>
//       </footer>
//     </div>
//   );
// };

// export default Home;
