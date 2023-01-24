import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import {
  createAnnouncement,
  deleteAnnouncement,
  getAnnouncements,
  editAnnouncement,
} from '../../services/announcements.service';
import { paginate, pagination } from './posts';

const announcementsSlice = createSlice({
  name: 'announcements',
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
    builder.addCase(fetchAnnouncements.fulfilled, (state, action) => {
      state.list = action.payload;
      state.pagination = pagination({ list: action.payload });
    });
    builder.addCase(paginate.fulfilled, (state, action) => {
      state.pagination = pagination({ list: state.list, page: action.payload });
    });
    builder.addCase(createNewAnnouncement.fulfilled, (state, action) => {
      state.list = [action.payload, ...state.list];
    });
  },
});

export const fetchAnnouncements = createAsyncThunk('announcements/fetchAnnouncements', async () => {
  const announcements = await getAnnouncements();
  return announcements;
});

export const createNewAnnouncement = createAsyncThunk(
  'announcements/createNewAnnouncement',
  async (data) => {
    const announcement = await createAnnouncement(data);
    return announcement;
  },
);

export const deleteOwnAnnouncement = createAsyncThunk(
  'announcements/deleteOwnAnnouncement',
  async (id) => {
    const response = await deleteAnnouncement(id);
    return response;
  },
);

export const editOwnAnnouncement = createAsyncThunk(
  'announcements/editOwnAnnouncement',
  async (data) => {
    const response = await editAnnouncement(data);
    return response;
  },
);

export default announcementsSlice.reducer;
