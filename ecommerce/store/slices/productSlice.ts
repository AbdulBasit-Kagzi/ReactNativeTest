import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';

import {ProductSliceType} from './types';
import axios from 'axios';

const productState: ProductSliceType = {
  Products: [],
  isLoading: false,
  openSheet: false,
  filterProducts: [],
  category: '',
  price: [],
  rating: [],
};

export const getAllProduct = createAsyncThunk(
  'product/getAll',
  async (body: number, {rejectWithValue}) => {
    try {
      console.log('limit', body);
      const products = await axios.get(
        `https://fakestoreapi.com/products?limit=${body}`,
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
    },
    setcategory: (state, action) => {
      state.category = action.payload;
    },
    setprice: (state, action) => {
      state.price = [...action.payload];
    },
    setrating: (state, action) => {
      state.rating = [...action.payload];
    },
    productFilter: state => {
      let tempProduct = [...state.Products];
      if (state.category.length > 0) {
        tempProduct = tempProduct.filter(
          data =>
            data.category.toLowerCase().startsWith(state.category) ||
            data.category.toLowerCase().includes(state.category) ||
            data.title.toLowerCase().startsWith(state.category) ||
            data.title.toLowerCase().includes(state.category),
        );
      }
      if (state.price.length > 0) {
        tempProduct = tempProduct.filter(
          data => data.price >= state.price[0] && data.price <= state.price[1],
        );
      }
      if (state.rating.length > 0) {
        tempProduct = tempProduct.filter(
          data =>
            data.rating.rate >= state.rating[0] &&
            data.rating.rate <= state.rating[1],
        );
      }

      state.filterProducts = [...tempProduct];
    },
  },
  extraReducers: function (builder) {
    builder.addCase(getAllProduct.fulfilled, (state, action: any) => {
      state.Products = action.payload.data;
      state.filterProducts = [...state.Products];
      state.isLoading = false;
    });
    builder.addCase(getAllProduct.pending, state => {
      state.isLoading = true;
    });
    builder.addCase(getAllProduct.rejected, state => {
      state.isLoading = false;
    });
  },
});

export const {sheet, productFilter, setcategory, setprice, setrating} =
  productSlice.actions;

export default productSlice.reducer;
