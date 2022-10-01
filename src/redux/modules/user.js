import { getCookieToken } from '../../Cookie';
import { coreApi } from '../query/coreApi';

const headers = {
  Authorization: getCookieToken(),
};

export const userApi = coreApi.injectEndpoints({
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
    // 회원정보수정
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

    // 회원정보탈퇴
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
  }),
});

export const {
  useGetUserInfoQuery,
  useUpdateUserInfoMutation,
  useDeleteUserInfoMutation,
} = userApi;
