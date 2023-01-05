import { api } from "./api";

export const registerUserRequest = async (data) => {
    
    // const response = await fetch(`${API_URL}/users`,
    //     {
    //         method: 'POST',
    //         headers: { 
    //             'Content-Type': 'application/json'
    //         },
    //         body: JSON.stringify({
    //             ...data,
    //             "avatar": "https://www.pngkey.com/png/detail/114-1149878_setting-user-avatar-in-specific-size-without-breaking.png"
    //         })
    //     }
    // );

    // const body = await response.json();
    // return body;

    const resp = await api.post(`users`, {
        ...data,
        "avatar": "https://www.pngkey.com/png/detail/114-1149878_setting-user-avatar-in-specific-size-without-breaking.png"
    });
    return resp.data;
}

export const loginUserRequest = async (data) => {
    // const response = await fetch(`${API_URL}/users`,
    //     {
    //         method: 'POST',
    //         headers: {
    //             'Content-Type': 'application/json'
    //         },
    //         body: JSON.stringify({
    //             ...data
    //         })
    //     }
    // );

    // const body = await response.json();
    // return body;
    
    const resp = await api.post(`users`, {
        ...data
    });
    return resp.data;
}