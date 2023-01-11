import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { getComments } from '../../services/comments.servise';

export const commentsSlice = createSlice({
    name: 'comments',
    initialState: {
        list: [],
    },
    reducers: {},

    extraReducers: builder => {
        builder.addCase(fetchComments.fulfilled, (state, action) => {
            state.list = action.payload;
        })
    }
})

export const fetchComments = createAsyncThunk('comments/fetchComments', async (id) => {
    const posts = await getComments(id);
    return posts;
})

export default commentsSlice.reducer