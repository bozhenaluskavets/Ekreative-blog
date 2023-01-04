import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { getPosts } from '../../services/posts.service';

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
    }
})

export const fetchPosts = createAsyncThunk('posts/fetchPosts', async () => {
    const posts = await getPosts();
    return posts;
})

export default postsSlice.reducer