

// import React, { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faGoogle } from '@fortawesome/free-brands-svg-icons';
// const SignUp = () => {
//   const [name, setName] = useState('');
//   const [nmassege, setNmassege] = useState('');
//   const [nmessageStyle, setNmessageStyle] = useState({ color: 'black' });

//   const [email, setEmail] = useState('');
//   const [massege, setMassege] = useState('');
//   const [messageStyle, setMessageStyle] = useState({ color: 'black' });

//   const [password, setPassword] = useState('');
//   const [pmassege, setPmassege] = useState('');
//   const [passwordStyle, setPasswordStyle] = useState({ color: 'black' });

//   const [confirmPassword, setConfirmPassword] = useState('');
//   const [confirmmassege, setConfirmmassege] = useState('');
//   const [confirmStyle, setConfirmStyle] = useState({ color: 'black' });

//   // const [userType, setUserType] = useState('AspiringBeekeeper');
//   const navigate = useNavigate();

//   const nameValid = () => {
//     const regexName = /^[a-zA-Z]+(?:['\s][a-zA-Z]+)*$/;
//     if (regexName.test(name)) {
//       setNmassege(<span><i className="fas fa-check-circle text-green-500 mx-2"></i>Name verified.</span>);
//       setNmessageStyle({ color: "green" });
//     } else if (!regexName.test(name) && name !== "") {
//       setNmassege(<span><i className="fas fa-times-circle text-red-500 mx-2"></i>Please enter a valid Name address.</span>);
//       setNmessageStyle({ color: "red" });
//     } else {
//       setNmassege('');
//     }
//   };

//   const validEmail = () => {
//     const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
//     if (emailRegex.test(email)) {
//       setMassege(<span><i className="fas fa-check-circle text-green-500 mx-2"></i>Email address verified.</span>);
//       setMessageStyle({ color: "green" });
//     } else if (!emailRegex.test(email) || email !== "") {
//       setMassege(<span><i className="fas fa-times-circle text-red-500 mx-2"></i>Please enter a valid email address.</span>);
//       setMessageStyle({ color: "red" });
//     } else {
//       setMassege('');
//     }
//   };

//   const validPass = () => {
//     const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+=[{\]};:<>|./?,-]).{6,}$/;
//     if (passwordRegex.test(password)) {
//       setPmassege(<span><i className="fas fa-check-circle text-green-500 mx-2"></i>Password verified.</span>);
//       setPasswordStyle({ color: "green" });
//     } else if (!passwordRegex.test(password) || password !== "") {
//       setPmassege(<span><i className="fas fa-times-circle text-red-500 mx-2"></i>Please enter a valid Password.</span>);
//       setPasswordStyle({ color: "red" });
//     } else {
//       setPmassege('');
//     }
//   };

//   const validConfirmPassword = () => {
//     if (confirmPassword === password) {
//       setConfirmmassege(<span><i className="fas fa-check-circle text-green-500 mx-2"></i>Passwords match.</span>);
//       setConfirmStyle({ color: "green" });
//     } else {
//       setConfirmmassege(<span><i className="fas fa-times-circle text-red-500 mx-2"></i>Passwords do not match.</span>);
//       setConfirmStyle({ color: "red" });
//     }
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     nameValid();
//     validEmail();
//     validPass();
//     validConfirmPassword();

    

//     if (name && email && password && confirmPassword === password ) {
//       // Create a user object to store the information
//       const user = {
//         name,
//         email,
//         password
//       };

//       // Store the user information in session storage
//       sessionStorage.setItem('user', JSON.stringify(user));

//       // Navigate to the login page
//       navigate('/');
//     }
//   };

//   const handleOnChange = (e) => {
//     const { name, value } = e.target;
//     if (name === 'password') {
//       setPassword(value);
//     } else if (name === 'email') {
//       setEmail(value);
//     } else if (name === 'name') {
//       setName(value);
//     } else if (name === 'confirmPassword') {
//       setConfirmPassword(value);
//     }
//   };

//   const handleSignUpWithGoogle = () => {
//     alert("Signing up with Google!");
//   };

