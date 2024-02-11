import {createSlice} from '@reduxjs/toolkit';
import {CartState} from '../types';
import {PRODUCTS} from '../consts';

const initialState: CartState = {
  list: [
    {id: 1, title: 'ipad', price: 400, linePrice: 400, quantity: 1},
    {id: 2, title: 'macbook', price: 1200, linePrice: 2400, quantity: 2},
    {id: 3, title: 'iphone', price: 800, linePrice: 3200, quantity: 4},
  ],
  totalPrice: 6000,
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    add: (state, action) => {
      const pi = PRODUCTS.findIndex(data => data.id === action.payload);
      const ci = state.list.findIndex(data => data.id === action.payload);
      if (pi !== -1) {
        // if not in cart
        if (ci === -1) {
          state.list.push(PRODUCTS[pi]);
          state.totalPrice += PRODUCTS[pi].price;
        }
        // if in cart
        else {
          const ref = state.list[ci];
          ref.quantity++;
          ref.linePrice += ref.price;
          state.totalPrice += ref.price;
        }
      }
    },
    removeOne: (state, action) => {
      const ci = state.list.findIndex(data => data.id === action.payload);
      // if id is in cart
      if (ci !== -1) {
        const ref = state.list[ci];
        state.totalPrice -= ref.price;
        ref.linePrice -= ref.price;
        ref.quantity -= 1;
        // removed last item
        if (ref.quantity === 0) {
          state.list.splice(ci, 1);
        }
      }
    },
    removeAll: (state, action) => {
      const ci = state.list.findIndex(data => data.id === action.payload);
      // if id is in cart
      if (ci !== -1) {
        const ref = state.list[ci];
        state.totalPrice -= ref.linePrice;
        state.list.splice(ci, 1);
      }
    },
    clear: state => {
      state.list = [];
      state.totalPrice = 0;
    },
  },
});

export const {add, removeOne, removeAll, clear} = cartSlice.actions;
export default cartSlice.reducer;
