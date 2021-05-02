import './index.css';

import React, { ChangeEvent, MouseEvent } from 'react';
import { useDispatch } from 'react-redux';
import { Todo, TodoStatus } from '../../entities';
import { todoMarkedCancelled, todoRemoved, todoToggledDone, todoUpdated } from '../../todosSlice';
import { TodoInteractor } from '../../interactors';

interface TodoItemProps {
  todo: Todo;
}

export default function TodoItem(props: TodoItemProps) {
  const todoInteractor = new TodoInteractor(props.todo);

  const dispatch = useDispatch();

  const onStatusChanged = (event: ChangeEvent<HTMLInputElement>) => {
    dispatch(todoToggledDone(props.todo.id));
  };

  const onRemoveClicked = (event: MouseEvent) => {
    if (!confirm(`Item "${props.todo.text}" will be removed. Are you sure?`)) {
      return;
    }
    dispatch(todoRemoved(props.todo.id));
  };

  const onCancelClicked = (event: MouseEvent) => {
    dispatch(todoMarkedCancelled(props.todo.id));
  };

  return (
    <div className="todo-item">
      <div className="todo-item__status">
        <input
          id={props.todo.id}
          type="checkbox"
          checked={todoInteractor.isDone}
          onChange={onStatusChanged}
        />
      </div>
      <div className="todo-item__text">
        <label htmlFor={props.todo.id}>
          {props.todo.text}
        </label>
      </div>
      <ul className="todo-item__actions">
        <li className="todo-item__action">
          <button onClick={onCancelClicked}>Cancel</button>
        </li>
        <li className="todo-item__action">
          <button onClick={onRemoveClicked}>Remove</button>
        </li>
      </ul>
    </div>
  );
}
