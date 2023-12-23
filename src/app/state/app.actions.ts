// src/app/store/actions/app.actions.ts

import { createAction, props } from '@ngrx/store';

export const START_LOADING = createAction('[Progress] Start Loading');
export const STOP_LOADING = createAction('[Progress] Stop Loading');
export const SHOW_MODAL = createAction('[Notification] Show Modal');
export const HIDE_MODAL = createAction('[Notification] Hide Modal');
export const SET_NOTIFICATION = createAction('[Notification] Set Notification', props<{ message: string }>());
export const CLEAR_NOTIFICATION = createAction('[Notification] Clear Notification');

