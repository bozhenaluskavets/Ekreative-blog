import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { createAnnouncement, getAnnouncements } from '../../services/announcements.service';

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
        builder.addCase(fetchNewAnnouncements.fulfilled, (state, action) => {
            state.list = action.payload;
        })
    }
})

export const fetchAnnouncements = createAsyncThunk('announcements/fetchAnnouncements', async () => {
    const announcements = await getAnnouncements();
    return announcements;
})

export const fetchNewAnnouncements = createAsyncThunk('announcements/fetchNewAnnouncements', async (data) => {
    const announcements = await createAnnouncement(data);
    return announcements;
})

export default announcementsSlice.reducer