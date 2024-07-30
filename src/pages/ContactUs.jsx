


// import React, { useState } from 'react';
// import Header from '../components/Header';
// import Footer from '../components/Footer';

// const ContactUs = () => {
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [message, setMessage] = useState('');
//   const [messageSent, setMessageSent] = useState(false);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Here you can implement logic to send the message (e.g., API call)
//     // For demonstration purposes, we'll just set a message sent flag
//     setMessageSent(true);
//     // Clear form fields after submission
//     setName('');
//     setEmail('');
//     setMessage('');
//   };

//   return (
//     <div className='bg-page' 
//     // style={{ backgroundImage: 'url(./src/assets/imgs/bg-contact.png)' }}
//     >
//         <Header/>
//     < div className="bg-cover bg-center h-screen relative ">
//     {/* <NavBar/> */}
    
//     <div className='flex justify-center items-center m-20 bg-goldD'  >
//         <div className=' space-y-8 bg-white  shadow-lg rounded-xl max-w-md w-full  p-2 h-max'>
//             {/* <h2>jjjjjjjjjj</h2> */}
//             <img src="./src/assets/imgs/bg-contact2.png" alt="" height="" className='h-96' />
//         </div>
//       <div className="max-w-md w-full space-y-8 p-4 bg-white  shadow-lg rounded-xl  h-max">
//           <h2 className="mt-6 text-center text-3xl font-bold text-goldD">
//             Contact Us
//           </h2>
//         <form className="mt-8 space-y-6 relative" onSubmit={handleSubmit}>
//           <input type="hidden" name="remember" defaultValue="true" />
//           <div className=" space-y-4">
//             <div>
//               <label htmlFor="name" className="sr-only">
//                 Name
//               </label>
//               <input
//                 value={name}
//                 onChange={(e) => setName(e.target.value)}
//                 id="name"
//                 name="name"
//                 type="text"
//                 autoComplete="name"
//                 required
//                 className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-goldD focus:border-goldD focus:z-10 sm:text-sm"
//                 placeholder="Your Full Name"
//               />
//             </div>
//             <div>
//               <label htmlFor="email-address" className="sr-only">
//                 Email address
//               </label>
//               <input
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 id="email-address"
//                 name="email"
//                 type="email"
//                 autoComplete="email"
//                 required
//                 className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-goldD focus:border-goldD focus:z-10 sm:text-sm"
//                 placeholder="Your Email address"
//               />
//             </div>
//             <div>
//               <label htmlFor="message" className="sr-only">
//                 Message
//               </label>
//               <textarea
//                 value={message}
//                 onChange={(e) => setMessage(e.target.value)}
//                 id="message"
//                 name="message"
//                 rows="4"
//                 className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-goldD focus:border-goldD focus:z-10 sm:text-sm"
//                 placeholder="Your Message"
//                 required
//               />
//             </div>
//           </div>
//           <div>
//             <button
//               type="submit"
//               className="w-full bg-goldD hover:bg-goldL text-white text-md py-2 px-4 rounded-md focus:outline-none focus:ring-goldD focus:border-goldD"
//             >
//               Send Message
//             </button>
//           </div>
//           {messageSent && (
//             <p className="text-green-500 text-center">
//               Message sent successfully!
//             </p>
//           )}
//         </form>
//       </div>
//     </div>
//     </div>
//     <Footer/>
//     </div>
//   );
// };

// export default ContactUs;


import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

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
    <div className='bg-page min-h-screen flex flex-col'>
      <Header />
      <div className="flex-grow container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-center text-goldD mb-8">Get in Touch</h1>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          We're here to help and answer any question you might have. We look forward to hearing from you and are always excited to discuss beekeeping, our products, or any inquiries you may have.
        </p>

        <div className="flex flex-wrap -mx-4">
          <div className="w-full md:w-1/2 px-4 mb-8 md:mb-0">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img src="./src/assets/imgs/bg-contact2.png" alt="Beekeeping" className="w-full h-64 object-cover object-center" />
              <div className="p-6">
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
          </div>

          <div className="w-full md:w-1/2 px-4">
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
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-goldD"
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
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-goldD"
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
                    rows="4"
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-goldD"
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
                <p className="text-green-500 text-center mt-4 animate-pulse">
                  Thank you! Your message has been sent successfully.
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ContactUs;