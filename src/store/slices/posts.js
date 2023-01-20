import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { createPost, deletePost, getPosts, editPost } from '../../services/posts.service';

const postsSlice = createSlice({
  name: 'posts',
  initialState: {
    list: [],
  },
  reducers: {},

  extraReducers: (builder) => {
    builder.addCase(fetchPosts.fulfilled, (state, action) => {
      state.list = action.payload;
    });
    builder.addCase(createNewPost.fulfilled, (state, action) => {
      state.list = [action.payload, ...state.list];
    });
  },
});

export const fetchPosts = createAsyncThunk('posts/fetchPosts', async () => {
  const posts = await getPosts();
  return posts;
});

export const createNewPost = createAsyncThunk('posts/createNewPost', async (data) => {
  const post = await createPost(data);
  return post;
});

export const deleteOwnPost = createAsyncThunk('posts/deleteOwnPost', async (id) => {
  const response = await deletePost(id);
  return response;
});

export const editOwnPost = createAsyncThunk('posts/editOwnPost', async (data) => {
  const response = await editPost(data);
  return response;
});

export default postsSlice.reducer;
