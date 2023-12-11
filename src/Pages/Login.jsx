import React from 'react'
import './CSS/Login.css'
// import { Link } from 'react-router-dom'
import { useState } from 'react'

const SignUp = () => {
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
        <div className='sign-up'>
            <div className='sign-up-container'>
                <h1>Log In</h1>
                <div className="loginSignup-fields">
                    <div style={{ color: "red" }}>{ message}</div>
                    <input type="email" placeholder='Email Address' value={email} onChange={handleEmail}/>
                    <input type="password" placeholder='Password' />
                </div>
                <button>Log In</button>
                <div className="loginSignup-agree">
                    <input type="checkbox" name='' id='' />
                    <p>By continuing , you agree to our terms of use & privacy policy.</p>
                </div>
                <p className='loginSignup-login'>
                    Are you a new member? 
                    <a href="#/signup">Signup Here</a>
                </p>
            </div>

        </div>
    )
}

export default SignUp