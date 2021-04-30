import './index.css';

import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../../../app/store';
import TodoItem from '../TodoItem';

export default function TodoList() {
  const todos = useSelector((state: RootState) => state.todos);

  return (
    <div className="todo-list">
      {todos.map((todo) => (
        <li className="todo-list__item" key={todo.id}>
          <TodoItem todo={todo} />
        </li>
      ))}
    </div>
  );
}
