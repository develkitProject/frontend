// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { getCookieToken } from '../../Cookie';
import { coreApi } from '../query/coreApi'

const header = {
  Authorization: getCookieToken(),
};
// Define a service using a base URL and expected endpoints
export const workspaceApi = createApi({
  reducerPath: 'workspaceApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://hosung.shop/api/',
    prepareHeaders: (headers) => {
      headers.set('Authorization', getCookieToken());
      return headers;
    },
  }),
  tagTypes: ['Workspaces'],
  endpoints: (builder) => ({
    getWorkspaces: builder.query({
      query: () => {
        return {
          url: 'workspaces',
        };
      },
      providesTags: ['Workspaces'],
    }),
    addWorkSpaces: builder.mutation({
      query: (workspace) => {
        return {
          url: '/workspaces',
          method: 'POST',
          body: workspace,
        };
      },
      invalidatesTags: ['Workspaces'],
    }),
    deleteWorkSpaces: builder.mutation({
      query: (id) => {
        return {
          url: `/workspaces/${id}`,
          method: 'DELETE',
          body: id,
        };
      },
      invalidatesTags: ['Workspaces'],
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {
  useGetWorkspacesQuery,
  useAddWorkSpacesMutation,
  useDeleteWorkSpacesMutation,
} = workspaceApi;
