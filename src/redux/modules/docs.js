import { getCookieToken } from '../../Cookie';
import { coreApi } from '../query/coreApi';

const headers = {
  Authorization: getCookieToken(),
};

export const docsApi = coreApi.injectEndpoints({
  endpoints: (builder) => ({
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

    getDocList: builder.mutation({
      query: (list) => {
        return {
          url: `/api/workspaces/${list.id}/docs?cursorId=${list.cursorId}&direction=${list.direction}`,
          method: 'GET',
          headers,
        };
      },
      invalidatesTags: ['Docs'],
    }),

    getDocDetail: builder.query({
      query: ({ workspaces, docid }) => {
        return {
          url: `/api/workspaces/${workspaces}/docs/${docid}`,
          method: 'GET',
          headers,
        };
      },
      invalidatesTags: ['Docs'],
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

    // 이미지추가
    addDocImage: builder.mutation({
      query: (formData) => {
        return {
          url: `/api/images`,
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
        return {
          url: `/api/workspaces/${formData.get('id')}/docs/${formData.get(
            'docid',
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
  }),
});

export const {
  useGetDocQuery,
  useGetDocListMutation,
  useGetDocDetailQuery,
  useAddDocMutation,
  useAddDocImageMutation,
  useDeleteDocMutation,
  useGetDocSearchQuery,
  useUpdateDocMutation,
} = docsApi;
