import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = [];

const rickSlice = createSlice({
  name: 'rick',
  initialState,
  reducers: {
    setRick(state, action) {
      return action.payload;
    },
    deleteRick(state, action) {
      return state.filter((el) => el.id !== action.payload);
    },
  },
});

export const { setRick, deleteRick } = rickSlice.actions;
export default rickSlice.reducer;

export const getRick = () => (dispatch) => {
  axios('https://rickandmortyapi.com/api/character/?page=2&name=rick')
    .then((res) => dispatch(setRick(res.data.results)));
};
