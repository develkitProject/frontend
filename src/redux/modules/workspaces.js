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
          // body: id,
          headers,
        };
      },
      invalidatesTags: ['Workspaces'],
    }),

    getNotice: builder.query({
      query: (id) => {
        return {
          url: `/api/workspaces/${id}/notice`,
          method: 'GET',
          // body: notice,
          headers,
        };
      },
      providesTags: ['Notice'],
    }),

    addNotice: builder.mutation({
      query:(notice) =>{
        return {
          url: `/api/workspaces/${notice.id}/notice`,
          method: 'POST',
          body: notice,
          headers,
        };
      },
      invalidatesTags: ['Notice'],
    }),

    getMemberList: builder.query({
      query: (id) => {
        return {
          url: `/api/workspaces/${id}`,
          method: 'GET',
          headers,
        };
      },
      providesTags: ['Notice'],
    }),


    getDoc: builder.query({
      query: (id) => {
        return {
          url: `/api/workspaces/${id}/docs`,
          method: 'GET',
          headers,
        };
      },
      providesTags: ['Docs'],
    }),



  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {
  useGetWorkspacesQuery,
  useAddWorkSpacesMutation,
  useDeleteWorkSpacesMutation,
  useGetMainWorkSpacesQuery,
  useAddNoticeMutation,
  useGetNoticeQuery,
  useGetMemberListQuery,
  useGetDocQuery,
} = workspaceApi;


