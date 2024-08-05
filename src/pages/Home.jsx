
import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import 'swiper/css/bundle';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectCoverflow, Parallax } from 'swiper/modules';
import { motion } from 'framer-motion';
import Subscription from './Subscription';

const Home = () => {
  const [openIndex, setOpenIndex] = useState(0);
  const [scrollY, setScrollY] = useState(0);
  

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleAnswer = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // ... (keep your existing productData and faqs arrays)
  
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

  
  const productData = [
    {
      img: 'https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/78/4329453/1.jpg?3751',
      title: 'Protective Bee Suit',
      description: 'High-quality suit offering full-body protection against stings.',
    },
    {
      img: 'https://5.imimg.com/data5/SELLER/Default/2022/1/RU/AK/ZG/82851713/honey-extractors.jpg',
      title: 'Honey Extractor',
      description: 'Efficient extractor ensuring pure honey without damaging the comb.',
    },
    {
      img: 'https://m.media-amazon.com/images/I/81pZIivpcsS.jpg',
      title: 'Beekeeping Starter Kit',
      description: 'Complete kit with essential tools for starting your beekeeping journey.',
    },
    
    {
      img: 'https://artizarts.com/wp-content/uploads/honey-jar-free-img.jpg',
      title: 'Organic Honey Jar',
      description: 'Pure, raw, and organic honey directly from our beehives.',
    },
    {
      img: 'https://i.ebayimg.com/images/g/T-MAAOSwGIViQWjr/s-l1600.webp',
      title: 'Bee Hive',
      description: 'Durable and easy-to-maintain hive for optimal bee health.',
    },
    {
      img: 'https://m.media-amazon.com/images/I/71ktAEtbIgL.jpg',
      title: 'Beekeeping Tool Kit',
      description: 'A comprehensive set of tools for beekeeping enthusiasts.',
    },
    {
      img: 'https://img1.exportersindia.com/product_images/bc-full/2021/10/7753500/pure-beeswax-1633939230-6032679.jpeg',
      title: 'Pure Beeswax',
      description: 'High-quality beeswax for various uses, including candles and cosmetics.',
    },
    {
      img: 'https://m.media-amazon.com/images/I/816bW+DGgpL.jpg',
      title: 'Bee Smoker',
      description: 'Essential tool for calming bees while inspecting the hive.',
    },
    {
      img: 'https://www.honeygreen.com/wp-content/uploads/2021/12/propolis-min.jpg',
      title: 'Propolis Extract',
      description: 'Natural bee product with numerous health benefits.',
    },
    {
      img: 'https://images.squarespace-cdn.com/content/v1/56e4ca0540261d39b90e4b18/1605047208324-PONGEYKEAKTMM1LANHJ5/1ED706BF-A70B-4F26-B3D5-266B449DDA8A_1_105_c.jpeg',
      title: 'Queen Bee',
      description: 'Order a new queen bee for your hive, ensuring colony health.',
    },
    {
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTih4Qxka31Msop4q3ukdm4SK2_VWVG8-2Liw&s',
      title: 'Honeycomb',
      description: 'Fresh honeycomb straight from the hive, rich in natural flavors.',
    },
  ];

  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      location: "Amman, Jordan",
      feedback: "BeeWise has completely transformed my beekeeping experience. Their resources and community support are invaluable. Highly recommend!",
      image: "https://cdn.pixabay.com/photo/2021/02/02/03/35/girl-5972597_1280.jpg"
    },
    {
      id: 2,
      name: "Ahmed Al-Farsi",
      location: "Irbid, Jordan",
      feedback: "The beekeeping guides and articles on BeeWise are top-notch. I've learned so much about maintaining a healthy hive.",
      image: "https://img.freepik.com/free-photo/beekeeper-working-bee-farm_23-2151441143.jpg?size=626&ext=jpg&ga=GA1.1.2082370165.1716681600&semt=ais_user"
    },
    {
      id: 3,
      name: "Layla Nasser",
      location: "Zarqa, Jordan",
      feedback: "I love the marketplace on BeeWise. It's great to find high-quality bee products and connect with other beekeepers.",
      image: "https://img.freepik.com/free-photo/front-view-woman-wearing-halal-outdoors_23-2150701516.jpg?size=626&ext=jpg&ga=GA1.1.2082370165.1716681600&semt=ais_user"
    },
  ];
  

  return (
    <div className=''>
      <motion.div
              className="hero-section bg-fixed bg-cover bg-center  h-screen p-8 relative transition-transform duration-500 ease-in-out"

        // className="hero-section bg-fixed bg-cover bg-center h-screen p-8 relative"
        style={{ 
          backgroundImage: 'url(/src/assets/imgs/beekeep2.png)',
          // backgroundPositionY: scrollY * 0.5
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <Header />
        <div className="flex items-center justify-center h-full">
          <motion.div 
            className="text-center text-white mb-12"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-12">
              Welcome to <span className='text-goldD'>Bee</span>Wise
            </h1>
            <p className="text-lg md:text-2xl mb-20">
              Discover sustainable beekeeping practices and high-quality bee products.
            </p>
            <Link
              to="/LogIn"
              className="inline-block bg-goldD hover:bg-goldL text-white font-bold py-3 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
            >
              Explore Now
            </Link>
          </motion.div>
        </div>
      </motion.div>

      <motion.section 
        className="py-12"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-goldD">Welcome to Bee Wise</h2>
          <p className="mt-4 text-brown">Your one-stop destination for everything beekeeping. Whether you're starting out or an experienced beekeeper, we have something for everyone.</p>
        </div>
      </motion.section>

      <motion.section 
        className="bg-white py-6"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <motion.div 
              className="md:w-1/2 mb-8 md:mb-0 px-4"
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-center md:text-left mb-6 text-goldD">
                Discover the World of Bees & Beekeeping
              </h2>
              <p className="text-lg text-gray-800 mb-4">
                Bees are indispensable to our environment, acting as key pollinators for numerous plants and crops. Their intricate social structure, from the queen to the worker bees, and their remarkable behaviors make them a fascinating subject for study.
              </p>
              <p className="text-lg text-gray-800 mb-4">
                Beekeeping, or apiculture, is more than just honey production. It's an art and science of managing bee colonies, understanding their needs, and ensuring their health and productivity. This practice enriches our lives by providing honey and supporting biodiversity.
              </p>
              <Link
                to="/LogIn"
                className="inline-block bg-goldD hover:bg-goldL text-white font-bold py-3 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
              >
                Explore Now
              </Link>
            </motion.div>

            <motion.div 
              className="md:w-1/2 p-4 rounded-lg overflow-hidden shadow-lg"
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="relative">
                <img
                  src="/src/assets/imgs/Bees & Beekeeping.png"
                  alt="Beekeeping"
                  className="w-full h-auto object-cover rounded-lg shadow-xl border border-goldD transition-transform duration-500 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-20"></div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      <motion.section 
        className="my-12 rounded-xl "
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl font-bold text-goldD text-center my-6 ">
          Worthy-Products
        </h2>
        <div className="container mx-auto max-w-7xl py-12">
          <Swiper
            effect="coverflow"
            grabCursor={true}
            centeredSlides={true}
            loop={true}
            slidesPerView={3}
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: false,
            }}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
            }}
            parallax={true}
            modules={[Autoplay, EffectCoverflow, Parallax]}
            className="swiper-container"
            breakpoints={{
              260: { slidesPerView: 1, spaceBetween: 20 },
              520: { slidesPerView: 2, spaceBetween: 40 },
              780: { slidesPerView: 4, spaceBetween: 60 },
              1040: { slidesPerView: 6, spaceBetween: 60 },
            }}
          >
            {productData.map((item, index) => (
              <SwiperSlide key={index} className="flex justify-center mr-20 ">
                <motion.div 
                  className="my-2 bg-white rounded-xl shadow-lg overflow-hidden w-80 h-full transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
                  whileHover={{ rotateY: 8 }}
                >
                  <img 
                    src={item.img} 
                    alt={item.title} 
                    className="w-full h-64 object-cover transition-transform duration-300 transform hover:scale-105" 
                  />
                  <div className="p-6">
                    <h3 className="text-2xl font-bold text-goldD mb-2 transition-colors duration-300 hover:text-goldL">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 mb-4 transition-opacity duration-300 hover:opacity-70">
                      {item.description}
                    </p>
                    <Link
                      to="/Marketplace"
                      className="inline-block bg-goldD hover:bg-goldL text-white font-bold py-2 px-4 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
                      >
                      Learn More
                    </Link>
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </motion.section>
                      <motion.section
                        className="cta-section items-left py-20 text-white relative overflow-hidden bg-cover bg-center bg-fixed"
                        style={{ 
                          backgroundImage: 'url(/src/assets/imgs/bgb.png)',
                          height: '400px',   
                        }}
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                      >
                        <div
                          className="absolute inset-0 overflow-hidden z-0 bg-cover bg-center"
                          style={{ 
                            backgroundImage: 'url(/src/assets/imgs/Exclude.png)'
                          }}
                        ></div>
                
                        <motion.div 
                          className="relative max-w-7xl mx-auto px-4"
                          initial={{ y: 50, opacity: 0 }}
                          whileInView={{ y: 0, opacity: 1 }}
                          transition={{ duration: 0.8 }}
                          viewport={{ once: true }}
                        >
                          <h2 className="text-4xl font-bold mb-4 text-brown leading-tight">
                            Ready to Dive into Beekeeping?
                          </h2>
                          <p className="text-xl mb-8">
                            Join us today and start your journey into the fascinating world of beekeeping. <br /> Explore our products, services, and resources designed to help you succeed.
                          </p>
                          <div className="flex justify-start">
                            <Link
                              to="/shop"
                              className="bg-white text-yellow-500 py-3 px-8 rounded-xl uppercase font-bold text-base tracking-wide transition-all duration-300 transform hover:scale-105 hover:text-brown hover:shadow-lg"
                            >
                             Subscribe Now
                            </Link>
                          </div>
                        </motion.div>
                      </motion.section>
 
      <motion.section 
      className="py-20 bg-white"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Card 1 */}
          <motion.div 
            className="bg-white p-8 rounded shadow-md transition-all duration-300 hover:shadow-xl"
            whileHover={{ scale: 1.05 }}
          >
            <h3 className="text-xl font-bold text-brown">Learn About Beekeeping</h3>
            <p className="mt-2 text-gray-700">Explore our extensive collection of blogs, articles, and guides tailored to help you get started with beekeeping.</p>
            <a href="#" className="mt-4 inline-block text-yellow-500 hover:underline transition-colors duration-300 hover:text-goldD">Read More</a>
          </motion.div>
          
          {/* Card 2 */}
          <motion.div 
            className="bg-white p-8 rounded shadow-md transition-all duration-300 hover:shadow-xl"
            whileHover={{ scale: 1.05 }}
          >
            <h3 className="text-xl font-bold text-brown">Resources & Tools</h3>
            <p className="mt-2 text-gray-700">Find essential resources, including raw material suppliers and the best geographical locations for beekeeping in Jordan.</p>
            <a href="#" className="mt-4 inline-block text-yellow-500 hover:underline transition-colors duration-300 hover:text-goldD">Explore Resources</a>
          </motion.div>
          
          {/* Card 3 */}
          <motion.div 
            className="bg-white p-8 rounded shadow-md transition-all duration-300 hover:shadow-xl"
            whileHover={{ scale: 1.05 }}
          >
            <h3 className="text-xl font-bold text-brown">Community Spotlight</h3>
            <p className="mt-2 text-gray-700">Join discussions, share your experiences, and connect with fellow beekeepers in our vibrant community.</p>
            <a href="#" className="mt-4 inline-block text-yellow-500 hover:underline transition-colors duration-300 hover:text-goldD">Join the Community</a>
          </motion.div>
          
          {/* Card 4 */}
          <motion.div 
            className="bg-white p-8 rounded shadow-md transition-all duration-300 hover:shadow-xl"
            whileHover={{ scale: 1.05 }}
          >
            <h3 className="text-xl font-bold text-brown">Our Products</h3>
            <p className="mt-2 text-gray-700">Browse our curated selection of beekeeping products designed to enhance your beekeeping experience.</p>
            <a href="#" className="mt-4 inline-block text-yellow-500 hover:underline transition-colors duration-300 hover:text-goldD">Shop Now</a>
          </motion.div>
          
          {/* Card 5 */}
          <motion.div 
            className="bg-white p-8 rounded shadow-md transition-all duration-300 hover:shadow-xl"
            whileHover={{ scale: 1.05 }}
          >
            <h3 className="text-xl font-bold text-brown">Beekeeping Workshops</h3>
            <p className="mt-2 text-gray-700">Participate in our workshops to gain hands-on experience and deepen your knowledge of beekeeping.</p>
            <a href="#" className="mt-4 inline-block text-yellow-500 hover:underline transition-colors duration-300 hover:text-goldD">Learn More</a>
          </motion.div>
          
          {/* Card 6 */}
          <motion.div 
            className="bg-white p-8 rounded shadow-md transition-all duration-300 hover:shadow-xl"
            whileHover={{ scale: 1.05 }}
          >
            <h3 className="text-xl font-bold text-brown">Beekeeping FAQs</h3>
            <p className="mt-2 text-gray-700">Find answers to frequently asked questions about beekeeping to help you on your journey.</p>
            <a href="#" className="mt-4 inline-block text-yellow-500 hover:underline transition-colors duration-300 hover:text-goldD">Get Answers</a>
          </motion.div>
        </div>
      </div>
    </motion.section>


      <motion.section 
        className="faq-section py-16 text-brown bg-page"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="container mx-auto flex flex-col lg:flex-row justify-center items-start">
          <motion.div 
            className="w-full lg:w-1/3 px-4 mb-8 lg:sticky lg:top-0"
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl text-brown font-extrabold text-center lg:text-left mb-8">
              <span className="text-6xl text-goldD">F</span>requently<br />
              <span className="text-6xl text-goldD">A</span>sked<br />
              <span className="text-6xl text-goldD">Q</span>uestions <br />
            </h2>
          </motion.div>
          <div className="w-full lg:w-2/3 px-4 text-brown">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                className="bg-white border border-gray-200 rounded-lg shadow-md mb-4 transition-all duration-300 ease-in-out"
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <button
                  className="w-full px-4 py-2 text-left text-gray-900 font-bold focus:outline-none transition-all duration-300 hover:bg-gray-50"
                  onClick={() => toggleAnswer(index)}
                >
                  <h3 className="text-xl transition-colors duration-300 hover:text-goldL">{faq.question}</h3>
                </button>
                <motion.div 
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: openIndex === index ? 'auto' : 0, opacity: openIndex === index ? 1 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="px-4 py-2 text-gray-700 overflow-hidden"
                >
                  <p>{faq.answer}</p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      <div className="bg-white py-20">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-goldD mb-12 text-center">What Our Customers Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map(testimonial => (
            <div key={testimonial.id} className="bg-page p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl hover:bg-white">
              <div className="flex items-center mb-4">
                <img src={testimonial.image} alt={testimonial.name} className="w-16 h-16 rounded-full object-cover mr-4" />
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">{testimonial.name}</h3>
                  <p className="text-gray-500">{testimonial.location}</p>
                </div>
              </div>
              <p className="text-gray-700">{testimonial.feedback}</p>
            </div>
          ))}
        </div>
      </div>
    </div>

      <Footer />
    </div>
  );
};

export default Home;