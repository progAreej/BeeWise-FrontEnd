// import React from 'react';
// import { Link } from 'react-router-dom';

// const events = [
//   {
//     id: 1,
//     title: 'Beekeeping Workshop',
//     date: 'August 15, 2024',
//     location: 'Jordan Valley',
//     description: 'Join us for a comprehensive workshop on modern beekeeping techniques.',
//   },
//   {
//     id: 2,
//     title: 'Honey Festival',
//     date: 'September 10, 2024',
//     location: 'Amman',
//     description: 'Celebrate the sweet nectar of life with honey tastings and beekeeping demonstrations.',
//   },
//   {
//     id: 3,
//     title: 'Beekeepers Meetup',
//     date: 'October 5, 2024',
//     location: 'Irbid',
//     description: 'Network with fellow beekeepers and share your experiences in our annual meetup.',
//   },
//   // Add more events as needed
// ];

// const Events = () => {
//   return (
//     <div className="container mx-auto px-4 py-8">
//       <h1 className="text-4xl font-bold mb-6 text-center">View All Events</h1>
      
//       <section className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
//         {events.map((event) => (
//           <div key={event.id} className="bg-white shadow-lg rounded-lg p-6">
//             <h2 className="text-2xl font-semibold mb-2">{event.title}</h2>
//             <p className="text-gray-600 mb-2">{event.date}</p>
//             <p className="text-gray-600 mb-4">{event.location}</p>
//             <p className="text-gray-800 mb-4">{event.description}</p>
//             <Link
//               to={`/events/${event.id}`}
//               className="text-goldD font-bold hover:text-goldL transition-colors duration-300"
//             >
//               View Details
//             </Link>
//           </div>
//         ))}
//       </section>
//     </div>
//   );
// };

// export default Events;

// import React from 'react';
// import { Link } from 'react-router-dom';
// import { FaCalendar, FaMapMarkerAlt, FaBee, FaLeaf, FaUsers } from 'react-icons/fa';
// // import React from 'react';
// // import { FaCalendar, FaMapMarkerAlt, FaLeaf, FaUsers } from 'react-icons/fa';

// const upcomingEvents = [
//   {
//     id: 1,
//     title: 'Beekeeping Workshop in Jordan Valley',
//     date: 'August 15, 2024',
//     location: 'Jordan Valley Agricultural Station',
//     description: 'Learn modern beekeeping techniques from expert apiarists. Suitable for beginners and intermediate beekeepers.',
//     category: 'workshop',
//   },
//   {
//     id: 2,
//     title: 'Amman Honey Festival',
//     date: 'September 10-12, 2024',
//     location: 'King Hussein Park, Amman',
//     description: 'A three-day celebration of Jordanian honey, featuring tastings, beekeeping demonstrations, and local artisanal products.',
//     category: 'festival',
//   },
//   {
//     id: 3,
//     title: 'Irbid Beekeepers Annual Meetup',
//     date: 'October 5, 2024',
//     location: 'Jordan University of Science and Technology, Irbid',
//     description: 'Network with fellow beekeepers from northern Jordan and share experiences in sustainable beekeeping practices.',
//     category: 'networking',
//   },
// ];

// const pastEvents = [
//   {
//     id: 4,
//     title: 'Bee Health Symposium',
//     date: 'May 20, 2024',
//     location: 'Dead Sea Convention Center',
//     description: 'A symposium focusing on maintaining bee health in changing environmental conditions.',
//     category: 'conference',
//   },
//   {
//     id: 5,
//     title: 'Organic Beekeeping Workshop',
//     date: 'June 8, 2024',
//     location: 'Ajloun Forest Reserve',
//     description: 'Learn about organic beekeeping methods in harmony with Jordans natural ecosystems.',
//     category: 'workshop'
//   },
// ];

