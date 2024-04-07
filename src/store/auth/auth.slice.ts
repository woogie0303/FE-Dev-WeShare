import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { AuthStateType } from '@/types/LoginType';
import type { RootState } from '../store';

const initialState: AuthStateType = {
  userName: undefined,
  accessToken: undefined,
};
const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setCredentials: (state, action: PayloadAction<AuthStateType>) => {
      const { userName, accessToken } = action.payload;

      state.userName = userName;
      state.accessToken = accessToken;
    },
    logout: (state) => {
      state.userName = undefined;
      state.accessToken = undefined;
    },
  },
});

export const { setCredentials, logout } = authSlice.actions;
export const selectUserName = (state: RootState) => state.auth.userName;
export const selectToken = (state: RootState) => state.auth.accessToken;

export default authSlice.reducer;
