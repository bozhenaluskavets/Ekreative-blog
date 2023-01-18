import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { EditAnnouncementForm } from './pages/EditAnnounsForm';
import { EditPostForm } from './pages/EditPostForm';
import { Header } from './components/Header';
import { AnnouncementDetails } from './pages/AnnouncementDetails';
import { AnnouncementsList } from './pages/AnnouncementsList';
import { Home } from './pages/Home';
import { Login } from './pages/Login';
import { PostDetails } from './pages/PostDetails';
import { PostsList } from './pages/PostsList';
import { Register } from './pages/Register';
import { UserProfile } from './pages/UserProfile';

export const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="posts" element={<PostsList />} />
        <Route path="posts/:id" element={<PostDetails />} />
        <Route path="announcements" element={<AnnouncementsList />} />
        <Route path="announcements/:id" element={<AnnouncementDetails />} />
        <Route path="register" element={<Register />} />
        <Route path="login" element={<Login />} />
        <Route path="myProfile" element={<UserProfile />} />
        <Route path="posts/edit/:id" element={<EditPostForm />} />
        <Route path="announcements/edit/:id" element={<EditAnnouncementForm />} />
      </Routes>
    </BrowserRouter>
  );
};
