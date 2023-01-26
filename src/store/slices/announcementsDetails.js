import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getAnnouncementsDetails } from '../../services/announcements.service';

const announcementDetailsSlice = createSlice({
  name: 'announcementDetails',
  initialState: {
    data: {},
  },
  reducers: {},

  extraReducers: (builder) => {
    builder.addCase(fetchAnnouncementDetails.fulfilled, (state, action) => {
      state.data = action.payload;
    });
  },
});

export const fetchAnnouncementDetails = createAsyncThunk(
  'announcements/fetchAnnouncementsDetails',
  async (id) => {
    const announcementDetails = await getAnnouncementsDetails(id);
    return announcementDetails;
  },
);

export default announcementDetailsSlice.reducer;
