import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../../../app/store';
import { TodoItem } from '../TodoItem';

export const TodosList = () => {
  const todos = useSelector((state: RootState) => state.todos);

  return (
    <div className="todo-list">
      {todos.map((todo) => (
        <li>
          <TodoItem todo={todo} key={todo.id} />
        </li>
      ))}
    </div>
  );
}
