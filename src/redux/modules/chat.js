// Need to use the React-specific entry point to import createApi
import { getCookieToken } from '../../Cookie';
import { coreApi } from '../query/coreApi';

const headers = {
  Authorization: getCookieToken(),
};

export const chatApi = coreApi.injectEndpoints({
  endpoints: (builder) => ({
    getChatMessage: builder.query({
      query: (id) => {
        return {
          url: `/api/chats/${id}`,
          method: 'POST',
          headers,
        };
      },
      providesTags: ['ChatMessage'],
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetChatMessageQuery } = chatApi;
