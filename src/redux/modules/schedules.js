// Need to use the React-specific entry point to import createApi
import { getCookieToken } from '../../Cookie';
import { coreApi } from '../query/coreApi';

const headers = {
  Authorization: getCookieToken(),
};

export const schedulesApi = coreApi.injectEndpoints({
  endpoints: (builder) => ({
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
  }),
});

export const {
  useGetSchedulesQuery,
  useAddSchedulesMutation,
  useDeleteSchedulesMutation,
} = schedulesApi;
