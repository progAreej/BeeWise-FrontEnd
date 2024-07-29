import React from 'react';
import { Link } from 'react-router-dom';

const events = [
  {
    id: 1,
    title: 'Beekeeping Workshop',
    date: 'August 15, 2024',
    location: 'Jordan Valley',
    description: 'Join us for a comprehensive workshop on modern beekeeping techniques.',
  },
  {
    id: 2,
    title: 'Honey Festival',
    date: 'September 10, 2024',
    location: 'Amman',
    description: 'Celebrate the sweet nectar of life with honey tastings and beekeeping demonstrations.',
  },
  {
    id: 3,
    title: 'Beekeepers Meetup',
    date: 'October 5, 2024',
    location: 'Irbid',
    description: 'Network with fellow beekeepers and share your experiences in our annual meetup.',
  },
  // Add more events as needed
];

const Events = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6 text-center">View All Events</h1>
      
      <section className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {events.map((event) => (
          <div key={event.id} className="bg-white shadow-lg rounded-lg p-6">
            <h2 className="text-2xl font-semibold mb-2">{event.title}</h2>
            <p className="text-gray-600 mb-2">{event.date}</p>
            <p className="text-gray-600 mb-4">{event.location}</p>
            <p className="text-gray-800 mb-4">{event.description}</p>
            <Link
              to={`/events/${event.id}`}
              className="text-goldD font-bold hover:text-goldL transition-colors duration-300"
            >
              View Details
            </Link>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Events;
