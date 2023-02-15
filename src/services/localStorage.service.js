import { TOKEN } from '../constants';

export const setToken = (newToken) => localStorage.setItem(TOKEN, newToken);
