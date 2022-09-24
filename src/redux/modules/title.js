import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  title: '',
};

// export const addUserAsync = createAsyncThunk('ADD_USER', async (user) => {
//   const response = await axios.post(
//     'https://hosung.shop/api/members/signup',
//     user
//   );
//   return response.data;
// });

const { actions, reducer } = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: (builder) => {},
});

export default reducer;