import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import {
  createComment,
  deleteComment,
  getComments,
  editComment,
} from '../../services/comments.servise';

export const commentsSlice = createSlice({
  name: 'comments',
  initialState: {
    list: [],
  },
  reducers: {},

  extraReducers: (builder) => {
    builder.addCase(fetchComments.fulfilled, (state, action) => {
      state.list = action.payload;
    });
    builder.addCase(createNewComment.fulfilled, (state, action) => {
      state.list = [action.payload, ...state.list];
    });
  },
});

export const fetchComments = createAsyncThunk('comments/fetchComments', async (id) => {
  const comments = await getComments(id);
  return comments;
});

export const createNewComment = createAsyncThunk('comments/createNewComment', async (data) => {
  const comment = await createComment(data);
  return comment;
});

export const deleteOwnComment = createAsyncThunk('comments/deleteOwnComment', async (id) => {
  return await deleteComment(id);
});

export const editOwnComment = createAsyncThunk('posts/editOwnComment', async (data) => {
  const response = await editComment(data);
  return response;
});

export default commentsSlice.reducer;
