// src/pages/Register.js
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { register } from '../actions/AuthActions'; // Ensure correct casing
import './Register.css'; // Import the CSS file

const Register = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(register(email, password));
  };

  return (
    <div className="center">
      <div className="card">
        <h2 className="register">Register</h2>
        <form onSubmit={handleSubmit}>
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
          <button type="submit" className="registerButton">Register</button>
        </form>
      </div>
    </div>
  );
};

export default Register;
