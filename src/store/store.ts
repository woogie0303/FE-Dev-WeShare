import { configureStore } from '@reduxjs/toolkit';
import { apiSlice } from './api/apiSlice';
import authReducer from './auth/auth.slice';
import travelMapReducer from './Travel/travelMap.slice';
import travelEditReducer from './Travel/travelEdit.slice';

export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    auth: authReducer,
    travelMap: travelMapReducer,
    travelEdit: travelEditReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(apiSlice.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
