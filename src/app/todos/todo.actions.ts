import { createAction, props } from '@ngrx/store';

export const create = createAction(
  '[TODO] create todo',
  props<{ text: string }>()
);

export const toggle = createAction(
  '[TODO] toggle todo',
  props<{ id: number }>()
);

export const edit = createAction(
  '[TODO] edit todo',
  props<{ id: number; text: string }>()
);

export const remove = createAction(
  '[TODO] remove todo',
  props<{ id: number }>()
);

export const toggleAll = createAction(
  '[TODO] remove todo',
  props<{ completed: boolean }>()
);

export const removeCompleted = createAction('[TODO] remove completed todos');
