import { createSlice } from '@reduxjs/toolkit';
import { createNewAnnouncement, editOwnAnnouncement, fetchAnnouncements } from './announcements';
import { fetchAnnouncementDetails } from './announcementsDetails';
import { getUserInfo, loginUser, logout, registerUser } from './auth';
import { fetchPostDetails } from './postDetails';
import { createNewPost, editOwnPost, fetchPosts } from './posts';

const loaderActions = [
  fetchPosts,
  fetchPostDetails,
  createNewPost,
  editOwnPost,
  getUserInfo,
  fetchAnnouncements,
  fetchAnnouncementDetails,
  createNewAnnouncement,
  editOwnAnnouncement,

  registerUser,
  loginUser,
  logout,
];

const uiSlice = createSlice({
  name: 'loader',
  initialState: {
    isLoading: false,
  },
  reducers: {},

  extraReducers: (builder) => {
    loaderActions.forEach((action) => {
      builder.addCase(action.pending, (state) => {
        state.isLoading = true;
      });
      builder.addCase(action.fulfilled, (state) => {
        state.isLoading = false;
      });
    });
  },
});

export default uiSlice.reducer;
