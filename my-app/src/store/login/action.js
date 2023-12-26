import { createAsyncThunk } from "@reduxjs/toolkit";
import { axiosInstance } from "../../api";

export const registerAction = createAsyncThunk(
    'login/registerAction',
    async ({ navigate, ...data }, thunkAPI) => {
        try {
            const response = await axiosInstance.post('register/', data);
            navigate('/');
            localStorage.setItem('token', response.data.token);
            return response.data;
        } catch (e) {
            return thunkAPI.rejectWithValue('Произошла ошибка при регистрации!');
        }

    }
);


export const loginAction = createAsyncThunk(
    'login/loginAction',
    async ({ navigate, ...data }, thunkAPI) => {
        try {
            const response = await axiosInstance.post('login/', data);
            navigate('/');
            localStorage.setItem('token', response.data.token);
            return response.data;
        } catch (e) {
            return thunkAPI.rejectWithValue('Произошла ошибка при авторизации!');
        }
    }
);