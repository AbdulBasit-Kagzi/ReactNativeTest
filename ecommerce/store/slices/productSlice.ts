import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';

import {ProductSliceType} from './types';
import axios from 'axios';

const productState: ProductSliceType = {
  Products: [],
  isLoading: false,
};

export const getAllProduct = createAsyncThunk(
  'product/getAll',
  async (body, {dispatch, rejectWithValue}) => {
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
  async (body: string, {dispatch, rejectWithValue}) => {
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
  reducers: {},
  extraReducers: function (builder) {
    // get all products
    builder.addCase(getAllProduct.fulfilled, (state, action: AnyAction) => {
      state.Products = action.payload.data;
      state.isLoading = false;
    });
    builder.addCase(getAllProduct.pending, (state, action: AnyAction) => {
      state.isLoading = true;
    });
    builder.addCase(getAllProduct.rejected, (state, action: AnyAction) => {
      state.isLoading = false;
    });

    // get product by category
    builder.addCase(
      getProductByCategory.fulfilled,
      (state, action: AnyAction) => {
        state.Products = action.payload.data;
        state.isLoading = false;
      },
    );
    builder.addCase(
      getProductByCategory.pending,
      (state, action: AnyAction) => {
        state.isLoading = false;
      },
    );
    builder.addCase(
      getProductByCategory.rejected,
      (state, action: AnyAction) => {
        state.isLoading = false;
      },
    );
  },
});

export default productSlice.reducer;
