

import React, { useEffect, useRef } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaLeaf, FaBookOpen, FaTools, FaMapMarkedAlt, FaCalendarAlt, FaUserFriends, FaShoppingCart, FaChartLine } from 'react-icons/fa';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Resources = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <div className="bg-white min-h-screen">
      <Header />
      <motion.div
        className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto"
        initial="hidden"
        animate={controls}
        variants={containerVariants}
        ref={ref}
      >
        <motion.h1 
          className="text-4xl md:text-5xl font-bold mb-12 text-center text-goldD"
          variants={itemVariants}
        >
          Beekeeping Resources
        </motion.h1>

        {/* Geographical Tips Section */}
        <Section
          icon={<FaLeaf className="text-3xl text-green-600" />}
          title="Geographical Tips"
          variants={itemVariants}
        >
          <p className="text-lg mb-6 text-gray-700">
            Understanding the geographical aspects of beekeeping in Jordan can significantly enhance your beekeeping experience. Here are some essential tips:
          </p>
          <div className="grid md:grid-cols-2 gap-6 ">
            <TipCard title="Climate Considerations" content="Be aware of the local climate and its impact on bee activity and hive management. Jordan's diverse climate zones require different approaches." />
            <TipCard title="Flora Identification" content="Identify local flora that will provide bees with ample forage and nectar. Consider planting bee-friendly flowers to support your hives." />
            <TipCard title="Seasonal Planning" content="Plan your beekeeping activities according to seasonal changes and bee behavior. Create a yearly calendar for optimal hive management." />
            <TipCard title="Predator Awareness" content="Be aware of local predators and pests that may affect your beekeeping efforts. Implement appropriate protection measures for your hives." />
          </div>
        </Section>

        {/* Raw Materials Section */}
        <Section
          icon={<FaTools className="text-3xl text-gray-600" />}
          title="Raw Materials and Their Locations"
          variants={itemVariants}
        >
          <p className="text-lg mb-6 text-gray-700">
            Explore the sources of raw materials essential for beekeeping and their locations in Jordan. Knowing where to find these materials can help ensure the success of your beekeeping endeavors.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            <MaterialCard 
              title="Beekeeping Equipment" 
              content="Find suppliers and local shops that provide essential beekeeping tools and equipment." 
              linkText="View supplier list"
            />
            <MaterialCard 
              title="Hive Components" 
              content="Discover locations where you can obtain high-quality hive components, such as frames and supers." 
              linkText="Find hive suppliers"
            />
            <MaterialCard 
              title="Nectar Sources" 
              content="Identify areas with abundant flora that can provide nectar for your bees." 
              linkText="Explore nectar maps"
            />
            <MaterialCard 
              title="Pollen Sources" 
              content="Learn where to find plants and trees that offer pollen, a crucial resource for bee health." 
              linkText="View pollen source guide"
            />
          </div>
        </Section>

        {/* Best Choices Section */}
        <Section
          icon={<FaMapMarkedAlt className="text-3xl text-red-600" />}
          title="Best Choices Based on Geographical Nature"
          variants={itemVariants}
        >
          <p className="text-lg mb-6 text-gray-700">
            Make informed decisions based on the unique geographical features of Jordan. This section provides insights into the best practices and choices for successful beekeeping in different regions.
          </p>
          <div className="bg-white shadow-lg rounded-lg p-6 transform hover:scale-105 transition-transform duration-300">
            <h3 className="text-2xl font-semibold mb-4 text-goldD">Regional Recommendations</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  region: "Highland Areas",
                  description: "Best practices for beekeeping in cooler, highland regions with diverse floral resources.",
                  image: "https://www.jordanwinery.com/wp-content/uploads/2021/01/Jordan-Winery-Flowhive-Beehives-Bee-Garden-Design-IMGL7277-23_credit-John-Curley_web-1920x1280.jpg"
                },
                {
                  region: "Desert Regions",
                  description: "Strategies for beekeeping in arid areas with limited water and floral resources.",
                  image: "https://images.ctfassets.net/6kwmfvcr3yfi/7oLJ4kfg8rP1GqTGoo3cME/a8fb011ef3d31c446660a3ea89a90d0b/pixabay-cheneil-wadi-rum-desert-jordan.jpg"
                },
                {
                  region: "Coastal Areas",
                  description: "Tips for managing hives in coastal regions with high humidity and salt exposure.",
                  image: "https://www.aljazeera.com/wp-content/uploads/2023/07/33KG76U-highres-1689058526.jpg?resize=1800%2C1800"
                },
                {
                  region: "Urban Areas",
                  description: "Approaches for successful beekeeping in urban environments with limited space and diverse floral sources.",
                  image: "https://jordanlens.org/sites/default/files/styles/image_inside1/public/67906790.jpg"
                }
              ].map((region, index) => (
                <RegionCard key={index} {...region} />
              ))}
            </div>
          </div>
        </Section>

        {/* Seasonal Calendar Section */}
        <Section
          icon={<FaCalendarAlt className="text-3xl text-orange-600" />}
          title="Seasonal Beekeeping Calendar"
          variants={itemVariants}
        >
          <p className="text-lg mb-6 text-gray-700">
            Stay organized with our comprehensive beekeeping calendar. Plan your activities throughout the year to ensure healthy hives and optimal honey production.
          </p>
          <div className="bg-white shadow-lg rounded-lg p-6 transform hover:scale-105 transition-transform duration-300">
            <h3 className="text-2xl font-semibold mb-4 text-goldD">Yearly Overview</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {['Spring', 'Summer', 'Autumn', 'Winter'].map((season, index) => (
                <SeasonCard key={index} season={season} />
              ))}
            </div>
          </div>
        </Section>

        {/* Data & Analytics Section */}
        <Section
          icon={<FaChartLine className="text-3xl text-purple-600" />}
          title="Beekeeping Data & Analytics"
          variants={itemVariants}
        >
          <p className="text-lg mb-6 text-gray-700">
            Leverage data to improve your beekeeping practices. Track hive health, honey production, and environmental factors.
          </p>
          <div className="bg-white shadow-lg rounded-lg p-6 transform hover:scale-105 transition-transform duration-300">
            <h3 className="text-2xl font-semibold mb-4 text-goldD">Analytics Dashboard</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <AnalyticsCard title="Hive Performance" content="Track honey production, colony strength, and queen performance." />
              <AnalyticsCard title="Environmental Monitoring" content="Monitor temperature, humidity, and weather patterns affecting your hives." />
              <AnalyticsCard title="Disease & Pest Tracking" content="Log and analyze pest infestations and disease occurrences." />
              <AnalyticsCard title="Financial Analytics" content="Manage expenses and revenue to optimize your beekeeping business." />
            </div>
          </div>
        </Section>
      </motion.div>
      <Footer />
    </div>
  );
};

