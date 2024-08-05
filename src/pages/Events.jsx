

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaCalendar, FaMapMarkerAlt, FaLeaf, FaUsers, FaSearch } from 'react-icons/fa';
import { motion } from 'framer-motion';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Pagination from '../components/Pagination';

const upcomingEvents = [
  {
    id: 1,
    title: 'Beekeeping Workshop in Jordan Valley',
    date: 'August 15, 2024',
    location: 'Jordan Valley Agricultural Station',
    description: 'Learn modern beekeeping techniques from expert apiarists. Suitable for beginners and intermediate beekeepers.',
    category: 'workshop',
    image: 'https://barakadestinations.com/wp-content/uploads/2022/02/Ali-Barqawi-Studios-Explore-Series-Travel-Adventure-Culture-Tourism-Baraka-Destinations-01-Um-Qais-04-Beekeeping-0064-1024x683.jpg'
  },
  {
    id: 2,
    title: 'Amman Honey Festival',
    date: 'September 10-12, 2024',
    location: 'King Hussein Park, Amman',
    description: 'A three-day celebration of Jordanian honey, featuring tastings, beekeeping demonstrations, and local artisanal products.',
    category: 'festival',
    image: 'https://static.wixstatic.com/media/c29996_a453a45181d74cdf8c7487e1b2d96c29~mv2.jpg/v1/fill/w_980,h_980,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/c29996_a453a45181d74cdf8c7487e1b2d96c29~mv2.jpg'
  },
  {
    id: 3,
    title: 'Irbid Beekeepers Annual Meetup',
    date: 'October 5, 2024',
    location: 'Jordan University of Science and Technology, Irbid',
    description: 'Network with fellow beekeepers from northern Jordan and share experiences in sustainable beekeeping practices.',
    category: 'networking',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQidNoZ2UFdc_v1zpNVrocdw95VjnqPHwIJgQ&s'
  },
  {
    id: 4,
    title: 'Bee Products Innovation Summit',
    date: 'November 20, 2024',
    location: 'Zain Innovation Campus, Amman',
    description: 'Explore innovative uses of bee products in cosmetics, medicine, and food industries.',
    category: 'conference',
    image: 'https://www.eydk.org/wp-content/uploads/2022/04/This-Is-How-Bee-Extinction-Would-Affect-Your-Morning-Cup-of-Coffee_440779777_RUKSUTAKARN-studio_ft.jpg'
  },
  {
    id: 5,
    title: 'Honey Harvest Festival',
    date: 'December 5, 2024',
    location: 'Downtown Amman',
    description: 'Celebrate the honey harvest with local vendors, live music, and family-friendly activities.',
    category: 'festival',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5E0eFD-rpd-RDuTBZyC4eRzh71DBDBegtBw&s'
  },
  {
    id: 6,
    title: 'Sustainable Beekeeping Practices Seminar',
    date: 'January 18, 2025',
    location: 'Royal Cultural Center, Amman',
    description: 'Learn about sustainable beekeeping practices and their impact on the environment.',
    category: 'seminar',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNVQMGoJylJqzB3zxIVjbsrZeB3tlTrkXG4A&s'
  },
  {
    id: 7,
    title: 'Jordan Beekeepers Annual Conference',
    date: 'February 25, 2025',
    location: 'Hilton Amman',
    description: 'An annual conference focusing on the latest trends and research in beekeeping.',
    category: 'conference',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5k0ejc3Gzey5YrmL7rEittSS49owfUjfS7w&s'
  },
  {
    id: 8,
    title: 'Bee Awareness Day',
    date: 'March 15, 2025',
    location: 'Public Library, Amman',
    description: 'A day dedicated to raising awareness about the importance of bees and their role in our ecosystem.',
    category: 'awareness',
    image: 'https://www.shutterstock.com/shutterstock/photos/2189537199/display_1500/stock-vector-national-honey-bee-day-calligraphic-banner-design-on-white-background-script-lettering-banner-2189537199.jpg'
  },
  {
    id: 9,
    title: 'Advanced Beekeeping Techniques Workshop',
    date: 'April 10, 2025',
    location: 'University of Jordan',
    description: 'Advanced workshop covering the latest techniques in beekeeping for experienced beekeepers.',
    category: 'workshop',
    image: 'https://i0.wp.com/www.eversweetapiaries.com/wp-content/uploads/safe_image-15.jpg?resize=870%2C440&ssl=1'
  },
  {
    id: 10,
    title: 'Beekeeping and Biodiversity Symposium',
    date: 'May 22, 2025',
    location: 'Nature Reserve, Wadi Rum',
    description: 'Discuss the relationship between beekeeping and biodiversity conservation with experts from around the world.',
    category: 'symposium',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8eNi4dB6n7_7rKY_dNTEUi-dTtYP-nKAldg&s'
  },
];

