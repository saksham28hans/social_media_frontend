import React from 'react';
import './register.css'

const Register = () => {
  return (
    <div className='login'>
    <div className="loginWrapper">
       <div className="loginLeft">
           <h4 className="loginLogo">FriendsBook</h4>
           <span className="loginDesc">Connect with Friends and the world around you on FriendsBook.</span>
       </div>
       <div className="loginRight">
           <div className="loginBox">
               <input placeholder='Username' className="loginInput" />
               <input placeholder='Email' className="loginInput" />
               <input placeholder='Password' className="loginInput" />
               <input placeholder='Confirm Password' className="loginInput" />
               <button className="loginButton">Sign In</button>
               <button className="loginRegisterButton">Log Into Account</button>
           </div>
       </div>
    </div>
   </div>
  );
}

export default Register;
