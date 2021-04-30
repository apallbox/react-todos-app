import React from 'react';
import { hot } from 'react-hot-loader/root';

import { TodosList } from './features/todos/components/TodoList';

function App() {
  return (
    <>
      <h1>
        Todo
      </h1>
      <TodosList />
    </>
  );
}

export default hot(App);
