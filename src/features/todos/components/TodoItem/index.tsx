import React from 'react';
import { Todo } from '../../models';

interface TodoItemProps {
  todo: Todo;
}

export const TodoItem = (props: TodoItemProps) => {
  return (
    <div className="todo-item">
      {props.todo.text}
    </div>
  );
}
