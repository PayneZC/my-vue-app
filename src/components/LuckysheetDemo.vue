<!--
 * @Description:  
 * @Author: 赵春鹏 605252879@qq.com
 * @Date: 2023-10-13 09:04:13
 * @LastEditors: 赵春鹏 zhaocp@dongruist.com
 * @LastEditTime: 2023-12-08 17:33:44
 * @FilePath: \my-vue-app\src\components\LuckysheetDemo.vue
 * Copyright (c) 2023 by ${git_name} email: ${git_email}, All Rights Reserved.
-->
<template>
    <div>
        <div id="luckysheet" style="width: calc(100vw - 24px); height: calc(100vh - 16px)"></div>
        <!-- <el-button size="small" type="primary" @click="test">测试</el-button> -->
    </div>
</template>
<script setup lang="ts">
import { ref, onMounted, nextTick } from 'vue';
import { useRouter } from 'vue-router';
import type { Router, LocationQuery } from 'vue-router';
import options from '@/components/SheetOptions';

/**
 * 系统地址
 */
const BaseUrl = window.location.hostname + ':8085';

const router: Router = useRouter();

/**
 * @description: 电子表格初始化
 * @author: zhaocp@neuray.com
 * @Date: 2023-10-18 16:21:41
 */
const init = (row: any): void => {
    console.log('🚀 ~ file: LuckysheetDemo.vue:130 ~ init ~ row:', row);
    const wsUrl = 'ws://' + BaseUrl + '/sheet/' + Math.round(Math.random() * 100) + '/' + row.tableId;

    const config: Record<string, any> = Object.assign({}, options);
    config.container = 'luckysheet';
    config.gridKey = row.tableId;
    config.loadUrl = '/api/stSheetData/load';
    config.loadSheetUrl = '/api/stSheetData/loadSheet';
    config.allowUpdate = true;
    config.updateUrl = wsUrl;
    luckysheet.create(config);
};
const test = () => {
    console.table('获取到 AllSheets:::', luckysheet.getAllSheets());
    const sheet: any = luckysheet.getLuckysheetfile();
    console.log('获取到 luckysheetfile:::::', sheet);
    console.log('获取到 luckysheetfile:::::', sheet);
    sheet[0].data.push([
        {
            t: 'v',
            i: '0',
            v: {
                v: 233,
                ct: { fa: 'General', t: 'n' },
                m: '233',
            },
            r: 0,
            c: 1,
        },
    ]);
    // init({})
};

onMounted(() => {
    console.log('····进入····onMounted········');
    nextTick(() => {
        const query: LocationQuery = router.currentRoute.value.query;
        console.log('tableId', query.tableId);
        console.log('loginUser', query.loginUser);
        init({
            tableId: query.tableId,
            loginUser: query.loginUser,
        });
    });
});
/**
 * 暴露方法
 */
defineExpose({
    init,
});
</script>
<style>
.luckysheet-input-box {
    z-index: 99999 !important;
}
/* .luckysheet-cell-input {
  z-index: 99999!important;
} */
</style>
