import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import {
  createAnnouncement,
  deleteAnnouncement,
  getAnnouncements,
  editAnnouncement,
} from '../../services/announcements.service';
import { filterList } from '../../utilities/filterList';
import { addPagination } from '../../utilities/pagination';

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
  reducers: {
    paginate: (state, action) => {
      state.pagination = addPagination({ list: state.list, page: action.payload });
    },
  },

  extraReducers: (builder) => {
    builder.addCase(fetchAnnouncements.fulfilled, (state, action) => {
      state.list = filterList(action.payload);
      state.pagination = addPagination({ list: state.list });
    });
    builder.addCase(createNewAnnouncement.fulfilled, (state, action) => {
      state.list = [{ ...action.payload, isNewItem: true }, ...state.list];
      state.pagination = addPagination({ list: state.list, page: 1 });
    });
    builder.addCase(deleteOwnAnnouncement.fulfilled, (state, action) => {
      state.list = action.payload;
    });
    builder.addCase(editOwnAnnouncement.fulfilled, (state, action) => {
      state.list = action.payload;
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

export const { paginate } = announcementsSlice.actions;

export default announcementsSlice.reducer;
