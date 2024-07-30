

// import React, { useState, useEffect } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

// const Header = () => {
//   const [scrolling, setScrolling] = useState(false);
//   const [menuOpen, setMenuOpen] = useState(false);
//   const [userType, setUserType] = useState(null);
//   const navigate = useNavigate();

//   // Toggle mobile menu
//   const toggleMenu = () => {
//     setMenuOpen(prevState => !prevState);
//   };

//   // Handle scroll and user type retrieval
//   useEffect(() => {
//     const handleScroll = () => {
//       setScrolling(window.scrollY > 0);
//     };

//     // Add scroll event listener
//     window.addEventListener('scroll', handleScroll);

//     // Retrieve user type from session storage
//     const storedUser = sessionStorage.getItem('user');
//     if (storedUser) {
//       try {
//         const user = JSON.parse(storedUser);
//         setUserType(user.userType);
//       } catch (error) {
//         console.error('Error parsing user data:', error);
//       }
//     } else {
//       console.log('No user data found in session storage');
//     }

//     // Cleanup event listener on component unmount
//     return () => {
//       window.removeEventListener('scroll', handleScroll);
//     };
//   }, []);

//   // Handle user logout
//   const handleLogout = () => {
//     sessionStorage.removeItem('user');
//     setUserType(null);
//     navigate('/');
//   };

//   return (
//     <>
//       <nav
//         className={`py-4 flex items-center justify-between mx-4 md:mx-8 rounded-xl sticky top-2 px-4 md:px-12 transition-opacity duration-300 ${
//           scrolling ? 'bg-white bg-opacity-90 shadow-lg' : 'bg-opacity-10'
//         }`}
//       >
//         <Link to="/" className="hover:text-goldL transition-colors duration-300">
//           <img
//             src="/src/assets/imgs/logo1.png"
//             alt="BeeWise logo"
//             className="h-12 w-auto transform hover:scale-110"
//           />
//         </Link>

//         <div className="md:hidden">
//           <button onClick={toggleMenu} className="focus:outline-none">
//             <FontAwesomeIcon icon={menuOpen ? faTimes : faBars} className="text-2xl text-brown" />
//           </button>
//         </div>

//         <div className="hidden md:flex items-center space-x-6 text-brown text-sm font-merriSans">
//           <NavLinks userType={userType} />
//           {userType ? (
//             <button
//               onClick={handleLogout}
//               className="bg-goldD text-white font-bold py-2 px-8 rounded-xl transition-colors duration-300 transform hover:scale-110"
//             >
//               Log Out
//             </button>
//           ) : (
//             <Link
//               to="/LogIn"
//               className="bg-goldD text-white font-bold py-2 px-8 rounded-xl transition-colors duration-300 transform hover:scale-110"
//             >
//               Log In
//             </Link>
//           )}
//         </div>
//       </nav>

//       {/* Full-screen Mobile Menu */}
//       <div
//         className={`fixed inset-0 bg-page bg-opacity-90 z-50 flex flex-col justify-center items-center transition-transform transform ${
//           menuOpen ? 'translate-x-0' : '-translate-x-full'
//         } md:hidden`}
//       >
//         <button onClick={toggleMenu} className="absolute top-6 right-6 focus:outline-none">
//           <FontAwesomeIcon icon={faTimes} className="text-3xl text-white" />
//         </button>
//         <div className="mb-8">
//           <img
//             src="/src/assets/imgs/logo1.png"
//             alt="BeeWise logo"
//             className="h-20 w-auto"
//           />
//         </div>
//         <NavLinks userType={userType} />
//         {userType ? (
//           <button
//             onClick={handleLogout}
//             className="mt-8 bg-goldD text-white font-bold py-2 px-8 rounded-xl transition-colors duration-300 transform hover:scale-110"
//           >
//             Log Out
//           </button>
//         ) : (
//           <Link
//             to="/signup"
//             className=" bg-goldD text-white font-bold py-2 px-8 rounded-xl transition-colors duration-300 transform hover:scale-110"
//           >
//             Sign Up
//           </Link>
//         )}
//       </div>
//     </>
//   );
// };

