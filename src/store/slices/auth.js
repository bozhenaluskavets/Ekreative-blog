import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { loginUserRequest, registerUserRequest } from '../../services/auth.service';

export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        error: ''
    },
    reducers: {},

    extraReducers: builder => {
        builder.addCase(registerUser.fulfilled, (state, action) => {
            if (action.payload.isError) {
                state.error = action.payload.body;
            } else {
                state.error = '';
            }
        })
        builder.addCase(loginUser.fulfilled, (state, action) => {
            if (action.payload.isError) {
                state.error = action.payload.body;
            } else {
                state.error = '';
            }
        })
    }

})

export const registerUser = createAsyncThunk('auth/registerUser', async (data) => {
    const response = await registerUserRequest(data);
    console.log('response => ', response);
    if (response.accessToken) {
        localStorage.setItem('token', response.accessToken);
        window.location.href = '/'
    }
    return response;
})

export const loginUser = createAsyncThunk('auth/loginUser', async (data) => {
    const response = await loginUserRequest(data);
    console.log('response => ', response)
    if (response.accessToken) {
        localStorage.setItem('token', response.accessToken);
        window.location.href = '/'
    }
    return response;
})

export const isAuthenticated = localStorage.getItem('token')

export default authSlice.reducer