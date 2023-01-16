import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { createPost, deletePost, getPosts } from '../../services/posts.service';

export const postsSlice = createSlice({
    name: 'posts',
    initialState: {
        list: [],
    },
    reducers: {},

    extraReducers: builder => {
        builder.addCase(fetchPosts.fulfilled, (state, action) => {
            state.list = action.payload;
        })
        builder.addCase(createNewPost.fulfilled, (state, action) => {
            state.list = [action.payload, ...state.list];
        })
    }
})

export const fetchPosts = createAsyncThunk('posts/fetchPosts', async () => {
    const posts = await getPosts();
    return posts;
})

export const createNewPost = createAsyncThunk('posts/createNewPost', async (data) => {
    const post = await createPost(data);
    return post;
})

export const deleteOwnPost = createAsyncThunk('posts/deleteOwnPost', async (id) => {
    return await deletePost(id);
})

export default postsSlice.reducer