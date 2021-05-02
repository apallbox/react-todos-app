import { Todo, TodoStatus } from './entities';
import { TodoInteractor } from './interactors';

function _makeTodo(status: TodoStatus): Todo {
  return {
    id: 'foo',
    text: 'bar',
    status,
  }
}

test('marks todo new', () => {
  const interactor = new TodoInteractor(_makeTodo(TodoStatus.Done));

  interactor.markNew();

  expect(interactor.todo.status).toBe(TodoStatus.New);
});

test('marks todo done', () => {
  const interactor = new TodoInteractor(_makeTodo(TodoStatus.New));


  interactor.markDone();

  expect(interactor.todo.status).toBe(TodoStatus.Done);
});

test('marks todo cancelled', () => {
  const interactor = new TodoInteractor(_makeTodo(TodoStatus.New));

  interactor.markCancelled();

  expect(interactor.todo.status).toBe(TodoStatus.Cancelled);
});

test('toggles todo status into done', () => {
  const interactor = new TodoInteractor(_makeTodo(TodoStatus.New));

  interactor.toggleDone();

  expect(interactor.todo.status).toBe(TodoStatus.Done);

  interactor.toggleDone();

  expect(interactor.todo.status).toBe(TodoStatus.New);
});

test('toggles todo status into cancelled', () => {
  const interactor = new TodoInteractor(_makeTodo(TodoStatus.New));

  interactor.toggleCancelled();

  expect(interactor.todo.status).toBe(TodoStatus.Cancelled);

  interactor.toggleCancelled();

  expect(interactor.todo.status).toBe(TodoStatus.New);
});

test('confirms if todo status is New', () => {
  expect(TodoInteractor.isNew(_makeTodo(TodoStatus.Done))).toBeFalsy();

  expect(TodoInteractor.isNew(_makeTodo(TodoStatus.New))).toBeTruthy();
});

test('confirms if todo status is Done', () => {
  expect(TodoInteractor.isDone(_makeTodo(TodoStatus.New))).toBeFalsy();

  expect(TodoInteractor.isDone(_makeTodo(TodoStatus.Done))).toBeTruthy();
});

test('confirms if todo status is Cancelled', () => {
  expect(TodoInteractor.isCancelled(_makeTodo(TodoStatus.New))).toBeFalsy();

  expect(TodoInteractor.isCancelled(_makeTodo(TodoStatus.Cancelled))).toBeTruthy();
});
