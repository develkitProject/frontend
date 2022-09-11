import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isLoginModal: false,
  isSignUpModal: false,
};

const { actions, reducer} = createSlice({
  name: 'user',
  initialState,
  reducers: {
      setIsLoginModal: (state, {payload}) => ({
          ...state,
          isLoginModal: payload,
      }),
      setIsSignUpModal: (state, {payload}) => ({
          ...state,
          isSignUpModal: payload
      })
  },
  extraReducers: {},
});

export const { setIsLoginModal, setIsSignUpModal } = actions;

export default reducer;
