import { api } from "./api";

export const getAnnouncements = async () => {
    const resp = await api.get('announcements');
    return resp.data;
}

export const getAnnouncementsDetails = async (id) => {
    const resp = await api.get(`announcements/${+ id}`);
    return resp.data;
}