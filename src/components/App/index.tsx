import './index.css';

import React from 'react';
import { hot } from 'react-hot-loader/root';

import { TodoCounter } from '../../features/todos/components/TodoCounter';
import { TodoForm } from '../../features/todos/components/TodoForm';
import { TodoList } from '../../features/todos/components/TodoList';

export function App() {
  return (
    <div className="app">
      <div className="app__wrapper">
        <header className="app__header">
          <div className="app__logo">Todos</div>
        </header>
        <main className="app__main">
          <TodoCounter label="Todos remaining" />
          <TodoList />
          <TodoForm />
        </main>
        <footer className="app__footer">

        </footer>
      </div>
    </div>
  );
}

export default hot(App);
