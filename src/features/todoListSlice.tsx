import {createSlice} from '@reduxjs/toolkit';
import {Todo, TodoListState} from '../types';
import PersistanceHelper from '../helpers/PersistanceHelper';
import {TODO_KEY} from '../consts';

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
      state.list.push(newItem);
      PersistanceHelper.setObject(TODO_KEY, state);
    },
    remove: (state, action) => {
      state.list = state.list.filter(i => {
        return i.id !== action.payload;
      });
      PersistanceHelper.setObject(TODO_KEY, state);
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
