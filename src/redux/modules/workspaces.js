// Need to use the React-specific entry point to import createApi
import { getCookieToken } from '../../Cookie';
import { coreApi } from '../query/coreApi';

const headers = {
  Authorization: getCookieToken(),
};

export const workspaceApi = coreApi.injectEndpoints({
  endpoints: (builder) => ({
    getUserInfo: builder.query({
      query: () => {
        return {
          url: `/api/members/profile`,
          method: 'GET',
          headers,
        };
      },
      providesTags: ['User'],
    }),
    //회원정보수정
    updateUserInfo: builder.mutation({
      query: (updateInfo) => {
        return {
          url: `/api/members/profile`,
          method: 'PUT',
          body: updateInfo,
          headers,
        };
      },
      invalidatesTags: ['User'],
    }),

    //회원정보탈퇴
    deleteUserInfo: builder.mutation({
      query: () => {
        return {
          url: `/api/members/signout`,
          method: 'DELETE',
          headers,
        };
      },
      invalidatesTags: ['User'],
    }),

    //워크스페이스
    getWorkspaces: builder.query({
      query: () => ({
        url: '/api/workspaces',
        method: 'GET',
        headers,
      }),
      providesTags: ['Workspaces'],
    }),

    getWorkspaceInfo: builder.query({
      query: (id) => ({
        url: `/api/workspaces/${id}/info`,
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

    updateWorkspaceInfo: builder.mutation({
      query: (updateInfo) => {
        return {
          url: `/api/workspaces/${updateInfo.id}`,
          method: 'PUT',
          body: updateInfo,
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
          headers,
        };
      },
      invalidatesTags: ['Workspaces'],
    }),

    quitWorkSpace: builder.mutation({
      query: (id) => {
        return {
          url: `/api/workspaces/quit/${id}`,
          method: 'DELETE',
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

    updateNotice: builder.mutation({
      query: (notice) => {
        return {
          url: `/api/workspaces/${notice.id}/notice/${notice.stateId}`,
          method: 'PUT',
          body: notice,
          headers,
        };
      },
      invalidatesTags: ['Notice'],
    }),

    deleteNotice: builder.mutation({
      query: (data) => {
        return {
          url: `/api/workspaces/${data.id}/notice/${data.dataId}`,
          method: 'DELETE',
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
      providesTags: ['Docs'],
    }),

    addDoc: builder.mutation({
      query: (formData) => {
        return {
          url: `/api/workspaces/${formData.get('id')}/docs`,
          method: 'POST',
          body: formData,
          headers: {
            Authorization: getCookieToken(),
          },
        };
      },
      invalidatesTags: ['Docs'],
    }),

    updateDoc: builder.mutation({
      query: (formData) => {
        console.log(formData);
        return {
          url: `/api/workspaces/${formData.get('id')}/docs/${formData.get(
            'docid'
          )}`,
          method: 'PUT',
          body: formData,
          headers,
        };
      },
      invalidatesTags: ['Docs'],
    }),

    deleteDoc: builder.mutation({
      query: ({ workspaces, docid }) => {
        return {
          url: `/api/workspaces/${workspaces}/docs/${docid}`,
          method: 'DELETE',
          headers,
        };
      },
      invalidatesTags: ['Docs'],
    }),

    getDocSearch: builder.query({
      query: (obj) => {
        return {
          url: `/api/workspaces/${obj?.id}/docs/search?${obj?.field}=${obj?.keyword}&type=${obj?.type}`,
          method: 'GET',
          headers,
        };
      },
      providesTags: ['Docs'],
    }),

    //초대코드
    getInviteCode: builder.query({
      query: (id) => {
        return {
          url: `/api/invitation/${id}`,
          method: 'GET',
          headers,
        };
      },
      providesTags: ['InviteCode'],
    }),
    getInviteCodeInfo: builder.mutation({
      query: (code) => {
        return {
          url: `/api/invitation/codes`,
          method: 'POST',
          body: code,
          headers,
        };
      },
      invalidatesTags: ['InviteCode'],
    }),
    getSchedules: builder.query({
      query: (id) => {
        return {
          url: `/api/workspaces/${id}/schedules`,
          method: 'GET',
          headers,
        };
      },
      providesTags: ['Schedules'],
    }),
    addSchedules: builder.mutation({
      query: (workspace) => {
        return {
          url: `/api/workspaces/${workspace.id}/schedules`,
          method: 'POST',
          body: workspace,
          headers,
        };
      },
      invalidatesTags: ['Schedules'],
    }),
    deleteSchedules: builder.mutation({
      query: (workspace) => {
        return {
          url: `/api/workspaces/${workspace.id}/schedules/${workspace.schedulesId}`,
          method: 'DELETE',
          body: workspace,
          headers,
        };
      },
      invalidatesTags: ['Schedules'],
    }),
    getChatMessages: builder.query({
      query: (id) => {
        return {
          url: `/api/chats/${id}`,
          method: 'POST',
          headers,
        };
      },
      providesTags: ['Messages'],
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {
  useGetUserInfoQuery,
  useUpdateUserInfoMutation,
  useDeleteUserInfoMutation,
  useGetWorkspacesQuery,
  useAddWorkSpacesMutation,
  useGetWorkspaceInfoQuery,
  useUpdateWorkspaceInfoMutation,
  useDeleteWorkSpacesMutation,
  useQuitWorkSpaceMutation,
  useGetMainWorkSpacesQuery,
  useAddNoticeMutation,
  useGetNoticeQuery,
  useUpdateNoticeMutation,
  useDeleteNoticeMutation,
  useGetMemberListQuery,
  useGetDocQuery,
  useGetDocDetailQuery,
  useAddDocMutation,
  useDeleteDocMutation,
  useGetDocSearchQuery,
  useGetInviteCodeQuery,
  useGetInviteCodeInfoMutation,
  useGetSchedulesQuery,
  useAddSchedulesMutation,
  useUpdateDocMutation,
  useGetChatMessagesQuery,
  useDeleteSchedulesMutation,
} = workspaceApi;
