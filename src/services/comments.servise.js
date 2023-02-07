import { api } from './api';

export const getComments = async (id) => {
  const resp = await api.get(`comments?postId=${id}`);
  return resp.data;
};

export const createComment = async (data) => {
  const resp = await api.post(`comments`, data);
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

// fix use params from axios
