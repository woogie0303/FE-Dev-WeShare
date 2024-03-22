import {
  EmailInput,
  LoginForm,
  OauthLogin,
  ResponseLogin,
} from '@/types/LoginType';
import { apiSlice } from '../api/apiSlice';

const authApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    signIn: builder.mutation<ResponseLogin, LoginForm | OauthLogin>({
      query: (credential) => ({
        url: '/api/v1/auth/signin',
        method: 'POST',
        body: { ...credential },
      }),
    }),
    signUp: builder.mutation<void, LoginForm>({
      query: (credential) => ({
        url: '/api/v1/auth/signup',
        method: 'POST',
        body: { ...credential },
      }),
    }),
    checkEmail: builder.query<void, EmailInput>({
      query: (credential) => ({
        url: `/api/v1/auth/signup/duplicate-email?email=${credential.emailInput}`,
      }),
    }),
    reissueToken: builder.query<string, void>({
      query: () => ({
        url: '/api/v1/auth/reissue-token',
      }),
    }),
  }),
});

export const {
  useSignInMutation,
  useSignUpMutation,
  useLazyCheckEmailQuery,
  useLazyReissueTokenQuery,
} = authApiSlice;
