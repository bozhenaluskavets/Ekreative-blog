import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { getAnnouncements } from '../../services/announcements.service';

export const announcementsSlice = createSlice({
    name: 'announcements',
    initialState: {
        list: [],
    },
    reducers: {},

    extraReducers: builder => {
        builder.addCase(fetchAnnouncements.fulfilled, (state, action) => {
            state.list = action.payload;
        })
    }
})

export const fetchAnnouncements = createAsyncThunk('announcements/fetchAnnouncements', async () => {
    const announcements = await getAnnouncements();
    return announcements;
})

export default announcementsSlice.reducer