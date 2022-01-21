import { ActionReducerMap } from '@ngrx/store';
import { AppState } from './app.state';
import { filterReducer } from './filter/filter.reducer';
import { todoReducer } from './todos/todo.reducer';

export const appReducers: ActionReducerMap<AppState> = {
  todos: todoReducer,
  filter: filterReducer,
};
