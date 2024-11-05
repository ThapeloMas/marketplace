// src/store/index.js
import { configureStore } from '@reduxjs/toolkit';
import authReducer from './AuthSlice';
import productReducer from './ProductSlice';
import cartReducer from './CartSlice';

const store = configureStore({
  reducer: {
    auth: authReducer,
    products: productReducer,
    cart: cartReducer,
  },
});

export default store;
