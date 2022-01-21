import { createAction, props } from '@ngrx/store';

export const setFilter = createAction(
  '[Filter] Set filter',
  props<{ filter: string }>()
);
