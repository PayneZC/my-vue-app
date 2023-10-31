<!--
 * @Description:  
 * @Author: 赵春鹏 605252879@qq.com
 * @Date: 2023-07-19 16:50:56
 * @LastEditors: 赵春鹏 605252879@qq.com
 * @LastEditTime: 2023-10-30 15:55:35
 * @FilePath: /my-vue-app/src/App.vue
 * Copyright (c) 2023 by ${git_name} email: ${git_email}, All Rights Reserved.
-->

<template>
     <el-config-provider :locale="locale">
        <router-view></router-view>
        <!-- <table-data-list/> -->
    </el-config-provider>
</template>
<script setup lang="ts">
    import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
    import { token } from '@/request/request'
    const locale = zhCn
    declare const $: any;
    $.ajaxSetup({
    headers: {
        'satoken': token
    }
    })
</script>
<style scoped>
</style>
