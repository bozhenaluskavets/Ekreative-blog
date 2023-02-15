import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { TOKEN_FROM_LS } from '../../constants';
import {
  editUserInfo,
  getAuthorizedUser,
  loginUserRequest,
  registerUserRequest,
  saveUserId,
} from '../../services/auth.service';
import { setToken } from '../../services/localStorage.service';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    serverError: '',
    isAuthenticated: false,
    userInfo: {},
  },
  reducers: {},

  extraReducers: (builder) => {
    builder.addCase(registerUser.fulfilled, (state, action) => {
      if (action.payload.IsError) {
        state.serverError = action.payload.body;
      } else {
        state.serverError = '';
        state.isAuthenticated = true;
        state.userInfo = action.payload.user;
      }
    });
    builder.addCase(loginUser.fulfilled, (state, action) => {
      if (action.payload.IsError) {
        state.serverError = action.payload.body;
      } else {
        state.serverError = '';
        state.isAuthenticated = true;
        state.userInfo = action.payload.user;
      }
    });

    builder.addCase(getUserInfo.fulfilled, (state, action) => {
      state.isAuthenticated = action.payload.isAuthenticated;
      state.userInfo = action.payload.user ?? {};
    });
    builder.addCase(editProfileInfo.fulfilled, (state, action) => {
      state.userInfo = action.payload;
    });
    builder.addCase(logout.fulfilled, (state) => {
      state.isAuthenticated = false;
      state.userInfo = {};
    });
  },
});

export const registerUser = createAsyncThunk('auth/registerUser', async (data) => {
  const response = await registerUserRequest(data);

  if (response.accessToken) {
    setToken(response.accessToken);
  }
  if (response.user?.id) {
    saveUserId(response.user.id);
  }
  return response;
});

export const loginUser = createAsyncThunk('auth/loginUser', async (data) => {
  const response = await loginUserRequest(data);
  if (response.accessToken) {
    setToken(response.accessToken);
  }

  if (response.user?.id) {
    saveUserId(response.user.id);
  }

  return response;
});

export const logout = createAsyncThunk('auth/logout', async () => {
  saveUserId('');
  setToken('');

  return {};
});

export const getUserInfo = createAsyncThunk('auth/getUserInfo', async () => {
  if (!TOKEN_FROM_LS) {
    return {
      isAuthenticated: false,
    };
  }
  const user = await getAuthorizedUser();
  return {
    isAuthenticated: true,
    user,
  };
});

export const editProfileInfo = createAsyncThunk('auth/editUserInfo', async (data) => {
  const response = await editUserInfo(data);
  return response;
});

export default authSlice.reducer;
