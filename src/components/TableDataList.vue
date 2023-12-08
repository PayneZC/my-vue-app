<!--
 * @Description:  
 * @Author: 赵春鹏 zhaocp@dongruist.com
 * @Date: 2023-12-07 10:02:11
 * @LastEditors: 赵春鹏 zhaocp@dongruist.com
 * @LastEditTime: 2023-12-07 15:48:05
 * @FilePath: \my-vue-app\src\components\TableDataList.vue
 * Copyright (c) 2023 by ${git_name} email: ${git_email}, All Rights Reserved.
-->
<!--
 * @Description: 电子表格 列表数据
 * @Author: 赵春鹏 605252879@qq.com
 * @Date: 2023-10-24 10:34:37
 * @LastEditors: 赵春鹏 zhaocp@dongruist.com
 * @LastEditTime: 2023-12-07 10:46:50
 * @FilePath: \my-vue-app\src\components\TableDataList.vue
 * Copyright (c) 2023 by ${git_name} email: ${git_email}, All Rights Reserved.
-->
<template>
    <div>
        <!-- 模拟当前登录人的信息 -->
        <div style="display: inline-block; width: 20vw">模拟当前登录人：</div>
        <div style="display: inline-block; width: 75vw">
            <el-input v-model="loginUser" placeholder="随便输入点啥，保证唯一，将来多人协同编辑测试时得用呢" />
        </div>

        <!-- table 列表 -->
        <h1 class="header">电子表格列表</h1>
        <el-button type="primary" size="small" @click="editShow(undefined)">新增</el-button>
        <el-table :data="loadData" style="width: 98vw; margin: 10px" :border="true">
            <el-table-column type="index" width="100" label="序号" />
            <el-table-column prop="tableName" label="表格名称" width="180" />
            <el-table-column prop="creatUser" label="创建人" width="180" />
            <el-table-column prop="creatDate" label="创建时间" width="180" />
            <el-table-column prop="members" label="协同编辑人员" width="180" />
            <el-table-column prop="remark" label="相关说明" width="300" />
            <el-table-column fixed="right" label="操作">
                <template #default="scope">
                    <el-button link type="primary" size="small" @click="editShow(scope.row)">编辑</el-button>
                    <el-button link type="danger" size="small" @click="delRow(scope.row.id)">删除</el-button>
                    <el-button link type="success" size="small" @click="excelShow(scope.row)">excel</el-button>
                </template>
            </el-table-column>
        </el-table>

        <!-- 测试表格组件 -->

        <el-drawer size="70%" v-model="drawer" :before-close="handleClose" title="surely table" :modal="false">
            <super-table ref="superTableRef"></super-table>
        </el-drawer>

        <!-- dialog 表单编辑弹出窗口 -->
        <el-dialog v-model="dialogVisible" :title="title" :close-on-press-escape="false" :close-on-click-modal="false" :destroy-on-close="true">
            <h2 class="header">表单内容</h2>
            <el-form :model="formInline">
                <el-form-item label="表格名称">
                    <el-input v-model="formInline.tableName" placeholder="表格名称" clearable />
                </el-form-item>
                <el-form-item label="表单密级">
                    <el-input v-model="formInline.secret" placeholder="表单密级" clearable />
                </el-form-item>
                <el-form-item label="相关说明">
                    <el-input type="textarea" v-model="formInline.remark" placeholder="表格名称" clearable />
                </el-form-item>
                <el-form-item label="协同编辑参与人员">
                    <el-input type="textarea" v-model="formInline.members" placeholder="表格名称" clearable />
                </el-form-item>
            </el-form>
            <template #footer>
                <span class="dialog-footer">
                    <el-button @click="cancel">取消</el-button>
                    <el-button type="primary" @click="submit">提交</el-button>
                </span>
            </template>
        </el-dialog>

        <!-- 抽屉打开excel页面 -->
        <!-- <el-drawer 
      v-model="drawer"
      :before-close="handleClose"
      :size="'100%'"
      title="电子表格"
      :modal="false"
      >
        <lucky-sheet  ref="luckySheetRef"></lucky-sheet>
    </el-drawer> -->

        <el-divider content-position="left">技术不够，分割线来凑</el-divider>

        <el-button type="primary" size="small" @click="yy">想测点啥就是点这块</el-button>

        <el-button
            type="primary"
            size="small"
            @click="
                () => {
                    drawer = true;
                }
            "
        >
            表格测试
        </el-button>

        <!-- <lucky-sheet  ref="luckySheetRef"></lucky-sheet> -->
    </div>
</template>
<script lang="ts" setup>
// import LuckySheet from '@/components/LuckysheetDemo.vue'
import { ref, reactive, onMounted } from 'vue';
import type { Component, Ref } from 'vue';
import { TableData } from '@/api/TableData';
import instance from '@/request/request';
import { ElMessage, ElMessageBox } from 'element-plus';
import dayjs from 'dayjs';
import { useRouter } from 'vue-router';
import type { Router, RouteLocation } from 'vue-router';

