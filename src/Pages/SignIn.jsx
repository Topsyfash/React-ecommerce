import React from 'react'
import './CSS/Signin.css'
// import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react';

const Login = () => {

  const [email, setEmail] = useState("");
  const [message, setMessage] = useState(" ");


  const handleEmail = (event , value) => {
      let inputValue = event.target.value;
      setEmail(inputValue);
      let emailRegex = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/;
      if (!emailRegex.test(inputValue)) {
          setMessage("Please Enter a Valid Email Address");
      } else {
          setMessage("");
      }
  }


  return (
    <div className='login'>
      <div className="login-container">
        <h1>Sign Up</h1>
        <div className="loginSignup-fields">
          <input type="text" placeholder='Full Name' />
          <div style={{ color: "red" }}>{ message && message}</div>
          <input type="email" placeholder='Email Address' value={email} onChange={handleEmail}/>
          <input type="password" placeholder='Password' />
        </div>
        <button>Continue</button>
        <p className='loginSignup-login'>
          Already have an account?
          <a href="/login">Login Here</a>
          {/* <Link to='/login'>
            <span>Login here</span >
          </Link> */}
        </p>
        <div className="loginSignup-agree">
          <input type="checkbox" name='' id='' />
          <p>By continuing , you agree to our terms of use & privacy policy.</p>
        </div>
      </div >
    </div >
  )
}

export default Login