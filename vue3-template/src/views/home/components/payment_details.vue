<template>
    <div class="table-wrap">
        <div class="search-bar">
            <span class="label">收支明细</span>
            <div class="right">
                <qxs-select v-model="search.type" style="width: 150px; margin-right: 20px;" size="small" @change="getDataList">
                    <el-option value="" label="所有类型" />
                </qxs-select>
                <qxs-date-picker v-model="search.date" format="YYYY年MM月DD日" value-format="YYYY-MM-DD HH:mm:ss" size="small" type="daterange" range-separator="-" start-placeholder="开始日期" end-placeholder="结束日期" @change="getDataList" />
            </div>
        </div>
        <qxs-table v-loading="loading" :data="tableData" stripe highlight-current-row empty-text="暂无数据" @sort-change="onSortChange">
            <el-table-column prop="" align="center" label="时间" width="180" />
            <el-table-column prop="" align="center" label="类型" width="180" />
            <el-table-column prop="" align="center" label="备注" />
            <el-table-column prop="" align="center" label="订单金额" />
            <el-table-column prop="" align="center" label="交易状态" />
        </qxs-table>
        <el-pagination background style="margin-top: 20px;" :current-page="pagination.pageNo" :page-sizes="pagination.sizes" :page-size="pagination.pageSize" :layout="pagination.layout" :total="pagination.total" @current-change="onCurrentChange" @size-change="onSizeChange" />
    </div>
</template>

<script setup>
import { usePagination } from '@/composables/pagination'
import { globalvariable } from '@/util/global.properties'
import APIURL from '@/api/urls'
const { $api } = globalvariable
let tableData = ref([])
const search = reactive({
    type: '',
    date: []
})

const getDataList = async() => {
    const params = getParams(search)
    try {
        const res = await $api.get(APIURL.courseList, { params })
        console.log(res)
        tableData = res.data || []
    } catch (error) {
        console.log(error)
    }
}
const { loading, pagination, onSortChange, onCurrentChange, onSizeChange, getParams } = usePagination(getDataList)

</script>
<style lang="scss" scoped>
.table-wrap {
    background-color: #fff;
}
.search-bar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 14px;
    .right {
        display: flex;
        align-items: center;
    }
}
</style>
