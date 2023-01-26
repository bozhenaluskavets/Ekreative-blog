import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { createPost, deletePost, getPosts, editPost } from '../../services/posts.service';

const postsSlice = createSlice({
  name: 'posts',
  initialState: {
    list: [],
    pagination: {
      totalPages: 0,
      currentPage: 1,
      perPage: 8,
      data: [],
    },
  },
  reducers: {},

  extraReducers: (builder) => {
    builder.addCase(fetchPosts.fulfilled, (state, action) => {
      state.list = action.payload;
      state.pagination = pagination({ list: action.payload });
    });
    builder.addCase(paginate.fulfilled, (state, action) => {
      state.pagination = pagination({ list: state.list, page: action.payload });
    });
    builder.addCase(createNewPost.fulfilled, (state, action) => {
      state.list = [action.payload, ...state.list];
    });
  },
});

export const paginate = createAsyncThunk('posts/paginate', async (page) => {
  return page;
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

export const pagination = ({ list = 0, page = 1, perPage = 8 }) => {
  const totalPages = Math.ceil(list.length / perPage);
  const itemOffset = (page * perPage) % list.length;
  const endOffset = itemOffset + perPage;

  const data = list.slice(itemOffset, endOffset);

  return {
    totalPages,
    currentPage: page,
    perPage,
    data,
  };
};

export default postsSlice.reducer;
