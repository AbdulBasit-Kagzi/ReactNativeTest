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
        console.log('here', state.category);
        tempProduct = tempProduct.filter(
          data =>
            data.category.toLowerCase().startsWith(state.category) ||
            data.category.toLowerCase().includes(state.category) ||
            data.title.toLowerCase().startsWith(state.category) ||
            data.title.toLowerCase().includes(state.category),
        );
      }
      if (state.price.length > 0) {
        console.log('price');
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
      console.log('temp', tempProduct);
      state.filterProducts = [...tempProduct];
    },
    // getCategory: (state, action) => {
    //   console.log('ac', action.payload);
    //   state.filterProducts = [...state.Products].filter(
    //     data =>
    //       data.category.startsWith(action.payload) ||
    //       data.category.includes(action.payload),
    //   );
    //   if (state.filterProducts.length === 0)
    //     state.filterProducts = [...state.Products];
    // },
  },
  extraReducers: function (builder) {
    // get all products
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

export const {sheet, productFilter, setcategory, setprice, setrating} =
  productSlice.actions;

export default productSlice.reducer;
