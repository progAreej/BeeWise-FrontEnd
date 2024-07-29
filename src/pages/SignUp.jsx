// import React, { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";

// const SignUp = () => {
//   const[name,setName]=useState('');
//   const [nmassege,setNmassege]=useState('');
//   const [nmessageStyle, setNmessageStyle] = useState({color:'black'}); 

//   const[email,setEmail]=useState('');
//   const [massege,setMassege]=useState('');
//   const [messageStyle, setMessageStyle] = useState({color:'black'}); 


//   const[password,setPassword]=useState('');
//   const [pmassege,setPmassege]=useState('');
//   const [passwordStyle, setPasswordStyle] = useState({color:'black'}); 
  

//   const [confirmPassword, setConfirmPassword] = useState('');
//   const [confirmmassege, setConfirmmassege] = useState('');
//   const [confirmStyle, setConfirmStyle] = useState({ color: 'black' });
 
//   const [userType, setUserType] = useState('AspiringBeekeeper');
//   const navigate = useNavigate();
  
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
  

// const nameValid=()=>{
//   const regexName=/^[a-zA-Z]+(?:['\s][a-zA-Z]+)*$/;
//   if(regexName.test(name)){
//     setNmassege(<span><i className="fas fa-check-circle text-green-500 mx-2"></i>Name verified.</span>);
//     setNmessageStyle({ color: "green" });
//   }
  
// else if(!regexName.test(name) && name !== ""){
//   setNmassege(<span><i className="fas fa-times-circle text-red-500 mx-2"></i>Please enter a valid Name address.</span>);
//   setNmessageStyle({ color: "red" });
//   }else{
//     setNmassege('')
//   }
// }


//  const validEmail=()=>{
//   const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
//   if (emailRegex.test(email)){
//     setMassege(<span><i className="fas fa-check-circle text-green-500 mx-2"></i>Email address verified.</span>);
//     setMessageStyle({ color: "green" });

//   }
// else if(!emailRegex.test(email) || email !== ""){
// setMassege(<span><i className="fas fa-times-circle text-red-500 mx-2"></i>Please enter a valid email address.</span>);
// setMessageStyle({ color: "red" });
// }else{
// setMassege('')
// }
//  }


//  const validPass=()=>{
//   const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+=[{\]};:<>|./?,-]).{6,}$/;  
//   if (passwordRegex.test(password)){
//    setPmassege(<span><i className="fas fa-check-circle text-green-500 mx-2"></i>Password verified.</span>);
//      setPasswordStyle({ color: "green" });

//  }
// else if(!passwordRegex.test(password) || password !== ""){
// setPmassege(<span><i className="fas fa-times-circle text-red-500 mx-2"></i>Please enter a valid Password.</span>);
// setPasswordStyle({ color: "red" });
// }else{
// setPmassege('')
// }
// }

// const validConfirmPassword = () => {
//   if (confirmPassword === password) {
//     setConfirmmassege(<span><i className="fas fa-check-circle text-green-500 mx-2"></i>Passwords match.</span>);
//     setConfirmStyle({ color: "green" });
//   } else {
//     setConfirmmassege(<span><i className="fas fa-times-circle text-red-500 mx-2"></i>Passwords do not match.</span>);
//     setConfirmStyle({ color: "red" });
//   }
// };

// const handleSubmit = (e) => {
//   e.preventDefault();
//   nameValid();
//   validEmail();
//   validPass();
//   validConfirmPassword();

//   if (!userType) {
//     alert("Please select a user type.");
//     return;
//   }

//   if (name && email && password && confirmPassword === password && userType) {
//     // alert("Form submitted successfully!");
//     // Handle form submission logic

//     navigate('/');
   
//     // <Link to='/'></Link>
//   }
// };


//   const handleSignUpWithGoogle = () => {
  
//     alert("Signing up with Google!");
//   };

