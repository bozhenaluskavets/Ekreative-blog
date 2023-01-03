import { API_URL } from "./api";

export const getPosts = async () => {
    const response = await fetch(`${API_URL}/posts`,
        { method: 'GET' }
    );

    const body = await response.json();
    return body;
}

export const getPostDetails = async (id) => {
    const response = await fetch(`${API_URL}/posts/${+ id}`,
        { method: 'GET' }
    );

    const body = await response.json();
    return body;
}