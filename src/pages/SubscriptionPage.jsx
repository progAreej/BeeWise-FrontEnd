
// import React, { useState } from 'react';
// import { Check, AlertCircle } from 'lucide-react';
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import Swal from 'sweetalert2'; // Import SweetAlert2

// const SubscriptionPage = ({ selectedPlan, onBack }) => {
//   const [formData, setFormData] = useState({
//     username: '',
//     email: '',
//     password: '',
//     confirmPassword: '',
//     phoneNumber: '',
//     apiaryLocation: '',
//     experienceYears: '',
//     paymentMethod: 'creditCard', // Default to credit card
//     cardNumber: '',
//     expiryDate: '',
//     cvv: ''
//   });
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [submitStatus, setSubmitStatus] = useState(null);
//   const [errorMessage, setErrorMessage] = useState('');
//   const navigate = useNavigate();

//   const handleInputChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setIsSubmitting(true);
//     setSubmitStatus(null);
//     setErrorMessage('');
  
//     try {
//       // Send registration request to the server
//       const response = await axios.post('http://localhost:3000/api/register', {
//         username: formData.username,
//         email: formData.email,
//         password: formData.password,
//         phoneNumber: formData.phoneNumber,
//         apiaryLocation: formData.apiaryLocation,
//         experienceYears: formData.experienceYears,
//         plan: selectedPlan.name,
//       });
  
//       setIsSubmitting(false);
//       if (response.status === 201) {
//         setSubmitStatus('success');
        
//         // Store the token in session storage
//         const token = response.data.token; // Adjust based on your response structure
//         sessionStorage.setItem('token', token);
  
//         // Show SweetAlert on successful subscription
//         Swal.fire({
//           title: 'Subscription Successful!',
//           text: 'Thank you for subscribing. We will contact you soon.',
//           icon: 'success',
//           confirmButtonText: 'OK'
//         }).then(() => {
//           navigate('/');
//         });
//       }
//     } catch (error) {
//       setIsSubmitting(false);
//       setSubmitStatus('error');
//       if (error.response && error.response.data) {
//         setErrorMessage(error.response.data.message || 'Subscription failed. Please try again later.');
//       } else {
//         setErrorMessage('Subscription failed. Please try again later.');
//       }
//       console.error('Subscription error:', error.response ? error.response.data : error.message);
//     }
//   };
  

//   const handleBackToHome = () => {
//     navigate('/');
//   };

//   const isFreePlan = selectedPlan.name === 'Free'; // Adjust this check based on your plan logic

