// src/store/cartSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import cartService from '../services/CartService';

export const addToCart = createAsyncThunk('cart/addToCart', async ({ productId, quantity }) => {
  return await cartService.addToCart(productId, quantity);
});

export const checkout = createAsyncThunk('cart/checkout', async (_, thunkAPI) => {
  return await cartService.checkout();
});

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [],
    totalAmount: 0,
    isLoading: false,
    error: null,
  },
  reducers: {
    clearCartError: (state) => {
      state.error = null;
    },
    resetCart: (state) => {
      state.items = [];
      state.totalAmount = 0;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(addToCart.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(addToCart.fulfilled, (state, action) => {
        state.isLoading = false;
        state.items.push(action.payload);
      })
      .addCase(checkout.fulfilled, (state) => {
        state.items = [];
        state.totalAmount = 0;
      });
  },
});

export const { clearCartError, resetCart } = cartSlice.actions;
export default cartSlice.reducer;
