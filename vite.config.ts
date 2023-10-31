/*
 * @Description:  
 * @Author: 赵春鹏 605252879@qq.com
 * @Date: 2023-07-17 17:21:58
 * @LastEditors: 赵春鹏 605252879@qq.com
 * @LastEditTime: 2023-10-25 08:59:36
 * @FilePath: /my-vue-app/vite.config.ts
 * Copyright (c) 2023 by ${git_name} email: ${git_email}, All Rights Reserved.
 */
import { defineConfig, CommonServerOptions } from 'vite';
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'


// https://vitejs.dev/config/
export default defineConfig({
    plugins: [vue()],
    resolve: {
        alias: {
            '@': resolve(__dirname, 'src'), //@路径别名
        },
        extensions: ['.js', '.vue', '.json', '.ts'], //使用路径别名时想要省略的后缀名，可以自己增减
    },
    optimizeDeps: {
        include: ['@/../lib/vform/designer.umd.js'],
    },
    build: {
        /* 其他build生产打包配置省略 */
        //...
        commonjsOptions: {
            include: /node_modules|lib/,
        },
    },
    server: {
        proxy: {
            '/api': {
                target: 'http://127.0.0.1:8085',// 实际后台地址
                changeOrigin: true, // 需要代理跨域
                rewrite: (path) => path.replace(/^\/api/, ''),// 重写路径
            }
        }
    }
})
