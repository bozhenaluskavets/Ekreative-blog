import { API_URL } from "./api";
// import { tokenService } from "./token.service";

export const registerUserRequest = async (data) => {
    const response = await fetch(`${API_URL}/users`,
        {
            method: 'POST',
            headers: { 
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                ...data,
                "avatar": "https://www.pngkey.com/png/detail/114-1149878_setting-user-avatar-in-specific-size-without-breaking.png"
            })
        }
    );

    const isError = !response.ok;
    const body = await response.json();
    return { body, isError };
}

export const loginUserRequest = async (data) => {
    const response = await fetch(`${API_URL}/users`,
        {
            method: 'POST',
            headers: { 
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                ...data
            })
        }
    );

    const isError = !response.ok;
    const body = await response.json();
    return { body, isError };
}

// export const checkToken = () => {
//     const token = tokenService.getToken();
//     return fetch(`${API_URL}/users`,
//         {
//             method: 'GET',
//             headers: { 
//                 'Content-Type': 'application/json', "Authorization": `Bearer ${token}`
//             }
//         }
//     );
// }