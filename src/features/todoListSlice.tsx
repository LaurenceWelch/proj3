import {createSlice} from '@reduxjs/toolkit';
import {Todo, TodoListState} from '../types';

const initialState: TodoListState = {
  nextId: 1,
  list: [],
};

export const TodoListSlice = createSlice({
  name: 'todoList',
  initialState,
  reducers: {
    add: (state, action) => {
      const newItem: Todo = {id: state.nextId++, ...action.payload};
      console.log('newItem:', newItem);
      console.log('state:', state);
      state.list.push(newItem);
    },
    remove: (state, action) => {
      state.list = state.list.filter(i => {
        return i.id !== action.payload;
      });
    },
    set: (state, action) => {
      console.log('set:', action.payload);
      state.list = action.payload.list;
      state.nextId = action.payload.nextId;
    },
  },
});

export const {add, remove, set} = TodoListSlice.actions;
export default TodoListSlice.reducer;
