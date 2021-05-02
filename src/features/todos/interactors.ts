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
    TodoInteractor.isDone(this.todo) ? this.markNew() : this.markDone();
  }

  toggleCancelled() {
    TodoInteractor.isCancelled(this.todo) ? this.markNew() : this.markCancelled();
  }

  static isNew<T extends Todo>(todo: T): boolean {
    return todo.status === TodoStatus.New;
  }

  static isDone<T extends Todo>(todo: T): boolean {
    return todo.status === TodoStatus.Done;
  }

  static isCancelled<T extends Todo>(todo: T): boolean {
    return todo.status === TodoStatus.Cancelled;
  }
}
