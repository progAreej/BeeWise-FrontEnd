import React, { useState } from 'react';
import { Check } from 'lucide-react';
import SubscriptionPage from './SubscriptionPage';  

const Subscription = () => {
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [showSubscriptionPage, setShowSubscriptionPage] = useState(false);

  const plans = [
    {
      name: 'Free',
      price: '0',
      features: [
        'Access to public forum discussions',
        'Basic beekeeping articles',
        'Monthly newsletter',
      ],
    },
    {
      name: 'Honey Pro',
      price: '24.99',
      features: [
        'All Buzz Basic features',
        'Private consultations (2/month)',
        '20% discount on Bee Wise products',
        'Early access to new content and features',
        'Personalized beekeeping advice',
        'Download exclusive beekeeping products',
      ],
    },
    {
      name: 'Buzz Basic',
      price: '9.99',
      features: [
        'All Free features',
        'Exclusive webinars',
        '10% discount on Bee Wise products',
        'Access to member-only forum sections',
        'Download beekeeping resources',
      ],
    },
  ];

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
    <div className='bg-page flex justify-center min-h-screen py-12'>
      <div className="container mx-auto p-4">
        <h1 className="text-4xl font-bold mb-20 text-goldD text-center">Membership Plans</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={plan.name}
              className={`bg-white shadow-lg rounded-lg p-6 flex flex-col justify-between transform transition-all duration-300 hover:scale-105 hover:shadow-2xl ${index === 1 ? 'bg-goldL text-white hover:bg-brown scale-110' : ''}`}
            >
              <div>
                <div className="border-b pb-4 mb-6">
                  <h2 className="text-2xl font-bold text-goldD">{plan.name}</h2>
                </div>
                <p className="text-4xl font-bold mb-6">
                  {plan.price} JOD
                  <span className="text-sm font-normal">/month</span>
                </p>
                <ul className="space-y-4">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-center">
                      <Check className="h-5 w-5 mr-3 text-green-500" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <button
                className="bg-goldD text-white font-bold py-3 px-8 rounded-xl w-full mt-6 transition-all duration-300 hover:bg-goldL hover:shadow-lg"
                onClick={() => handleSubscribe(plan)}
              >
                Subscribe
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Subscription;
