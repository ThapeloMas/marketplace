import axios from 'axios';

// Action types
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAIL = 'LOGIN_FAIL';
export const REGISTER_SUCCESS = 'REGISTER_SUCCESS';
export const REGISTER_FAIL = 'REGISTER_FAIL';
export const LOGOUT = 'LOGOUT';

// Login Action
export const login = (credentials) => async (dispatch) => {
  try {
    const res = await axios.post('/api/auth/login', credentials);
    dispatch({ type: LOGIN_SUCCESS, payload: res.data });
    localStorage.setItem('token', res.data.token); // Save JWT token in localStorage
  } catch (error) {
    dispatch({ type: LOGIN_FAIL, payload: error.response.data.message });
  }
};

// Register Action
export const register = (userData) => async (dispatch) => {
  try {
    const res = await axios.post('/api/auth/register', userData);
    dispatch({ type: REGISTER_SUCCESS, payload: res.data });
    localStorage.setItem('token', res.data.token);
  } catch (error) {
    dispatch({ type: REGISTER_FAIL, payload: error.response.data.message });
  }
};

// Logout Action
export const logout = () => (dispatch) => {
  localStorage.removeItem('token');
  dispatch({ type: LOGOUT });
};
