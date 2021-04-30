import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Todo, TodoStatus } from './models';

const initialState: Todo[] = [
  {
    id: '1',
    text: 'First Todo!',
    status: TodoStatus.None,
  },
  {
    id: '2',
    text: 'Second Todo!',
    status: TodoStatus.Done,
  },
  {
    id: '3',
    text: 'Third Todo!',
    status: TodoStatus.Cancelled,
  },
];

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
