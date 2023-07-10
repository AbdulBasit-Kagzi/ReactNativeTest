import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {CartSliceType} from './types';

const cartState: CartSliceType = {
  cartProducts: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState: cartState,

  reducers: {
    addToCart: (state, action) => {
      state.cartProducts = [...state.cartProducts, action.payload];
    },
  },
});

export const {addToCart} = cartSlice.actions;

export default cartSlice.reducer;
