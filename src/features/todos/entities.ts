import { nanoid } from '@reduxjs/toolkit';

export enum TodoStatus {
  None,
  Done,
  Cancelled,
}

export interface Todo {
  id: string;
  status: TodoStatus;
  text: string;
}
