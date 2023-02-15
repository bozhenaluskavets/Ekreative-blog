import axios from 'axios';
import { TOKEN_FROM_LS } from '../constants';

export const api = axios.create({
  baseURL: process.env.REACT_APP_EKBLOG_URL,
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${TOKEN_FROM_LS}`,
  },
});
