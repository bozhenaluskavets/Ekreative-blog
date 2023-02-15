import { api } from './api';

export const getAnnouncements = async () => {
  const params = { _sort: 'createdAt', _order: 'desc' };

  const resp = await api.get('announcements', { params });
  return resp.data;
};

export const getAnnouncementsDetails = async (id) => {
  const params = { _expand: 'user' };
  const resp = await api.get(`announcements/${id}`, { params });
  return resp.data;
};

export const createAnnouncement = async (data) => {
  const resp = await api.post(`announcements`, data);
  return resp.data;
};

export const editAnnouncement = async (data) => {
  const resp = await api.patch(`announcements/${data.id}`, data);
  return resp.data;
};

export const deleteAnnouncement = async (id) => {
  const resp = await api.delete(`announcements/${id}`);
  return resp.data;
};
