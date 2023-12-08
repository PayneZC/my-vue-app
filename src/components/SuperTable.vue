<template>
    <el-divider content-position="left">表格分割线</el-divider>
    <s-table :columns="columns" :scroll="{ y: 300, x: 800 }" :pagination="false" :data-source="dataSource" column-drag>
        <template #bodyCell="{ column }">
            <template v-if="column.key === 'operation'">
                <a>Action</a>
            </template>
        </template>
    </s-table>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue';
import type { Ref } from 'vue';

const columns: Ref<Array<object>> = ref([
    {
        title: '姓名',
        dataIndex: 'name',
        width: 150,
        resizable: true,
        rowDrag: true,
        key: 'name',
    },
    {
        title: '年龄',
        dataIndex: 'age',
        width: 150,
        resizable: true,
        key: 'age',
    },
    {
        title: '地址1',
        dataIndex: 'address',
        width: 150,
        resizable: true,
        key: 'address1',
        editable: true,
        editableTrigger: 'click',
    },
    {
        title: '地址2',
        dataIndex: 'address',
        width: 150,
        resizable: true,
        key: 'address2',
        editable: true,
    },
    {
        title: '地址3',
        dataIndex: 'address',
        width: 150,
        resizable: true,
        key: 'address3',
    },
    {
        title: '地址4',
        dataIndex: 'address',
        width: 150,
        resizable: true,
        key: 'address4',
    },
]);

const dataSource: Ref<Array<Record<string, any>>> = ref([
    {
        key: 1,
        name: 1,
        age: 1,
        address: ``,
    },
]);

const execute = (str: string): void => {
    console.log(str);
};

onMounted(() => {
    const data: Array<any> = [];

    for (let i = 0; i < 100; i++) {
        data.push({
            key: i,
            name: `Edrward ${i}`,
            age: i + 1,
            address: `London Park no. ${i}`,
        });
    }
    dataSource.value = data;
});

defineExpose({
    execute,
});
</script>
