import { configureStore } from '@reduxjs/toolkit';
import favRick from './slices/favRick';
import rickSlice from './slices/rickSlice';

const store = configureStore({
  reducer: {
    rick: rickSlice,
    favorite: favRick,
  },
});

export default store;
