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
      const products = await axios.get(
        'https://fakestoreapi.com/products?limit=10',
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
      console.log('proudcts', state.Products);
      state.isLoading = false;
    });
    builder.addCase(getAllProduct.pending, (state, action: AnyAction) => {
      state.isLoading = true;
    });
    builder.addCase(getAllProduct.rejected, (state, action: AnyAction) => {
      state.isLoading = false;
    });
  },
});

export default productSlice.reducer;
