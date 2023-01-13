import { api } from "./api";

const USER_ID_KEY = 'user-id'

export const registerUserRequest = async (userData) => {

    const resp = await api.post(`users`, {
        ...userData,
        avatar: "https://www.pngkey.com/png/detail/114-1149878_setting-user-avatar-in-specific-size-without-breaking.png"
    });
    return resp.data;

}

export const loginUserRequest = async (userData) => {
    const resp = await api.post(`login`, userData);
    return resp.data;
}

export const getAuthorizedUser = async () => {
    const resp = await api.get(`users/${getUserId()}`);
    return resp.data;
}

export const saveUserId = (newUserID) => {
    localStorage.setItem(USER_ID_KEY, newUserID)
}

export const getUserId = () => {
    return localStorage.getItem(USER_ID_KEY)
}