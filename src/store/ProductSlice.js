// src/store/productSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import productService from '../services/ProducService';

export const fetchProducts = createAsyncThunk('products/fetchProducts', async () => {
  return await productService.fetchProducts();
});

export const addProduct = createAsyncThunk('products/addProduct', async (productData, thunkAPI) => {
  try {
    return await productService.addProduct(productData);
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data);
  }
});

const productSlice = createSlice({
  name: 'products',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  reducers: {
    clearProductsError: (state) => {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.items = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(addProduct.fulfilled, (state, action) => {
        state.items.push(action.payload);
      });
  },
});

export const { clearProductsError } = productSlice.actions;
export default productSlice.reducer;
