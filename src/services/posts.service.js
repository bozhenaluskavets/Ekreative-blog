import { api } from "./api";

export const getPosts = async () => {
    const resp = await api.get(`posts`);
    return resp.data;
}

export const getPostDetails = async (id) => {
    const resp = await api.get(`posts/${+ id}`);
    return resp.data;
}

export const createPost = async (newPost) => {
    const resp = await api.post(`posts`, newPost);
    return resp.data;
}

export const updatePost = async (id) => {
    const resp = await api.patch(`posts/${+ id}`);
    return resp.data;
}

export const deletePost = async (id) => {
    const resp = await api.delete(`posts/${+ id}`);
    return resp.data;
}