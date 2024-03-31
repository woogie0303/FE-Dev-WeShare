import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { AuthStateType } from '@/types/LoginType';
import type { RootState } from '../store';

const initialState: AuthStateType = {
  user: undefined,
  token: undefined,
};
const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setCredentials: (state, action: PayloadAction<AuthStateType>) => {
      const { user, token } = action.payload;

      state.user = user;
      state.token = token;
    },
    logout: (state) => {
      if (state.user && state.token) {
        state.user = undefined;
        state.token = undefined;
      }
    },
  },
});

export const { setCredentials, logout } = authSlice.actions;
export const selectUser = (state: RootState) => state.auth.user;
export const selectToken = (state: RootState) => state.auth.token;

export default authSlice.reducer;
