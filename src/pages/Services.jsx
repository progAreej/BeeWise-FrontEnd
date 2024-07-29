// src/pages/Services.js
import React from 'react';

function Services() {
  const services = [
    { title: 'Beekeeping Workshops', description: 'Learn the basics of beekeeping in our hands-on workshops.' },
    { title: 'Hive Inspections', description: 'Professional inspections to ensure the health of your bee colonies.' },
    { title: 'Equipment Rental', description: 'Rent beekeeping equipment for short-term projects or trials.' },
    { title: 'Honey Analysis', description: 'Get your honey analyzed for quality and composition.' },
    { title: 'Swarm Removal', description: 'Safe and efficient removal of bee swarms from your property.' },
    { title: 'Pollination Services', description: 'Bee pollination services for farms and orchards.' },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Our Services</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-semibold mb-4">{service.title}</h2>
            <p className="text-gray-600">{service.description}</p>
            <button className="mt-4 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">Learn More</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Services;