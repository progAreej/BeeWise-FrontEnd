import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaUserTie, FaHeart } from 'react-icons/fa';

const UserRoleSelection = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col justify-center items-center p-4">
      <motion.h1 
        className="text-4xl md:text-5xl font-bold text-goldD mb-8 text-center"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Welcome to Bee Wise!
      </motion.h1>
      <motion.p 
        className="text-xl text-gray-700 mb-12 text-center max-w-2xl"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        Are you a beekeeper looking to enhance your skills, or a honey enthusiast eager to explore the sweet world of bees? Choose your path below!
      </motion.p>
      
      <div className="flex flex-col md:flex-row justify-center items-center w-full max-w-4xl gap-8">
        <RoleBox 
          to="/Subscription"
          icon={<FaUserTie className="text-5xl mb-4 text-goldL" />}
          title="Beekeeper"
          description="Access tools, resources, and a community to support your beekeeping journey."
        />
        <RoleBox 
          to="/SignUp"
          icon={<FaHeart className="text-5xl mb-4 text-goldL" />}
          title="Honey Lover"
          description="Discover premium honey products, learn about bees, and support local beekeepers."
        />
      </div>
    </div>
  );
};

const RoleBox = ({ to, icon, title, description }) => (
  <motion.div
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: 0.4 }}
  >
    <Link to={to} className="block">
      <div className="bg-page rounded-xl shadow-lg p-8 text-center w-full max-w-sm hover:shadow-xl transition-shadow duration-300 ">
        {icon}
        <h2 className="text-2xl font-bold text-brown mb-4 hover:text-goldD">{title}</h2>
        <p className="text-gray-600">{description}</p>
      </div>
    </Link>
  </motion.div>
);

export default UserRoleSelection;