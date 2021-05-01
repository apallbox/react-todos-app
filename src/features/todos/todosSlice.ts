import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { Todo } from './entities';
import { TodoInteractor } from './interactors';

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

      if (!existingTodo) { return; }

      existingTodo.text = text;
      existingTodo.status = status;
    },
    todoRemoved(state, action: PayloadAction<string>) {
      const id = action.payload;
      const existingTodoIndex = state.findIndex((todo) => todo.id === id);

      if (existingTodoIndex < 0) { return; }

      state.splice(existingTodoIndex, 1);
    },
    todoMarkedNew(state, action: PayloadAction<string>) {
      const id = action.payload;
      const existingTodo = state.find((todo) => todo.id === id);

      if (!existingTodo) { return; }

      const interactor = new TodoInteractor(existingTodo);
      interactor.markNew();
    },
    todoMarkedDone(state, action: PayloadAction<string>) {
      const id = action.payload;
      const existingTodo = state.find((todo) => todo.id === id);

      if (!existingTodo) { return; }

      const interactor = new TodoInteractor(existingTodo);
      interactor.markDone();
    },
    todoMarkedCancelled(state, action: PayloadAction<string>) {
      const id = action.payload;
      const existingTodo = state.find((todo) => todo.id === id);

      if (!existingTodo) { return; }

      const interactor = new TodoInteractor(existingTodo);
      interactor.markCancelled();
    },
    todoToggledDone(state, action: PayloadAction<string>) {
      const id = action.payload;
      const existingTodo = state.find((todo) => todo.id === id);

      if (!existingTodo) { return; }

      const interactor = new TodoInteractor(existingTodo);
      interactor.toggleDone();
    },
  },
});

export const {
  todoAdded,
  todoUpdated,
  todoRemoved,
  todoMarkedNew,
  todoMarkedDone,
  todoMarkedCancelled,
  todoToggledDone,
} = todosSlice.actions;

export default todosSlice.reducer;
