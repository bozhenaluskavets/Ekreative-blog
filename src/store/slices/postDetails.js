import { createAsyncThunk, createSlice, current } from '@reduxjs/toolkit';
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
    builder.addCase(deleteOwnComment.fulfilled, (state, action) => {
      const { comments } = current(state).data;
      const deletedComment = action.payload;
      const index = comments.filter((comment) => comment.id !== deletedComment);
      state.data.comments = index;
    });
    builder.addCase(editOwnComment.fulfilled, (state, action) => {
      const newComment = action.payload;
      const { comments } = current(state).data;
      const index = comments.findIndex((comment) => comment.id === newComment.id);
      state.data.comments[index] = newComment;
    });
  },
});

export const fetchPostDetails = createAsyncThunk('posts/fetchPostDetails', async (id) => {
  const postDetails = await getPostDetails(id);
  const comments = await getComments(id);
  postDetails.comments = comments;
  return postDetails;
});

export const createNewComment = createAsyncThunk(
  'posts/createNewComment',
  async (data, { getState }) => {
    const globalState = getState();
    const response = await createComment(data);
    response.user = globalState.auth.userInfo;
    return response;
  },
);

export const deleteOwnComment = createAsyncThunk('posts/deleteOwnComment', async (id) => {
  await deleteComment(id);
  return id;
});

export const editOwnComment = createAsyncThunk(
  'posts/editOwnComment',
  async (data, { getState }) => {
    const globalState = getState();
    const response = await editComment(data);
    response.user = globalState.auth.userInfo;
    return response;
  },
);

export default postDetailsSlice.reducer;
