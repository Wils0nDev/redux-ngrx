import { createAction } from '@ngrx/store';

export const increment = createAction('[Counter] Increment');
export const decrement = createAction('[Counter] Decrement');
export const multiply = createAction('[Counter] Multiply');
export const divide = createAction('[Counter] Divide');