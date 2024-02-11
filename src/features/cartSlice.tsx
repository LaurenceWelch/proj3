import {createSlice} from '@reduxjs/toolkit';
import {CartState} from '../types';

const initialState: CartState = {
  list: [
    {id: 1, title: 'iphone', price: 400, linePrice: 400, quantity: 1},
    {id: 2, title: 'imac', price: 1200, linePrice: 2400, quantity: 2},
    {id: 3, title: 'iphone', price: 800, linePrice: 3200, quantity: 4},
  ],
  totalPrice: 6000,
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