const Section = ({ icon, title, children, variants }) => (
  <motion.section className="mb-16" variants={variants}>
    <div className="flex items-center mb-6">
      {icon}
      <h2 className="text-3xl font-semibold text-goldD ml-4">{title}</h2>
    </div>
    {children}
  </motion.section>
);

const TipCard = ({ title, content }) => (
  <motion.div 
    className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300"
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
  >
    <h3 className="text-xl font-semibold mb-3 text-amber-700">{title}</h3>
    <p className="text-gray-600">{content}</p>
  </motion.div>
);

const MaterialCard = ({ title, content, linkText }) => (
  <motion.div 
    className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300"
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
  >
    <h3 className="text-xl font-semibold mb-3 text-amber-700">{title}</h3>
    <p className="text-gray-600 mb-4">{content}</p>
    <a href="#" className="text-blue-500 hover:underline">{linkText} →</a>
  </motion.div>
);

const RegionCard = ({ region, description, image }) => (
  <motion.div 
    className="bg-amber-50 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
  >
    <img src={image} alt={region} className="w-full h-48 object-cover" />
    <div className="p-4">
      <h4 className="text-xl font-semibold mb-2 text-amber-700">{region}</h4>
      <p className="text-gray-600 mb-4">{description}</p>
      <a href="#" className="text-blue-500 hover:underline">Learn more →</a>
    </div>
  </motion.div>
);

const SeasonCard = ({ season }) => (
  <motion.div 
    className="bg-amber-50 rounded-lg p-4 hover:shadow-md transition-shadow duration-300"
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
  >
    <h4 className="text-xl font-semibold mb-2 text-amber-700">{season}</h4>
    <ul className="list-disc list-inside text-gray-600">
      <li>Key task 1</li>
      <li>Key task 2</li>
      <li>Key task 3</li>
    </ul>
  </motion.div>
);

const AnalyticsCard = ({ title, content }) => (
  <motion.div 
    className="bg-amber-50 rounded-lg p-4 hover:shadow-md transition-shadow duration-300"
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
  >
    <h4 className="text-xl font-semibold mb-2 text-amber-700">{title}</h4>
    <p className="text-gray-600">{content}</p>
  </motion.div>
);

export default Resources;