
// import React, { useState, useEffect } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faBars, faTimes, faChevronDown } from '@fortawesome/free-solid-svg-icons';

// const Header = () => {
//   const [scrolling, setScrolling] = useState(false);
//   const [menuOpen, setMenuOpen] = useState(false);
//   const [user, setUser] = useState(null);
//   const navigate = useNavigate();

//   const toggleMenu = () => setMenuOpen(prevState => !prevState);

//   useEffect(() => {
//     const handleScroll = () => setScrolling(window.scrollY > 0);
//     window.addEventListener('scroll', handleScroll);

//     const storedUser = sessionStorage.getItem('user');
//     if (storedUser) {
//       try {
//         const user = JSON.parse(storedUser);
//         setUser(user);
//       } catch (error) {
//         console.error('Error parsing user data:', error);
//       }
//     }

//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   const handleLogout = () => {
//     sessionStorage.removeItem('user');
//     setUser(null);
//     navigate('/');
//   };

//   return (
//     <>
//       <nav className={`z-50 py-4 flex items-center justify-between mx-4 md:mx-8 rounded-xl sticky top-4 px-4 md:px-12 transition-all duration-300 ${
//         scrolling ? 'bg-white bg-opacity-95 shadow-lg' : 'bg-opacity-10'
//       }`}>
//         <Link to="/" className="hover:opacity-80 transition-opacity duration-300">
//           <img src="/src/assets/imgs/logo1.png" alt="BeeWise logo" className="h-12 w-auto" />
//         </Link>

//         <div className="md:hidden">
//           <button onClick={toggleMenu} className="focus:outline-none">
//             <FontAwesomeIcon icon={menuOpen ? faTimes : faBars} className="text-2xl text-brown" />
//           </button>
//         </div>

//         <div className="hidden md:flex items-center space-x-6 text-brown text-sm font-merriSans">
//           <NavLinks userType={user?.userType} />
//           {user ? (
//             <>
//               <Link to="/Cart" className="hover:text-goldL transition-colors duration-300">Cart</Link>
//               <button onClick={handleLogout} className="bg-goldD text-white font-bold py-2 px-8 rounded-xl transition-all duration-300 hover:bg-goldL">
//                 Log Out
//               </button>
//             </>
//           ) : (
//             <Link to="/UserRoleSelection" className="bg-goldD text-white font-bold py-3 px-8 rounded-xl transition-all duration-300 hover:bg-goldL transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
//               Register Now
//             </Link>
//           )}
//         </div>
//       </nav>

//       {/* Mobile Menu */}
//       <div className={`fixed inset-0 bg-brown bg-opacity-95 z-50 flex flex-col justify-center items-center transition-transform transform ${
//         menuOpen ? 'translate-x-0' : '-translate-x-full'
//       } md:hidden`}>
//         <button onClick={toggleMenu} className="absolute top-6 right-6 focus:outline-none">
//           <FontAwesomeIcon icon={faTimes} className="text-3xl text-white" />
//         </button>
//         <div className="mb-8">
//           <img src="/src/assets/imgs/logo1.png" alt="BeeWise logo" className="h-20 w-auto" />
//         </div>
//         <NavLinks userType={user?.userType} isMobile={true} />
//         {user ? (
//           <>
//             <Link to="/Cart" className="mt-8 bg-goldD text-white font-bold py-2 px-8 rounded-xl transition-all duration-300 hover:bg-goldL">
//               Cart
//             </Link>
//             <button onClick={handleLogout} className="mt-8 bg-goldD text-white font-bold py-2 px-8 rounded-xl transition-all duration-300 hover:bg-goldL">
//               Log Out
//             </button>
//           </>
//         ) : (
//           <Link to="/signup" className="mt-8 bg-goldD text-white font-bold py-2 px-8 rounded-xl transition-all duration-300 hover:bg-goldL">
//             Join Now
//           </Link>
//         )}
//       </div>
//     </>
//   );
// };

// const NavLinks = ({ userType, isMobile }) => (
//   <ul className={`flex ${isMobile ? 'flex-col space-y-6' : 'flex-row space-x-6'} text-center`}>
//     <NavItem to="/" label="Home" />
//     <NavItem to="/ourstory" label="Our Story" />
//     <DropdownItem label="Start Beekeeping" items={[
//       { to: "/blog", label: "Beekeeping Blog" },
//       { to: "/resources", label: "Learning Resources" }
//     ]} />
//     <NavItem to="/Community" label="Community" />
//     <NavItem to="/MarketPlace" label="Market Place" />
//     <NavItem to="/Events" label="Events" />
//     <NavItem to="/ContactUs" label="Contact Us" />

//     {userType === 'AspiringBeekeeper' && <NavItem to="/profile" label="My Profile" />}
//     {userType === 'ExperiencedBeekeeper' && <NavItem to="/Cart" label="Shopping Cart" />}
//   </ul>
// );

