import { configureStore } from '@reduxjs/toolkit';
import postDetailsSlice from './slices/postDetails';
import postsSlice from './slices/posts';
import ui from './slices/ui';
import auth from './slices/auth';
import announcementsSlice from './slices/announcements';
import announcementsDetailsSlice from './slices/announcementsDetails';
import commentsSlice from './slices/comments';

export default configureStore({
  reducer: {
    ui,
    auth,
    posts: postsSlice,
    postDetails: postDetailsSlice,
    announcements: announcementsSlice,
    announcementDetails: announcementsDetailsSlice,
    comments: commentsSlice,
  },
  devTools: true,
});
