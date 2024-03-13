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
        url: `/api/v1/auth/signup/duplicate-email?email=${credential}`,
        method: 'GET',
      }),
    }),
  }),
});

export const { useSignInMutation, useSignUpMutation, useCheckEmailQuery } =
  authApiSlice;
