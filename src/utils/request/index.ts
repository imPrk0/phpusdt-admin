/**
 * 请求工具类
 * @author Prk<code@imprk.me>
 */

import axios from 'axios';

const request = axios.create({
    baseURL: '/admin/api.php',
    timeout: 15000
});

request.interceptors.request.use(
    (config) => {
        return config;
    },
    (error: Error): Promise<void> => {
        return Promise.reject(error);
    }
);

request.interceptors.response.use(
    (response) => {
        if (0 <= response.data.code) return response.data;
        return Promise.reject(response);
    },
    (error: Error): Promise<void> => {
        return Promise.reject(error);
    }
);

export default request;