//   return (
//     <>
//       <div className="min-h-screen flex items-center justify-center bg-page py-12 px-4 sm:px-6 lg:px-8 bg-cover relative">
//         <div className="max-w-md w-full space-y-8 p-8 bg-white shadow-lg rounded-xl">
//           <div>
//             <img
//               className="mx-auto h-20 w-auto"
//               src="/src/assets/imgs/logo1.png"
//               alt="BeeWise logo"
//             />
//             <h2 className="mt-6 text-center text-3xl font-bold text-goldD">
//               Start your journey
//             </h2>
//           </div>
//           <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
//             <input type="hidden" name="remember" defaultValue="true" />
//             <div className="space-y-4">
//               <div>
//                 <label htmlFor="name" className="sr-only">Name</label>
//                 <input
//                   value={name}
//                   onChange={(e) => {
//                     nameValid();
//                     handleOnChange(e);
//                   }}
//                   id="name"
//                   name="name"
//                   type="text"
//                   autoComplete="name"
//                   required
//                   className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-goldD focus:border-goldD focus:z-10 sm:text-sm"
//                   placeholder="Your Full Name"
//                 />
//                 <div style={nmessageStyle}>{nmassege}</div>
//               </div>
//               <div>
//                 <label htmlFor="email-address" className="sr-only">Email address</label>
//                 <input
//                   value={email}
//                   onChange={(e) => {
//                     handleOnChange(e);
//                     validEmail();
//                   }}
//                   id="email-address"
//                   name="email"
//                   type="email"
//                   autoComplete="email"
//                   className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-goldD focus:border-goldD focus:z-10 sm:text-sm"
//                   placeholder="Your Email address"
//                 />
//                 <div style={messageStyle}>{massege}</div>
//               </div>
//               <div>
//                 <label htmlFor="password" className="sr-only">Password</label>
//                 <input
//                   value={password}
//                   onChange={(e) => {
//                     handleOnChange(e);
//                     validPass();
//                   }}
//                   id="password"
//                   name="password"
//                   type="password"
//                   autoComplete="new-password"
//                   required
//                   className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-goldD focus:border-goldD focus:z-10 sm:text-sm"
//                   placeholder="Create Password"
//                 />
//                 <div style={passwordStyle}>{pmassege}</div>
//               </div>
//               <div>
//                 <label htmlFor="confirm-password" className="sr-only">Confirm Password</label>
//                 <input
//                   value={confirmPassword}
//                   onChange={(e) => {
//                     handleOnChange(e);
//                     validConfirmPassword();
//                   }}
//                   id="confirm-password"
//                   name="confirmPassword"
//                   type="password"
//                   autoComplete="new-password"
//                   required
//                   className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-goldD focus:border-goldD focus:z-10 sm:text-sm"
//                   placeholder="Confirm Password"
//                 />
//                 <div style={confirmStyle}>{confirmmassege}</div>
//               </div>
//             </div>
//             <div>
//               <button type="submit" className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-goldD hover:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-goldD">
//                 Sign Up
//               </button>
//             </div>
//             <div className="flex items-center justify-between">
//               <div className="text-sm">
//                 <Link to="/LogIn" className="font-medium text-goldD hover:text-goldD">Already have an account? Log In</Link>
//               </div>
//             </div>
//             <div className="relative">
//               <div className="absolute inset-0 flex items-center">
//                 <div className="w-full border-t border-gray-300" />
//               </div>
//               <div className="relative flex justify-center text-sm">
//                 <span className="bg-white px-2 text-gray-500">Or</span>
//               </div>
//             </div>
//             <div>
//             <button
//       type="button"
//       onClick={handleSignUpWithGoogle}
//       className="group relative w-full flex items-center justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-500 hover:bg-blue-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition duration-150 ease-in-out"
//     >
//       <FontAwesomeIcon icon={faGoogle} className="mr-2" />
//       Sign Up with Google
//     </button>
//             </div>
//           </form>
//         </div>
//       </div>
//     </>
//   );
// };

// export default SignUp;



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

  const navigate = useNavigate();

  const nameValid = () => {
    const regexName = /^[a-zA-Z]+(?:[\s'][a-zA-Z]+)*$/;
    if (regexName.test(name)) {
      setNmassege(<span><i className="fas fa-check-circle text-green-500 mx-2"></i>Name verified.</span>);
      setNmessageStyle({ color: "green" });
    } else if (!regexName.test(name) && name !== "") {
      setNmassege(<span><i className="fas fa-times-circle text-red-500 mx-2"></i>Please enter a valid Name.</span>);
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
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+=[{\]};:<>|.,?/-]).{6,}$/;
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

    if (name && email && password && confirmPassword === password) {
      // Create a user object to store the information
      const user = {
        name,
        email,
        password
      };

      // Store the user information in session storage
      sessionStorage.setItem('user', JSON.stringify(user));

      // Navigate to the login page
      navigate('/');
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
                  autoComplete="current-password"
                  required
                  className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-goldD focus:border-goldD focus:z-10 sm:text-sm"
                  placeholder="Your Password"
                />
                <div style={passwordStyle}>{pmassege}</div>
              </div>
              <div>
                <label htmlFor="confirmPassword" className="sr-only">Confirm Password</label>
                <input
                  value={confirmPassword}
                  onChange={(e) => {
                    handleOnChange(e);
                    validConfirmPassword();
                  }}
                  id="confirmPassword"
                  name="confirmPassword"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-goldD focus:border-goldD focus:z-10 sm:text-sm"
                  placeholder="Confirm Your Password"
                />
                <div style={confirmStyle}>{confirmmassege}</div>
              </div>
              <button
                type="submit"
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-goldD hover:bg-goldD focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-goldD"
              >
                Sign Up
              </button>
              <div className="flex items-center justify-center">
                <div className="text-sm">
                  <button
                    type="button"
                    className="font-medium text-goldD hover:text-goldD"
                    onClick={handleSignUpWithGoogle}
                  >
                    <FontAwesomeIcon icon={faGoogle} className="mr-2" />
                    Sign up with Google
                  </button>
                </div>
              </div>
            </div>
          </form>
          <div className="text-center text-sm">
            <p>Already have an account?</p>
            <Link to="/LogIn" className="font-medium text-goldD hover:text-goldD">
              Log in
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
