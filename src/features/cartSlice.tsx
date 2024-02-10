import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  list: 0,
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    add: (state, action) => {
      // something
    },
  },
});

export const {add} = cartSlice.actions;
export default cartSlice.reducer;
