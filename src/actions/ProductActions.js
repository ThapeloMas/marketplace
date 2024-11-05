import axios from 'axios';

// Action types
export const FETCH_PRODUCTS_SUCCESS = 'FETCH_PRODUCTS_SUCCESS';
export const FETCH_PRODUCTS_FAIL = 'FETCH_PRODUCTS_FAIL';
export const ADD_PRODUCT_SUCCESS = 'ADD_PRODUCT_SUCCESS';
export const ADD_PRODUCT_FAIL = 'ADD_PRODUCT_FAIL';
export const UPDATE_PRODUCT_SUCCESS = 'UPDATE_PRODUCT_SUCCESS';
export const DELETE_PRODUCT_SUCCESS = 'DELETE_PRODUCT_SUCCESS';

// Fetch Products Action
export const fetchProducts = () => async (dispatch) => {
  try {
    const res = await axios.get('/api/products');
    dispatch({ type: FETCH_PRODUCTS_SUCCESS, payload: res.data });
  } catch (error) {
    dispatch({ type: FETCH_PRODUCTS_FAIL, payload: error.response.data.message });
  }
};

// Add Product Action
export const addProduct = (productData) => async (dispatch) => {
  try {
    const token = localStorage.getItem('token');
    const config = { headers: { Authorization: `Bearer ${token}` } };
    const res = await axios.post('/api/products', productData, config);
    dispatch({ type: ADD_PRODUCT_SUCCESS, payload: res.data });
  } catch (error) {
    dispatch({ type: ADD_PRODUCT_FAIL, payload: error.response.data.message });
  }
};

// Update Product Action
export const updateProduct = (id, updatedData) => async (dispatch) => {
  try {
    const token = localStorage.getItem('token');
    const config = { headers: { Authorization: `Bearer ${token}` } };
    const res = await axios.put(`/api/products/${id}`, updatedData, config);
    dispatch({ type: UPDATE_PRODUCT_SUCCESS, payload: res.data });
  } catch (error) {
    console.error(error);
  }
};

// Delete Product Action
export const deleteProduct = (id) => async (dispatch) => {
  try {
    const token = localStorage.getItem('token');
    const config = { headers: { Authorization: `Bearer ${token}` } };
    await axios.delete(`/api/products/${id}`, config);
    dispatch({ type: DELETE_PRODUCT_SUCCESS, payload: id });
  } catch (error) {
    console.error(error);
  }
};
