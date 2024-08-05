// import React, { useState } from 'react';
// import { Check, AlertCircle } from 'lucide-react';
// import { useNavigate } from 'react-router-dom'; // Use navigate for navigation

// const SubscriptionPage = ({ selectedPlan, onBack }) => {
//   const [formData, setFormData] = useState({
//     fullName: '',
//     email: '',
//     cardNumber: '',
//     expiryDate: '',
//     cvv: '',
//   });
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [submitStatus, setSubmitStatus] = useState(null);
//   const navigate = useNavigate(); // Use navigate for navigation

//   const handleInputChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setIsSubmitting(true);
//     // Simulate API call
//     setTimeout(() => {
//       setIsSubmitting(false);
//       setSubmitStatus('success');
//       // Save subscription details to session storage
//       sessionStorage.setItem('subscription', JSON.stringify({
//         fullName: formData.fullName,
//         email: formData.email,
//         plan: selectedPlan,
//       }));
//       console.log('Subscription data:', { plan: selectedPlan, ...formData });
//     }, 2000);
//   };

//   const handleBackToHome = () => {
//     navigate('/'); 
//   };

//   return (
//     <div className="max-w-md mx-auto mt-10 p-6 bg-yellow-50 shadow-lg rounded-lg transition-transform transform hover:scale-105">
//       <h2 className="text-2xl font-semibold mb-4 text-green-800">Complete Your Beekeeping Subscription</h2>
//       <form onSubmit={handleSubmit} className="space-y-4">
//         <div>
//           <label htmlFor="fullName" className="block text-sm font-medium text-gray-800">Full Name</label>
//           <input
//             id="fullName"
//             name="fullName"
//             type="text"
//             value={formData.fullName}
//             onChange={handleInputChange}
//             required
//             className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-yellow-500 focus:border-yellow-500 sm:text-sm transition-transform transform hover:scale-105"
//           />
//         </div>
//         <div>
//           <label htmlFor="email" className="block text-sm font-medium text-gray-800">Email</label>
//           <input
//             id="email"
//             name="email"
//             type="email"
//             value={formData.email}
//             onChange={handleInputChange}
//             required
//             className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-yellow-500 focus:border-yellow-500 sm:text-sm transition-transform transform hover:scale-105"
//           />
//         </div>
//         <div>
//           <label htmlFor="cardNumber" className="block text-sm font-medium text-gray-800">Card Number</label>
//           <input
//             id="cardNumber"
//             name="cardNumber"
//             type="text"
//             value={formData.cardNumber}
//             onChange={handleInputChange}
//             required
//             className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-yellow-500 focus:border-yellow-500 sm:text-sm transition-transform transform hover:scale-105"
//           />
//         </div>
//         <div className="grid grid-cols-2 gap-4">
//           <div>
//             <label htmlFor="expiryDate" className="block text-sm font-medium text-gray-800">Expiry Date</label>
//             <input
//               id="expiryDate"
//               name="expiryDate"
//               type="text"
//               placeholder="MM/YY"
//               value={formData.expiryDate}
//               onChange={handleInputChange}
//               required
//               className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-yellow-500 focus:border-yellow-500 sm:text-sm transition-transform transform hover:scale-105"
//             />
//           </div>
//           <div>
//             <label htmlFor="cvv" className="block text-sm font-medium text-gray-800">CVV</label>
//             <input
//               id="cvv"
//               name="cvv"
//               type="text"
//               value={formData.cvv}
//               onChange={handleInputChange}
//               required
//               className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-yellow-500 focus:border-yellow-500 sm:text-sm transition-transform transform hover:scale-105"
//             />
//           </div>
//         </div>
//         <div className="flex items-start space-x-2">
//           <AlertCircle className="h-5 w-5 text-yellow-500" />
//           <p className="text-sm text-gray-800">
//             You are subscribing to the {selectedPlan.name} plan at ${selectedPlan.price}/month. Thank you for supporting our beekeeping mission!
//           </p>
//         </div>
//         <div className="flex flex-col space-y-4">
//           <div className="flex justify-between items-center">
//             <button
//               type="button"
//               onClick={onBack}
//               className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-800 bg-white hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500 transition-transform transform hover:scale-105"
//             >
//               Back
//             </button>
//             <button
//               type="submit"
//               disabled={isSubmitting}
//               className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-yellow-600 hover:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500 transition-transform transform hover:scale-105"
//             >
//               {isSubmitting ? 'Processing...' : 'Confirm Subscription'}
//             </button>
//           </div>
//           {submitStatus === 'success' && (
//             <div className="mt-4 p-4 border border-green-400 bg-green-50 rounded-md flex items-center transition-transform transform hover:scale-105">
//               <Check className="h-5 w-5 text-green-500 mr-2" />
//               <p className="text-sm text-green-700">
//                 Subscription successful! Welcome to the {selectedPlan.name} plan.
//               </p>
//             </div>
//           )}
//           {submitStatus === 'success' && (
//             <button
//               onClick={handleBackToHome}
//               className="mt-4 inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-800 bg-white hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500 transition-transform transform hover:scale-105"
//             >
//               Start Your Journey
//             </button>
//           )}
//         </div>
//       </form>
//     </div>
//   );
// };

// export default SubscriptionPage;


