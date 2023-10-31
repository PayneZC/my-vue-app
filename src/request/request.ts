/*
 * @Description:  
 * @Author: 赵春鹏 605252879@qq.com
 * @Date: 2023-10-24 18:20:14
 * @LastEditors: 赵春鹏 605252879@qq.com
 * @LastEditTime: 2023-10-31 15:16:11
 * @FilePath: /my-vue-app/src/request/request.ts
 * Copyright (c) 2023 by ${git_name} email: ${git_email}, All Rights Reserved.
 */
import axios from 'axios'

const baseURL = 'http://localhost:5173/api/'

const instance = axios.create({
  baseURL,
  timeout: 10000,
})

export const token = '8b0b33d9-7971-4648-b994-7d1705a85362'

// request interceptor
instance.interceptors.request.use(config => {
  // todo 测试阶段使用固定的token
  
  // 如果 token 存在
  // 让每个请求携带自定义 token 请根据实际情况自行修改
  if (token) {
    config.headers['satoken'] = token
  }
  config.headers['X-Requested-With'] = 'XMLHttpRequest'
  config.headers['Content-Type'] = 'application/json'
  return config
})

export default instance