import { AppState } from './app.state';
import { createSelector, createFeatureSelector } from '@ngrx/store';
export const selectAppState = createFeatureSelector<AppState>('app');

export const selectIsLoading = createSelector(
  selectAppState,
  (state) => state.isLoading
);

export const selectIsModalVisible = createSelector(
  selectAppState,
  (state) => state.isModalVisible
);

export const selectNotificationMessage = createSelector(
  selectAppState,
  (state) => state.notificationMessage
);