const pastEvents = [
  {
    id: 5,
    title: 'Bee Health Symposium',
    date: 'May 20, 2024',
    location: 'Dead Sea Convention Center',
    description: 'A symposium focusing on maintaining bee health in changing environmental conditions.',
    category: 'conference',
    image: 'https://www.pajueloapicultura.com/wp-content/uploads/2024/06/Captura-2-e1719821680590.jpg'
  },
  {
    id: 6,
    title: 'Organic Beekeeping Workshop',
    date: 'June 8, 2024',
    location: 'Ajloun Forest Reserve',
    description: 'Learn about organic beekeeping methods in harmony with Jordan s natural ecosystems.',
    category: 'workshop',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3h7TxYdtB2m-2JS4yY9W5k27BgrCNeEYkQw&s'
  },
];
const EventCard = ({ event }) => (
  <motion.div 
    className="bg-page shadow-lg rounded-lg overflow-hidden transition-all duration-300 hover:shadow-xl"
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    whileHover={{ scale: 1.05 }}
  >
    <img src={event.image} alt={event.title} className="w-full h-48 object-cover" />
    <div className="p-6">
      <h2 className="text-2xl font-semibold mb-2 text-goldD">{event.title}</h2>
      <div className="flex items-center text-gray-600 mb-2">
        <FaCalendar className="mr-2 text-amber-600" />
        <p>{event.date}</p>
      </div>
      <div className="flex items-center text-gray-600 mb-4">
        <FaMapMarkerAlt className="mr-2 text-amber-600" />
        <p>{event.location}</p>
      </div>
      <p className="text-gray-800 mb-4">{event.description}</p>
      <Link
        to={`/events/${event.id}`}
        className="inline-block bg-amber-500 text-white font-bold py-2 px-4 rounded hover:bg-amber-600 transition-colors duration-300"
      >
        View Details
      </Link>
    </div>
  </motion.div>
);

const Events = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filter, setFilter] = useState('all');
  const [currentPageUpcoming, setCurrentPageUpcoming] = useState(1);
  const [currentPagePast, setCurrentPagePast] = useState(1);
  const itemsPerPage = 3;

  const filteredUpcomingEvents = upcomingEvents.filter(event => 
    event.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
    (filter === 'all' || event.category === filter)
  );

  const filteredPastEvents = pastEvents.filter(event => 
    event.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
    (filter === 'all' || event.category === filter)
  );

  const indexOfLastUpcoming = currentPageUpcoming * itemsPerPage;
  const indexOfFirstUpcoming = indexOfLastUpcoming - itemsPerPage;
  const currentUpcomingEvents = filteredUpcomingEvents.slice(indexOfFirstUpcoming, indexOfLastUpcoming);

  const indexOfLastPast = currentPagePast * itemsPerPage;
  const indexOfFirstPast = indexOfLastPast - itemsPerPage;
  const currentPastEvents = filteredPastEvents.slice(indexOfFirstPast, indexOfLastPast);

  const totalUpcomingPages = Math.ceil(filteredUpcomingEvents.length / itemsPerPage);
  const totalPastPages = Math.ceil(filteredPastEvents.length / itemsPerPage);

  return (
    <div className="bg-white min-h-screen">
      <Header />
      <motion.div 
        className="container mx-auto px-4 py-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <motion.h1 
          className="text-5xl font-bold my-12 text-center text-goldD"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Bee Wise Events in Jordan
        </motion.h1>
        
        <motion.div 
          className="mb-8 flex flex-col md:flex-row justify-between items-center"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <div className="relative mb-4 md:mb-0 ">
            <input
              type="text"
              placeholder="Search events..."
              className="pl-10 pr-4 py-2  border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <FaSearch className="absolute left-3 top-3 text-goldD" />
          </div>
          <select
            className="py-2 px-8 text-left border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
          >
            <option value="all">All Categories</option>
            <option value="workshop">Workshops</option>
            <option value="festival">Festivals</option>
            <option value="networking">Networking</option>
            <option value="conference">Conferences</option>
          </select>
        </motion.div>

        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6 text-brown">Upcoming Events</h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {currentUpcomingEvents.map((event) => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>
          <Pagination
            currentPage={currentPageUpcoming}
            totalPages={totalUpcomingPages}
            onPageChange={setCurrentPageUpcoming}
          />
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6 text-brown">Past Events</h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {currentPastEvents.map((event) => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>
          <Pagination
            currentPage={currentPagePast}
            totalPages={totalPastPages}
            onPageChange={setCurrentPagePast}
          />
        </section>

        <motion.section 
          className="bg-page rounded-lg shadow-lg p-8 mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <h2 className="text-3xl font-semibold mb-6 text-goldD">Why Attend Our Events?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <motion.div 
              className="text-center"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <FaCalendar className="text-5xl text-amber-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Diverse Events</h3>
              <p className="text-gray-600">From workshops to festivals and networking</p>
            </motion.div>
            <motion.div 
              className="text-center"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <FaMapMarkerAlt className="text-5xl text-amber-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Local Venues</h3>
              <p className="text-gray-600">Experience events in various locations across Jordan</p>
            </motion.div>
            <motion.div 
              className="text-center"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <FaUsers className="text-5xl text-amber-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Networking Opportunities</h3>
              <p className="text-gray-600">Connect with fellow enthusiasts and industry professionals</p>
            </motion.div>
            <motion.div 
              className="text-center"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <FaLeaf className="text-5xl text-amber-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Community Support</h3>
              <p className="text-gray-600">Join a supportive community of beekeepers and enthusiasts</p>
            </motion.div>
          </div>
        </motion.section>
      </motion.div>
      <Footer />
    </div>
  );
};

export default Events;