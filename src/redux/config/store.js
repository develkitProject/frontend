import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { workspaceApi } from '../modules/workspaces';

export const store = configureStore({
  reducer: {
    [workspaceApi.reducerPath]: workspaceApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(workspaceApi.middleware),
});

setupListeners(store.dispatch);
