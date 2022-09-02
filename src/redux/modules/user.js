import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  username: '',
  password: '',
  nickname: '',
};

export const addUserAsync = createAsyncThunk('ADD_USER', async (user) => {
  const response = await axios.post(
    'http://hosung.shop/api/members/signup',
    user
  );
  return response.data;
});

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: (builder) => {},
});

export default userSlice.reducer;
