// import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

// const Header = () => {
//   const [scrolling, setScrolling] = useState(false);
//   const [menuOpen, setMenuOpen] = useState(false);
//   const [isLoggedIn, setIsLoggedIn] = useState(false); // Replace with actual authentication logic

//   const toggleMenu = () => {
//     setMenuOpen(!menuOpen);
//   };

//   useEffect(() => {
//     const handleScroll = () => {
//       setScrolling(window.scrollY > 0);
//     };

//     window.addEventListener('scroll', handleScroll);

//     return () => {
//       window.removeEventListener('scroll', handleScroll);
//     };
//   }, []);

//   return (
//     <>
//       <nav className={`py-4 flex items-center justify-between mx-4 md:mx-8 rounded-xl sticky top-2 px-4 md:px-12 ${scrolling ? 'bg-white bg-opacity-85 shadow-lg' : 'bg-opacity-10 transition-opacity duration-300'}`}>
//         <Link to="/" className="hover:text-goldL transition-colors duration-300">
//           <img src="/src/assets/imgs/logo1.png" alt="BeeWise logo" className="h-12 w-auto transform hover:scale-110" />
//         </Link>

//         <div className="md:hidden">
//           <button onClick={toggleMenu} className="focus:outline-none">
//             <FontAwesomeIcon icon={menuOpen ? faTimes : faBars} className="text-2xl text-brown" />
//           </button>
//         </div>

//         <div className="hidden md:flex items-center space-x-6 text-brown text-sm font-merriSans">
//           <NavLinks isLoggedIn={isLoggedIn} />
//           {!isLoggedIn && (
//             <Link to="/signup" className="bg-goldD hover:bg-goldL text-white font-bold py-4 px-8 rounded-xl transition-colors duration-300 transform hover:scale-110">
//               Sign Up
//             </Link>
//           )}
//         </div>
//       </nav>

//       {/* Full-screen Mobile Menu */}
//       <div className={`fixed inset-0 bg-page bg-opacity-90 z-50 flex flex-col justify-center items-center transition-transform transform ${menuOpen ? 'translate-x-0' : '-translate-x-full'} md:hidden`}>
//         <button onClick={toggleMenu} className="absolute top-6 right-6 focus:outline-none">
//           <FontAwesomeIcon icon={faTimes} className="text-3xl text-white" />
//         </button>
//         <div className="mb-8">
//           <img src="/src/assets/imgs/logo1.png" alt="BeeWise logo" className="h-20 w-auto" />
//         </div>
//         <NavLinks isLoggedIn={isLoggedIn} />
//         {!isLoggedIn && (
//           <Link to="/signup" className="mt-8 bg-goldD text-white font-bold py-2 px-8 rounded-xl transition-colors duration-300 transform hover:scale-110">
//             Sign Up
//           </Link>
//         )}
//       </div>
//     </>
//   );
// };

// const NavLinks = ({ isLoggedIn }) => (
//   <ul className="flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-6 text-center">
//     <li>
//       <Link to="/" className="hover:text-goldL transition-colors duration-300">Home</Link>
//     </li>

//     <li className="relative group">
//       <Link
//         to="/startbeekeeping"
//         className="hover:text-goldL transition-colors duration-300 inline-block"
//       >
//         Start Beekeeping
//         <i className="fas fa-chevron-down ml-2 transform transition-transform duration-300 group-hover:rotate-180"></i>
//       </Link>
//       <ul className="absolute left-0 mt-2 w-36 bg-brown text-goldD border border-gray-200 rounded-md shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
//         <li>
//           <Link
//             to="/startbeekeeping/rawmaterials"
//             className="block px-4 py-2 hover:bg-gray-100 hover:text-goldL transition-colors duration-300"
//           >
//             Raw Materials
//           </Link>
//         </li>
//         <li>
//           <Link
//             to="/startbeekeeping/tipsandtricks"
//             className="block px-4 py-2 hover:bg-gray-100 hover:text-goldL transition-colors duration-300"
//           >
//             Tips and Tricks
//           </Link>
//         </li>
//         <li>
//           <Link
//             to="/startbeekeeping/howtostart"
//             className="block px-4 py-2 hover:bg-gray-100 hover:text-goldL transition-colors duration-300"
//           >
//             How to Start
//           </Link>
//         </li>
//       </ul>
//     </li>

//     <li className="relative group">
//       <Link
//         to="/resources"
//         className="hover:text-goldL transition-colors duration-300 inline-flex items-center"
//       >
//         Resources
//         <i className="fas fa-chevron-down ml-2 transform transition-transform duration-300 group-hover:rotate-180"></i>
//       </Link>
//       <ul className="absolute left-0 mt-2 w-36 bg-brown text-goldD border border-gray-200 rounded-md shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
//         <li>
//           <Link
//             to="/resources/geographical-tips"
//             className="block px-4 py-2 hover:bg-gray-100 hover:text-goldL transition-colors duration-300"
//           >
//             Geographical Tips
//           </Link>
//         </li>
//         <li>
//           <Link
//             to="/resources/educational-blog"
//             className="block px-4 py-2 hover:bg-gray-100 hover:text-goldL transition-colors duration-300"
//           >
//             Educational Blog
//           </Link>
//         </li>
//       </ul>
//     </li>

