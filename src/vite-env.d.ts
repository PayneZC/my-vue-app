/*
 * @Description:  
 * @Author: 赵春鹏 605252879@qq.com
 * @Date: 2023-08-28 10:38:39
 * @LastEditors: 赵春鹏 605252879@qq.com
 * @LastEditTime: 2023-10-26 11:19:53
 * @FilePath: /my-vue-app/src/vite-env.d.ts
 * Copyright (c) 2023 by ${git_name} email: ${git_email}, All Rights Reserved.
 */
/// <reference types="vite/client" />
declare module 'cannon';
declare module '@/../lib/vform/designer.umd.js';

declare module '*.vue' {
    import type { DefineComponent } from 'vue';
    const component: DefineComponent<{}, {}, any>;
    export default component;
}
declare module 'vue-video-player';
declare module 'video.js';
declare module 'three-onevent.js';
declare module "element-plus/dist/locale/zh-cn.mjs";