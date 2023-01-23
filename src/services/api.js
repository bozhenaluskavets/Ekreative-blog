import axios from 'axios';
import { getToken } from './token.service';

export const API_URL = 'http://127.0.0.1:3040';

export const api = axios.create({
  baseURL: process.env.REACT_APP_EKBLOG_URL,
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${getToken()}`,
  },
});
