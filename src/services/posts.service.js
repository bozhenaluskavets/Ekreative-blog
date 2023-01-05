import { api } from "./api";

export const getPosts = async () => {
    const resp = await api.get(`posts`);
    return resp.data;
}

export const getPostDetails = async (id) => {
    const resp = await api.get(`posts/${+ id}`);
    return resp.data;
}