import './index.css';

import React from 'react';
import { Todo } from '../../models';

interface TodoItemProps {
  todo: Todo;
}

export default function TodoItem(props: TodoItemProps) {
  return (
    <div className="todo-item">
      <div className="todo-item__text">
        {props.todo.text}
      </div>
    </div>
  );
}
