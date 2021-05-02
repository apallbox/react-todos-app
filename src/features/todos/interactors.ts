import { Todo, TodoStatus } from './entities';

export class TodoInteractor<T extends Todo> {
  constructor(public todo: T) {}

  markNew() {
    this.todo.status = TodoStatus.New;
  }

  markDone() {
    this.todo.status = TodoStatus.Done;
  }

  markCancelled() {
    this.todo.status = TodoStatus.Cancelled;
  }

  toggleDone() {
    this.isDone ? this.markNew() : this.markDone();
  }

  toggleCancelled() {
    this.isCancelled ? this.markNew() : this.markCancelled();
  }

  get isNew() {
    return this.todo.status === TodoStatus.New;
  }

  get isDone() {
    return this.todo.status === TodoStatus.Done;
  }

  get isCancelled() {
    return this.todo.status === TodoStatus.Cancelled;
  }
}
