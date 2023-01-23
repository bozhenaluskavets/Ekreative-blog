import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import {
  createComment,
  deleteComment,
  editComment,
  getComments,
} from '../../services/comments.servise';
import { getPostDetails } from '../../services/posts.service';

const postDetailsSlice = createSlice({
  name: 'postDetails',
  initialState: {
    data: { comments: [] },
  },
  reducers: {},

  extraReducers: (builder) => {
    builder.addCase(fetchPostDetails.fulfilled, (state, action) => {
      state.data = action.payload;
    });
    builder.addCase(createNewComment.fulfilled, (state, action) => {
      state.data.comments = [action.payload, ...state.data.comments];
    });
  },
});

export const fetchPostDetails = createAsyncThunk('posts/fetchPostDetails', async (id) => {
  const postDetails = await getPostDetails(id);
  const comments = await getComments(id);
  postDetails.comments = comments;
  return postDetails;
});

export const createNewComment = createAsyncThunk('posts/createNewComment', async (data) => {
  const response = await createComment(data);
  return response;
});

export const deleteOwnComment = createAsyncThunk('posts/deleteOwnComment', async (id) => {
  const response = await deleteComment(id);
  return response;
});

export const editOwnComment = createAsyncThunk('posts/editOwnComment', async (data) => {
  const response = await editComment(data);
  return response;
});

export default postDetailsSlice.reducer;
