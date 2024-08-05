import React, { useEffect, useRef } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { FaLeaf, FaUsers, FaChartLine } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

function OurStory() {
  const controls = useAnimation();
  const milestonesRef = useRef([]);

  useEffect(() => {
    const options = {
      threshold: 0.5,
      rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
        }
      });
    }, options);

    milestonesRef.current.forEach((milestone) => {
      if (milestone) observer.observe(milestone);
    });

    return () => {
      milestonesRef.current.forEach((milestone) => {
        if (milestone) observer.unobserve(milestone);
      });
    };
  }, []);

  const fadeInVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <div className="bg-white text-gray-800">
      <Header />
      {/* <Header /> */}
      
      {/* Hero Section */}
      <motion.section 
        className="relative bg-goldL text-white py-24 lg:py-32"
        initial="hidden"
        animate="visible"
        variants={fadeInVariants}
      >
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl lg:text-6xl font-bold mb-6">Our Story</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Discover the journey of Bee Wise, from our humble beginnings to becoming a leading name in the beekeeping community.
          </p>
        </div>
        <div className="absolute bottom-0 left-0 w-full overflow-hidden">
          <svg viewBox="0 0 1440 100" className="relative block w-full h-20">
            <path fill="#ffffff" fillOpacity="1" d="M0,32L120,42.7C240,53,480,75,720,74.7C960,75,1200,53,1320,42.7L1440,32L1440,100L1320,100C1200,100,960,100,720,100C480,100,240,100,120,100L0,100Z"></path>
          </svg>
        </div>
      </motion.section>

      <div className="container mx-auto px-4 py-16">
        {/* Our Mission */}
        <motion.section 
          className="mb-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInVariants}
        >
          <h2 className="text-4xl font-bold mb-12 text-goldD text-center">Our Mission</h2>
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="flex-1 transition-transform duration-300 hover:scale-105">
              <img src="./src/assets/imgs/ourStoryImg.png" alt="Our Mission" className="w-full h-auto rounded-lg shadow-xl" />
            </div>
            <div className="flex-1">
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                At Bee Wise, our mission is to empower and support beekeepers of all levels through a comprehensive platform that offers resources, products, and community engagement. We are dedicated to promoting sustainable beekeeping practices and enhancing the quality of honey production in Jordan.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Our vision includes creating a thriving ecosystem where beekeepers can connect, collaborate, and grow. Through our platform, we strive to bridge the gap between beekeepers and suppliers, ensuring that everyone has access to the tools and knowledge needed for success.
              </p>
            </div>
          </div>
        </motion.section>

        {/* Our Values */}
        <motion.section 
          className="mb-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInVariants}
        >
          <h2 className="text-4xl font-bold mb-12 text-goldD text-center">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: <FaLeaf className="text-5xl mb-4 text-goldL" />, title: "Sustainability", description: "We prioritize eco-friendly practices and promote sustainable beekeeping methods." },
              { icon: <FaUsers className="text-5xl mb-4 text-goldL" />, title: "Community", description: "We foster a supportive community where beekeepers can share knowledge and experiences." },
              { icon: <FaChartLine className="text-5xl mb-4 text-goldL" />, title: "Innovation", description: "We continually seek innovative solutions to improve beekeeping practices and products." }
            ].map((value, index) => (
              <motion.div 
                key={index} 
                className="bg-page p-6 rounded-lg text-center transition-all duration-300 hover:scale-105 hover:shadow-xl"
                whileHover={{ y: -10 }}
              >
                {value.icon}
                <h3 className="text-2xl font-bold mb-2 text-brown">{value.title}</h3>
                <p className="text-gray-700">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Our Journey */}
        <motion.section 
          className="mb-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInVariants}
        >
          <h2 className="text-4xl font-bold mb-12 text-goldD text-center">Our Journey</h2>
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="flex-1">
              <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                Bee Wise was founded in 2024 by a group of passionate beekeepers who recognized the need for a unified platform to share knowledge, resources, and products. Our journey began with a small community forum and has evolved into a comprehensive service platform for beekeepers across Jordan.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                As we have grown, we have expanded our services to include educational resources, supplier connections, and a vibrant community forum. Our dedication to supporting local honey production and preserving Jordan's unique ecosystem remains at the heart of everything we do.
              </p>
            </div>
            <div className="flex-1 transition-transform duration-300 hover:scale-105">
              <img src="https://images.theconversation.com/files/413717/original/file-20210729-15-17venf5.jpg?ixlib=rb-4.1.0&rect=72%2C36%2C5934%2C3971&q=20&auto=format&w=320&fit=clip&dpr=2&usm=12&cs=strip" alt="Our Journey" className="w-full h-auto rounded-lg shadow-xl" />
            </div>
          </div>
        </motion.section>

        {/* Our Milestones */}
        <section className="mb-20">
          <h2 className="text-4xl font-bold mb-12 text-goldD text-center">Our Milestones</h2>
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-goldL"></div>
            {[
              { year: "2024", event: "Bee Wise is founded" },
              { year: "2025", event: "Launch of our online marketplace" },
              { year: "2026", event: "Introduction of educational programs" },
              { year: "2027", event: "Expansion to cover all of Jordan" }
            ].map((milestone, index) => (
              <motion.div
                key={index}
                className={`flex items-center mb-12 ${index % 2 === 0 ? 'flex-row-reverse' : ''}`}
                ref={(el) => (milestonesRef.current[index] = el)}
                initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <div className="w-5/12"></div>
                <div className="w-2/12 flex justify-center">
                  <motion.div
                    className="w-8 h-8 bg-goldD rounded-full flex items-center justify-center"
                    whileHover={{ scale: 1.2 }}
                  >
                    <div className="w-4 h-4 bg-goldL rounded-full"></div>
                  </motion.div>
                </div>
                <div className="w-5/12 bg-page p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
                  <h3 className="text-xl font-bold text-goldL">{milestone.year}</h3>
                  <p className="text-gray-700">{milestone.event}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Our Impact */}
        <motion.section 
          className="mb-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInVariants}
        >
          <h2 className="text-4xl font-bold mb-12 text-goldD text-center">Our Impact</h2>
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="flex-1 transition-transform duration-300 hover:scale-105">
              <img src="https://static.wixstatic.com/media/442507_b7cc238379584178bcc0f9d382cc1031~mv2.jpg/v1/fill/w_560,h_360,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/442507_b7cc238379584178bcc0f9d382cc1031~mv2.jpg" alt="Our Impact" className="w-full h-auto rounded-lg shadow-xl" />
            </div>
            <div className="flex-1">
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                Bee Wise has made a significant impact on the beekeeping community in Jordan. We have successfully connected thousands of beekeepers with valuable resources and support. Our platform has fostered a sense of community and collaboration among beekeepers, contributing to the overall health and sustainability of the beekeeping industry.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Through our initiatives, we have seen growth in local honey production, better beekeeping practices, and increased awareness of the importance of bees in our environment. Our continued efforts aim to strengthen these impacts and support the future of beekeeping in Jordan.
              </p>
            </div>
          </div>
        </motion.section>

        {/* Call to Action */}
        <motion.section 
          className="text-center py-16 bg-goldL text-white rounded-xl overflow-hidden relative"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInVariants}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-goldD to-goldL opacity-50"></div>
          <div className="relative z-10">
            <h2 className="text-4xl font-bold mb-6">Join Us on Our Journey</h2>
            <p className="text-xl mb-8 px-4 md:px-12 max-w-3xl mx-auto">
              Be part of a thriving beekeeping community. Whether you're an experienced beekeeper or just starting out, Bee Wise offers the resources and support you need to succeed.
            </p>
            <Link
              to="/Community"
              className="inline-block bg-white text-goldL font-bold py-3 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:bg-gray-100 hover:text-brown"
            >
              Get Started
            </Link>
          </div>
        </motion.section>
      </div>
      <Footer />
    </div>
  );
}

export default OurStory;