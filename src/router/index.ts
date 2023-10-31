/*
 * @Description:  
 * @Author: 赵春鹏 605252879@qq.com
 * @Date: 2023-09-21 10:41:18
 * @LastEditors: 赵春鹏 605252879@qq.com
 * @LastEditTime: 2023-10-27 15:03:35
 * @FilePath: /my-vue-app/src/router/index.ts
 * Copyright (c) 2023 by ${git_name} email: ${git_email}, All Rights Reserved.
 */
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        component: () => import('../components/TableDataList.vue'),
    },
    {
        path: '/luckysheet',
        component: () => import('../components/LuckysheetDemo.vue'),
    }
];
const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
