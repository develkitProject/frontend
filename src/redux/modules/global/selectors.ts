/* eslint-disable import/no-extraneous-dependencies */
import { createSelector } from 'reselect';

export const selectIsLoginModal = createSelector(
  (state: { global: { isLoginModal: any } }) => state.global.isLoginModal,
  (v) => v,
);

export const selectIsSignUpModal = createSelector(
  (state: { global: { isSignUpModal: any } }) => state.global.isSignUpModal,
  (v) => v,
);
