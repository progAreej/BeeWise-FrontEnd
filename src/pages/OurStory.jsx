// // src/pages/OurStory.js
// import React from 'react';
// import Header from '../components/Header';
// import Footer from '../components/Footer';

// function OurStory() {
//   return (
//     <div className="bg-white text-gray-800">
//       <Header />

//       <div className="container mx-auto px-4 py-8">
//         {/* Hero Section */}
//         <section className="text-center mb-12">
//           <h1 className="text-4xl font-bold mb-4 text-brown transition-transform duration-300 hover:translate-y-1">
//             Our Story
//           </h1>
//           <p className="text-lg text-gray-600 transition-opacity duration-300 hover:opacity-80">
//             Discover the journey of Bee Wise, from our humble beginnings to becoming a leading name in the beekeeping community. 
//             Our story is one of passion, dedication, and a commitment to making a difference.
//           </p>
//         </section>

//         {/* Our Mission */}
//         <section className="mb-12">
//           <h2 className="text-3xl font-bold mb-6 text-goldD transition-transform duration-300 hover:translate-x-2">
//             Our Mission
//           </h2>
//           <div className="flex flex-col md:flex-row items-center gap-8">
//             <div className="flex-1 transition-transform duration-300 hover:scale-105">
//               <img src="./src/assets/imgs/ourStoryImg.png" alt="Our Mission" className="w-full h-auto rounded-lg shadow-lg border border-gray-200" />
//             </div>
//             <div className="flex-1">
//               <p className="text-lg text-gray-700 leading-relaxed">
//                 At Bee Wise, our mission is to empower and support beekeepers of all levels through a comprehensive platform that offers resources, products, and community engagement. We are dedicated to promoting sustainable beekeeping practices and enhancing the quality of honey production in Jordan. Our vision includes creating a thriving ecosystem where beekeepers can connect, collaborate, and grow.
//               </p>
//               <p className="text-lg text-gray-700 mt-4">
//                 Through our platform, we strive to bridge the gap between beekeepers and suppliers, ensuring that everyone has access to the tools and knowledge needed for success. Our commitment extends beyond just business; we are passionate about preserving the environment and fostering a community that values the role of bees in our ecosystem.
//               </p>
//             </div>
//           </div>
//         </section>

//         {/* Our Journey */}
//         <section className="mb-12">
//           <h2 className="text-3xl font-bold mb-6 text-goldD transition-transform duration-300 hover:translate-x-2">
//             Our Journey
//           </h2>
//           <div className="flex flex-col lg:flex-row items-center gap-8">
//             <div className="flex-1">
//               <p className="text-lg text-gray-700 mb-4 leading-relaxed">
//                 Bee Wise was founded in 2024 by a group of passionate beekeepers who recognized the need for a unified platform to share knowledge, resources, and products. Our journey began with a small community forum and has evolved into a comprehensive service platform for beekeepers across Jordan. We have continually adapted to meet the needs of our growing community.
//               </p>
//               <p className="text-lg text-gray-700 leading-relaxed">
//                 As we have grown, we have expanded our services to include educational resources, supplier connections, and a vibrant community forum. Our dedication to supporting local honey production and preserving Jordan's unique ecosystem remains at the heart of everything we do. Our journey is a testament to the power of community and collaboration.
//               </p>
//             </div>
//             <div className="flex-1 transition-transform duration-300 hover:scale-105">
//               <img src="./src/assets/imgs/ourStoryImg.png" alt="Our Journey" className="w-full h-auto rounded-lg shadow-lg border border-gray-200" />
//             </div>
//           </div>
//         </section>

//         {/* Our Impact */}
//         <section>
//           <h2 className="text-3xl font-bold mb-6 text-goldD transition-transform duration-300 hover:translate-x-2">
//             Our Impact
//           </h2>
//           <div className="flex flex-col md:flex-row items-center gap-8">
//             <div className="flex-1 transition-transform duration-300 hover:scale-105">
//               <img src="./src/assets/imgs/ourStoryImg.png" alt="Our Impact" className="w-full h-auto rounded-lg shadow-lg border border-gray-200" />
//             </div>
//             <div className="flex-1">
//               <p className="text-lg text-gray-700 leading-relaxed">
//                 Bee Wise has made a significant impact on the beekeeping community in Jordan. We have successfully connected thousands of beekeepers with valuable resources and support. Our platform has fostered a sense of community and collaboration among beekeepers, contributing to the overall health and sustainability of the beekeeping industry. The positive feedback from our users reflects the meaningful difference we are making.
//               </p>
//               <p className="text-lg text-gray-700 mt-4">
//                 Through our initiatives, we have seen growth in local honey production, better beekeeping practices, and increased awareness of the importance of bees in our environment. Our continued efforts aim to strengthen these impacts and support the future of beekeeping in Jordan.
//               </p>
//             </div>
//           </div>
//         </section>
//       </div>

