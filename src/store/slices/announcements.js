import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { createAnnouncement, deleteAnnouncement, getAnnouncements, editAnnouncement } from '../../services/announcements.service';

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
        builder.addCase(createNewAnnouncement.fulfilled, (state, action) => {
            state.list = [action.payload, ...state.list];
        })
    }
})

export const fetchAnnouncements = createAsyncThunk('announcements/fetchAnnouncements', async () => {
    const announcements = await getAnnouncements();
    return announcements;
})

export const createNewAnnouncement = createAsyncThunk('announcements/createNewAnnouncement', async (data) => {
    const announcement = await createAnnouncement(data);
    return announcement;
})

export const deleteOwnAnnouncement = createAsyncThunk('announcements/deleteOwnAnnouncement', async (id) => {
    return await deleteAnnouncement(id);
})

export const editOwnAnnouncement = createAsyncThunk('posts/editOwnAnnouncement', async (data) => {
    const response = await editAnnouncement(data);
    return response;
})


export default announcementsSlice.reducer