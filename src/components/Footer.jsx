
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