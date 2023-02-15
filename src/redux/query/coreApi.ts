import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const coreApi = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: process.env.REACT_APP_BASE_URL }),
  tagTypes: [
    'Workspaces',
    'InviteCode',
    'Schedules',
    'Messages',
    'Docs',
    'Notice',
    'User',
  ],
  endpoints: () => ({}),
});
