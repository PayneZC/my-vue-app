/*
 * @Description:
 * @Author: 赵春鹏 605252879@qq.com
 * @Date: 2023-10-24 18:20:14
 * @LastEditors: 赵春鹏 zhaocp@dongruist.com
 * @LastEditTime: 2023-12-22 17:06:09
 * @FilePath: \my-vue-app\src\request\request.ts
 * Copyright (c) 2023 by ${git_name} email: ${git_email}, All Rights Reserved.
 */
import axios from 'axios';
const baseURL = window.location.href + 'api';

const instance = axios.create({
    baseURL,
    timeout: 10000,
});

export const token = 'c03a4263-3cd4-45bf-b2f6-97de2e4b145f';

// request interceptor
instance.interceptors.request.use(config => {
    // 如果 token 存在
    // 让每个请求携带自定义 token 请根据实际情况自行修改
    if (token) {
        config.headers['satoken'] = token;
    }
    config.headers['X-Requested-With'] = 'XMLHttpRequest';
    config.headers['Content-Type'] = 'application/json';
    return config;
});

export default instance;
