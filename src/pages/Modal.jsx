import React from 'react';
import { Check } from 'lucide-react';

const Modal = ({ plan, onClose }) => {
  if (!plan) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white rounded-lg p-6 max-w-md mx-4">
        <button 
          onClick={onClose} 
          className="absolute top-4 right-4 text-2xl text-gray-500 hover:text-gray-800"
        >
          &times;
        </button>
        <h2 className="text-2xl font-bold mb-4">{plan.name}</h2>
        <p className="text-4xl font-bold mb-6">
          ${plan.price}
          <span className="text-sm font-normal">/month</span>
        </p>
        <ul className="space-y-4 mb-6">
          {plan.features.map((feature, index) => (
            <li key={index} className="flex items-center">
              <Check className="h-5 w-5 mr-3 text-green-500" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
        <div className="flex justify-between">
          <button 
            onClick={onClose} 
            className="bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded-lg"
          >
            Cancel
          </button>
          <button 
            className="bg-goldD text-white font-bold py-2 px-4 rounded-lg"
            // You can add more functionality here if needed
          >
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
