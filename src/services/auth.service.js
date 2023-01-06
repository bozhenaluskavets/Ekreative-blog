import { api } from "./api";

export const registerUserRequest = async (userCredentials) => {

    const resp = await api.post(`users`, {
        ...userCredentials,
        avatar: "https://www.pngkey.com/png/detail/114-1149878_setting-user-avatar-in-specific-size-without-breaking.png"
    });
    return resp.data;

}

export const loginUserRequest = async (userCredentials) => {

    const resp = await api.post(`login`, userCredentials);
    return resp.data;

}