//     <li className="relative group">
//       <Link
//         to="/community"
//         className="hover:text-goldL transition-colors duration-300 inline-flex items-center"
//       >
//         Community
//         <i className="fas fa-chevron-down ml-2 transform transition-transform duration-300 group-hover:rotate-180"></i>
//       </Link>
//       <ul className="absolute left-0 mt-2 w-36 bg-brown text-goldD border border-gray-200 rounded-md shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
//         <li>
//           <Link
//             to="/community/forum"
//             className="block px-4 py-2 hover:bg-gray-100 hover:text-goldL transition-colors duration-300"
//           >
//             Forum
//           </Link>
//         </li>
//         <li>
//           <Link
//             to="/community/events"
//             className="block px-4 py-2 hover:bg-gray-100 hover:text-goldL transition-colors duration-300"
//           >
//             Events
//           </Link>
//         </li>
//       </ul>
//     </li>

//     <li>
//       <Link to="/marketplace" className="hover:text-goldL transition-colors duration-300">Marketplace</Link>
//     </li>
//     <li>
//       <Link to="/our-story" className="hover:text-goldL transition-colors duration-300">Our Story</Link>
//     </li>
//     <li>
//       <Link to="/contact-us" className="hover:text-goldL transition-colors duration-300">Contact Us</Link>
//     </li>
//     {isLoggedIn && (
//       <>
//         <li>
//           <Link to="/my-account" className="hover:text-goldL transition-colors duration-300">My Account</Link>
//         </li>
//         <li>
//           <Link to="/my-listings" className="hover:text-goldL transition-colors duration-300">My Listings</Link>
//         </li>
//         <li>
//           <Link to="/my-posts" className="hover:text-goldL transition-colors duration-300">My Posts</Link>
//         </li>
//       </>
//     )}
//     {!isLoggedIn && (
//       <li>
//         <Link to="/login" className="hover:text-goldL transition-colors duration-300">Login</Link>
//       </li>
//     )}
//   </ul>
// );

// export default Header;


import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  const [scrolling, setScrolling] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolling(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);

    // Check if the user is logged in
    const loggedIn = sessionStorage.getItem('isLoggedIn') === 'true';
    setIsLoggedIn(loggedIn);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleLogout = () => {
    sessionStorage.removeItem('isLoggedIn');
    setIsLoggedIn(false);
    navigate('/'); // Redirect to home or login page
  };

  return (
    <>
      <nav className={`py-4 flex items-center justify-between mx-4 md:mx-8 rounded-xl sticky top-2 px-4 md:px-12 ${scrolling ? 'bg-white bg-opacity-85 shadow-lg' : 'bg-opacity-10 transition-opacity duration-300'}`}>
        <Link to="/" className="hover:text-goldL transition-colors duration-300">
          <img src="/src/assets/imgs/logo1.png" alt="BeeWise logo" className="h-12 w-auto transform hover:scale-110" />
        </Link>

        <div className="md:hidden">
          <button onClick={toggleMenu} className="focus:outline-none">
            <FontAwesomeIcon icon={menuOpen ? faTimes : faBars} className="text-2xl text-brown" />
          </button>
        </div>

        <div className="hidden md:flex items-center space-x-6 text-brown text-sm font-merriSans">
          <NavLinks isLoggedIn={isLoggedIn} />
          {!isLoggedIn ? (
            <Link to="/LogIn" className="bg-goldD hover:bg-goldL text-white font-bold py-2 px-8 rounded-xl transition-colors duration-300 transform hover:scale-110">
              Log In
            </Link>
          ) : (
            <button
              onClick={handleLogout}
              className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-8 rounded-xl transition-colors duration-300 transform hover:scale-110"
            >
              Log Out
            </button>
          )}
        </div>
      </nav>

      {/* Full-screen Mobile Menu */}
      <div className={`fixed inset-0 bg-page bg-opacity-90 z-50 flex flex-col justify-center items-center transition-transform transform ${menuOpen ? 'translate-x-0' : '-translate-x-full'} md:hidden`}>
        <button onClick={toggleMenu} className="absolute top-6 right-6 focus:outline-none">
          <FontAwesomeIcon icon={faTimes} className="text-3xl text-white" />
        </button>
        <div className="mb-8">
          <img src="/src/assets/imgs/logo1.png" alt="BeeWise logo" className="h-20 w-auto" />
        </div>
        <NavLinks isLoggedIn={isLoggedIn} />
        {!isLoggedIn ? (
          <Link to="/signup" className="mt-8 bg-goldD text-white font-bold py-2 px-8 rounded-xl transition-colors duration-300 transform hover:scale-110">
            Sign Up
          </Link>
        ) : (
          <button
            onClick={handleLogout}
            className="mt-8 bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-8 rounded-xl transition-colors duration-300 transform hover:scale-110"
          >
            Log Out
          </button>
        )}
      </div>
    </>
  );
};

