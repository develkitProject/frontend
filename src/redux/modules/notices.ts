import { getCookieToken } from '../../Cookie';
import { coreApi } from '../query/coreApi';

const headers = {
  Authorization: getCookieToken(),
};

export const noticesApi = coreApi.injectEndpoints({
  endpoints: (builder) => ({
    // 공지사항
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
    getNextNotice: builder.mutation({
      query: (obj) => {
        return {
          url: `/api/workspaces/${obj.id}/notice?cursorId=${obj.cursorId}`,
          method: 'GET',
          headers,
        };
      },
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

    // 프로젝트 가입 회원 조회
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
  }),
});

export const {
  useAddNoticeMutation,
  useGetNoticeQuery,
  useUpdateNoticeMutation,
  useDeleteNoticeMutation,
  useGetNextNoticeMutation,
} = noticesApi;
