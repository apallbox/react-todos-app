import './index.css';

import React from 'react'
import { useSelector } from 'react-redux';
import { RootState } from '../../../../app/store';
import { TodoInteractor } from '../../interactors';

export interface TodoCounterProps {
  /**
   * Counter label text
   */
  label: string;
}

/**
 * Remaining todos counter
 */
export function TodoCounter(props: TodoCounterProps) {
  // Todo items marked done
  const doneTodos = useSelector((state: RootState) => state.todos.filter((todo) => TodoInteractor.isDone(todo)));
  // Todo items excluding cancelled
  const existingTodos = useSelector((state: RootState) => state.todos.filter((todo) => !TodoInteractor.isCancelled(todo)));

  return (
    <div className="todo-counter">
      {props.label}: {existingTodos.length - doneTodos.length} / {existingTodos.length};
    </div>
  );
}
