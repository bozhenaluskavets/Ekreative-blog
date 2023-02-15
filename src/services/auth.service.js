import { USER_ID, USER_ID_FROM_LS } from '../constants';
import { api } from './api';

export const registerUserRequest = async (userData) => {
  try {
    const response = await api.post(`users`, userData);
    return response.data;
  } catch (error) {
    const IsError = true;
    return {
      IsError,
      body: error.response.data,
    };
  }
};

export const loginUserRequest = async (userData) => {
  try {
    const response = await api.post(`login`, userData);
    return response.data;
  } catch (error) {
    const IsError = true;
    return {
      IsError,
      body: error.response.data,
    };
  }
};

export const getAuthorizedUser = async () => {
  const resp = await api.get(`users/${USER_ID_FROM_LS}`);
  return resp.data;
};

export const editUserInfo = async (data) => {
  const resp = await api.patch(`users/${USER_ID_FROM_LS}`, data);
  return resp.data;
};

export const saveUserId = (newUserID) => {
  localStorage.setItem(USER_ID, newUserID);
};
