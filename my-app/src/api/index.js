import axios from "axios";

export const axiosInstance = axios.create({
    baseURL: process.env.REACT_APP_API,
});

axiosInstance.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('token');
        if (token) {
            config.headers['Authorization'] = `Token ${token}`
        }

        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
)