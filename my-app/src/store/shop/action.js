import { createAsyncThunk } from "@reduxjs/toolkit";
import { axiosInstance } from "../../api";
export const getProductsAction = createAsyncThunk(
    'product/getProductsAction',
    async (_, thunkAPI) => {
        try {
            const response = await axiosInstance.get('product/');

            return response.data;
        } catch (e) {
            return thunkAPI.rejectWithValue('Произошла ошибка');
        }

    }
);

export const createProductAction = createAsyncThunk(
    'product/createProductsAction',
    async ({ navigate, ...data }, thunkAPI) => {
        try {
            await axiosInstance.post('/product/', data);
            navigate('/');
        } catch (e) {
            return thunkAPI.rejectWithValue('Произошла ошибка при добавлении фото');
        }

    }
);

export const deleteProductsAction = createAsyncThunk(
    'product/deleteProductsAction',
    async (id, thunkAPI) => {
        try {
            return await axiosInstance.delete(`/product/${id}`);
        } catch (e) {
            return thunkAPI.rejectWithValue('Произошла ошибка при удалении');
        }

    }
);
export const getProdAction = createAsyncThunk(
    'product/getProdAction',
    async (id, thunkAPI) => {
        try {
            const response = await axiosInstance.get(`/product/${id}`);

            return response.data;
        } catch (e) {
            return thunkAPI.rejectWithValue('Произошла ошибка при получении данных для обнавлении');
        }

    }
);
export const updateProdAction = createAsyncThunk(
    'product/updateProdAction',
    async ({ id, navigate, ...data }, thunkAPI) => {
        try {
            const response = await axiosInstance.put(`/product/${id}/`, data);
            navigate('/')
            return response.data;
        } catch (e) {
            return thunkAPI.rejectWithValue('Произошла ошибка при обнавлении');
        }

    }
);
export const readProductSlice = createAsyncThunk(
    'product/readProductSlice',
    async (id, thunkAPI) => {
        try {
            const response = await axiosInstance.get(`/product/${id}/`);
            return response.data;
        } catch (e) {
            return thunkAPI.rejectWithValue('Произошла ошибка при получении данных для read product on big screen');
        }

    }
);
export const getCartAction = createAsyncThunk(
    'product/getCartAction',
    async (_, thunkAPI) => {
        try {
            const response = await axiosInstance.get('/get-cart/');

            return response.data;
        } catch (e) {
            return thunkAPI.rejectWithValue('Произошла ошибка при получении карзину');
        }

    }
);
export const postCartAction = createAsyncThunk(
    'product/postCartAction',
    async ({ navigate, ...data }, thunkAPI) => {
        try {
            const response = await axiosInstance.post('/add-cart/', data);
            navigate('/');
        } catch (e) {
            return thunkAPI.rejectWithValue('Произошла ошибка при добавлении в карзину');
        }

    }
);
export const removeFromCartAction = createAsyncThunk(
    'product/removeFromCartAction',
    async (product_id, thunkAPI) => {
        try {
            const response = await axiosInstance.delete(`/remove-from-cart/${product_id}`);
            return response;
        } catch (e) {
            return thunkAPI.rejectWithValue('Произошла ошибка при удалении korzina');
        }

    }
);
export const removeAllCartAction = createAsyncThunk(
    'product/removeAllCartAction',
    async (_, thunkAPI) => {
        try {
            const response = await axiosInstance.delete('/remove-all/ ');
            return response;
        } catch (e) {
            return thunkAPI.rejectWithValue('Произошла ошибка при удалении all korzina');
        }

    }
);





