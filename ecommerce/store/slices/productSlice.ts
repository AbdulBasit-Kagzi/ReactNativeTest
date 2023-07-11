import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';

import {ProductSliceType} from './types';
import axios from 'axios';

const productState: ProductSliceType = {
  Products: [],
  isLoading: false,
  openSheet: false,
};

export const getAllProduct = createAsyncThunk(
  'product/getAll',
  async (body, {rejectWithValue}) => {
    try {
      const products = await axios.get('https://fakestoreapi.com/products', {
        headers: {
          'content-type': 'application/json',
        },
      });

      return products;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);

export const getProductByCategory = createAsyncThunk(
  'product/getCategroy',
  async (body: string, {rejectWithValue}) => {
    console.log('body', body);
    try {
      const products = await axios.get(
        `https://fakestoreapi.com/products/category/${body.toLowerCase()}`,
        {
          headers: {
            'content-type': 'application/json',
          },
        },
      );

      return products;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);

const productSlice = createSlice({
  name: 'products',
  initialState: productState,
  reducers: {
    sheet: (state, action) => {
      state.openSheet = action.payload;
      console.log('sheet', state.openSheet);
    },
  },
  extraReducers: function (builder) {
    // get all products
    builder.addCase(getAllProduct.fulfilled, (state, action: any) => {
      state.Products = action.payload.data;
      state.isLoading = false;
    });
    builder.addCase(getAllProduct.pending, state => {
      state.isLoading = true;
    });
    builder.addCase(getAllProduct.rejected, state => {
      state.isLoading = false;
    });

    // get product by category
    builder.addCase(getProductByCategory.fulfilled, (state, action: any) => {
      state.Products = action.payload.data;
      state.isLoading = false;
    });
    builder.addCase(getProductByCategory.pending, state => {
      state.isLoading = false;
    });
    builder.addCase(getProductByCategory.rejected, state => {
      state.isLoading = false;
    });
  },
});

export const {sheet} = productSlice.actions;

export default productSlice.reducer;
