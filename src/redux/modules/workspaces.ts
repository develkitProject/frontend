import { getCookieToken } from '../../Cookie';
import { coreApi } from '../query/coreApi';
import { Workspaces, Notices } from '../../types/workspaces.types';

const headers = {
  Authorization: getCookieToken(),
};

interface UpdateInfo {
  id: number;
  image: string | ArrayBuffer | null;
  title: string;
  content: string;
}

export const workspaceApi = coreApi.injectEndpoints({
  endpoints: (builder) => ({
    // 워크스페이스
    getWorkspaces: builder.query({
      query: () => ({
        url: '/api/workspaces',
        method: 'GET',
        headers,
      }),
      providesTags: ['Workspaces'],
    }),

    addWorkspaceCode: builder.mutation({
      query: (codes) => {
        return {
          url: '/api/invitation/codes',
          method: 'POST',
          body: codes,
          headers,
        };
      },
      invalidatesTags: ['Workspaces'],
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
      query: (updateInfo: UpdateInfo) => {
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
    }),
    // 프로젝트 가입 회원 조회
    getMemberList: builder.query({
      query: (id) => {
        return {
          url: `/api/workspaces/${id}`,
          method: 'GET',
          headers,
        };
      },
      providesTags: ['Workspaces'],
    }),

    getNextMember: builder.mutation({
      query: (updateMember) => {
        return {
          url: `/api/workspaces/${updateMember.id}?cursorId=${updateMember.cursorId}`,
          method: 'GET',
          headers,
        };
      },
    }),

    getWorkSpacesJoin: builder.mutation({
      query: (id) => {
        return {
          url: `/api/workspaces/join/${id}`,
          method: 'POST',
          headers,
        };
      },
    }),
    // 초대코드
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
  }),
});

export const {
  useGetWorkspacesQuery,
  useAddWorkSpacesMutation,
  useAddWorkspaceCodeMutation,
  useGetWorkspaceInfoQuery,
  useUpdateWorkspaceInfoMutation,
  useDeleteWorkSpacesMutation,
  useQuitWorkSpaceMutation,
  useGetMainWorkSpacesQuery,
  useGetMemberListQuery,
  useGetInviteCodeQuery,
  useGetInviteCodeInfoMutation,
  useGetWorkSpacesJoinMutation,
  useGetNextMemberMutation,
} = workspaceApi;
