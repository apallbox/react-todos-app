import './index.css';

import React, { ChangeEvent, MouseEvent } from 'react';
import { useDispatch } from 'react-redux';
import classNames from 'classnames';

import { Todo } from '../../entities';
import { todoRemoved, todoToggledCancelled, todoToggledDone } from '../../todosSlice';
import { TodoInteractor } from '../../interactors';

interface TodoItemProps {
  todo: Todo;
}

export default function TodoItem(props: TodoItemProps) {
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
    dispatch(todoToggledCancelled(props.todo.id));
  };

  return (
    <div className={classNames({
      'todo-item': true,
      'todo-item--cancelled': TodoInteractor.isCancelled(props.todo),
    })}>
      <div className="todo-item__status">
        <input
          id={props.todo.id}
          type="checkbox"
          checked={TodoInteractor.isDone(props.todo)}
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
          <button onClick={onCancelClicked}>{TodoInteractor.isCancelled(props.todo) ? 'Activate' : 'Cancel'}</button>
        </li>
        <li className="todo-item__action">
          <button onClick={onRemoveClicked}>Remove</button>
        </li>
      </ul>
    </div>
  );
}
