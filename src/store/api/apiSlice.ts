import {
  BaseQueryFn,
  createApi,
  fetchBaseQuery,
} from '@reduxjs/toolkit/query/react';
import { ResponseLogin } from '@/types/LoginType';
import type { RootState } from '../store';
import { logout, setCredentials } from '../auth/auth.slice';

const baseQuery = fetchBaseQuery({
  baseUrl: 'https://uhanuu.site',
  credentials: 'include',
  prepareHeaders: (headers, { getState }) => {
    const { token } = (getState() as RootState).auth;

    if (token) {
      headers.set('authorization', `Bearer ${token}`);
    }

    return headers;
  },
});

const baseQueryWithReauth: BaseQueryFn = async (arg, api, extraOption) => {
  let result = await baseQuery(arg, api, extraOption);

  if (result?.error && result?.error?.status === 403) {
    const refreshResult = await baseQuery(
      '/auth/reissue-token',
      api,
      extraOption,
    );

    if (refreshResult.data) {
      const { user } = (api.getState() as RootState).auth;
      const token = (refreshResult.data as ResponseLogin).accessToken;

      api.dispatch(setCredentials({ token, user }));
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
  endpoints: () => ({}),
});
