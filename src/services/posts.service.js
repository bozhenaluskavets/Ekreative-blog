import { api } from './api';

export const getPosts = async () => {
  const resp = await api.get(`posts?_sort=createdAt`);
  return resp.data;
};

export const getPostDetails = async (id) => {
  const resp = await api.get(`posts/${id}`);
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
