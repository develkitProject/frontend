import { coreApi } from '../coreApi';

export const accountApi = coreApi.injectEndpoints({
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
    getLogin: builder.mutation({
      query: ({ username, password }) => ({
        url: '/api/members/login',
        method: 'POST',
        body: {
          username,
          password,
        },
      }),
    }),
  }),
});

export const {
  useGetEmailCheckMutation,
  useGetSignUpMutation,
  useGetLoginMutation,
} = accountApi;