import React, { useState } from 'react';
import { Check, AlertCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom'; 

const SubscriptionPage = ({ selectedPlan, onBack }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    cardNumber: '',
    expiryDate: '',
    cvv: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      sessionStorage.setItem('subscription', JSON.stringify({
        fullName: formData.fullName,
        email: formData.email,
        plan: selectedPlan,
      }));
      console.log('Subscription data:', { plan: selectedPlan, ...formData });
    }, 2000);
  };

  const handleBackToHome = () => {
    navigate('/');
  };

  return (
    <div className="max-w-lg mx-auto mt-10 p-8 bg-white shadow-xl rounded-lg border border-gray-200 transition-transform transform hover:scale-105">
      <h2 className="text-3xl font-semibold mb-6 text-goldD">Complete Your Subscription</h2>
      <p className="mb-4 text-lg text-gray-600">
        You are subscribing to the <span className="font-bold">{selectedPlan.name}</span> plan at <span className="font-bold">${selectedPlan.price}/month</span>.
      </p>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="fullName" className="block text-sm font-medium text-gray-800">Full Name</label>
          <input
            id="fullName"
            name="fullName"
            type="text"
            value={formData.fullName}
            onChange={handleInputChange}
            required
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-yellow-500 focus:border-yellow-500 sm:text-sm"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-800">Email</label>
          <input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleInputChange}
            required
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-yellow-500 focus:border-yellow-500 sm:text-sm"
          />
        </div>
        <div>
          <label htmlFor="cardNumber" className="block text-sm font-medium text-gray-800">Card Number</label>
          <input
            id="cardNumber"
            name="cardNumber"
            type="text"
            value={formData.cardNumber}
            onChange={handleInputChange}
            required
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-yellow-500 focus:border-yellow-500 sm:text-sm"
          />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label htmlFor="expiryDate" className="block text-sm font-medium text-gray-800">Expiry Date</label>
            <input
              id="expiryDate"
              name="expiryDate"
              type="text"
              placeholder="MM/YY"
              value={formData.expiryDate}
              onChange={handleInputChange}
              required
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-yellow-500 focus:border-yellow-500 sm:text-sm"
            />
          </div>
          <div>
            <label htmlFor="cvv" className="block text-sm font-medium text-gray-800">CVV</label>
            <input
              id="cvv"
              name="cvv"
              type="text"
              value={formData.cvv}
              onChange={handleInputChange}
              required
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-yellow-500 focus:border-yellow-500 sm:text-sm"
            />
          </div>
        </div>
        <div className="flex items-start space-x-2">
          <AlertCircle className="h-6 w-6 text-yellow-500" />
          <p className="text-sm text-gray-800">
            You are about to subscribe to the {selectedPlan.name} plan. Ensure all information is correct before submitting.
          </p>
        </div>
        <div className="flex flex-col space-y-4">
          <div className="flex justify-between items-center">
            <button
              type="button"
              onClick={onBack}
              className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-800 bg-white hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500"
            >
              Back
            </button>
            <button
              type="submit"
              disabled={isSubmitting}
              className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-yellow-600 hover:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500"
            >
              {isSubmitting ? 'Processing...' : 'Confirm Subscription'}
            </button>
          </div>
          {submitStatus === 'success' && (
            <div className="p-4 border border-green-400 bg-green-50 rounded-md flex items-center">
              <Check className="h-6 w-6 text-green-500 mr-2" />
              <p className="text-sm text-green-700">
                Subscription successful! Welcome to the {selectedPlan.name} plan.
              </p>
            </div>
          )}
          {submitStatus === 'success' && (
            <button
              onClick={handleBackToHome}
              className="mt-4 inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-800 bg-white hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500"
            >
              Start Your Journey
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default SubscriptionPage;




// import React, { useState } from 'react';
// import { CreditCard } from 'lucide-react';
// import { Button } from '@/components/ui/button';
// import { Input } from '@/components/ui/input';
// import { Label } from '@/components/ui/label';

// const PaymentPage = () => {
//   const [cardNumber, setCardNumber] = useState('');
//   const [expiryDate, setExpiryDate] = useState('');
//   const [cvv, setCvv] = useState('');
//   const [name, setName] = useState('');

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Here you would typically integrate with a payment processor
//     console.log('Payment submitted:', { cardNumber, expiryDate, cvv, name });
//     alert('Payment processed successfully!');
//   };

//   return (
//     <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
//       <h1 className="text-2xl font-bold mb-6 text-center">Bee Wise Payment</h1>
//       <form onSubmit={handleSubmit} className="space-y-4">
//         <div>
//           <Label htmlFor="name">Cardholder Name</Label>
//           <Input
//             id="name"
//             type="text"
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//             placeholder="John Doe"
//             required
//           />
//         </div>
//         <div>
//           <Label htmlFor="cardNumber">Card Number</Label>
//           <div className="relative">
//             <Input
//               id="cardNumber"
//               type="text"
//               value={cardNumber}
//               onChange={(e) => setCardNumber(e.target.value)}
//               placeholder="1234 5678 9012 3456"
//               required
//             />
//             <CreditCard className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
//           </div>
//         </div>
//         <div className="flex space-x-4">
//           <div className="w-1/2">
//             <Label htmlFor="expiryDate">Expiry Date</Label>
//             <Input
//               id="expiryDate"
//               type="text"
//               value={expiryDate}
//               onChange={(e) => setExpiryDate(e.target.value)}
//               placeholder="MM/YY"
//               required
//             />
//           </div>
//           <div className="w-1/2">
//             <Label htmlFor="cvv">CVV</Label>
//             <Input
//               id="cvv"
//               type="text"
//               value={cvv}
//               onChange={(e) => setCvv(e.target.value)}
//               placeholder="123"
//               required
//             />
//           </div>
//         </div>
//         <Button type="submit" className="w-full">
//           Pay Now
//         </Button>
//       </form>
//     </div>
//   );
// };

// export default PaymentPage;