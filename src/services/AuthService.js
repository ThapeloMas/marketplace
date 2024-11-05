import axios from 'axios';

// Replace this with your actual backend URL
const API_URL = 'http://localhost:5000/api/auth';

// Register a new user
const register = async (email, password) => {
  const response = await axios.post(`${API_URL}/register`, { email, password });
  return response.data;
};

// Login an existing user
const login = async (email, password) => {
  const response = await axios.post(`${API_URL}/login`, { email, password });
  if (response.data.token) {
    localStorage.setItem('token', response.data.token); // Store token for future requests
  }
  return response.data;
};

// Logout the user
const logout = () => {
  localStorage.removeItem('token'); // Clear token on logout
};

export default {
  register,
  login,
  logout,
};
