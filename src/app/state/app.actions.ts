// src/app/store/actions/app.actions.ts

import { createAction, props } from '@ngrx/store';

export const startLoading = createAction('[Progress] Start Loading');
export const stopLoading = createAction('[Progress] Stop Loading');
export const showModal = createAction('[Notification] Show Modal');
export const hideModal = createAction('[Notification] Hide Modal');
export const setNotification = createAction('[Notification] Set Notification', props<{ message: string }>());
export const clearNotification = createAction('[Notification] Clear Notification');

