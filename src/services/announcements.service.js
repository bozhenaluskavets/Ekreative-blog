import { API_URL } from "./api";

export const getAnnouncements = async () => {
    const response = await fetch(`${API_URL}/announcements`,
        { method: 'GET' }
    );

    const body = await response.json();
    return body;
}

export const getAnnouncementsDetails = async (id) => {
    const response = await fetch(`${API_URL}/announcements/${+ id}`,
        { method: 'GET' }
    );

    const body = await response.json();
    return body;
}