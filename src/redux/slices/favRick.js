import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

const favRick = createSlice({
  name: 'favRick',
  initialState,
  reducers: {
    addFav(state, action) {
      return [...state, action.payload];
    },
    deleteFavRick(state, action) {
      return state.filter((el) => el.id !== action.payload);
    },
  },
});

export const { addFav, deleteFavRick } = favRick.actions;
export default favRick.reducer;
