import { configureStore } from '@reduxjs/toolkit';

import user from '../modules/user';
import { coreApi } from '../query/coreApi';

const store = configureStore({
  reducer: {
    user,
  },
  middleware: (getDefaultMiddleware) => [
    ...getDefaultMiddleware(),
    coreApi.middleware,
  ]
});

export default store;
