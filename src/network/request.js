import axios from "axios";

export function request(config) {
    const instance = axios.create({
        baseURL: 'https://some-domain.com/api/',
        timeout: 1000,
        headers: {'X-Custom-Header': 'foobar'}
    });

    // 添加请求拦截器
    instance.interceptors.request.use(config => {
        return config;
    }, function (error) {
        console.log(error);
    });

    // 添加响应拦截器
    axios.interceptors.response.use(response => {
        // 对响应数据做点什么
        return response;
    }, function (error) {
        // 对响应错误做点什么
        console.log(error);
    });
}