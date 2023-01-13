const KEY = 'token'

export const getToken = () => localStorage.getItem(KEY)
export const setToken = (newToken) => localStorage.setItem(KEY, newToken)