import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { loginUserRequest, registerUserRequest } from '../../services/auth.service';

export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        error: '',
        isAuthenticated: localStorage.getItem('token') ? true : false,
        token: '',
        userInfo: {}
    },
    reducers: {
        logout: (state) => {
            state.isAuthenticated = false
        }
    },

    extraReducers: builder => {
        builder.addCase(registerUser.fulfilled, (state, action) => {
            if (action.payload.isError) {
                state.error = action.payload.body;
            } else {
                state.error = '';
                state.isAuthenticated = true;
                state.userInfo = action.payload.user;
                state.token = action.payload.accessToken;
            }
        })
        builder.addCase(loginUser.fulfilled, (state, action) => {
            if (action.payload.isError) {
                state.error = action.payload.body;
            } else {
                state.error = '';
                state.isAuthenticated = true;
                state.userInfo = action.payload.user;
                state.token = action.payload.accessToken;
            }
        })
    }

})

export const registerUser = createAsyncThunk('auth/registerUser', async (data) => {
    const response = await registerUserRequest(data);
    if (response.accessToken) {
        localStorage.setItem('token', response.accessToken);
    }
    return response;
})

export const loginUser = createAsyncThunk('auth/loginUser', async (data) => {
    const response = await loginUserRequest(data);
    if (response.accessToken) {
        localStorage.setItem('token', response.accessToken);
    }
    return response;
})

const { actions, reducer } = authSlice;
export default reducer;

export const { logout } = actions; 

// export default authSlice.reducer