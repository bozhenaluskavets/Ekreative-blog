import { TOKEN } from '../constants';

export const getToken = () => localStorage.getItem(TOKEN);
export const setToken = (newToken) => localStorage.setItem(TOKEN, newToken);

// fix rename local storage service?
