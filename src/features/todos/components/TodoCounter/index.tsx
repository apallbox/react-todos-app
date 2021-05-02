import './index.css';

import React from 'react'
import { useSelector } from 'react-redux';
import { RootState } from '../../../../app/store';
import { TodoInteractor } from '../../interactors';

export default function TodoCounter() {
  const activeTodos = useSelector((state: RootState) => state.todos.filter((todo) => TodoInteractor.isDone(todo)));
  const existingTodos = useSelector((state: RootState) => state.todos.filter((todo) => !TodoInteractor.isCancelled(todo)));

  return (
    <div className="todo-counter">
      Todos active: {activeTodos.length} / {existingTodos.length};
    </div>
  );
}