const NavLinks = ({ isLoggedIn }) => (
  <ul className="flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-6 text-center">
    <li>
      <Link to="/" className="hover:text-goldL transition-colors duration-300">Home</Link>
    </li>

    <li>
      <Link to="/ourstory" className="hover:text-goldL transition-colors duration-300">Our Story</Link>
    </li>

    <li className="relative group">
      <Link
        className="hover:text-goldL transition-colors duration-300 inline-block"
      >
        Learn
        <i className="fas fa-chevron-down ml-2 transform transition-transform duration-300 group-hover:rotate-180"></i>
      </Link>
      <ul className="absolute left-0 mt-2 w-36 bg-brown text-goldD border border-gray-200 rounded-md shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
        <li>
          <Link
            to="/blog"
            className="block px-4 py-2 hover:bg-gray-100 hover:text-goldL transition-colors duration-300"
          >
           Blog
          </Link>
        </li>
        <li>
          <Link
            to="/resources"
            className="block px-4 py-2 hover:bg-gray-100 hover:text-goldL transition-colors duration-300"
          >
            Resources
          </Link>
        </li>
      </ul>
    </li>
    {/* ------ */}
    <li>
      <Link to="/Community" className="hover:text-goldL transition-colors duration-300">Community</Link>
    </li>

    <li className="relative group">
      <Link
        className="hover:text-goldL transition-colors duration-300 inline-block"
      >
        Market Place
        <i className="fas fa-chevron-down ml-2 transform transition-transform duration-300 group-hover:rotate-180"></i>
      </Link>
      <ul className="absolute left-0 mt-2 w-36 bg-brown text-goldD border border-gray-200 rounded-md shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
        <li>
          <Link
            to="/BrowseProducts"
            className="block px-4 py-2 hover:bg-gray-100 hover:text-goldL transition-colors duration-300"
          >
           Browse Product
          </Link>
        </li>
        <li>
          <Link
            to="SellProduct"
            className="block px-4 py-2 hover:bg-gray-100 hover:text-goldL transition-colors duration-300"
          >
            Sell Product
          </Link>
        </li>
      </ul>
    </li>
    <li>
      <Link to="/Events" className="hover:text-goldL transition-colors duration-300">Events</Link>
    </li>
    <li>
      <Link to="/ContactUs" className="hover:text-goldL transition-colors duration-300">Contact Us</Link>
    </li>

{/* 

    <li className="relative group">
      <Link
        to="/resources"
        className="hover:text-goldL transition-colors duration-300 inline-flex items-center"
      >
        Resources
        <i className="fas fa-chevron-down ml-2 transform transition-transform duration-300 group-hover:rotate-180"></i>
      </Link>
      <ul className="absolute left-0 mt-2 w-36 bg-brown text-goldD border border-gray-200 rounded-md shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
        <li>
          <Link
            to="/resources/geographical-tips"
            className="block px-4 py-2 hover:bg-gray-100 hover:text-goldL transition-colors duration-300"
          >
            Geographical Tips
          </Link>
        </li>
        <li>
          <Link
            to="/resources/educational-blog"
            className="block px-4 py-2 hover:bg-gray-100 hover:text-goldL transition-colors duration-300"
          >
            Educational Blog
          </Link>
        </li>
      </ul>
    </li>

    <li className="relative group">
      <Link
        to="/community"
        className="hover:text-goldL transition-colors duration-300 inline-flex items-center"
      >
        Community
        <i className="fas fa-chevron-down ml-2 transform transition-transform duration-300 group-hover:rotate-180"></i>
      </Link>
      <ul className="absolute left-0 mt-2 w-36 bg-brown text-goldD border border-gray-200 rounded-md shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
        <li>
          <Link
            to="/community/forum"
            className="block px-4 py-2 hover:bg-gray-100 hover:text-goldL transition-colors duration-300"
          >
            Forum
          </Link>
        </li>
        <li>
          <Link
            to="/community/events"
            className="block px-4 py-2 hover:bg-gray-100 hover:text-goldL transition-colors duration-300"
          >
            Events
          </Link>
        </li>
      </ul>
    </li>

    <li>
      <Link to="/marketplace" className="hover:text-goldL transition-colors duration-300">Marketplace</Link>
    </li>
    <li>
      <Link to="/contact-us" className="hover:text-goldL transition-colors duration-300">Contact Us</Link>
    </li> */}
    {isLoggedIn && (
      <>
        <li>
          <Link to="/my-account" className="hover:text-goldL transition-colors duration-300">My Account</Link>
        </li>
        <li>
          <Link to="/my-listings" className="hover:text-goldL transition-colors duration-300">My Listings</Link>
        </li>
        <li>
          <Link to="/my-posts" className="hover:text-goldL transition-colors duration-300">My Posts</Link>
        </li>
      </>
    )}
    {!isLoggedIn && (
      <li>
        {/* <Link to="/login" className="hover:text-goldL transition-colors duration-300">Login</Link> */}
      </li>
    )}
  </ul>
);

export default Header;
