/*
 * @Description:
 * @Author: 赵春鹏 605252879@qq.com
 * @Date: 2023-08-28 10:42:17
 * @LastEditors: 赵春鹏 zhaocp@dongruist.com
 * @LastEditTime: 2023-12-07 15:24:10
 * @FilePath: \my-vue-app\src\main.ts
 * Copyright (c) 2023 by ${git_name} email: ${git_email}, All Rights Reserved.
 */
import { createApp } from 'vue';
import App from './App.vue';
import ElementPlus from 'element-plus';
import router from './router/index'; // 引入router
import 'element-plus/dist/index.css';
import SurelyTable, { setLicenseKey } from '@surely-vue/table';
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/reset.css';

// setLicenseKey('bd8e9bae80c43b524960987020b1f47dT1JERVI6MDAwMDEsRVhQSVJZPTMzMjI3NzEyMDAwMDAwLERPTUFJTj1zdXJlbHkuY29vbCxLRVlWRVJTSU9OPTE=');
setLicenseKey('02bdd0a4a7ca1f45446b6ae0005316fbT1JERVI6MDAwMDAxLEVYUElSWT0zMzE5MzQ5NzYwMDAwMCxET01BSU49c3VyZWx5LXZ1ZS5naXRodWIuaW8sS0VZVkVSU0lPTj0x');

createApp(App).use(router).use(ElementPlus).use(Antd).use(SurelyTable).mount('#app');
