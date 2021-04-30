import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Todo, TodoStatus } from './models';

const initialState: Todo[] = [
  {
    id: '1',
    text: 'First Todo!',
    checked: TodoStatus.None,
  },
  {
    id: '2',
    text: 'Second Todo!',
    checked: TodoStatus.Done,
  },
  {
    id: '3',
    text: 'Third Todo!',
    checked: TodoStatus.Cancelled,
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
      const { id, text, checked } = action.payload;
      const existingTodo = state.find((todo) => todo.id === id);
      if (existingTodo) {
        existingTodo.text = text;
        existingTodo.checked = checked;
      }
    },
  },
});

export const { todoAdded, todoUpdated } = todosSlice.actions;

export default todosSlice.reducer;
