import {createSlice} from '@reduxjs/toolkit';
import {LikeSliceType} from './types';

const likeState: LikeSliceType = {
  likeProducts: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState: likeState,

  reducers: {
    like_dislike: (state, action) => {
      const temp = state.likeProducts.find(
        data => data.id === action.payload.id,
      );
      if (temp) {
        console.log('here', temp);
        state.likeProducts = state.likeProducts.filter(
          data => data.id === temp.id,
        );
      } else {
        console.log('there', action.payload);
        state.likeProducts = [...state.likeProducts, action.payload];
      }
    },
  },
});

export const {like_dislike} = cartSlice.actions;

export default cartSlice.reducer;
