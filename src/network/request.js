import axios from "axios";

export function request(config) {
    const instance = axios.create({
        baseURL: 'http://localhost:9277',
        timeout: 5000,
    });

    // 添加请求拦截器
    instance.interceptors.request.use(config => {
        return config;
    }, function (error) {
        console.log(error);
    });

    // 添加响应拦截器
    instance.interceptors.response.use(response => {
        // 对响应数据做点什么
        return response.data;
    }, function (error) {
        // 对响应错误做点什么
        console.log(error);
    });

    return instance(config);
}
