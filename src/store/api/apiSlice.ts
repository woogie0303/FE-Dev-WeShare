import {
  BaseQueryFn,
  createApi,
  fetchBaseQuery,
} from '@reduxjs/toolkit/query/react';
import { AuthStateType } from '@/types/LoginType';
import type { RootState } from '../store';
import { logout, setCredentials } from '../auth/auth.slice';

const baseQuery = fetchBaseQuery({
  baseUrl: 'https://uhanuu.site',
  credentials: 'include',
  prepareHeaders: (headers, { getState }) => {
    const { accessToken } = (getState() as RootState).auth;

    if (accessToken) {
      headers.set('authorization', `Bearer ${accessToken}`);
    }

    return headers;
  },
});

const baseQueryWithReauth: BaseQueryFn = async (arg, api, extraOption) => {
  let result = await baseQuery(arg, api, extraOption);

  if (result?.error && result?.error?.status === 403) {
    const refreshResult = await baseQuery(
      '/api/v1/auth/reissue-token',
      api,
      extraOption,
    );

    if (refreshResult.data) {
      const { user } = (api.getState() as RootState).auth;
      const { accessToken } = refreshResult.data as AuthStateType;

      api.dispatch(setCredentials({ accessToken, user }));
      result = await baseQuery(arg, api, extraOption);
    } else {
      await baseQuery(
        { url: '/auth/logout', method: 'POST' },
        api,
        extraOption,
      );
      api.dispatch(logout());
    }
  }

  return result;
};

export const apiSlice = createApi({
  baseQuery: baseQueryWithReauth,
  tagTypes: ['TravelComment'],
  endpoints: () => ({}),
});
