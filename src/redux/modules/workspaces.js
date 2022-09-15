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
          headers,
        };
      },
      invalidatesTags: ['Workspaces'],
    }),

    //공지사항
    getNotice: builder.query({
      query: (id) => {
        return {
          url: `/api/workspaces/${id}/notice`,
          method: 'GET',
          headers,
        };
      },
      providesTags: ['Notice'],
    }),

    addNotice: builder.mutation({
      query: (notice) => {
        return {
          url: `/api/workspaces/${notice.id}/notice`,
          method: 'POST',
          body: notice,
          headers,
        };
      },
      invalidatesTags: ['Notice'],
    }),

    //프로젝트 가입 회원 조회
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

    //문서
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

    getDocDetail: builder.query({
      query: ({ workspaces, docid }) => {
        return {
          url: `/api/workspaces/${workspaces}/docs/${docid}`,
          method: 'GET',
          headers,
        };
      },
      providesTags: ['DocsDetail'],
    }),

    addDoc: builder.mutation({
      query: (document) => {
        return {
          url: `/api/workspaces/${document.id}/docs`,
          method: 'POST',
          body: document,
          headers,
        };
      },

      invalidatesTags: ['Docs'],
    }),

    getInviteCode: builder.query({
      query: (id) => {
        return {
          url: `/api/invitation/${id}`,
          method: 'GET',
          headers,
        };
      },
      invalidatesTags: ['InviteCode'],
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
  useGetDocDetailQuery,
  useAddDocMutation,
  useGetInviteCodeQuery,
} = workspaceApi;
