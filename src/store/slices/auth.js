import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getAuthorizedUser, loginUserRequest, registerUserRequest, saveUserId } from '../../services/auth.service';
import { getToken, setToken } from '../../services/token.service'
export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        error: '',
        isAuthenticated: false,
        userInfo: {}
    },
    reducers: {},

    extraReducers: builder => {
        builder.addCase(registerUser.fulfilled, (state, action) => {
            if (action.payload.isError) {
                state.error = action.payload.body;
            } else {
                state.error = '';
                state.isAuthenticated = true;
                state.userInfo = action.payload.user;
            }
        })
        builder.addCase(loginUser.fulfilled, (state, action) => {
            if (action.payload.isError) {
                state.error = action.payload.body;
            } else {
                state.error = '';
                state.isAuthenticated = true;
                state.userInfo = action.payload.user;
            }
        })

        builder.addCase(getUserInfo.fulfilled, (state, action) => {
            state.isAuthenticated = action.payload.isAuthenticated;
            state.userInfo = action.payload.user ?? {}
        })
        builder.addCase(logout.fulfilled, (state) => {
            state.isAuthenticated = false;
            state.userInfo = {};
        })
    }

})

export const registerUser = createAsyncThunk('auth/registerUser', async (data) => {
    const response = await registerUserRequest(data);
    if (response.accessToken) {
        setToken(response.accessToken)
    }
    if (response.user?.id) {
        saveUserId(response.user.id)
    }
    return response;
})

export const loginUser = createAsyncThunk('auth/loginUser', async (data) => {
    const response = await loginUserRequest(data);
    if (response.accessToken) {
        setToken(response.accessToken)
    }

    if (response.user?.id) {
        saveUserId(response.user.id)
    }

    return response;
})


export const logout = createAsyncThunk('auth/logout', async () => {
    saveUserId('');
    setToken('');

    return {};
})
export const getUserInfo = createAsyncThunk('auth/getUserInfo', async () => {
    const token = getToken();
    if (!token) {
        return {
            isAuthenticated: false
        }
    }
    const user = await getAuthorizedUser();
    return {
        isAuthenticated: true,
        user
    };
})

export default authSlice.reducer