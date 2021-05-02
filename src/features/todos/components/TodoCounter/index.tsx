import './index.css';

import React from 'react'
import { useSelector } from 'react-redux';
import { RootState } from '../../../../app/store';
import { TodoStatus } from '../../entities';

export default function TodoCounter() {
  const activeTodos = useSelector((state: RootState) => state.todos.filter((todo) => todo.status === TodoStatus.New));
  const existingTodos = useSelector((state: RootState) => state.todos.filter((todo) => todo.status !== TodoStatus.Cancelled));

  return (
    <div className="todo-counter">
      Todos active: {activeTodos.length} / {existingTodos.length};
    </div>
  );
}
