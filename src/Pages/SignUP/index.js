
import React, { useState } from 'react';
import './Signin.css';

import axios from 'axios';
import { Navigate, useNavigate } from 'react-router-dom';

const Signin = () => {
  const [isSignup, setIsSignup] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [loginSuccess, setLoginSuccess] = useState(false);

  const navigate = useNavigate();

  const handleToggle = () => {
    setIsSignup((prev) => !prev);
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    console.log("clicked");
    try {
      const result = await axios.post('http://localhost:3001/login', { email, password });
      console.log(result);
      // setLoginSuccess(true);
      localStorage.setItem('token', result.data.token);
      //display success message to user
      
      //navigate to home page

      navigate('/');
    } catch (error) {
      console.log(error.response.data);
      console.log(error.response.status);
    }
    console.log("clickeeed");
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      console.log("Passwords do not match");
      return;
    }
    try {
      const result = await axios.post('http://localhost:3001/register', { name, email, password });
      console.log(result);
    } catch (error) {
      console.log(error.response.data);
      console.log(error.response.status);
    }
  };

  return (
    <div className="container-unique">
      <div className={`slider-unique ${isSignup ? 'moveslider-unique' : ''}`}></div>
      <div className="btn-unique">
        <button className="login-unique" onClick={() => setIsSignup(false)}>Login</button>
        <button className="signup-unique" onClick={() => setIsSignup(true)}>Signup</button>
      </div>
      <div className={`form-section-unique ${isSignup ? 'form-section-move-unique' : ''}`}>
      <form onSubmit={handleLogin}>
        <div className="login-box-unique">
          <input type="email" className="email-unique ele-unique" placeholder="youremail@email.com"  value={email} onChange={(e) => setEmail(e.target.value)} />
          <input type="password" className="password-unique ele-unique" placeholder="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
          <button className="clkbtn-unique">Login</button>
        </div>
        </form>
        <form onSubmit={handleSignup}>
        <div className="signup-box-unique">
          <input type="text" className="name-unique ele-unique" placeholder="Enter your name" />
          <input type="email" className="email-unique ele-unique" placeholder="youremail@email.com" />
          <input type="password" className="password-unique ele-unique" placeholder="password" />
          <input type="password" className="confirm-password-unique ele-unique" placeholder="Confirm password" />
          <button className="clkbtn-unique">Signup</button>
        </div>
        </form>
      </div>
    </div>
  );
};

export default Signin;
