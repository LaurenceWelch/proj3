import {configureStore} from '@reduxjs/toolkit';
import TodoListReducer from './features/todoListSlice';
import CartReducer from './features/cartSlice';

export const store = configureStore({
  reducer: {
    todoList: TodoListReducer,
    cart: CartReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
