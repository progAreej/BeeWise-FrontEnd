

// import React from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faFacebookF, faTwitter, faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

// const Footer = () => {
//   return (
//     <footer className="bg-brown text-white p-8 rounded-xl px-12">
        
//       <div className="container mx-auto flex">
//       <div>
//         <img src="./src/assets/imgs/logoT.png" alt="" />
//         </div>
//         <div className="flex flex-wrap justify-between gap-6">
//           <div className="w-full md:w-1/2 lg:w-1/4 mb-6 lg:mb-0">
//             <h3 className="text-xl font-bold mb-4">Quick Links</h3>
//             <ul className="text-sm space-y-2">
//               <li><a href="#" className="hover:text-goldL transition-colors duration-300">Home</a></li>
//               <li><a href="#" className="hover:text-goldL transition-colors duration-300">About Us</a></li>
//               <li><a href="#" className="hover:text-goldL transition-colors duration-300">Blog</a></li>
//               <li><a href="#" className="hover:text-goldL transition-colors duration-300">Shop</a></li>
//               <li><a href="#" className="hover:text-goldL transition-colors duration-300">Contact Us</a></li>
//             </ul>
//           </div>
//           <div className="w-full md:w-1/2 lg:w-1/4 mb-6 lg:mb-0">
//             <h3 className="text-xl font-bold mb-4">Resources</h3>
//             <ul className="text-sm space-y-2">
//               <li><a href="#" className="hover:text-goldL transition-colors duration-300">Raw Materials</a></li>
//               <li><a href="#" className="hover:text-goldL transition-colors duration-300">Geographical Tips</a></li>
//               <li><a href="#" className="hover:text-goldL transition-colors duration-300">Forum/Community Board</a></li>
//               <li><a href="#" className="hover:text-goldL transition-colors duration-300">Events</a></li>
//             </ul>
//           </div>
//           <div className="w-full md:w-1/2 lg:w-1/4 mb-6 lg:mb-0 bg-white text-brown p-6 rounded-xl">
//             <h3 className="text-xl font-bold text-goldD mb-4">Keep Updated</h3>
//             <p className="text-sm text-gray-600 mb-4">Stay informed with our newsletter, featuring the latest industry insights, professional tips, and exclusive deals.</p>
//             <form action="#" method="POST" className="flex flex-col gap-4">
//               <input type="email" name="email" placeholder="Your Email" className="w-full p-3 border border-gray-300 rounded-lg" />
//               <button type="submit" className="w-full bg-goldD text-white font-bold text-lg py-3 rounded-lg shadow hover:bg-goldL transition-colors duration-300">
//                 Subscribe Now
//               </button>
//             </form>
//           </div>
//         </div>
//       </div>

//       <hr className="my-6 border-t border-goldD" />

//       <div className="text-center  flex flex-row justify-between items-center gap-4 px-4">
//         <div>
//         <p className="text-sm">&copy; {new Date().getFullYear()} BeeWise. All Rights Reserved.</p>
//         </div>
//         <div className="flex gap-4">
//           <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-goldL transition-colors duration-300">
//             <FontAwesomeIcon icon={faFacebookF} size="lg" />
//           </a>
//           <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-goldL transition-colors duration-300">
//             <FontAwesomeIcon icon={faTwitter} size="lg" />
//           </a>
//           <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-goldL transition-colors duration-300">
//             <FontAwesomeIcon icon={faInstagram} size="lg" />
//           </a>
//           <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-goldL transition-colors duration-300">
//             <FontAwesomeIcon icon={faLinkedinIn} size="lg" />
//           </a>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faInstagram, faLinkedinIn, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faPhone, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-brown to-amber-900 text-white pt-12 pb-6 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div className="flex flex-col items-center md:items-start">
            <img src="./src/assets/imgs/logoT.png" alt="BeeWise Logo" className="w-40 mb-4" />
            <p className="text-sm text-center md:text-left mb-4">Empowering beekeepers with wisdom, innovation, and community.</p>
            <div className="flex space-x-4">
              {[faFacebookF, faTwitter, faInstagram, faLinkedinIn, faYoutube].map((icon, index) => (
                <a key={index} href="#" className="text-white hover:text-goldL transition-colors duration-300">
                  <FontAwesomeIcon icon={icon} size="lg" />
                </a>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4 text-goldL">Quick Links</h3>
            <ul className="space-y-2">
              {['Home', 'About Us', 'Blog', 'Shop', 'Contact Us'].map((item, index) => (
                <li key={index}>
                  <a href="#" className="text-sm hover:text-goldL transition-colors duration-300 flex items-center">
                    <span className="mr-2">▸</span> {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4 text-goldL">Resources</h3>
            <ul className="space-y-2">
              {['Raw Materials', 'Geographical Tips', 'Forum/Community', 'Events', 'FAQs'].map((item, index) => (
                <li key={index}>
                  <a href="#" className="text-sm hover:text-goldL transition-colors duration-300 flex items-center">
                    <span className="mr-2">▸</span> {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="bg-white text-brown p-6 rounded-xl shadow-lg">
            <h3 className="text-xl font-bold text-goldD mb-4">Stay Connected</h3>
            <p className="text-sm text-gray-600 mb-4">Join our community for exclusive updates and offers!</p>
            <form action="#" method="POST" className="flex flex-col gap-4">
              <input type="email" name="email" placeholder="Your Email" className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-goldL focus:border-transparent" />
              <button type="submit" className="w-full bg-goldD text-white font-bold text-lg py-3 rounded-lg shadow hover:bg-goldL transition-colors duration-300">
                Subscribe Now
              </button>
            </form>
          </div>
        </div>
        
        <div className="border-t border-goldL pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6">
              <a href="mailto:info@beewise.com" className="text-sm hover:text-goldL transition-colors duration-300">
                <FontAwesomeIcon icon={faEnvelope} className="mr-2" /> info@beewise.com
              </a>
              <a href="tel:+1234567890" className="text-sm hover:text-goldL transition-colors duration-300">
                <FontAwesomeIcon icon={faPhone} className="mr-2" /> +1 (234) 567-890
              </a>
              <span className="text-sm">
                <FontAwesomeIcon icon={faMapMarkerAlt} className="mr-2" /> 123 Bee Street, Honey City, HC 12345
              </span>
            </div>
            <p className="text-sm">&copy; {new Date().getFullYear()} BeeWise. All Rights Reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;