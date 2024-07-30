

import React from 'react';
import { FaLeaf, FaBookOpen, FaTools, FaMapMarkedAlt, FaCalendarAlt, FaUserFriends, FaShoppingCart, FaChartLine } from 'react-icons/fa';
import Header from '../components/Header';
import Footer from '../components/Footer';
const Resources = () => {
  return (
    <div className='bg-page p-8'>
      <Header/>
    <div className="   bg-page py-20 px-24">
      <h1 className="text-4xl font-bold mb-8 text-center text-goldD">Beekeeping Resources</h1>

      {/* Geographical Tips Section */}
      <section id="geographical-tips" className="my-16 ">
        <div className="flex items-center mb-6">
          <FaLeaf className="text-3xl text-green-600 mr-4" />
          <h2 className="text-3xl font-semibold text-goldD">Geographical Tips</h2>
        </div>
        <p className="text-lg mb-6 text-gray-700">
          Understanding the geographical aspects of beekeeping in Jordan can significantly enhance your beekeeping experience. Here are some essential tips:
        </p>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold mb-3 text-brown">Climate Considerations</h3>
            <p className="text-gray-600">Be aware of the local climate and its impact on bee activity and hive management. Jordan's diverse climate zones require different approaches.</p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold mb-3 text-brown">Flora Identification</h3>
            <p className="text-gray-600">Identify local flora that will provide bees with ample forage and nectar. Consider planting bee-friendly flowers to support your hives.</p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold mb-3 text-brown">Seasonal Planning</h3>
            <p className="text-gray-600">Plan your beekeeping activities according to seasonal changes and bee behavior. Create a yearly calendar for optimal hive management.</p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold mb-3 text-brown">Predator Awareness</h3>
            <p className="text-gray-600">Be aware of local predators and pests that may affect your beekeeping efforts. Implement appropriate protection measures for your hives.</p>
          </div>
        </div>
      </section>

      

      {/* Raw Materials Section */}
      <section id="raw-materials" className="mb-16">
        <div className="flex items-center mb-6">
          <FaTools className="text-3xl text-gray-600 mr-4" />
          <h2 className="text-3xl font-semibold text-goldD">Raw Materials and Their Locations</h2>
        </div>
        <p className="text-lg mb-6 text-gray-700">
          Explore the sources of raw materials essential for beekeeping and their locations in Jordan. Knowing where to find these materials can help ensure the success of your beekeeping endeavors.
        </p>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold mb-3 text-brown">Beekeeping Equipment</h3>
            <p className="text-gray-600 mb-4">Find suppliers and local shops that provide essential beekeeping tools and equipment.</p>
            <a href="#" className="text-blue-500 hover:underline">View supplier list →</a>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold mb-3 text-brown">Hive Components</h3>
            <p className="text-gray-600 mb-4">Discover locations where you can obtain high-quality hive components, such as frames and supers.</p>
            <a href="#" className="text-blue-500 hover:underline">Find hive suppliers →</a>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold mb-3 text-brown">Nectar Sources</h3>
            <p className="text-gray-600 mb-4">Identify areas with abundant flora that can provide nectar for your bees.</p>
            <a href="#" className="text-blue-500 hover:underline">Explore nectar maps →</a>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold mb-3 text-brown">Pollen Sources</h3>
            <p className="text-gray-600 mb-4">Learn where to find plants and trees that offer pollen, a crucial resource for bee health.</p>
            <a href="#" className="text-blue-500 hover:underline">View pollen source guide →</a>
          </div>
        </div>
      </section>

      {/* Best Choices Section */}
      <section id="best-choices">
        <div className="flex items-center mb-6">
          <FaMapMarkedAlt className="text-3xl text-red-600 mr-4" />
          <h2 className="text-3xl font-semibold text-goldD">Best Choices Based on Geographical Nature</h2>
        </div>
        <p className="text-lg mb-6 text-gray-700">
          Make informed decisions based on the unique geographical features of Jordan. This section provides insights into the best practices and choices for successful beekeeping in different regions.
        </p>
        <div className="bg-white shadow-lg rounded-lg p-6">
          <h3 className="text-2xl font-semibold mb-4 text-brown">Regional Recommendations</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                region: "Highland Areas",
                description: "Best practices for beekeeping in cooler, highland regions with diverse floral resources.",
                image: "highland.jpg"
              },
              {
                region: "Desert Regions",
                description: "Strategies for beekeeping in arid areas with limited water and floral resources.",
                image: "desert.jpg"
              },
              {
                region: "Coastal Areas",
                description: "Tips for managing hives in coastal regions with high humidity and salt exposure.",
                image: "coastal.jpg"
              },
              {
                region: "Urban Areas",
                description: "Approaches for successful beekeeping in urban environments with limited space and diverse floral sources.",
                image: "urban.jpg"
              }
            ].map((region, index) => (
              <div key={index} className="bg-amber-50 rounded-lg overflow-hidden shadow-md">
                <img src={region.image} alt={region.region} className="w-full h-48 object-cover" />
                <div className="p-4">
                  <h4 className="text-xl font-semibold mb-2 text-goldD">{region.region}</h4>
                  <p className="text-gray-600 mb-4">{region.description}</p>
                  <a href="#" className="text-blue-500 hover:underline">Learn more →</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section id="seasonal-calendar" className="mb-16">
        <div className="flex items-center mb-6">
          <FaCalendarAlt className="text-3xl text-orange-600 mr-4" />
          <h2 className="text-3xl font-semibold text-goldD">Seasonal Beekeeping Calendar</h2>
        </div>
        <p className="text-lg mb-6 text-gray-700">
          Stay organized with our comprehensive beekeeping calendar. Plan your activities throughout the year to ensure healthy hives and optimal honey production.
        </p>
        <div className="bg-white shadow-lg rounded-lg p-6">
          <h3 className="text-2xl font-semibold mb-4 text-brown">Yearly Overview</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {['Spring', 'Summer', 'Autumn', 'Winter'].map((season, index) => (
              <div key={index} className="bg-amber-50 rounded-lg p-4">
                <h4 className="text-xl font-semibold mb-2 text-goldD">{season}</h4>
                <ul className="list-disc list-inside text-gray-600">
                  <li>Key task 1</li>
                  <li>Key task 2</li>
                  <li>Key task 3</li>
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Community Forum */}
      <section id="community-forum" className="mb-16">
        <div className="flex items-center mb-6">
          <FaUserFriends className="text-3xl text-blue-600 mr-4" />
          <h2 className="text-3xl font-semibold text-amber-700">Community Forum</h2>
        </div>
        <p className="text-lg mb-6 text-gray-700">
          Connect with fellow beekeepers, share experiences, and get advice from experts in our community forum.
        </p>
        <div className="bg-white shadow-lg rounded-lg p-6">
          <h3 className="text-2xl font-semibold mb-4 text-brown">Popular Discussions</h3>
          <div className="space-y-4">
            {['Hive Management Tips', 'Pest Control Strategies', 'Honey Harvesting Techniques', 'Beginner Questions'].map((topic, index) => (
              <div key={index} className="border-b border-gray-200 pb-4">
                <h4 className="text-xl font-semibold text-amber-700">{topic}</h4>
                <p className="text-gray-600">Join the discussion on {topic.toLowerCase()} and learn from experienced beekeepers.</p>
                <a href="#" className="text-blue-500 hover:underline">View thread →</a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Marketplace */}
      <section id="marketplace" className="mb-16">
        <div className="flex items-center mb-6">
          <FaShoppingCart className="text-3xl text-green-600 mr-4" />
          <h2 className="text-3xl font-semibold text-amber-700">Beekeeping Marketplace</h2>
        </div>
        <p className="text-lg mb-6 text-gray-700">
          Find all the equipment and supplies you need for your beekeeping journey in our curated marketplace.
        </p>
        <div className="grid md:grid-cols-3 gap-6">
          {['Hives & Frames', 'Protective Gear', 'Honey Extraction Tools', 'Books & Education', 'Bee Health Products', 'Packaging Supplies'].map((category, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-3 text-brown">{category}</h3>
              <p className="text-gray-600 mb-4">Explore our selection of high-quality {category.toLowerCase()}.</p>
              <a href="#" className="text-blue-500 hover:underline">Shop now →</a>
            </div>
          ))}
        </div>
      </section>

      {/* Data & Analytics */}
      <section id="data-analytics">
        <div className="flex items-center mb-6">
          <FaChartLine className="text-3xl text-purple-600 mr-4" />
          <h2 className="text-3xl font-semibold text-amber-700">Beekeeping Data & Analytics</h2>
        </div>
        <p className="text-lg mb-6 text-gray-700">
          Leverage data to improve your beekeeping practices. Track hive health, honey production, and environmental factors.
        </p>
        <div className="bg-white shadow-lg rounded-lg p-6">
          <h3 className="text-2xl font-semibold mb-4 text-brown">Analytics Dashboard</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-amber-50 rounded-lg p-4">
              <h4 className="text-xl font-semibold mb-2 text-amber-700">Hive Performance</h4>
              <p className="text-gray-600">Track honey production, colony strength, and queen performance.</p>
            </div>
            <div className="bg-amber-50 rounded-lg p-4">
              <h4 className="text-xl font-semibold mb-2 text-amber-700">Environmental Monitoring</h4>
              <p className="text-gray-600">Monitor temperature, humidity, and weather patterns affecting your hives.</p>
            </div>
            <div className="bg-amber-50 rounded-lg p-4">
              <h4 className="text-xl font-semibold mb-2 text-amber-700">Disease & Pest Tracking</h4>
              <p className="text-gray-600">Log and analyze pest infestations and disease occurrences.</p>
            </div>
            <div className="bg-amber-50 rounded-lg p-4">
              <h4 className="text-xl font-semibold mb-2 text-amber-700">Financial Analytics</h4>
              <p className="text-gray-600">Manage expenses and revenue to optimize your beekeeping business.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
    <Footer/>
    </div>
  );
};

export default Resources;