//       <Footer />
//     </div>
//   );
// }

// export default OurStory;


import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { FaLeaf, FaUsers, FaChartLine } from 'react-icons/fa';

function OurStory() {
  return (
    <div className="bg-page text-gray-800">
      <Header />

      {/* Hero Section */}
      <section className="relative bg-goldL text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4 animate-fade-in-down">
            Our Story
          </h1>
          <p className="text-xl max-w-2xl mx-auto animate-fade-in-up">
            Discover the journey of Bee Wise, from our humble beginnings to becoming a leading name in the beekeeping community.
          </p>
        </div>
        <div className="absolute bottom-0 left-0 w-full overflow-hidden">
          <svg viewBox="0 0 1440 100" className="relative block w-full h-20">
            <path fill="#f7e7cc" fillOpacity="1" d="M0,32L120,42.7C240,53,480,75,720,74.7C960,75,1200,53,1320,42.7L1440,32L1440,100L1320,100C1200,100,960,100,720,100C480,100,240,100,120,100L0,100Z"></path>
          </svg>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16">
        {/* Our Mission */}
        <section className="mb-20">
          <h2 className="text-4xl font-bold mb-8 text-goldD text-center">
            Our Mission
          </h2>
          <div className="flex flex-col md:flex-row items-center gap-12">
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
        </section>

        {/* Our Values */}
        <section className="mb-20">
          <h2 className="text-4xl font-bold mb-12 text-goldD text-center">
            Our Core Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: <FaLeaf className="text-5xl mb-4 text-goldD" />, title: "Sustainability", description: "We prioritize eco-friendly practices and promote sustainable beekeeping methods." },
              { icon: <FaUsers className="text-5xl mb-4 text-goldD" />, title: "Community", description: "We foster a supportive community where beekeepers can share knowledge and experiences." },
              { icon: <FaChartLine className="text-5xl mb-4 text-goldD" />, title: "Innovation", description: "We continually seek innovative solutions to improve beekeeping practices and products." }
            ].map((value, index) => (
              <div key={index} className="bg-gray-100 p-6 rounded-lg text-center transition-transform duration-300 hover:scale-105">
                {value.icon}
                <h3 className="text-2xl font-semibold mb-2">{value.title}</h3>
                <p className="text-gray-700">{value.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Our Journey */}
        <section className="mb-20">
          <h2 className="text-4xl font-bold mb-8 text-goldD text-center">
            Our Journey
          </h2>
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
              <img src="./src/assets/imgs/ourStoryImg.png" alt="Our Journey" className="w-full h-auto rounded-lg shadow-xl" />
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="mb-20">
          <h2 className="text-4xl font-bold mb-12 text-goldD text-center">
            Our Milestones
          </h2>
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-goldL"></div>
            {[
              { year: "2024", event: "Bee Wise is founded" },
              { year: "2025", event: "Launch of our online marketplace" },
              { year: "2026", event: "Introduction of educational programs" },
              { year: "2027", event: "Expansion to cover all of Jordan" }
            ].map((milestone, index) => (
              <div key={index} className={`flex items-center mb-8 ${index % 2 === 0 ? 'flex-row-reverse' : ''}`}>
                <div className="w-5/12"></div>
                <div className="w-2/12 flex justify-center">
                  <div className="w-8 h-8 bg-goldD rounded-full flex items-center justify-center">
                    <div className="w-4 h-4 bg-white rounded-full"></div>
                  </div>
                </div>
                <div className="w-5/12 bg-gray-100 p-4 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold">{milestone.year}</h3>
                  <p>{milestone.event}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Our Impact */}
        <section className="mb-20">
          <h2 className="text-4xl font-bold mb-8 text-goldD text-center">
            Our Impact
          </h2>
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1 transition-transform duration-300 hover:scale-105">
              <img src="./src/assets/imgs/ourStoryImg.png" alt="Our Impact" className="w-full h-auto rounded-lg shadow-xl" />
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
        </section>

        {/* Call to Action */}
        <section className="text-center bg-goldL text-white py-16 rounded-lg">
          <h2 className="text-4xl font-bold mb-4">Join Our Community</h2>
          <p className="text-xl mb-8">Be part of our story and help shape the future of beekeeping in Jordan.</p>
          <button className="bg-white text-goldD font-bold py-3 px-8 rounded-full hover:bg-gray-100 transition duration-300">
            Sign Up Now
          </button>
        </section>
      </div>

      <Footer />
    </div>
  );
}

export default OurStory;