import '@surely-vue/table/dist/index.less';
import SuperTable from './SuperTable.vue';

// ------------- data ---------------
const test = ref(false);
/**
 * 路由对象
 */
const router: Router = useRouter();
/**
 * 当前登录人数据，模拟默认给个账号
 */
let loginUser: Ref<string> = ref('oper1');
/**
 * @description 表格数据列表
 */
const loadData: Ref<TableData[]> = ref([]);
/**
 * @description 表单显示控制
 */
const dialogVisible: Ref<boolean> = ref(false);
/**
 * dialog 标题
 */
const title: Ref<string> = ref('新增电子表格');
/**
 * 表单对象
 */
let formInline: TableData = reactive({});
/**
 * excel抽屉控制
 */
let drawer: Ref<boolean> = ref(false);
/**
 * 表格组件对象
 */
const luckySheetRef: Ref<any> = ref();

const superTableRef: Ref = ref();

// ----——------ function ------------

/**
 * @description 打开excel编辑页
 * @param row 当前表格主数据
 */
const excelShow = (row: TableData): void => {
    console.log('🚀 ~ file: TableDataList.vue:115 ~ excelShow ~ row:', row);
    // TODO 这里套抽屉和dialog都有问题，甚至当前页面在渲染这个电子表格时，对当亲页面组件的样式都有大小和布局上的影响，改为router新开一个页面
    // luckySheetRef.value.init(row)
    // drawer.value = true
    const openUrl: RouteLocation & { href: string } = router.resolve({
        path: '/luckysheet',
        query: { tableId: row.id, loginUser: loginUser.value },
    });
    window.open(openUrl.href);
};
/**
 * @description 删除当前表格数据
 * @param id 表格主键ID
 */
const delRow = (id: string) => {
    ElMessageBox.confirm('确认要删除当前表格么?', '警告⚠️', {
        confirmButtonText: '当然',
        cancelButtonText: '不滴',
        type: 'warning',
    })
        .then(() => {
            instance({
                url: '/stTableData/del/' + id,
                method: 'delete',
            }).then((res: any): void => {
                if (res.data.success) {
                    ElMessage({
                        type: 'success',
                        message: '删除成功',
                    });
                    initLoadData();
                }
            });
        })
        .catch(() => {
            initLoadData();
        });
};
/**
 * @description dialog窗口关闭前触发
 * @param done
 */
const handleClose = (done: () => void) => {
    ElMessageBox.confirm('确定要离开当前页面么?').then(() => {
        done();
    });
};
/**
 * dialog 提交事件
 */
const submit = (): void => {
    let url: string;
    let method: string;
    if (formInline.id) {
        url = '/stTableData/update';
        method = 'put';
        formInline.lastUpUser = loginUser.value;
        formInline.lastUpDate = dayjs().format('YYYY-MM-DD HH:mm:ss');
    } else {
        method = 'post';
        url = '/stTableData/save';
        formInline.creatUser = loginUser.value;
        formInline.creatDate = dayjs().format('YYYY-MM-DD HH:mm:ss');
    }
    instance({
        url,
        method,
        data: formInline,
    }).then((res: any): void => {
        console.log('res---', res);
        if (res.data.success) {
            ElMessage({
                message: (formInline.id ? '修改' : '新增') + '成功',
                type: 'success',
            });
            cancel();
        } else {
            ElMessage.error('新增报错了一giao窝里giao');
        }
    });
};
/**
 * dialog 取消按钮时间
 */
const cancel = (): void => {
    dialogVisible.value = false;
    initLoadData();
};
/**
 * @description 编辑当前表格基本属性数据
 * @param row 当前表格数据
 */
const editShow = (row?: TableData) => {
    if (row) {
        console.log(row.id);
        const obj: TableData = Object.assign({}, row);
        title.value = '编辑电子表格';
        formInline = reactive(obj);
    } else {
        formInline = reactive({});
    }
    dialogVisible.value = true;
};
/**
 * @description 加载table列表
 */
const initLoadData = (): void => {
    // console.log('xxxxxxxx');
    instance({
        url: '/stTableData/list',
        method: 'get',
        params: {},
    }).then((res: any): void => {
        loadData.value = res.data;
    });
};
/**
 * @description test
 */
const yy = (): void => {
    superTableRef.value.execute('我™的');
    // console.log(window.location.href);
    // luckySheetRef.value.init();
};

// -------------- hook ---------------

onMounted(() => {
    initLoadData();
    // 加载table列表
});
</script>
<style scoped>
.header {
    text-align: center;
}
</style>
