import { api } from "./api";

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