import {createSlice} from '@reduxjs/toolkit';
import {LikeSliceType} from './types';

const likeState: LikeSliceType = {
  likeProducts: [],
};

const likeSlice = createSlice({
  name: 'like',
  initialState: likeState,
  reducers: {
    like_dislike: (state, action) => {
      const temp = state.likeProducts.find(
        data => data.id === action.payload.id,
      );
      if (temp) {
        state.likeProducts = state.likeProducts.filter(
          data => data.id !== temp.id,
        );
      } else {
        state.likeProducts = [...state.likeProducts, action.payload];
      }
    },
  },
});

export const {like_dislike} = likeSlice.actions;

export default likeSlice.reducer;
