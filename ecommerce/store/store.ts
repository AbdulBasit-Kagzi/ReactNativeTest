import {configureStore} from '@reduxjs/toolkit';
import productSlice from './slices/productSlice';
import cartSlice from './slices/cartSlice';
import likeSlice from './slices/likeSlice';

export const store = configureStore({
  reducer: {
    product: productSlice,
    cart: cartSlice,
    like: likeSlice,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
