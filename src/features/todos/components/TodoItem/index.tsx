import './index.css';

import React, { MouseEvent } from 'react';
import { useDispatch } from 'react-redux';
import { Todo, TodoStatus } from '../../models';
import { todoUpdated } from '../../todosSlice';

interface TodoItemProps {
  todo: Todo;
}

export default function TodoItem(props: TodoItemProps) {
  const dispatch = useDispatch();

  const onStatusClicked = (event: MouseEvent) => {
    const todo = {
      id: props.todo.id,
      text: props.todo.text,
      status: props.todo.status === TodoStatus.Done
        ? TodoStatus.None
        : TodoStatus.Done,
    };
    dispatch(todoUpdated(todo));
  };

  return (
    <div className="todo-item">
      <div className="todo-item__status">
        <input
          type="checkbox"
          checked={props.todo.status === TodoStatus.Done}
          onClick={onStatusClicked}
        />
      </div>
      <div className="todo-item__text">
        {props.todo.text}
      </div>
    </div>
  );
}
