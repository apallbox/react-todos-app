import { Todo, TodoStatus } from './entities';

export class TodoInteractor<T extends Todo> {
  constructor(public todo: T) {}

  markNone() {
    this.todo.status = TodoStatus.None;
  }

  markDone() {
    this.todo.status = TodoStatus.Done;
  }

  markCancelled() {
    this.todo.status = TodoStatus.Cancelled;
  }

  toggleDone() {
    this.isDone ? this.markNone() : this.markDone();
  }

  get isNone() {
    return this.todo.status === TodoStatus.None;
  }

  get isDone() {
    return this.todo.status === TodoStatus.Done;
  }

  get isCancelled() {
    return this.todo.status === TodoStatus.Cancelled;
  }
}
