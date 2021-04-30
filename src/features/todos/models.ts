export enum TodoStatus {
  None,
  Done,
  Cancelled,
}

export interface Todo {
  id: string;
  checked: TodoStatus;
  text: string;
}
