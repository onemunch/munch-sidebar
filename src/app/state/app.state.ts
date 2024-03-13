
export interface AppState {
  isLoading: boolean;
  isModalVisible: boolean;
  notificationMessage: string | null;
  localData: any;
}

export const initialState: AppState = {
  isLoading: false,
  isModalVisible: false,
  notificationMessage: null,
  localData: null
};
