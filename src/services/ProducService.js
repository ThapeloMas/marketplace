import axios from 'axios';

// Replace with your backend API URL for products
const API_URL = 'http://localhost:5000/api/products';

// Fetch all products
const fetchProducts = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

// Add a new product
const addProduct = async (productData) => {
  const token = localStorage.getItem('token');
  const response = await axios.post(API_URL, productData, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.data;
};

// Update product availability or other details
const updateProduct = async (productId, updatedData) => {
  const token = localStorage.getItem('token');
  const response = await axios.put(`${API_URL}/${productId}`, updatedData, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.data;
};

// Delete a product
const deleteProduct = async (productId) => {
  const token = localStorage.getItem('token');
  const response = await axios.delete(`${API_URL}/${productId}`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.data;
};

// Fetch details for a single product
const fetchProductDetails = async (productId) => {
  const response = await axios.get(`${API_URL}/${productId}`);
  return response.data;
};

export default {
  fetchProducts,
  addProduct,
  updateProduct,
  deleteProduct,
  fetchProductDetails,
};
