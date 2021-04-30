import './index.css';

import React from 'react';
import { hot } from 'react-hot-loader/root';

import { TodosList } from '../../features/todos/components/TodoList';

function App() {
  return (
    <div className="app">
      <div className="app__wrapper">
        <header className="app__header">
          Todos
        </header>
        <main className="app__main">
          <TodosList />
        </main>
        <footer className="app__footer">

        </footer>
      </div>
    </div>
  );
}

export default hot(App);
