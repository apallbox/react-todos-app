import './index.css';

import React, { ChangeEvent, MouseEvent, useState } from 'react';
import { useDispatch } from 'react-redux';

import { todoAdded } from '../../todosSlice';

export default function TodoForm() {
  const [text, setText] = useState('');
  const dispatch = useDispatch();

  const onTextChanged = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setText(event.target.value);
  };

  const onSubmitClicked = (event: MouseEvent) => {
    dispatch(todoAdded(text));
    setText('');
  };

  return (
    <form className="todo-form">
      <div className="todo-form__input">
        <textarea
          className="todo-form__text"
          value={text}
          onChange={onTextChanged}
          autoFocus={true}
        >
        </textarea>
      </div>
      <div className="todo-form__submit">
        <input
          type="submit"
          onClick={onSubmitClicked}
          disabled={!Boolean(text)}
          value="Submit"
        />
      </div>
    </form>
  );
}
