/* eslint-disable import/no-extraneous-dependencies */
import { createSelector } from 'reselect';

export const selectIsLoginModal = createSelector(
  (state) => state.global.isLoginModal,
  (v) => v,
);

export const selectIsSignUpModal = createSelector(
  (state) => state.global.isSignUpModal,
  (v) => v,
);
