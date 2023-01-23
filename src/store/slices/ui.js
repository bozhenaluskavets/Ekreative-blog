import { createSlice } from '@reduxjs/toolkit';
import { fetchPostDetails } from './postDetails';
import { fetchPosts } from './posts';

const loaderActions = [fetchPosts, fetchPostDetails];

const uiSlice = createSlice({
  name: 'loader',
  initialState: {
    isLoading: false,
  },
  reducers: {},

  extraReducers: (builder) => {
    loaderActions.forEach((action) => {
      builder.addCase(action.pending, (state) => {
        state.isLoading = true;
      });
      builder.addCase(action.fulfilled, (state) => {
        state.isLoading = false;
      });
    });
  },
});

export default uiSlice.reducer;