// // Component for rendering navigation links based on userType
// const NavLinks = ({ userType }) => (
//   <ul className="flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-6 text-center">
//     <li>
//       <Link to="/" className="hover:text-goldL transition-colors duration-300">Home</Link>
//     </li>
//     <li>
//       <Link to="/ourstory" className="hover:text-goldL transition-colors duration-300">Our Story</Link>
//     </li>
//     <li className="relative group">
//       <Link
//         className="hover:text-goldL transition-colors duration-300 inline-block"
//       >
//         Learn
//         <i className="fas fa-chevron-down ml-2 transform transition-transform duration-300 group-hover:rotate-180"></i>
//       </Link>
//       <ul className="absolute left-0 mt-2 w-36 bg-brown text-goldD border border-gray-200 rounded-md shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
//         <li>
//           <Link
//             to="/blog"
//             className="block px-4 py-2 hover:bg-gray-100 hover:text-goldL transition-colors duration-300"
//           >
//             Blog
//           </Link>
//         </li>
//         <li>
//           <Link
//             to="/resources"
//             className="block px-4 py-2 hover:bg-gray-100 hover:text-goldL transition-colors duration-300"
//           >
//             Resources
//           </Link>
//         </li>
//       </ul>
//     </li>
//     <li>
//       <Link to="/Community" className="hover:text-goldL transition-colors duration-300">Community</Link>
//     </li>
//     <li className="relative group">
//       <Link
//         className="hover:text-goldL transition-colors duration-300 inline-block"
//       >
//         Market Place
//         <i className="fas fa-chevron-down ml-2 transform transition-transform duration-300 group-hover:rotate-180"></i>
//       </Link>
//       <ul className="absolute left-0 mt-2 w-36 bg-brown text-goldD border border-gray-200 rounded-md shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
//         <li>
//           <Link
//             to="/BrowseProducts"
//             className="block px-4 py-2 hover:bg-gray-100 hover:text-goldL transition-colors duration-300"
//           >
//             Browse Product
//           </Link>
//         </li>
//         <li>
//           <Link
//             to="/SellProduct"
//             className="block px-4 py-2 hover:bg-gray-100 hover:text-goldL transition-colors duration-300"
//           >
//             Sell Product
//           </Link>
//         </li>
//       </ul>
//     </li>
//     <li>
//       <Link to="/Events" className="hover:text-goldL transition-colors duration-300">Events</Link>
//     </li>
//     <li>
//       <Link to="/ContactUs" className="hover:text-goldL transition-colors duration-300">Contact Us</Link>
//     </li>

//     {userType === 'AspiringBeekeeper' && (
//       <>
//         <li>
//           <Link to="/profile" className="hover:text-goldL transition-colors duration-300">Profile</Link>
//         </li>
//       </>
//     )}

//     {userType === 'ExperiencedBeekeeper' && (
//       <>
//         <li>
//           <Link to="/Cart" className="hover:text-goldL transition-colors duration-300">Cart</Link>
//         </li>
//       </>
//     )}
//   </ul>
// );

// export default Header;


