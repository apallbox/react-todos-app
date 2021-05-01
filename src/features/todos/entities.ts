export enum TodoStatus {
  New,
  Done,
  Cancelled,
}

export interface Todo {
  id: string;
  status: TodoStatus;
  text: string;
}
