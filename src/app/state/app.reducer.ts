import { createReducer, on } from '@ngrx/store';

import { initialState } from './app.state';
import * as appActions from './app.actions';

export const appReducer = createReducer(
  initialState,

  on(appActions.START_LOADING, (state) => {
    return { ...state, isLoading: true };
  }),

  on(appActions.STOP_LOADING, (state) => {
    return { ...state, isLoading: false };
  }),

  on(appActions.SHOW_MODAL, (state) => {
    return { ...state, isModalVisible: true };
  }),

  on(appActions.HIDE_MODAL, (state) => {
    return { ...state, isModalVisible: false };
  }),

  on(appActions.SET_NOTIFICATION, (state, { message }) => {
    return { ...state, notificationMessage: message };
  }),

  on(appActions.CLEAR_NOTIFICATION, (state) => {
    return { ...state, notificationMessage: null };
  })

);

