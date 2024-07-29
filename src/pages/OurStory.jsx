// src/pages/OurStory.js
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

function OurStory() {
  return (
    <div className="bg-page text-gray-800">
      <Header />

      <div className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <section className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4 text-brown transition-transform duration-300 hover:translate-y-1">
            Our Story
          </h1>
          <p className="text-lg text-gray-600 transition-opacity duration-300 hover:opacity-80">
            Discover the journey of Bee Wise, from our humble beginnings to becoming a leading name in the beekeeping community. 
            Our story is one of passion, dedication, and a commitment to making a difference.
          </p>
        </section>

        {/* Our Mission */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-goldD transition-transform duration-300 hover:translate-x-2">
            Our Mission
          </h2>
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="flex-1 transition-transform duration-300 hover:scale-105">
              <img src="./src/assets/imgs/ourStoryImg.png" alt="Our Mission" className="w-full h-auto rounded-lg shadow-lg border border-gray-200" />
            </div>
            <div className="flex-1">
              <p className="text-lg text-gray-700 leading-relaxed">
                At Bee Wise, our mission is to empower and support beekeepers of all levels through a comprehensive platform that offers resources, products, and community engagement. We are dedicated to promoting sustainable beekeeping practices and enhancing the quality of honey production in Jordan. Our vision includes creating a thriving ecosystem where beekeepers can connect, collaborate, and grow.
              </p>
              <p className="text-lg text-gray-700 mt-4">
                Through our platform, we strive to bridge the gap between beekeepers and suppliers, ensuring that everyone has access to the tools and knowledge needed for success. Our commitment extends beyond just business; we are passionate about preserving the environment and fostering a community that values the role of bees in our ecosystem.
              </p>
            </div>
          </div>
        </section>

        {/* Our Journey */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-goldD transition-transform duration-300 hover:translate-x-2">
            Our Journey
          </h2>
          <div className="flex flex-col lg:flex-row items-center gap-8">
            <div className="flex-1">
              <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                Bee Wise was founded in 2024 by a group of passionate beekeepers who recognized the need for a unified platform to share knowledge, resources, and products. Our journey began with a small community forum and has evolved into a comprehensive service platform for beekeepers across Jordan. We have continually adapted to meet the needs of our growing community.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                As we have grown, we have expanded our services to include educational resources, supplier connections, and a vibrant community forum. Our dedication to supporting local honey production and preserving Jordan's unique ecosystem remains at the heart of everything we do. Our journey is a testament to the power of community and collaboration.
              </p>
            </div>
            <div className="flex-1 transition-transform duration-300 hover:scale-105">
              <img src="./src/assets/imgs/ourStoryImg.png" alt="Our Journey" className="w-full h-auto rounded-lg shadow-lg border border-gray-200" />
            </div>
          </div>
        </section>

        {/* Our Impact */}
        <section>
          <h2 className="text-3xl font-bold mb-6 text-goldD transition-transform duration-300 hover:translate-x-2">
            Our Impact
          </h2>
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="flex-1 transition-transform duration-300 hover:scale-105">
              <img src="./src/assets/imgs/ourStoryImg.png" alt="Our Impact" className="w-full h-auto rounded-lg shadow-lg border border-gray-200" />
            </div>
            <div className="flex-1">
              <p className="text-lg text-gray-700 leading-relaxed">
                Bee Wise has made a significant impact on the beekeeping community in Jordan. We have successfully connected thousands of beekeepers with valuable resources and support. Our platform has fostered a sense of community and collaboration among beekeepers, contributing to the overall health and sustainability of the beekeeping industry. The positive feedback from our users reflects the meaningful difference we are making.
              </p>
              <p className="text-lg text-gray-700 mt-4">
                Through our initiatives, we have seen growth in local honey production, better beekeeping practices, and increased awareness of the importance of bees in our environment. Our continued efforts aim to strengthen these impacts and support the future of beekeeping in Jordan.
              </p>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
}

export default OurStory;
