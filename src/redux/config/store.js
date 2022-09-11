import { configureStore } from '@reduxjs/toolkit';

import user from '../modules/user';
import { coreApi } from '../query/coreApi';
import { workspaceApi } from '../modules/workspaces';
import { chatApi } from '../modules/chat';
import global from '../modules/global';

const store = configureStore({
  reducer: {
    user,
    [workspaceApi.reducerPath]: workspaceApi.reducer,
    [chatApi.reducerPath]: chatApi.reducer,
    global: global,
  },
  middleware: (getDefaultMiddleware) => [
    ...getDefaultMiddleware(),
    coreApi.middleware,
  ],
});

export default store;
