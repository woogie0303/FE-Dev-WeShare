import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { AuthState } from '@/types/LoginType';
import type { RootState } from '../store';

const initialState: AuthState = {
  user: null,
  token: null,
};
const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setCredentials: (state, action: PayloadAction<AuthState>) => {
      const { user, token } = action.payload;

      state.user = user;
      state.token = token;
    },
    logout: (state) => {
      state.user = null;
      state.token = null;
    },
  },
});

export const { setCredentials, logout } = authSlice.actions;
export const selectUser = (state: RootState) => state.auth.user;
export const selectToken = (state: RootState) => state.auth.token;

export default authSlice.reducer;
