export const API_URL = 'http://127.0.0.1:3040';
import axios from "axios";

const token = localStorage.getItem('token');

export const api = axios.create({
    baseURL: process.env.REACT_APP_EKBLOG_URL,
    headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
    }
});