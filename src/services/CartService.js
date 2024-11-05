import axios from 'axios';

// Replace with your backend API URL for cart
const API_URL = 'http://localhost:5000/api/cart';

// Add an item to the cart
const addToCart = async (productId, quantity) => {
  const token = localStorage.getItem('token');
  const response = await axios.post(
    `${API_URL}/add`,
    { productId, quantity },
    { headers: { Authorization: `Bearer ${token}` } }
  );
  return response.data;
};

// Remove an item from the cart
const removeFromCart = async (productId) => {
  const token = localStorage.getItem('token');
  const response = await axios.delete(`${API_URL}/remove/${productId}`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.data;
};

// Update the quantity of a cart item
const updateCartItem = async (productId, quantity) => {
  const token = localStorage.getItem('token');
  const response = await axios.put(
    `${API_URL}/update`,
    { productId, quantity },
    { headers: { Authorization: `Bearer ${token}` } }
  );
  return response.data;
};

// Checkout the cart
const checkout = async () => {
  const token = localStorage.getItem('token');
  const response = await axios.post(`${API_URL}/checkout`, {}, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.data;
};

export default {
  addToCart,
  removeFromCart,
  updateCartItem,
  checkout,
};
