import { coreApi } from '../coreApi';

export const signUpApi = coreApi.injectEndpoints({
  endpoints: (builder) => ({
    getEmailCheck: builder.mutation({
      query: ({ email }) => ({
        url: '/api/members/email',
        method: 'POST',
        body: {
          username: email,
        },
      }),
    }),
    getSignUp: builder.mutation({
      query: (body) => ({
        url: '/api/members/signup',
        method: 'POST',
        body,
      }),
    }),
  }),
});

export const { useGetEmailCheckMutation, useGetSignUpMutation } = signUpApi;
