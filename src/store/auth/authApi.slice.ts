import {
  LoginFormType,
  AuthStateType,
  ChangePasswordType,
} from '@/types/LoginType';
import { apiSlice } from '../api/apiSlice';

type DoubleCheck = {
  type: string;
  inputValue: string;
};

const authApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    signIn: builder.mutation<AuthStateType, LoginFormType>({
      query: (credential) => ({
        url: '/api/v1/auth/signin',
        method: 'POST',
        body: { ...credential },
      }),
    }),
    signUp: builder.mutation<void, LoginFormType>({
      query: (credential) => ({
        url: '/api/v1/auth/signup',
        method: 'POST',
        body: { ...credential },
      }),
    }),
    checkEmail: builder.query<void, DoubleCheck>({
      query: (credential) => ({
        url: `/api/v1/auth/signup/duplicate-${credential.type}?${credential.type}=${credential.inputValue}`,
      }),
    }),
    reissueToken: builder.query<string, void>({
      query: () => ({
        url: '/api/v1/auth/reissue-token',
      }),
    }),
    changePassword: builder.mutation<void, ChangePasswordType>({
      query: (credential) => ({
        url: '/api/v1/me/password',
        method: 'PATCH',
        body: { ...credential },
      }),
    }),
    withdrawUser: builder.mutation({
      query: () => ({
        url: '/api/v1/me',
        method: 'DELETE',
      }),
    }),
  }),
});

export const {
  useSignInMutation,
  useSignUpMutation,
  useLazyCheckEmailQuery,
  useLazyReissueTokenQuery,
  useChangePasswordMutation,
  useWithdrawUserMutation,
} = authApiSlice;