//   return (
//     <div className="max-w-lg mx-auto mt-10 p-8 bg-white shadow-xl rounded-lg border border-gray-200">
//       <h2 className="text-3xl font-semibold mb-6 text-goldD">Complete Your Subscription</h2>
//       <p className="mb-4 text-lg text-gray-600">
//         You are subscribing to the <span className="font-bold">{selectedPlan.name}</span> plan at <span className="font-bold">{selectedPlan.price}</span>.
//       </p>
//       <form onSubmit={handleSubmit} className="space-y-6">
//         {/* Form fields */}
//         {/* (Your existing input fields here) */}
//         <div>
//           <label htmlFor="username" className="block text-sm font-medium text-gray-800">Name</label>
//           <input
//             id="username"
//             name="username"
//             type="text"
//             value={formData.username}
//             onChange={handleInputChange}
//             required
//             className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-goldL focus:border-yellow-500 sm:text-sm"
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
//             className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-yellow-500 focus:border-yellow-500 sm:text-sm"
//           />
//         </div>
//         <div>
//           <label htmlFor="password" className="block text-sm font-medium text-gray-800">Password</label>
//           <input
//             id="password"
//             name="password"
//             type="password"
//             value={formData.password}
//             onChange={handleInputChange}
//             required
//             className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-yellow-500 focus:border-yellow-500 sm:text-sm"
//           />
//         </div>
//         <div>
//           <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-800">Confirm Password</label>
//           <input
//             id="confirmPassword"
//             name="confirmPassword"
//             type="password"
//             value={formData.confirmPassword}
//             onChange={handleInputChange}
//             required
//             className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-yellow-500 focus:border-yellow-500 sm:text-sm"
//           />
//         </div>
//         <div>
//           <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-800">Phone Number</label>
//           <input
//             id="phoneNumber"
//             name="phoneNumber"
//             type="text"
//             value={formData.phoneNumber}
//             onChange={handleInputChange}
//             required
//             className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-yellow-500 focus:border-yellow-500 sm:text-sm"
//           />
//         </div>
//         <div>
//           <label htmlFor="apiaryLocation" className="block text-sm font-medium text-gray-800">Apiary Location</label>
//           <input
//             id="apiaryLocation"
//             name="apiaryLocation"
//             type="text"
//             value={formData.apiaryLocation}
//             onChange={handleInputChange}
//             required
//             className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-yellow-500 focus:border-yellow-500 sm:text-sm"
//           />
//         </div>
//         <div>
//           <label htmlFor="experienceYears" className="block text-sm font-medium text-gray-800">Years of Experience</label>
//           <input
//             id="experienceYears"
//             name="experienceYears"
//             type="number"
//             value={formData.experienceYears}
//             onChange={handleInputChange}
//             required
//             className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-yellow-500 focus:border-yellow-500 sm:text-sm"
//           />
//         </div>
//         {!isFreePlan && (
//           <>
//             <div>
//               <label htmlFor="paymentMethod" className="block text-sm font-medium text-gray-800">Payment Method</label>
//               <select
//                 id="paymentMethod"
//                 name="paymentMethod"
//                 value={formData.paymentMethod}
//                 onChange={handleInputChange}
//                 className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-yellow-500 focus:border-yellow-500 sm:text-sm"
//               >
//                 <option value="creditCard">Credit Card</option>
//                 <option value="paypal">PayPal</option>
//               </select>
//             </div>
//             {formData.paymentMethod === 'creditCard' && (
//               <>
//                 <div>
//                   <label htmlFor="cardNumber" className="block text-sm font-medium text-gray-800">Card Number</label>
//                   <input
//                     id="cardNumber"
//                     name="cardNumber"
//                     type="text"
//                     value={formData.cardNumber}
//                     onChange={handleInputChange}
//                     required
//                     className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-yellow-500 focus:border-yellow-500 sm:text-sm"
//                   />
//                 </div>
//                 <div className="grid grid-cols-2 gap-4">
//                   <div>
//                     <label htmlFor="expiryDate" className="block text-sm font-medium text-gray-800">Expiry Date</label>
//                     <input
//                       id="expiryDate"
//                       name="expiryDate"
//                       type="text"
//                       value={formData.expiryDate}
//                       onChange={handleInputChange}
//                       required
//                       className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-yellow-500 focus:border-yellow-500 sm:text-sm"
//                     />
//                   </div>
//                   <div>
//                     <label htmlFor="cvv" className="block text-sm font-medium text-gray-800">CVV</label>
//                     <input
//                       id="cvv"
//                       name="cvv"
//                       type="text"
//                       value={formData.cvv}
//                       onChange={handleInputChange}
//                       required
//                       className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-yellow-500 focus:border-yellow-500 sm:text-sm"
//                     />
//                   </div>
//                 </div>
//               </>
//             )}
//           </>
//         )}
//         <div className="flex justify-between items-center">
//           <button
//             type="button"
//             onClick={handleBackToHome}
//             className="bg-gray-200 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-300"
//           >
//             Back to Home
//           </button>
//           <button
//             type="submit"
//             disabled={isSubmitting}
//             className="bg-yellow-500 text-white px-4 py-2 rounded-md hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-500"
//           >
//             {isSubmitting ? 'Submitting...' : 'Submit'}
//           </button>
//         </div>
//         {submitStatus === 'error' && errorMessage && (
//           <div className="mt-4 p-4 bg-red-100 border border-red-300 text-red-600 rounded-md">
//             {errorMessage}
//           </div>
//         )}
//       </form>
//     </div>
//   );
// };

// export default SubscriptionPage;


import React, { useState } from 'react';
import { Check, AlertCircle, ArrowLeft, CreditCard } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Swal from 'sweetalert2';

