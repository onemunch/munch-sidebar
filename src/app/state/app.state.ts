
export interface AppState {
  isLoading: boolean;
  isModalVisible: boolean;  
  notificationMessage: string | null;
}

export const initialState: AppState = {
  isLoading: false,
  isModalVisible: false,
  notificationMessage: null,
};
