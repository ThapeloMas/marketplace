import axios from 'axios';

// Action types
export const ADD_TO_CART = 'ADD_TO_CART';
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART';
export const UPDATE_CART_ITEM = 'UPDATE_CART_ITEM';
export const CLEAR_CART = 'CLEAR_CART';

// Add to Cart Action
export const addToCart = (product) => {
  return { type: ADD_TO_CART, payload: { ...product, quantity: 1 } };
};

// Remove from Cart Action
export const removeFromCart = (id) => {
  return { type: REMOVE_FROM_CART, payload: id };
};

// Update Cart Item Quantity
export const updateCartItem = (id, quantity) => {
  return { type: UPDATE_CART_ITEM, payload: { id, quantity } };
};

// Clear Cart Action (used on checkout success)
export const clearCart = () => {
  return { type: CLEAR_CART };
};

// Checkout Action
export const checkout = (cartItems) => async (dispatch) => {
  try {
    const token = localStorage.getItem('token');
    const config = { headers: { Authorization: `Bearer ${token}` } };
    await axios.post('/api/cart/checkout', { items: cartItems }, config);
    dispatch(clearCart()); // Clear cart after successful checkout
    alert('Checkout successful!');
  } catch (error) {
    console.error('Checkout failed:', error.response.data.message);
  }
};
