import {createSlice} from '@reduxjs/toolkit';
import {CartSliceType} from './types';

const cartState: CartSliceType = {
  cartProducts: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState: cartState,

  reducers: {
    addToCart: (state, action) => {
      const temp = state.cartProducts.find(
        data => data.id === action.payload.id,
      );
      if (temp) {
        return;
      } else {
        state.cartProducts = [...state.cartProducts, action.payload];
      }
    },
  },
});

export const {addToCart} = cartSlice.actions;

export default cartSlice.reducer;
