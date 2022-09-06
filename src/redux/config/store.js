import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { workspaceApi } from '../modules/workspaces';

import user from '../modules/user';
import { coreApi } from '../query/coreApi';

export const store = configureStore({
  reducer: {
    user,
  },
  middleware: (getDefaultMiddleware) => [
    ...getDefaultMiddleware(),
    coreApi.middleware,
    // workspaceApi.middleware
  ]
});

setupListeners(store.dispatch);
