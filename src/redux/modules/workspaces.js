// Need to use the React-specific entry point to import createApi
import { getCookieToken } from '../../Cookie';
import { coreApi } from '../query/coreApi';

const headers = {
  Authorization: getCookieToken(),
};

export const workspaceApi = coreApi.injectEndpoints({
  endpoints: (builder) => ({
    getWorkspaces: builder.query({
      query: () => ({
        url: '/api/workspaces',
        method: 'GET',
        headers,
      }),
      providesTags: ['Workspaces'],
    }),
    addWorkSpaces: builder.mutation({
      query: (workspace) => {
        return {
          url: '/api/workspaces',
          method: 'POST',
          body: workspace,
          headers,
        };
      },
      invalidatesTags: ['Workspaces'],
    }),
    deleteWorkSpaces: builder.mutation({
      query: (id) => {
        return {
          url: `/api/workspaces/${id}`,
          method: 'DELETE',
          body: id,
          headers,
        };
      },
      invalidatesTags: ['Workspaces'],
    }),

    getMainWorkSpaces: builder.query({
      query: (id) => {
        return {
          url: `/api/workspaces/${id}/main`,
          method: 'GET',
          body: id,
          headers,
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
