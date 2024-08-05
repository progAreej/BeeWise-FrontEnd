


// import React, { useState, useEffect } from 'react';
// import { Beaker, Calendar, MessageSquare, ShoppingBag, Users, BarChart, Droplet, Thermometer } from 'lucide-react';
// import Overview from './DashBoardBeekeepers/Overview';
// import HiveManagement from './DashBoardBeekeepers/HiveManagement';
// import HoneyProduction from './DashBoardBeekeepers/HoneyProduction';
// import CommunityForum from './DashBoardBeekeepers/CommunityForum';
// import Marketplace from './DashBoardBeekeepers/Marketplace';
// import Calendar1 from './DashBoardBeekeepers/Calendar';
// const BeekeeperDashboard = () => {
//   const [activeTab, setActiveTab] = useState('overview');
//   const [fullName, setFullName] = useState('');

//   useEffect(() => {
//     const subscriptionData = sessionStorage.getItem('subscription');
//     if (subscriptionData) {
//       const parsedData = JSON.parse(subscriptionData);
//       setFullName(parsedData.fullName);
//     }
//   }, []);

//   const renderContent = () => {
//     switch (activeTab) {
//       case 'overview':
//         return <Overview />;
//       case 'hives':
//         return <HiveManagement />;
//       case 'production':
//         return <HoneyProduction />;
//       case 'community':
//         return <CommunityForum />;
//       case 'marketplace':
//         return <Marketplace />;
//       case 'calendar':
//         return <Calendar1 />;
//       default:
//         return <div>Select a tab</div>;
//     }
//   };

//   return (
//     <div className="flex h-screen bg-page">
//       <aside className="w-64 bg-amber-800 text-white p-6">
//         {/* <h2 className="text-2xl font-bold mb-8"> */}
          
//           <img src="./src/assets/imgs/logoT.png" alt=""className='w-36 flex justify-center '  />
//           {/* Beekeeper Dashboard</h2> */}
//         <p className="mb-8 text-2xl">Welcome, {fullName}!</p>
//         <nav>
//           <ul className="space-y-4">
//             <li>
//               <button
//                 className={`flex items-center space-x-2 ${activeTab === 'overview' ? 'text-amber-300' : ''}`}
//                 onClick={() => setActiveTab('overview')}
//               >
//                 <BarChart className="h-5 w-5" />
//                 <span>Overview</span>
//               </button>
//             </li>
//             <li>
//               <button
//                 className={`flex items-center space-x-2 ${activeTab === 'hives' ? 'text-amber-300' : ''}`}
//                 onClick={() => setActiveTab('hives')}
//               >
//                 <Beaker className="h-5 w-5" />
//                 <span>Hive Management</span>
//               </button>
//             </li>
//             <li>
//               <button
//                 className={`flex items-center space-x-2 ${activeTab === 'production' ? 'text-amber-300' : ''}`}
//                 onClick={() => setActiveTab('production')}
//               >
//                 <Droplet className="h-5 w-5" />
//                 <span>Honey Production</span>
//               </button>
//             </li>
//             <li>
//               <button
//                 className={`flex items-center space-x-2 ${activeTab === 'community' ? 'text-amber-300' : ''}`}
//                 onClick={() => setActiveTab('community')}
//               >
//                 <Users className="h-5 w-5" />
//                 <span>Community Forum</span>
//               </button>
//             </li>
//             <li>
//               <button
//                 className={`flex items-center space-x-2 ${activeTab === 'marketplace' ? 'text-amber-300' : ''}`}
//                 onClick={() => setActiveTab('marketplace')}
//               >
//                 <ShoppingBag className="h-5 w-5" />
//                 <span>Marketplace</span>
//               </button>
//             </li>
//             <li>
//               <button
//                 className={`flex items-center space-x-2 ${activeTab === 'calendar' ? 'text-amber-300' : ''}`}
//                 onClick={() => setActiveTab('calendar')}
//               >
//                 <Calendar className="h-5 w-5" />
//                 <span>Calendar</span>
//               </button>
//             </li>
//           </ul>
//         </nav>
//       </aside>
//       <main className="flex-1 p-8">
//         <h1 className="text-3xl font-bold mb-6">
//           {activeTab.charAt(0).toUpperCase() + activeTab.slice(1)}
//         </h1>
//         {renderContent()}
//       </main>
//       {/* <Link to="/">
//       LogOut
//       </Link> */}
//     </div>
//   );
// };

// export default BeekeeperDashboard;


import React, { useState, useEffect } from 'react';
import { Beaker, Calendar as CalendarIcon, MessageSquare, ShoppingBag, Users, BarChart, Droplet, Thermometer } from 'lucide-react'; // Renamed Calendar to CalendarIcon
import Overview from './DashBoardBeekeepers/Overview';
import HiveManagement from './DashBoardBeekeepers/HiveManagement';
import HoneyProduction from './DashBoardBeekeepers/HoneyProduction';
import CommunityForum from './DashBoardBeekeepers/CommunityForum';
import Marketplace from './DashBoardBeekeepers/Marketplace';
import Calendar1 from './DashBoardBeekeepers/Calendar'; // Import Calendar1 as the calendar component

const BeekeeperDashboard = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [fullName, setFullName] = useState('');

  useEffect(() => {
    const subscriptionData = sessionStorage.getItem('subscription');
    if (subscriptionData) {
      const parsedData = JSON.parse(subscriptionData);
      setFullName(parsedData.fullName);
    }
  }, []);

  const renderContent = () => {
    switch (activeTab) {
      case 'overview':
        return <Overview />;
      case 'hives':
        return <HiveManagement />;
      case 'production':
        return <HoneyProduction />;
      case 'community':
        return <CommunityForum />;
      case 'marketplace':
        return <Marketplace />;
      case 'calendar':
        return <Calendar1 />;
      default:
        return <div>Select a tab</div>;
    }
  };

  return (
    <div className="flex h-screen bg-page">
      <aside className="w-64 bg-amber-800 text-white p-6">
        <img src="./src/assets/imgs/logoT.png" alt="" className='w-36 flex justify-center' />
        <p className="mb-8 text-2xl">Welcome, {fullName}!</p>
        <nav>
          <ul className="space-y-4">
            <li>
              <button
                className={`flex items-center space-x-2 ${activeTab === 'overview' ? 'text-amber-300' : ''}`}
                onClick={() => setActiveTab('overview')}
              >
                <BarChart className="h-5 w-5" />
                <span>Overview</span>
              </button>
            </li>
            <li>
              <button
                className={`flex items-center space-x-2 ${activeTab === 'hives' ? 'text-amber-300' : ''}`}
                onClick={() => setActiveTab('hives')}
              >
                <Beaker className="h-5 w-5" />
                <span>Hive Management</span>
              </button>
            </li>
            <li>
              <button
                className={`flex items-center space-x-2 ${activeTab === 'production' ? 'text-amber-300' : ''}`}
                onClick={() => setActiveTab('production')}
              >
                <Droplet className="h-5 w-5" />
                <span>Honey Production</span>
              </button>
            </li>
            <li>
              <button
                className={`flex items-center space-x-2 ${activeTab === 'community' ? 'text-amber-300' : ''}`}
                onClick={() => setActiveTab('community')}
              >
                <Users className="h-5 w-5" />
                <span>Community Forum</span>
              </button>
            </li>
            <li>
              <button
                className={`flex items-center space-x-2 ${activeTab === 'marketplace' ? 'text-amber-300' : ''}`}
                onClick={() => setActiveTab('marketplace')}
              >
                <ShoppingBag className="h-5 w-5" />
                <span>Marketplace</span>
              </button>
            </li>
            <li>
              <button
                className={`flex items-center space-x-2 ${activeTab === 'calendar' ? 'text-amber-300' : ''}`}
                onClick={() => setActiveTab('calendar')}
              >
                <CalendarIcon className="h-5 w-5" /> {/* Use CalendarIcon */}
                <span>Calendar</span>
              </button>
            </li>
          </ul>
        </nav>
      </aside>
      <main className="flex-1 p-8">
        <h1 className="text-3xl font-bold mb-6">
          {activeTab.charAt(0).toUpperCase() + activeTab.slice(1)}
        </h1>
        {renderContent()}
      </main>
      {/* <Link to="/">LogOut</Link> */}
    </div>
  );
};

export default BeekeeperDashboard;