// const EventCard = ({ event }) => (
//   <div className="bg-white shadow-lg rounded-lg p-6 transition-all duration-300 hover:shadow-xl">
//     <h2 className="text-2xl font-semibold mb-2 text-goldD">{event.title}</h2>
//     <div className="flex items-center text-gray-600 mb-2">
//       <FaCalendar className="mr-2 text-amber-600" />
//       <p>{event.date}</p>
//     </div>
//     <div className="flex items-center text-gray-600 mb-4">
//       <FaMapMarkerAlt className="mr-2 text-amber-600" />
//       <p>{event.location}</p>
//     </div>
//     <p className="textgoldD mb-4">{event.description}</p>
//     <Link
//       to={`/events/${event.id}`}
//       className="inline-block bg-amber-500 text-white font-bold py-2 px-4 rounded hover:bg-amber-600 transition-colors duration-300"
//     >
//       View Details
//     </Link>
//   </div>
// );

// const Events = () => {
//   return (
//     <div className="bg-gradient-to-b from-amber-50 to-amber-100 min-h-screen">
//       <div className="container mx-auto px-4 py-12">
//         <h1 className="text-5xl font-bold mb-12 text-center text-goldD">Bee Wise Events in Jordan</h1>
        
//         <section className="mb-16">
//           <h2 className="text-3xl font-semibold mb-6 text-amber-700">Upcoming Events</h2>
//           <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
//             {upcomingEvents.map((event) => (
//               <EventCard key={event.id} event={event} />
//             ))}
//           </div>
//         </section>

//         <section className="mb-16">
//           <h2 className="text-3xl font-semibold mb-6 text-amber-700">Past Events</h2>
//           <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
//             {pastEvents.map((event) => (
//               <EventCard key={event.id} event={event} />
//             ))}
//           </div>
//         </section>

//         <section className="bg-white rounded-lg shadow-lg p-8 mb-16">
//           <h2 className="text-3xl font-semibold mb-6 text-amber-700">Why Attend Our Events?</h2>
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//             <div className="text-center">
//               <FaBee className="text-5xl text-amber-500 mx-auto mb-4" />
//               <h3 className="text-xl font-semibold mb-2">Expert Knowledge</h3>
//               <p className="text-gray-600">Learn from experienced beekeepers and agricultural experts</p>
//             </div>
//             <div className="text-center">
//               <FaLeaf className="text-5xl text-amber-500 mx-auto mb-4" />
//               <h3 className="text-xl font-semibold mb-2">Sustainable Practices</h3>
//               <p className="text-gray-600">Discover eco-friendly beekeeping methods suited for Jordan's climate</p>
//             </div>
//             <div className="text-center">
//               <FaUsers className="text-5xl text-amber-500 mx-auto mb-4" />
//               <h3 className="text-xl font-semibold mb-2">Community Building</h3>
//               <p className="text-gray-600">Connect with fellow beekeepers and honey enthusiasts</p>
//             </div>
//           </div>
//         </section>

//         <section>
//           <h2 className="text-3xl font-semibold mb-6 text-amber-700">Stay Updated</h2>
//           <div className="bg-white rounded-lg shadow-lg p-8">
//             <p className="text-lg mb-4">Subscribe to our newsletter to receive updates on upcoming events and beekeeping tips.</p>
//             <form className="flex flex-col md:flex-row gap-4">
//               <input
//                 type="email"
//                 placeholder="Your email address"
//                 className="flex-grow px-4 py-2 rounded-lg border border-amber-300 focus:outline-none focus:ring-2 focus:ring-amber-500"
//               />
//               <button
//                 type="submit"
//                 className="bg-amber-500 text-white font-bold py-2 px-6 rounded-lg hover:bg-amber-600 transition-colors duration-300"
//               >
//                 Subscribe
//               </button>
//             </form>
//           </div>
//         </section>
//       </div>
//     </div>
//   );
// };

// export default Events;


import React from 'react';
import { Link } from 'react-router-dom';
import { FaCalendar, FaMapMarkerAlt, FaLeaf, FaUsers } from 'react-icons/fa';
import Header from '../components/Header';
import Footer from '../components/Footer';

