export const setToken = (token) => {
    window.localStorage.setItem('token', token);
}

export const getToken = () => {
    const token = window.localStorage.getItem('token');
    return token
}