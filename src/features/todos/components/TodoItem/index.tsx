import './index.css';

import React, { ChangeEvent } from 'react';
import { useDispatch } from 'react-redux';
import { Todo, TodoStatus } from '../../entities';
import { todoUpdated } from '../../todosSlice';
import { TodoInteractor } from '../../interactors';

interface TodoItemProps {
  todo: Todo;
}

export default function TodoItem(props: TodoItemProps) {
  const todoInteractor = new TodoInteractor(props.todo);

  const dispatch = useDispatch();

  const onStatusChanged = (event: ChangeEvent<HTMLInputElement>) => {
    const todoInteractor = new TodoInteractor({ ...props.todo });
    todoInteractor.toggleDone();
    dispatch(todoUpdated(todoInteractor.todo));
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
    </div>
  );
}
