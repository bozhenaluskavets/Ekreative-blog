import { configureStore } from '@reduxjs/toolkit';
import postDetailsSlice from './slices/postDetails';
import postsSlice from './slices/posts';
import uiSlice from './slices/ui';
import authSlice from './slices/auth';
import announcementsSlice from './slices/announcements';
import announcementsDetailsSlice from './slices/announcementsDetails';

export default configureStore({
  reducer: {
    ui: uiSlice,
    auth: authSlice,
    posts: postsSlice,
    postDetails: postDetailsSlice,
    announcements: announcementsSlice,
    announcementDetails: announcementsDetailsSlice,
  },
  devTools: true,
});