const SubscriptionPage = ({ selectedPlan, onBack }) => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
    phoneNumber: '',
    apiaryLocation: '',
    experienceYears: '',
    paymentMethod: 'creditCard',
    cardNumber: '',
    expiryDate: '',
    cvv: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);
    setErrorMessage('');
  
    try {
      const response = await axios.post('http://localhost:3000/api/register', {
        username: formData.username,
        email: formData.email,
        password: formData.password,
        phoneNumber: formData.phoneNumber,
        apiaryLocation: formData.apiaryLocation,
        experienceYears: formData.experienceYears,
        plan: selectedPlan.name,
      });
  
      setIsSubmitting(false);
      if (response.status === 201) {
        setSubmitStatus('success');
        const token = response.data.token;
        sessionStorage.setItem('token', token);
  
        Swal.fire({
          title: 'Subscription Successful!',
          text: 'Welcome to Beewise! We look forward to helping you manage your apiary.',
          icon: 'success',
          confirmButtonText: 'Start Beekeeping',
          confirmButtonColor: '#F59E0B',
        }).then(() => {
          navigate('/');
        });
      }
    } catch (error) {
      setIsSubmitting(false);
      setSubmitStatus('error');
      setErrorMessage(error.response?.data?.message || 'Subscription failed. Please try again later.');
      console.error('Subscription error:', error.response ? error.response.data : error.message);
    }
  };

  const handleBackToHome = () => {
    navigate('/');
  };

  const isFreePlan = selectedPlan.name === 'Free';

  return (
    <div className="min-h-screen bg-page py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto bg-white shadow-xl rounded-lg overflow-hidden">
        <div className="bg-goldL py-6 px-8">
          <h2 className="text-3xl font-bold text-white">Join Beewise</h2>
          <p className="text-yellow-100 mt-2">Start your journey to better beekeeping today!</p>
        </div>
        <div className="p-8">
          <div className="mb-6 p-4 bg-page rounded-lg flex items-center">
            <Check className="text-green-500 mr-3" />
            <p className="text-sm text-gray-700">
              You're subscribing to the <span className="font-semibold">{selectedPlan.name}</span> plan at <span className="font-semibold">{selectedPlan.price}</span>.
            </p>
          </div>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div>
                <label htmlFor="username" className="block text-sm font-medium text-gray-700">Full Name</label>
                <input
                  id="username"
                  name="username"
                  type="text"
                  required
                  className="mt-1 block w-full border p-1 border-gray-300 rounded-md shadow-sm focus:ring-goldL focus:border-goldL sm:text-sm"
                  value={formData.username}
                  onChange={handleInputChange}
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="mt-1 block w-full p-1  border border-gray-300 rounded-md shadow-sm focus:ring-goldL focus:border-goldL sm:text-sm"
                  value={formData.email}
                  onChange={handleInputChange}
                />
              </div>
              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  required
                  className="mt-1 block w-full p-1  border border-gray-300 rounded-md shadow-sm focus:ring-goldL focus:border-goldL sm:text-sm"
                  value={formData.password}
                  onChange={handleInputChange}
                />
              </div>
              <div>
                <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">Confirm Password</label>
                <input
                  id="confirmPassword"
                  name="confirmPassword"
                  type="password"
                  required
                  className="mt-1 block w-full p-1  border border-gray-300 rounded-md shadow-sm focus:ring-goldL focus:border-goldL sm:text-sm"
                  value={formData.confirmPassword}
                  onChange={handleInputChange}
                />
              </div>
              <div>
                <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700">Phone Number</label>
                <input
                  id="phoneNumber"
                  name="phoneNumber"
                  type="tel"
                  required
                  className="mt-1 block w-full p-1  border border-gray-300 rounded-md shadow-sm focus:ring-goldL focus:border-goldL sm:text-sm"
                  value={formData.phoneNumber}
                  onChange={handleInputChange}
                />
              </div>
              <div>
                <label htmlFor="apiaryLocation" className="block text-sm font-medium text-gray-700">Apiary Location</label>
                <input
                  id="apiaryLocation"
                  name="apiaryLocation"
                  type="text"
                  required
                  className="mt-1 block w-full p-1  border border-gray-300 rounded-md shadow-sm focus:ring-goldL focus:border-goldL sm:text-sm"
                  value={formData.apiaryLocation}
                  onChange={handleInputChange}
                />
              </div>
              <div>
                <label htmlFor="experienceYears" className="block text-sm font-medium text-gray-700">Years of Beekeeping Experience</label>
                <input
                  id="experienceYears"
                  name="experienceYears"
                  type="number"
                  required
                  min="0"
                  className="mt-1 block w-full p-1  border border-gray-300 rounded-md shadow-sm focus:ring-goldL focus:border-goldL sm:text-sm"
                  value={formData.experienceYears}
                  onChange={handleInputChange}
                />
              </div>
            </div>
            
            {!isFreePlan && (
              <div className="mt-8 border-t border-gray-200 pt-8">
                <h3 className="text-lg font-medium text-goldD mb-4">Payment Information</h3>
                <div className="space-y-6">
                  <div>
                    <label htmlFor="paymentMethod" className="block text-sm font-medium text-gray">Payment Method</label>
                    <div className="mt-2 space-x-4">
                      <label className="inline-flex items-center">
                        <input
                          type="radio"
                          name="paymentMethod"
                          value="creditCard"
                          checked={formData.paymentMethod === 'creditCard'}
                          onChange={handleInputChange}
                          className="form-radio text-goldL focus:ring-goldL"
                        />
                        <span className="ml-2">Credit Card</span>
                        <CreditCard className="ml-2 text-gray-400" size={20} />
                      </label>
                      <label className="inline-flex items-center">
                        <input
                          type="radio"
                          name="paymentMethod"
                          value="paypal"
                          checked={formData.paymentMethod === 'paypal'}
                          onChange={handleInputChange}
                          className="form-radio text-goldL focus:ring-goldL"
                        />
                        <span className="ml-2">PayPal</span>
                        {/* <Paypal className="ml-2 text-gray-400" size={20} /> */}
                      </label>
                    </div>
                  </div>
                  {formData.paymentMethod === 'creditCard' && (
                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                      <div>
                        <label htmlFor="cardNumber" className="block text-sm font-medium text-gray-700">Card Number</label>
                        <input
                          id="cardNumber"
                          name="cardNumber"
                          type="text"
                          required
                          className="mt-1 block w-full p-1 border border-gray-300 rounded-md shadow-sm focus:ring-goldL focus:border-goldL sm:text-sm"
                          value={formData.cardNumber}
                          onChange={handleInputChange}
                        />
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label htmlFor="expiryDate" className="block text-sm font-medium text-gray-700">Expiry Date</label>
                          <input
                            id="expiryDate"
                            name="expiryDate"
                            type="text"
                            placeholder="MM/YY"
                            required
                            className="mt-1 block w-full p-1  border border-gray-300 rounded-md shadow-sm focus:ring-goldL focus:border-goldL sm:text-sm"
                            value={formData.expiryDate}
                            onChange={handleInputChange}
                          />
                        </div>
                        <div>
                          <label htmlFor="cvv" className="block text-sm font-medium text-gray-700">CVV</label>
                          <input
                            id="cvv"
                            name="cvv"
                            type="text"
                            required
                            className="mt-1 block w-full p-1  border border-gray-300 rounded-md shadow-sm focus:ring-goldL focus:border-goldL sm:text-sm"
                            value={formData.cvv}
                            onChange={handleInputChange}
                          />
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            )}
            
            <div className="flex justify-between items-center mt-8">
              <button
                type="button"
                onClick={handleBackToHome}
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-goldD bg-page hover:bg-goldL focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-goldL"
              >
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Home
              </button>
              <button
                type="submit"
                disabled={isSubmitting}
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-goldD hover:bg-goldL focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-goldL"
              >
                {isSubmitting ? 'Processing...' : 'Start Your Beewise Journey'}
                {!isSubmitting && <Check className="ml-2 h-5 w-5" />}
              </button>
            </div>
          </form>
          {submitStatus === 'error' && errorMessage && (
            <div className="mt-4 p-4 bg-red-100 border border-red-300 text-red-700 rounded-md flex items-center">
              <AlertCircle className="mr-3 h-5 w-5 text-red-500" />
              {errorMessage}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SubscriptionPage;