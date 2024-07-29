

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="bg-brown text-white p-8 rounded-xl px-12">
        
      <div className="container mx-auto flex">
      <div>
        <img src="./src/assets/imgs/logoT.png" alt="" />
        </div>
        <div className="flex flex-wrap justify-between gap-6">
          <div className="w-full md:w-1/2 lg:w-1/4 mb-6 lg:mb-0">
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="text-sm space-y-2">
              <li><a href="#" className="hover:text-goldL transition-colors duration-300">Home</a></li>
              <li><a href="#" className="hover:text-goldL transition-colors duration-300">About Us</a></li>
              <li><a href="#" className="hover:text-goldL transition-colors duration-300">Blog</a></li>
              <li><a href="#" className="hover:text-goldL transition-colors duration-300">Shop</a></li>
              <li><a href="#" className="hover:text-goldL transition-colors duration-300">Contact Us</a></li>
            </ul>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/4 mb-6 lg:mb-0">
            <h3 className="text-xl font-bold mb-4">Resources</h3>
            <ul className="text-sm space-y-2">
              <li><a href="#" className="hover:text-goldL transition-colors duration-300">Raw Materials</a></li>
              <li><a href="#" className="hover:text-goldL transition-colors duration-300">Geographical Tips</a></li>
              <li><a href="#" className="hover:text-goldL transition-colors duration-300">Forum/Community Board</a></li>
              <li><a href="#" className="hover:text-goldL transition-colors duration-300">Events</a></li>
            </ul>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/4 mb-6 lg:mb-0 bg-white text-brown p-6 rounded-xl">
            <h3 className="text-xl font-bold text-goldD mb-4">Keep Updated</h3>
            <p className="text-sm text-gray-600 mb-4">Stay informed with our newsletter, featuring the latest industry insights, professional tips, and exclusive deals.</p>
            <form action="#" method="POST" className="flex flex-col gap-4">
              <input type="email" name="email" placeholder="Your Email" className="w-full p-3 border border-gray-300 rounded-lg" />
              <button type="submit" className="w-full bg-goldD text-white font-bold text-lg py-3 rounded-lg shadow hover:bg-goldL transition-colors duration-300">
                Subscribe Now
              </button>
            </form>
          </div>
        </div>
      </div>

      <hr className="my-6 border-t border-goldD" />

      <div className="text-center  flex flex-row justify-between items-center gap-4 px-4">
        <div>
        <p className="text-sm">&copy; {new Date().getFullYear()} BeeWise. All Rights Reserved.</p>
        </div>
        <div className="flex gap-4">
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-goldL transition-colors duration-300">
            <FontAwesomeIcon icon={faFacebookF} size="lg" />
          </a>
          <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-goldL transition-colors duration-300">
            <FontAwesomeIcon icon={faTwitter} size="lg" />
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-goldL transition-colors duration-300">
            <FontAwesomeIcon icon={faInstagram} size="lg" />
          </a>
          <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-goldL transition-colors duration-300">
            <FontAwesomeIcon icon={faLinkedinIn} size="lg" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
