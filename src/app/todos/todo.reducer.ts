import { Action, createReducer, on } from '@ngrx/store';
import { Todo } from './models/todo.model';
import {
  create,
  edit,
  toggle,
  toggleAll,
  remove,
  removeCompleted,
} from './todo.actions';

export const initialState: Todo[] = [
  new Todo('Salvar el mundo'),
  new Todo('Juntar las esferas del Dragon'),
  new Todo('Revivir a Maradona'),
];

const _todoReducer = createReducer(
  initialState,
  on(create, (state, { text }) => [...state, new Todo(text)]),

  on(remove, (state, { id }) => state.filter((element) => element.id !== id)),

  on(removeCompleted, (state) => state.filter((element) => !element.complete)),

  on(edit, (state, { id, text }) => {
    return state.map((element) => {
      if (element.id === id) {
        return {
          ...element,
          text: text,
        };
      } else {
        return element;
      }
    });
  }),

  on(toggle, (state, { id }) => {
    return state.map((element) => {
      if (element.id === id) {
        return {
          ...element,
          complete: !element.complete,
        };
      } else {
        return element;
      }
    });
  }),

  on(toggleAll, (state, { completed }) => {
    return state.map((element) => {
      return {
        ...element,
        complete: completed,
      };
    });
  })
);

export function todoReducer(state: Todo[] | undefined, action: Action) {
  return _todoReducer(state, action);
}
