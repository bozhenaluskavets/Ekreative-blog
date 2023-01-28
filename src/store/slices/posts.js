import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { createPost, deletePost, getPosts, editPost } from '../../services/posts.service';
import { filterList } from '../../utilities/filterList';
import { addPagination } from '../../utilities/pagination';

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
  reducers: {
    paginate: (state, action) => {
      state.pagination = addPagination({ list: state.list, page: action.payload });
    },
  },

  extraReducers: (builder) => {
    builder.addCase(fetchPosts.fulfilled, (state, action) => {
      state.list = filterList(action.payload);
      state.pagination = addPagination({ list: state.list });
    });
    builder.addCase(createNewPost.fulfilled, (state, action) => {
      state.list.forEach((item) => {
        delete item.isNewItem;
      });
      state.list = [{ ...action.payload, isNewItem: true }, ...state.list];
      state.pagination = addPagination({ list: state.list.reverse(), page: 1 });
    });
    builder.addCase(deleteOwnPost.fulfilled, (state, action) => {
      state.list = action.payload;
    });
    builder.addCase(editOwnPost.fulfilled, (state, action) => {
      state.list = action.payload;
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

export const { paginate } = postsSlice.actions;
export default postsSlice.reducer;
