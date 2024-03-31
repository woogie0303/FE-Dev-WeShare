import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { AuthStateType } from '@/types/LoginType';
import type { RootState } from '../store';

const initialState: AuthStateType = {
  user: undefined,
  accessToken: undefined,
};
const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setCredentials: (state, action: PayloadAction<AuthStateType>) => {
      const { user, accessToken } = action.payload;

      state.user = user;
      state.accessToken = accessToken;
    },
    logout: (state) => {
      if (state.user && state.accessToken) {
        state.user = undefined;
        state.accessToken = undefined;
      }
    },
  },
});

export const { setCredentials, logout } = authSlice.actions;
export const selectUser = (state: RootState) => state.auth.user;
export const selectToken = (state: RootState) => state.auth.accessToken;

export default authSlice.reducer;
