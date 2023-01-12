import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { createComment, getComments } from '../../services/comments.servise';

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
        builder.addCase(fetchNewComments.fulfilled, (state, action) => {
            state.list = action.payload;
        })
    }
})

export const fetchComments = createAsyncThunk('comments/fetchComments', async (id) => {
    const comments = await getComments(id);
    return comments;
})

export const fetchNewComments = createAsyncThunk('comments/fetchCreatedComments', async (data) => {
    const comments = await createComment(data);
    return comments;
})

export default commentsSlice.reducer