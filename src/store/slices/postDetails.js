import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getPostDetails } from '../../services/posts.service';

export const postDetailsSlice = createSlice({
  name: 'postDetails',
  initialState: {
    list: {},
  },
  reducers: {},

  extraReducers: (builder) => {
    builder.addCase(fetchPostDetails.fulfilled, (state, action) => {
      state.list = action.payload;
    });
  },
});

export const fetchPostDetails = createAsyncThunk('posts/fetchPostDetails', async (id) => {
  const postDetails = await getPostDetails(id);
  return postDetails;
});

export default postDetailsSlice.reducer;
