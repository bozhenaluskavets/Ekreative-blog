import { USER_ID } from '../constants';
import { api } from './api';

export const registerUserRequest = async (userData) => {
  const response = await api.post(`users`, {
    ...userData,
    avatar:
      'https://www.pngkey.com/png/detail/114-1149878_setting-user-avatar-in-specific-size-without-breaking.png',
  });
  return response.data;
};

export const loginUserRequest = async (userData) => {
  const response = await api.post(`login`, userData);
  return response.data;
};

export const getAuthorizedUser = async () => {
  const resp = await api.get(`users/${getUserId()}`);
  return resp.data;
};

export const editUserInfo = async (data) => {
  const resp = await api.patch(`users/${getUserId()}`, data);
  return resp.data;
};

export const saveUserId = (newUserID) => {
  localStorage.setItem(USER_ID, newUserID);
};

export const getUserId = () => {
  return localStorage.getItem(USER_ID);
};
