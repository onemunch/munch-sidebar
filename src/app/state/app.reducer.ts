import { AppState } from './app.state';
import * as appActions from './app.actions';
import { createReducer, on } from '@ngrx/store';

export const initialState: AppState = {
  isLoading: false,
  isModalVisible: false,
  notificationMessage: null,
};

export const appReducer = createReducer(
  initialState,
  on(appActions.startLoading, (state) => {
    return { ...state, isLoading: true };
  }),

  on(appActions.stopLoading, (state) => {
    return { ...state, isLoading: false };
  }),

  on(appActions.showModal, (state) => {
    return { ...state, isModalVisible: true };
  }),

  on(appActions.hideModal, (state) => {
    return { ...state, isModalVisible: false };
  }),

  on(appActions.setNotification, (state, { message }) => {
    return { ...state, notificationMessage: message };
  }),

  on(appActions.clearNotification, (state) => {
    return { ...state, notificationMessage: null };
  })

);

