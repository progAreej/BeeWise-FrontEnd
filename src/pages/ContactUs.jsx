// // src/pages/ContactUs.js
// import React, { useState } from 'react';

// function ContactUs() {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     message: '',
//   });

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Handle form submission (e.g., send to an API)
//     console.log('Form submitted:', formData);
//     // Reset form
//     setFormData({ name: '', email: '', message: '' });
//   };

//   return (
//     <div className="container mx-auto px-4 py-8">
//       <h1 className="text-4xl font-bold mb-8">Contact Us</h1>
//       <form onSubmit={handleSubmit} className="max-w-lg">
//         <div className="mb-4">
//           <label htmlFor="name" className="block text-gray-700 font-bold mb-2">Name</label>
//           <input
//             type="text"
//             id="name"
//             name="name"
//             value={formData.name}
//             onChange={handleChange}
//             className="w-full px-3 py-2 border rounded-lg"
//             required
//           />
//         </div>
//         <div className="mb-4">
//           <label htmlFor="email" className="block text-gray-700 font-bold mb-2">Email</label>
//           <input
//             type="email"
//             id="email"
//             name="email"
//             value={formData.email}
//             onChange={handleChange}
//             className="w-full px-3 py-2 border rounded-lg"
//             required
//           />
//         </div>
//         <div className="mb-4">
//           <label htmlFor="message" className="block text-gray-700 font-bold mb-2">Message</label>
//           <textarea
//             id="message"
//             name="message"
//             value={formData.message}
//             onChange={handleChange}
//             className="w-full px-3 py-2 border rounded-lg"
//             rows="5"
//             required
//           ></textarea>
//         </div>
//         <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">Send Message</button>
//       </form>
//     </div>
//   );
// }

// export default ContactUs;




import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const ContactUs = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [messageSent, setMessageSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can implement logic to send the message (e.g., API call)
    // For demonstration purposes, we'll just set a message sent flag
    setMessageSent(true);
    // Clear form fields after submission
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <div className='bg-page' 
    // style={{ backgroundImage: 'url(./src/assets/imgs/bg-contact.png)' }}
    >
        <Header/>
    < div className="bg-cover bg-center h-screen relative ">
    {/* <NavBar/> */}
    
    <div className='flex justify-center items-center m-20 bg-goldD'  >
        <div className=' space-y-8 bg-white  shadow-lg rounded-xl max-w-md w-full  p-2 h-max'>
            {/* <h2>jjjjjjjjjj</h2> */}
            <img src="./src/assets/imgs/bg-contact2.png" alt="" height="" className='h-96' />
        </div>
      <div className="max-w-md w-full space-y-8 p-4 bg-white  shadow-lg rounded-xl  h-max">
          <h2 className="mt-6 text-center text-3xl font-bold text-goldD">
            Contact Us
          </h2>
        <form className="mt-8 space-y-6 relative" onSubmit={handleSubmit}>
          <input type="hidden" name="remember" defaultValue="true" />
          <div className=" space-y-4">
            <div>
              <label htmlFor="name" className="sr-only">
                Name
              </label>
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                id="name"
                name="name"
                type="text"
                autoComplete="name"
                required
                className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-goldD focus:border-goldD focus:z-10 sm:text-sm"
                placeholder="Your Full Name"
              />
            </div>
            <div>
              <label htmlFor="email-address" className="sr-only">
                Email address
              </label>
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-goldD focus:border-goldD focus:z-10 sm:text-sm"
                placeholder="Your Email address"
              />
            </div>
            <div>
              <label htmlFor="message" className="sr-only">
                Message
              </label>
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                id="message"
                name="message"
                rows="4"
                className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-goldD focus:border-goldD focus:z-10 sm:text-sm"
                placeholder="Your Message"
                required
              />
            </div>
          </div>
          <div>
            <button
              type="submit"
              className="w-full bg-goldD hover:bg-goldL text-white text-md py-2 px-4 rounded-md focus:outline-none focus:ring-goldD focus:border-goldD"
            >
              Send Message
            </button>
          </div>
          {messageSent && (
            <p className="text-green-500 text-center">
              Message sent successfully!
            </p>
          )}
        </form>
      </div>
    </div>
    </div>
    <Footer/>
    </div>
  );
};

export default ContactUs;
