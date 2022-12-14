import { configureStore } from '@reduxjs/toolkit';
import { coreApi } from '../query/coreApi';
import { workspaceApi } from '../modules/workspaces';
import global from '../modules/global';

const store = configureStore({
  reducer: {
    [workspaceApi.reducerPath]: workspaceApi.reducer,
    global,
  },
  middleware: (getDefaultMiddleware) => [
    ...getDefaultMiddleware(),
    coreApi.middleware,
  ],
});

export default store;
