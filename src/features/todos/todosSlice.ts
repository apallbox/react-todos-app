import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { Todo } from './entities';

const initialState: Todo[] = [];

const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    todoAdded(state, action: PayloadAction<Todo>) {
      state.push(action.payload)
    },
    todoUpdated(state, action: PayloadAction<Todo>) {
      const { id, text, status } = action.payload;
      const existingTodo = state.find((todo) => todo.id === id);
      if (existingTodo) {
        existingTodo.text = text;
        existingTodo.status = status;
      }
    },
  },
});

export const { todoAdded, todoUpdated } = todosSlice.actions;

export default todosSlice.reducer;
