// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { getCookieToken } from '../../Cookie';

const header = {
  Authorization: getCookieToken(),
};
// Define a service using a base URL and expected endpoints
export const workspaceApi = createApi({
  reducerPath: 'workspaceApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://hosung.shop/api/' }),
  tagTypes: ['Workspace'],
  endpoints: (builder) => ({
    getWorkspaces: builder.query({
      query: () => {
        return {
          url: 'workspaces',
          method: 'GET',
          headers: { Authorization: getCookieToken() },
        };
      },
    }),
    // addWork
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetWorkspacesQuery } = workspaceApi;