//   return (
//     <>
//       <div className="min-h-screen flex items-center justify-center bg-page py-12 px-4 sm:px-6 lg:px-8   bg-cover relative" 
//       // style={{ backgroundImage: 'url(./src/assets/imgs/bg-singup.png)' }}
//       >
//         <div className="max-w-md w-full space-y-8 p-8 bg-white shadow-lg rounded-xl">
//           <div>
//             <img
//               className="mx-auto h-20 w-auto"
//               src="/src/assets/imgs/logo1.png"
//               alt="BeeWise logo"
//             />
//             <h2 className="mt-6 text-center text-3xl font-bold text-goldD">
//             Start your journey
//             </h2>
//           </div>
//           <form    className="mt-8 space-y-6" action="#" method="POST" onSubmit={handleSubmit}>
//             <input type="hidden" name="remember" defaultValue="true" />
//             <div className=" space-y-4">
//               <div>
//                 <label htmlFor="name" className="sr-only">
//                   Name
//                 </label>
//                 <input
//                   value={name}
//                   onChange={(e)=>{
//                     nameValid();
//                     handleOnChange(e)
//                   }}
//                   id="name"
//                   name="name"
//                   type="text"
//                   autoComplete="name"
//                   required
//                   className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-goldD focus:border-goldD focus:z-10 sm:text-sm"
//                   placeholder="Your Full Name"
//                 />
//                 <div  style={nmessageStyle} >{nmassege}</div>
//               </div>
//               <div>
//                 <label htmlFor="email-address" className="sr-only">
//                   Email address
//                 </label>
//                 <input
//                  value={email}
//                  onChange={(e) => {
//                   handleOnChange(e);
//                   validEmail();
//                 }}
//                   id="email-address"
//                   name="email"
//                   type="email"
//                   autoComplete="email"
//                   // required
//                   className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-goldD focus:border-goldD focus:z-10 sm:text-sm"
//                   placeholder="Your Email address"
//                 />
//                 <div  style={messageStyle} >{massege}</div>
              
//               </div>
//               <div>
//                 <label htmlFor="password" className="sr-only">
//                   Password
//                 </label>
//                 <input
//                 value={password}
//                 onChange={(e)=>{
//                   handleOnChange(e);
//                   validPass();
//                 }}
//                   id="password"
//                   name="password"
//                   type="password"
//                   autoComplete="new-password"
//                   required
//                   className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-goldD focus:border-goldD focus:z-10 sm:text-sm"
//                   placeholder="Create Password"
//                 />
//                 <div  style={passwordStyle} >{pmassege}</div>
//               </div>
//               <div>
//                 <label htmlFor="password" className="sr-only">
//                   Confirm Password
//                 </label>
//                 <input
//                 value={confirmPassword}
//                 onChange={(e) => {
//                   handleOnChange(e);
//                   validConfirmPassword();
//                 }}
//                   id="confirm-password"
//                   name="confirmPassword"
//                   type="password"
//                   autoComplete="new-password"
//                   required
//                   className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-goldD focus:border-goldD focus:z-10 sm:text-sm"
//                   placeholder="Confirm Password"
//                 />
//                <div style={confirmStyle}>{confirmmassege}</div> 
//               </div>
//               <div className="flex space-x-16 ">
//                 <div>
//                 <input
//                  type="radio"
//                  id="Aspiring-Beekeeper"
//                  name="userType"
//                  value="AspiringBeekeeper"
//                  checked={userType === 'AspiringBeekeeper'}
//                  onChange={(e) => setUserType(e.target.value)}
//                 />
//                 <label htmlFor="AspiringBeekeeper" className="mx-2 ">Aspiring Beekeeper</label>
//                 </div>
                
//                 <div>
//                 <input 
//                  type="radio"
//                  id="Honey-Lover"
//                  name="userType"
//                  value="HoneyLover"
//                  checked={userType === 'HoneyLover'}
//                  onChange={(e) => setUserType(e.target.value)}
//                 />
//                 <label htmlFor="HoneyLover" className="mx-2 ">Honey Lover</label>
//                 </div>
//               </div>
//             </div>

//             <div>
//             <button
//                 type="submit"
//                 className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-goldD hover:bg-goldL focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-goldL"
//               >
//                 Sign Up
//               </button>
//             </div>
//           </form>

//           <div className="mt-3">
//   <button
//     onClick={handleSignUpWithGoogle}
//     className="w-full bg-blue-500 hover:bg-blue-600 text-md text-white  py-2 px-4 rounded-md focus:outline-none focus:ring-blue-400 focus:border-blue-400 flex items-center justify-center"
//   >
//     <span className="mr-2">
//       <img className="w-7 h-7 bg-white border-md p-1 " src="https://www.svgrepo.com/show/475656/google-color.svg" loading="lazy" alt="Google Logo" />
//     </span>
//     Sign Up with Google
//   </button>
// </div>

//           <div className="mt-6 text-center">
//             <p className="text-sm text-gray-600">Already have an account with us?</p>
//             <Link to="/LogIn" className=" text-xl text-goldD hover:text-goldL">
//               Log In
//             </Link>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };
// export default SignUp;



import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

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
                  <option value="AspiringBeekeeper">Aspiring Beekeeper</option>
                  <option value="ExperiencedBeekeeper">Experienced Beekeeper</option>
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
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-500 hover:bg-blue-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
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
