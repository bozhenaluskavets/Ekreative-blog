import { api } from './api';

export const getPosts = async () => {
  const params = { _sort: 'createdAt', _order: 'desc' };

  const resp = await api.get('posts', { params });
  return resp.data;
};

export const getPostDetails = async (id) => {
  const params = { _expand: 'user' };
  const resp = await api.get(`posts/${id}`, { params });
  return resp.data;
};

export const createPost = async (data) => {
  const resp = await api.post(`posts`, data);
  return resp.data;
};

export const editPost = async (data) => {
  const resp = await api.patch(`posts/${data.id}`, data);
  return resp.data;
};

export const deletePost = async (id) => {
  const resp = await api.delete(`posts/${id}`);
  return resp.data;
};
