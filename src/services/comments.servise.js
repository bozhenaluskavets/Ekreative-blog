import { api } from "./api";

export const getComments = async (id) => {
    const resp = await api.get(`comments?postId=${+ id}&_sort=createdAt&_order=asc`);
    return resp.data;
}