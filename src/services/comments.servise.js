import { api } from './api';

export const getComments = async (id) => {
  const params = { postId: id, _expand: 'user' };

  const resp = await api.get('comments', { params });
  return resp.data;
};

export const getCommentById = async (id) => {
  const params = { _expand: 'user' };

  const resp = await api.get(`comments/${id}`, { params });
  return resp.data;
};

export const createComment = async (data) => {
  const params = { _expand: 'user' };
  const resp = await api.post(`comments`, data, { params });
  return resp.data;
};

export const editComment = async (data) => {
  const resp = await api.patch(`comments/${data.id}`, data);
  return resp.data;
};

export const deleteComment = async (id) => {
  const resp = await api.delete(`comments/${id}`);
  return resp.data;
};