// const NavItem = ({ to, label }) => (
//   <li>
//     <Link to={to} className="hover:text-goldL transition-colors duration-300">{label}</Link>
//   </li>
// );

// const DropdownItem = ({ label, items }) => (
//   <li className="relative group">
//     <span className="hover:text-goldL transition-colors duration-300 inline-flex items-center cursor-pointer">
//       {label}
//       <FontAwesomeIcon icon={faChevronDown} className="ml-2 transform transition-transform duration-300 group-hover:rotate-180" />
//     </span>
//     <ul className="absolute left-0 mt-2 w-48 bg-white text-brown border border-gray-200 rounded-md shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in-out">
//       {items.map((item, index) => (
//         <li key={index}>
//           <Link to={item.to} className="block px-4 py-2 hover:bg-gray-100 hover:text-goldL transition-colors duration-300">
//             {item.label}
//           </Link>
//         </li>
//       ))}
//     </ul>
//   </li>
// );

// export default Header;

import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes, faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { User } from 'lucide-react';
import { ShoppingCart } from 'lucide-react';
const Header = () => {
  const [scrolling, setScrolling] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [user, setUser] = useState(null);
  const [subscription, setSubscription] = useState(null);
  const navigate = useNavigate();

  const toggleMenu = () => setMenuOpen(prevState => !prevState);

  useEffect(() => {
    const handleScroll = () => setScrolling(window.scrollY > 0);
    window.addEventListener('scroll', handleScroll);

    const storedUser = sessionStorage.getItem('user');
    const storedSubscription = sessionStorage.getItem('subscription');
    
    if (storedUser) {
      try {
        const user = JSON.parse(storedUser);
        setUser(user);
      } catch (error) {
        console.error('Error parsing user data:', error);
      }
    }
    
    if (storedSubscription) {
      try {
        const subscription = JSON.parse(storedSubscription);
        setSubscription(subscription);
      } catch (error) {
        console.error('Error parsing subscription data:', error);
      }
    }

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLogout = () => {
    sessionStorage.removeItem('user');
    sessionStorage.removeItem('subscription');
    setUser(null);
    setSubscription(null);
    navigate('/');
  };

  const isUser = user !== null;
  const isSubscription = subscription !== null;

  return (
    <>
      <nav className={`z-50 py-4 flex items-center justify-between mx-4 md:mx-8 rounded-xl sticky top-4 px-4 md:px-12 transition-all duration-300 ${
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
          <NavLinks userType={user?.userType} />
          {isUser ? (
            <>
              <Link to="/Profile" className="hover:text-goldL transition-colors duration-300 bg-page p-2 rounded-full"> 
              {/* <ShoppingCart className="h-5 w-5 mr-2" /> */}
              <User className="h-5 w-5 " /> 
              </Link>
              <button onClick={handleLogout} className="bg-goldD text-white font-bold py-2 px-8 rounded-xl transition-all duration-300 hover:bg-goldL">
                Log Out
              </button>
            </>
          ) : isSubscription ? (
            <>
              <Link to="/BeekeeperDashboard" className="hover:text-goldL transition-colors duration-300">Admin</Link>
              <button onClick={handleLogout} className="bg-goldD text-white font-bold py-2 px-8 rounded-xl transition-all duration-300 hover:bg-goldL">
                Log Out
              </button>
            </>
          ) : (
            <Link to="/UserRoleSelection" className="bg-goldD text-white font-bold py-3 px-8 rounded-xl transition-all duration-300 hover:bg-goldL transform hover:scale-105 hover:shadow-lg">
              Register Now
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
        <NavLinks userType={user?.userType} isMobile={true} />
        {isUser ? (
          <>
            <Link to="/Cart" className="mt-8 bg-goldD text-white font-bold py-2 px-8 rounded-xl transition-all duration-300 hover:bg-goldL">
            <ShoppingCart className="h-5 w-5 mr-2" />
            </Link>
            <button onClick={handleLogout} className="mt-8 bg-goldD text-white font-bold py-2 px-8 rounded-xl transition-all duration-300 hover:bg-goldL">
              Log Out
            </button>
          </>
        ) : isSubscription ? (
          <>
            <Link to="/admin" className="mt-8 bg-goldD text-white font-bold py-2 px-8 rounded-xl transition-all duration-300 hover:bg-goldL">
              Admin
            </Link>
            <button onClick={handleLogout} className="mt-8 bg-goldD text-white font-bold py-2 px-8 rounded-xl transition-all duration-300 hover:bg-goldL">
              Log Out
            </button>
          </>
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
    <DropdownItem label="Start Beekeeping" items={[
      { to: "/blog", label: "Beekeeping Blog" },
      { to: "/resources", label: "Learning Resources" }
    ]} />
    <NavItem to="/Community" label="Community" />
    <NavItem to="/MarketPlace" label="Market Place" />
    <NavItem to="/Events" label="Events" />
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
