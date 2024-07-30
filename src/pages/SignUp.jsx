

import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
const SignUp = () => {
  const [name, setName] = useState('');
  const [nmassege, setNmassege] = useState('');
  const [nmessageStyle, setNmessageStyle] = useState({ color: 'black' });

  const [email, setEmail] = useState('');
  const [massege, setMassege] = useState('');
  const [messageStyle, setMessageStyle] = useState({ color: 'black' });

  const [password, setPassword] = useState('');
  const [pmassege, setPmassege] = useState('');
  const [passwordStyle, setPasswordStyle] = useState({ color: 'black' });

  const [confirmPassword, setConfirmPassword] = useState('');
  const [confirmmassege, setConfirmmassege] = useState('');
  const [confirmStyle, setConfirmStyle] = useState({ color: 'black' });

  const [userType, setUserType] = useState('AspiringBeekeeper');
  const navigate = useNavigate();

  const nameValid = () => {
    const regexName = /^[a-zA-Z]+(?:['\s][a-zA-Z]+)*$/;
    if (regexName.test(name)) {
      setNmassege(<span><i className="fas fa-check-circle text-green-500 mx-2"></i>Name verified.</span>);
      setNmessageStyle({ color: "green" });
    } else if (!regexName.test(name) && name !== "") {
      setNmassege(<span><i className="fas fa-times-circle text-red-500 mx-2"></i>Please enter a valid Name address.</span>);
      setNmessageStyle({ color: "red" });
    } else {
      setNmassege('');
    }
  };

  const validEmail = () => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (emailRegex.test(email)) {
      setMassege(<span><i className="fas fa-check-circle text-green-500 mx-2"></i>Email address verified.</span>);
      setMessageStyle({ color: "green" });
    } else if (!emailRegex.test(email) || email !== "") {
      setMassege(<span><i className="fas fa-times-circle text-red-500 mx-2"></i>Please enter a valid email address.</span>);
      setMessageStyle({ color: "red" });
    } else {
      setMassege('');
    }
  };

  const validPass = () => {
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+=[{\]};:<>|./?,-]).{6,}$/;
    if (passwordRegex.test(password)) {
      setPmassege(<span><i className="fas fa-check-circle text-green-500 mx-2"></i>Password verified.</span>);
      setPasswordStyle({ color: "green" });
    } else if (!passwordRegex.test(password) || password !== "") {
      setPmassege(<span><i className="fas fa-times-circle text-red-500 mx-2"></i>Please enter a valid Password.</span>);
      setPasswordStyle({ color: "red" });
    } else {
      setPmassege('');
    }
  };

  const validConfirmPassword = () => {
    if (confirmPassword === password) {
      setConfirmmassege(<span><i className="fas fa-check-circle text-green-500 mx-2"></i>Passwords match.</span>);
      setConfirmStyle({ color: "green" });
    } else {
      setConfirmmassege(<span><i className="fas fa-times-circle text-red-500 mx-2"></i>Passwords do not match.</span>);
      setConfirmStyle({ color: "red" });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    nameValid();
    validEmail();
    validPass();
    validConfirmPassword();

    if (!userType) {
      alert("Please select a user type.");
      return;
    }

    if (name && email && password && confirmPassword === password && userType) {
      // Create a user object to store the information
      const user = {
        name,
        email,
        userType,
      };

      // Store the user information in session storage
      sessionStorage.setItem('user', JSON.stringify(user));

      // Navigate to the login page
      navigate('/LogIn');
    }
  };

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    if (name === 'password') {
      setPassword(value);
    } else if (name === 'email') {
      setEmail(value);
    } else if (name === 'name') {
      setName(value);
    } else if (name === 'confirmPassword') {
      setConfirmPassword(value);
    }
  };

  const handleSignUpWithGoogle = () => {
    alert("Signing up with Google!");
  };

  return (
    <>
      <div className="min-h-screen flex items-center justify-center bg-page py-12 px-4 sm:px-6 lg:px-8 bg-cover relative">
        <div className="max-w-md w-full space-y-8 p-8 bg-white shadow-lg rounded-xl">
          <div>
            <img
              className="mx-auto h-20 w-auto"
              src="/src/assets/imgs/logo1.png"
              alt="BeeWise logo"
            />
            <h2 className="mt-6 text-center text-3xl font-bold text-goldD">
              Start your journey
            </h2>
          </div>
          <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
            <input type="hidden" name="remember" defaultValue="true" />
            <div className="space-y-4">
              <div>
                <label htmlFor="name" className="sr-only">Name</label>
                <input
                  value={name}
                  onChange={(e) => {
                    nameValid();
                    handleOnChange(e);
                  }}
                  id="name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  required
                  className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-goldD focus:border-goldD focus:z-10 sm:text-sm"
                  placeholder="Your Full Name"
                />
                <div style={nmessageStyle}>{nmassege}</div>
              </div>
              <div>
                <label htmlFor="email-address" className="sr-only">Email address</label>
                <input
                  value={email}
                  onChange={(e) => {
                    handleOnChange(e);
                    validEmail();
                  }}
                  id="email-address"
                  name="email"
                  type="email"
                  autoComplete="email"
                  className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-goldD focus:border-goldD focus:z-10 sm:text-sm"
                  placeholder="Your Email address"
                />
                <div style={messageStyle}>{massege}</div>
              </div>
              <div>
                <label htmlFor="password" className="sr-only">Password</label>
                <input
                  value={password}
                  onChange={(e) => {
                    handleOnChange(e);
                    validPass();
                  }}
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="new-password"
                  required
                  className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-goldD focus:border-goldD focus:z-10 sm:text-sm"
                  placeholder="Create Password"
                />
                <div style={passwordStyle}>{pmassege}</div>
              </div>
              <div>
                <label htmlFor="confirm-password" className="sr-only">Confirm Password</label>
                <input
                  value={confirmPassword}
                  onChange={(e) => {
                    handleOnChange(e);
                    validConfirmPassword();
                  }}
                  id="confirm-password"
                  name="confirmPassword"
                  type="password"
                  autoComplete="new-password"
                  required
                  className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-goldD focus:border-goldD focus:z-10 sm:text-sm"
                  placeholder="Confirm Password"
                />
                <div style={confirmStyle}>{confirmmassege}</div>
              </div>
              <div>
                <label htmlFor="userType" className="sr-only">User Type</label>
                <select
                  id="userType"
                  name="userType"
                  value={userType}
                  onChange={(e) => setUserType(e.target.value)}
                  className="appearance-none rounded-md block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-goldD focus:border-goldD sm:text-sm"
                >
                  <option value="AspiringBeekeeper">Beekeeper</option>
                  <option value="ExperiencedBeekeeper">Customer</option>
                </select>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <div className="text-sm">
                <Link to="/LogIn" className="font-medium text-goldD hover:text-goldD">Already have an account? Log In</Link>
              </div>
            </div>
            <div>
              <button type="submit" className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-goldD hover:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-goldD">
                Sign Up
              </button>
            </div>
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="bg-white px-2 text-gray-500">Or</span>
              </div>
            </div>
            <div>
            <button
      type="button"
      onClick={handleSignUpWithGoogle}
      className="group relative w-full flex items-center justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-500 hover:bg-blue-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition duration-150 ease-in-out"
    >
      <FontAwesomeIcon icon={faGoogle} className="mr-2" />
      Sign Up with Google
    </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default SignUp;


// import React, { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faCheck, faTimes, faGoogle } from '@fortawesome/free-solid-svg-icons';

// const SignUp = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     password: '',
//     confirmPassword: '',
//     userType: 'Beekeeper'
//   });

//   const [formErrors, setFormErrors] = useState({});
//   const navigate = useNavigate();

//   const validateField = (name, value) => {
//     let error = '';
//     switch (name) {
//       case 'name':
//         if (!/^[a-zA-Z]+(?:['\s][a-zA-Z]+)*$/.test(value)) {
//           error = 'Please enter a valid name.';
//         }
//         break;
//       case 'email':
//         if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(value)) {
//           error = 'Please enter a valid email address.';
//         }
//         break;
//       case 'password':
//         if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+=[{\]};:<>|./?,-]).{8,}$/.test(value)) {
//           error = 'Password must be at least 8 characters long and include uppercase, lowercase, number, and special character.';
//         }
//         break;
//       case 'confirmPassword':
//         if (value !== formData.password) {
//           error = 'Passwords do not match.';
//         }
//         break;
//       default:
//         break;
//     }
//     return error;
//   };

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData(prev => ({ ...prev, [name]: value }));
//     setFormErrors(prev => ({ ...prev, [name]: validateField(name, value) }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const errors = Object.keys(formData).reduce((acc, key) => {
//       const error = validateField(key, formData[key]);
//       if (error) acc[key] = error;
//       return acc;
//     }, {});

//     setFormErrors(errors);

//     if (Object.keys(errors).length === 0) {
//       const user = {
//         name: formData.name,
//         email: formData.email,
//         userType: formData.userType,
//       };
//       sessionStorage.setItem('user', JSON.stringify(user));
//       navigate('/LogIn');
//     }
//   };

//   const handleSignUpWithGoogle = () => {
//     // Implement Google Sign Up logic here
//     console.log("Signing up with Google");
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-amber-50 to-amber-100 py-12 px-4 sm:px-6 lg:px-8">
//       <div className="max-w-md w-full space-y-8 bg-white p-10 rounded-xl shadow-2xl">
//         <div>
//           <img className="mx-auto h-24 w-auto" src="/src/assets/imgs/logo1.png" alt="BeeWise logo" />
//           <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Join the BeeWise Community</h2>
//           <p className="mt-2 text-center text-sm text-gray-600">
//             Start your beekeeping journey or connect with expert beekeepers
//           </p>
//         </div>
//         <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
//           <div className="rounded-md shadow-sm -space-y-px">
//             {['name', 'email', 'password', 'confirmPassword'].map((field) => (
//               <div key={field}>
//                 <label htmlFor={field} className="sr-only">{field.charAt(0).toUpperCase() + field.slice(1)}</label>
//                 <input
//                   id={field}
//                   name={field}
//                   type={field.includes('password') ? 'password' : field === 'email' ? 'email' : 'text'}
//                   required
//                   className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-goldD focus:border-goldD focus:z-10 sm:text-sm"
//                   placeholder={field.charAt(0).toUpperCase() + field.slice(1).replace(/([A-Z])/g, ' $1')}
//                   value={formData[field]}
//                   onChange={handleChange}
//                 />
//               </div>
//             ))}
//           </div>

//           <div>
//             <label htmlFor="userType" className="sr-only">User Type</label>
//             <select
//               id="userType"
//               name="userType"
//               value={formData.userType}
//               onChange={handleChange}
//               className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-goldD focus:border-goldD sm:text-sm"
//             >
//               <option value="Beekeeper">Beekeeper</option>
//               <option value="Customer">Honey Enthusiast</option>
//             </select>
//           </div>

//           {Object.keys(formErrors).map((key) => (
//             formErrors[key] && (
//               <p key={key} className="text-red-500 text-xs italic">
//                 <FontAwesomeIcon icon={faTimes} className="mr-1" />
//                 {formErrors[key]}
//               </p>
//             )
//           ))}

//           <div>
//             <button
//               type="submit"
//               className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-goldD hover:bg-goldL focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-goldD transition duration-150 ease-in-out"
//             >
//               Create Account
//             </button>
//           </div>
//         </form>

//         <div className="mt-6">
//           <div className="relative">
//             <div className="absolute inset-0 flex items-center">
//               <div className="w-full border-t border-gray-300"></div>
//             </div>
//             <div className="relative flex justify-center text-sm">
//               <span className="px-2 bg-white text-gray-500">Or continue with</span>
//             </div>
//           </div>

//           <div className="mt-6">
//             <button
//               onClick={handleSignUpWithGoogle}
//               className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
//             >
//               <FontAwesomeIcon icon={faGoogle} className="mr-2" />
//               Sign up with Google
//             </button>
//           </div>
//         </div>

//         <p className="mt-2 text-center text-sm text-gray-600">
//           Already have an account?{' '}
//           <Link to="/LogIn" className="font-medium text-goldD hover:text-goldL transition duration-150 ease-in-out">
//             Sign in
//           </Link>
//         </p>
//       </div>
//     </div>
//   );
// };

// export default SignUp;