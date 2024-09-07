

// import React, { useState, useEffect } from 'react';
// import { Check } from 'lucide-react';
// import SubscriptionPage from './SubscriptionPage';  

// const Subscription = () => {
//   const [plans, setPlans] = useState([]);
//   const [selectedPlan, setSelectedPlan] = useState(null);
//   const [showSubscriptionPage, setShowSubscriptionPage] = useState(false);

//   useEffect(() => {
//     // Fetch subscription plans from the API
//     const fetchPlans = async () => {
//       try {
//         const response = await fetch('http://localhost:3000/api/subscriptions');
//         const data = await response.json();
//         setPlans(data);
//       } catch (error) {
//         console.error('Error fetching plans:', error);
//       }
//     };

//     fetchPlans();
//   }, []);

//   const handleSubscribe = (plan) => {
//     setSelectedPlan(plan);
//     setShowSubscriptionPage(true);
//   };

//   const handleBack = () => {
//     setShowSubscriptionPage(false);
//     setSelectedPlan(null);
//   };

//   if (showSubscriptionPage) {
//     return <SubscriptionPage selectedPlan={selectedPlan} onBack={handleBack} />;
//   }

//   return (
//     <div className='bg-white flex justify-center min-h-screen py-12'>
//       <div className="container mx-auto p-4">
//         <h1 className="text-4xl font-bold mb-20 text-goldD text-center">Membership Plans</h1>
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//           {plans.map((plan, index) => (
//             <div
//               key={plan._id} // Use MongoDB _id as the key
//               className={`bg-page shadow-lg rounded-lg p-6 flex flex-col justify-between transform transition-all duration-300 hover:scale-105 hover:shadow-2xl ${index === 1 ? 'bg-goldL text-white hover:bg-brown scale-110' : ''}`}
//             >
//               <div>
//                 <div className="border-b pb-4 mb-6">
//                   <h2 className="text-2xl font-bold text-goldD">{plan.name}</h2>
//                 </div>
//                 <p className="text-4xl font-bold mb-6">
//                   {plan.price}
//                 </p>
//                 <ul className="space-y-4">
//                   {plan.features.map((feature, index) => (
//                     <li key={index} className="flex items-center">
//                       <Check className="h-5 w-5 mr-3 text-green-500" />
//                       <span>{feature}</span>
//                     </li>
//                   ))}
//                 </ul>
//               </div>
//               <button
//                 className="bg-goldD text-white font-bold py-3 px-8 rounded-xl w-full mt-6 transition-all duration-300 hover:bg-goldL hover:shadow-lg"
//                 onClick={() => handleSubscribe(plan)}
//               >
//                 Subscribe
//               </button>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Subscription;



import React, { useState, useEffect } from 'react';
import { Check, Star } from 'lucide-react';
import SubscriptionPage from './SubscriptionPage';

const Subscription = () => {
  const [plans, setPlans] = useState([]);
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [showSubscriptionPage, setShowSubscriptionPage] = useState(false);

  useEffect(() => {
    const fetchPlans = async () => {
      try {
        const response = await fetch('http://localhost:3000/api/subscriptions');
        const data = await response.json();
        setPlans(data);
      } catch (error) {
        console.error('Error fetching plans:', error);
      }
    };

    fetchPlans();
  }, []);

  const handleSubscribe = (plan) => {
    setSelectedPlan(plan);
    setShowSubscriptionPage(true);
  };

  const handleBack = () => {
    setShowSubscriptionPage(false);
    setSelectedPlan(null);
  };

  if (showSubscriptionPage) {
    return <SubscriptionPage selectedPlan={selectedPlan} onBack={handleBack} />;
  }

  return (
    <div className="bg-gradient-to-b from-goldL to-white min-h-screen py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-5xl font-bold text-center text-white mb-12">
          Choose Your Membership Plan
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 ">
          {plans.map((plan, index) => (
            <div
              key={plan._id}
              className={`bg-white  rounded-2xl shadow-xl overflow-hidden transform transition-all duration-300 hover:scale-105 ${
                index === 1 ? 'md:scale-105 md:shadow-2xl  ' : ' '
              }`}
            >
              {index === 1 && (
                <div className="bg-goldD text-white  py-2 px-4 absolute top-0 left-1/2 transform -translate-x-1/2 rounded-b-lg flex items-center">
                  <Star className="w-5 h-5 mr-2" />
                  <span className="font-semibold">Most Popular</span>
                </div>
              )}
              <div className="p-8 ">
                <h2 className="text-3xl font-bold text-goldD mb-4">{plan.name}</h2>
                <p className="text-4xl font-bold mb-6">{plan.price}<span className='text-2xl text-goldL'> /month</span></p>
                <ul className="space-y-4 mb-8 ">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center">
                      <Check className="h-5 w-5 mr-3 text-green-500" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="px-8 pb-8">
                <button
                  className={`w-full py-3 px-6 rounded-xl font-bold text-lg transition-all duration-300 ${
                    index === 1
                      ? 'bg-goldD text-white hover:bg-goldL'
                      : 'bg-gray-200 text-goldD hover:bg-gray-300  mt-32'
                  }`}
                  onClick={() => handleSubscribe(plan)}
                >
                  Subscribe Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Subscription;