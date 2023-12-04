/*
 * @Description:  
 * @Author: 赵春鹏 605252879@qq.com
 * @Date: 2023-09-21 10:41:18
 * @LastEditors: 赵春鹏 zhaocp@dongruist.com
 * @LastEditTime: 2023-12-04 18:54:25
 * @FilePath: \my-vue-app\src\router\index.ts
 * Copyright (c) 2023 by ${git_name} email: ${git_email}, All Rights Reserved.
 */
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
const routes: Array<RouteRecordRaw> = [
    // 测试推送
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