import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes, faChevronDown } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  const [scrolling, setScrolling] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [userType, setUserType] = useState(null);
  const navigate = useNavigate();

  const toggleMenu = () => setMenuOpen(prevState => !prevState);

  useEffect(() => {
    const handleScroll = () => setScrolling(window.scrollY > 0);
    window.addEventListener('scroll', handleScroll);

    const storedUser = sessionStorage.getItem('user');
    if (storedUser) {
      try {
        const user = JSON.parse(storedUser);
        setUserType(user.userType);
      } catch (error) {
        console.error('Error parsing user data:', error);
      }
    }

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLogout = () => {
    sessionStorage.removeItem('user');
    setUserType(null);
    navigate('/');
  };

  return (
    <>
      <nav className={`py-4 flex items-center justify-between mx-4 md:mx-8 rounded-xl sticky top-2 px-4 md:px-12 transition-all duration-300 ${
        scrolling ? 'bg-white bg-opacity-95 shadow-lg' : 'bg-opacity-10'
      }`}>
        <Link to="/" className="hover:opacity-80 transition-opacity duration-300">
          <img src="/src/assets/imgs/logo1.png" alt="BeeWise logo" className="h-12 w-auto" />
        </Link>

        <div className="md:hidden">
          <button onClick={toggleMenu} className="focus:outline-none">
            <FontAwesomeIcon icon={menuOpen ? faTimes : faBars} className="text-2xl text-brown" />
          </button>
        </div>

        <div className="hidden md:flex items-center space-x-6 text-brown text-sm font-merriSans">
          <NavLinks userType={userType} />
          {userType ? (
            <button onClick={handleLogout} className="bg-goldD text-white font-bold py-2 px-8 rounded-xl transition-all duration-300 hover:bg-goldL">
              Sign Out
            </button>
          ) : (
            <Link to="/LogIn" className="bg-goldD text-white font-bold py-2 px-8 rounded-xl transition-all duration-300 hover:bg-goldL">
              Sign In
            </Link>
          )}
        </div>
      </nav>

      {/* Mobile Menu */}
      <div className={`fixed inset-0 bg-brown bg-opacity-95 z-50 flex flex-col justify-center items-center transition-transform transform ${
        menuOpen ? 'translate-x-0' : '-translate-x-full'
      } md:hidden`}>
        <button onClick={toggleMenu} className="absolute top-6 right-6 focus:outline-none">
          <FontAwesomeIcon icon={faTimes} className="text-3xl text-white" />
        </button>
        <div className="mb-8">
          <img src="/src/assets/imgs/logo1.png" alt="BeeWise logo" className="h-20 w-auto" />
        </div>
        <NavLinks userType={userType} isMobile={true} />
        {userType ? (
          <button onClick={handleLogout} className="mt-8 bg-goldD text-white font-bold py-2 px-8 rounded-xl transition-all duration-300 hover:bg-goldL">
            Sign Out
          </button>
        ) : (
          <Link to="/signup" className="mt-8 bg-goldD text-white font-bold py-2 px-8 rounded-xl transition-all duration-300 hover:bg-goldL">
            Join Now
          </Link>
        )}
      </div>
    </>
  );
};

const NavLinks = ({ userType, isMobile }) => (
  <ul className={`flex ${isMobile ? 'flex-col space-y-6' : 'flex-row space-x-6'} text-center`}>
    <NavItem to="/" label="Home" />
    <NavItem to="/ourstory" label="Our Story" />
    <DropdownItem label="Education" items={[
      { to: "/blog", label: "Beekeeping Blog" },
      { to: "/resources", label: "Learning Resources" }
    ]} />
    <NavItem to="/Community" label="Community Forum" />
    <DropdownItem label="Marketplace" items={[
      { to: "/BrowseProducts", label: "Browse Products" },
      { to: "/SellProduct", label: "Sell Your Products" }
    ]} />
    <NavItem to="/Events" label="Upcoming Events" />
    <NavItem to="/ContactUs" label="Contact Us" />

    {userType === 'AspiringBeekeeper' && <NavItem to="/profile" label="My Profile" />}
    {userType === 'ExperiencedBeekeeper' && <NavItem to="/Cart" label="Shopping Cart" />}
  </ul>
);

const NavItem = ({ to, label }) => (
  <li>
    <Link to={to} className="hover:text-goldL transition-colors duration-300">{label}</Link>
  </li>
);

const DropdownItem = ({ label, items }) => (
  <li className="relative group">
    <span className="hover:text-goldL transition-colors duration-300 inline-flex items-center cursor-pointer">
      {label}
      <FontAwesomeIcon icon={faChevronDown} className="ml-2 transform transition-transform duration-300 group-hover:rotate-180" />
    </span>
    <ul className="absolute left-0 mt-2 w-48 bg-white text-brown border border-gray-200 rounded-md shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in-out">
      {items.map((item, index) => (
        <li key={index}>
          <Link to={item.to} className="block px-4 py-2 hover:bg-gray-100 hover:text-goldL transition-colors duration-300">
            {item.label}
          </Link>
        </li>
      ))}
    </ul>
  </li>
);

export default Header;