const upcomingEvents = [
  {
    id: 1,
    title: 'Beekeeping Workshop in Jordan Valley',
    date: 'August 15, 2024',
    location: 'Jordan Valley Agricultural Station',
    description: 'Learn modern beekeeping techniques from expert apiarists. Suitable for beginners and intermediate beekeepers.',
    category: 'workshop',
  },
  {
    id: 2,
    title: 'Amman Honey Festival',
    date: 'September 10-12, 2024',
    location: 'King Hussein Park, Amman',
    description: 'A three-day celebration of Jordanian honey, featuring tastings, beekeeping demonstrations, and local artisanal products.',
    category: 'festival',
  },
  {
    id: 3,
    title: 'Irbid Beekeepers Annual Meetup',
    date: 'October 5, 2024',
    location: 'Jordan University of Science and Technology, Irbid',
    description: 'Network with fellow beekeepers from northern Jordan and share experiences in sustainable beekeeping practices.',
    category: 'networking',
  },
];

const pastEvents = [
  {
    id: 4,
    title: 'Bee Health Symposium',
    date: 'May 20, 2024',
    location: 'Dead Sea Convention Center',
    description: 'A symposium focusing on maintaining bee health in changing environmental conditions.',
    category: 'conference',
  },
  {
    id: 5,
    title: 'Organic Beekeeping Workshop',
    date: 'June 8, 2024',
    location: 'Ajloun Forest Reserve',
    description: 'Learn about organic beekeeping methods in harmony with Jordans natural ecosystems.',
    category: 'workshop'
  },
];

const EventCard = ({ event }) => (
  <div className="bg-white shadow-lg rounded-lg p-6 transition-all duration-300 hover:shadow-xl">
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
);

const Events = () => {
  return (
    <div className="bg-gradient-to-b from-page to-page min-h-screen">
      <Header></Header>
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-5xl font-bold mb-12 text-center text-amber-800">Bee Wise Events in Jordan</h1>
        
        <section className="mb-16">
          <h2 className="text-3xl font-semibold mb-6 text-amber-700">Upcoming Events</h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {upcomingEvents.map((event) => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-semibold mb-6 text-amber-700">Past Events</h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {pastEvents.map((event) => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>
        </section>

        <section className="bg-white rounded-lg shadow-lg p-8 mb-16">
          <h2 className="text-3xl font-semibold mb-6 text-amber-700">Why Attend Our Events?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <FaLeaf className="text-5xl text-amber-500 mx-auto mb-4" /> {/* Replace FaBee with FaLeaf */}
              <h3 className="text-xl font-semibold mb-2">Expert Knowledge</h3>
              <p className="text-gray-600">Learn from experienced beekeepers and agricultural experts</p>
            </div>
            <div className="text-center">
              <FaLeaf className="text-5xl text-amber-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Sustainable Practices</h3>
              <p className="text-gray-600">Discover eco-friendly beekeeping methods suited for Jordan's climate</p>
            </div>
            <div className="text-center">
              <FaUsers className="text-5xl text-amber-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Community Building</h3>
              <p className="text-gray-600">Connect with fellow beekeepers and honey enthusiasts</p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-semibold mb-6 text-amber-700">Stay Updated</h2>
          <div className="bg-white rounded-lg shadow-lg p-8">
            <p className="text-lg mb-4">Subscribe to our newsletter to receive updates on upcoming events and beekeeping tips.</p>
            <form className="flex flex-col md:flex-row gap-4">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-grow px-4 py-2 rounded-lg border border-amber-300 focus:outline-none focus:ring-2 focus:ring-amber-500"
              />
              <button
                type="submit"
                className="bg-amber-500 text-white font-bold py-2 px-6 rounded-lg hover:bg-amber-600 transition-colors duration-300"
              >
                Subscribe
              </button>
            </form>
          </div>
        </section>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Events;
