// src/pages/Login.js
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../actions/AuthActions'; // Ensure correct casing
import './Login.css'; // Import the CSS file

const Login = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(login(email, password));
  };

  return (
    <div className='center'>
    <div className="card">
      <h2 className="login">Login</h2>
      <form onSubmit={handleSubmit} className="space-y-5">
        <div className="inputBox">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            required
          />
          <span>Email</span>
        </div>
        <br></br>
        <br></br>
        <div className="inputBox">
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            required
          />
          <span>Password</span>
        </div>
        <br></br>
        <br></br>

        <button type="submit" className="enter">Login</button>
      </form>
    </div>
    </div>
  );
};

export default Login;
