import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const coreApi = createApi({
    baseQuery: fetchBaseQuery({ baseUrl: process.env.BASE_URL }),
    endpoints: () => ({}),
})