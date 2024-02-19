import { apiSlice } from '../api/apiSlice';

const authApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    signIn: builder.mutation<ResponseLogin, LoginForm | OauthLogin>({
      query: (credential) => ({
        url: '/auth/signin',
        method: 'POST',
        body: { ...credential },
      }),
    }),
    signUp: builder.mutation<void, LoginForm>({
      query: (credential) => ({
        url: '/auth/signup',
        method: 'POST',
        body: { ...credential },
      }),
    }),
    checkEmail: builder.mutation<void, EmailInput>({
      query: (credential) => ({
        url: '/auth/check',
        method: 'POST',
        body: { ...credential },
      }),
    }),
  }),
});

export const { useSignInMutation, useSignUpMutation, useCheckEmailMutation } =
  authApiSlice;
