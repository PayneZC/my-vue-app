/*
 * @Description:  
 * @Author: 赵春鹏 605252879@qq.com
 * @Date: 2023-08-28 10:42:17
 * @LastEditors: 赵春鹏 605252879@qq.com
 * @LastEditTime: 2023-10-27 09:24:11
 * @FilePath: /my-vue-app/src/main.ts
 * Copyright (c) 2023 by ${git_name} email: ${git_email}, All Rights Reserved.
 */
import { createApp } from 'vue';
import App from './App.vue';
import ElementPlus from 'element-plus'
import router from './router/index'; // 引入router
import 'element-plus/dist/index.css'

createApp(App)
.use(router)
.use(ElementPlus)
.mount('#app')
