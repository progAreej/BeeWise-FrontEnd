

// import React, { useState } from 'react';
// import Header from '../components/Header';
// import Footer from '../components/Footer';
// import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

// const ContactUs = () => {
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [message, setMessage] = useState('');
//   const [messageSent, setMessageSent] = useState(false);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Implement logic to send the message (e.g., API call)
//     setMessageSent(true);
//     setName('');
//     setEmail('');
//     setMessage('');
//     setTimeout(() => setMessageSent(false), 5000); // Hide success message after 5 seconds
//   };

//   return (
//     <div className='bg-white min-h-screen flex flex-col'>
//       <Header />
//       <div className="flex-grow container mx-auto px-4 py-12" >
//         <h1 className="text-4xl font-bold text-center text-goldD mb-8">Get in Touch</h1>
//         <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
//           We're here to help and answer any question you might have. We look forward to hearing from you and are always excited to discuss beekeeping, our products, or any inquiries you may have.
//         </p>

//         <div className="flex flex-wrap -mx-4 ">
//           <div className="w-full md:w-1/2 px-4 mb-8 md:mb-0">
//             <div className="bg-white rounded-lg shadow-lg overflow-hidden ">
//               <img src="https://barakadestinations.com/wp-content/uploads/2018/08/Beekeeping.jpg" alt="Beekeeping" className="w-full h-64 object-cover object-center" />
//               <div className="p-6 bg-page">
//                 <h2 className="text-2xl font-semibold text-goldD mb-4">Contact Information</h2>
//                 <div className="space-y-4">
//                   <p className="flex items-center text-gray-600">
//                     <FaEnvelope className="mr-2 text-goldD" />
//                     info@beewise.com
//                   </p>
//                   <p className="flex items-center text-gray-600">
//                     <FaPhone className="mr-2 text-goldD" />
//                     +962 123 456 789
//                   </p>
//                   <p className="flex items-center text-gray-600">
//                     <FaMapMarkerAlt className="mr-2 text-goldD" />
//                     Amman, Jordan
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>

//           <div className="w-full md:w-1/2 px-4">
//             <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-lg p-6">
//               <h2 className="text-2xl font-semibold text-goldD mb-6">Send Us a Message</h2>
//               <div className="space-y-4">
//                 <div>
//                   <label htmlFor="name" className="block text-gray-700 mb-2">Name</label>
//                   <input
//                     value={name}
//                     onChange={(e) => setName(e.target.value)}
//                     id="name"
//                     name="name"
//                     type="text"
//                     required
//                     className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-goldD"
//                     placeholder="Your Full Name"
//                   />
//                 </div>
//                 <div>
//                   <label htmlFor="email-address" className="block text-gray-700 mb-2">Email address</label>
//                   <input
//                     value={email}
//                     onChange={(e) => setEmail(e.target.value)}
//                     id="email-address"
//                     name="email"
//                     type="email"
//                     required
//                     className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-goldD"
//                     placeholder="Your Email address"
//                   />
//                 </div>
//                 <div>
//                   <label htmlFor="message" className="block text-gray-700 mb-2">Message</label>
//                   <textarea
//                     value={message}
//                     onChange={(e) => setMessage(e.target.value)}
//                     id="message"
//                     name="message"
//                     rows="2"
//                     required
//                     className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-goldD"
//                     placeholder="Your Message"
//                   />
//                 </div>
//               </div>
//               <button
//                 type="submit"
//                 className="w-full bg-goldD hover:bg-goldL text-white font-bold py-3 px-4 rounded-md mt-6 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105"
//               >
//                 Send Message
//               </button>
//               {messageSent && (
//                 <p className="text-green-500 text-center mt-4 animate-pulse">
//                   Thank you! Your message has been sent successfully.
//                 </p>
//               )}
//             </form>
//           </div>
//         </div>
//       </div>
//       <Footer />
//     </div>
//   );
// };

// export default ContactUs;

import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';

const ContactUs = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [messageSent, setMessageSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement logic to send the message (e.g., API call)
    setMessageSent(true);
    setName('');
    setEmail('');
    setMessage('');
    setTimeout(() => setMessageSent(false), 5000); // Hide success message after 5 seconds
  };

  return (
    <div className='bg-white min-h-screen flex flex-col'>
      <Header />
      <div className="flex-grow container mx-auto px-4 py-12">
        <motion.h1
          className="text-4xl font-bold text-center text-goldD mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Get in Touch
        </motion.h1>
        <motion.p
          className="text-center text-gray-600 mb-12 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          We're here to help and answer any question you might have. We look forward to hearing from you and are always excited to discuss beekeeping, our products, or any inquiries you may have.
        </motion.p>

        <div className="flex flex-wrap -mx-4">
          <motion.div
            className="w-full md:w-1/2 px-4 mb-8 md:mb-0"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img
                src="https://barakadestinations.com/wp-content/uploads/2018/08/Beekeeping.jpg"
                alt="Beekeeping"
                className="w-full h-64 object-cover object-center"
              />
              <div className="p-6 bg-page">
                <h2 className="text-2xl font-semibold text-goldD mb-4">Contact Information</h2>
                <div className="space-y-4">
                  <p className="flex items-center text-gray-600">
                    <FaEnvelope className="mr-2 text-goldD" />
                    info@beewise.com
                  </p>
                  <p className="flex items-center text-gray-600">
                    <FaPhone className="mr-2 text-goldD" />
                    +962 123 456 789
                  </p>
                  <p className="flex items-center text-gray-600">
                    <FaMapMarkerAlt className="mr-2 text-goldD" />
                    Amman, Jordan
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="w-full md:w-1/2 px-4"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-lg p-6">
              <h2 className="text-2xl font-semibold text-goldD mb-6">Send Us a Message</h2>
              <div className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-gray-700 mb-2">Name</label>
                  <input
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    id="name"
                    name="name"
                    type="text"
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-goldD transition-transform duration-300 ease-in-out"
                    placeholder="Your Full Name"
                  />
                </div>
                <div>
                  <label htmlFor="email-address" className="block text-gray-700 mb-2">Email address</label>
                  <input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    id="email-address"
                    name="email"
                    type="email"
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-goldD transition-transform duration-300 ease-in-out"
                    placeholder="Your Email address"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-gray-700 mb-2">Message</label>
                  <textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    id="message"
                    name="message"
                    rows="2"
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-goldD transition-transform duration-300 ease-in-out"
                    placeholder="Your Message"
                  />
                </div>
              </div>
              <button
                type="submit"
                className="w-full bg-goldD hover:bg-goldL text-white font-bold py-3 px-4 rounded-md mt-6 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105"
              >
                Send Message
              </button>
              {messageSent && (
                <motion.p
                  className="text-green-500 text-center mt-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  Thank you! Your message has been sent successfully.
                </motion.p>
              )}
            </form>
          </motion.div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ContactUs;
