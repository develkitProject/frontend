import { getCookieToken } from '../../Cookie';
import { coreApi } from '../query/coreApi';

const headers = {
  Authorization: getCookieToken(),
};

export const chatApi = coreApi.injectEndpoints({
  endpoints: (builder) => ({
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
    nextChatMessages: builder.mutation({
      query: (obj) => {
        return {
          url: `/api/chats/${obj.id}`,
          method: 'POST',
          body: obj,
          headers,
        };
      },
      providesTags: ['Messages'],
    }),
  }),
});

export const { useGetChatMessagesQuery, useNextChatMessagesMutation } = chatApi;
