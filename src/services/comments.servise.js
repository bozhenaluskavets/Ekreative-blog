import { api } from "./api";

export const getComments = async (id) => {
    const resp = await api.get(`comments?postId=${+ id}&_sort=createdAt&_order=asc`);
    return resp.data;
}

export const createComment = async (data) => {
    const resp = await api.post(`comments`, data);
    return resp.data;
}

export const updateComment = async (id) => {
    const resp = await api.patch(`comments/${+ id}`);
    return resp.data;
}

export const deleteComment = async (id) => {
    const resp = await api.delete(`comments/${+ id}`);
    return resp.data;
}