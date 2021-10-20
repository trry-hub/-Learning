<template>
  <page-main>
    <el-tabs v-model="dataMap.activeName">
      <el-tab-pane label="全部" name="first">
        <div class="search-bar">
          <div>
            <el-input prefix-icon="el-icon-search" class="input-box" placeholder="搜索课程名称" />
          </div>
          <div>
            <el-button type="primary" @click="$router.push({name: 'CourseCreate'})">
              <svg-icon name="el-svg-plus" /> 课程名称
            </el-button>
          </div>
        </div>
      </el-tab-pane>
      <el-tab-pane label="上架中" name="second">上架中</el-tab-pane>
      <el-tab-pane label="未上架" name="third">未上架</el-tab-pane>
    </el-tabs>
    <qxs-table v-loading="loading" :data="tableData" stripe highlight-current-row empty-text="暂无数据" @sort-change="onSortChange">
      <el-table-column prop="" align="center" label="封面" width="180" />
      <el-table-column prop="" align="center" label="课程名称" width="180" />
      <el-table-column prop="" align="center" label="创建时间" />
      <el-table-column prop="" align="center" label="平台采购" />
      <el-table-column prop="" align="center" label="课程销售" />
      <el-table-column prop="" align="center" label="销售分成" />
      <el-table-column prop="" align="center" label="销售单价" />
      <el-table-column prop="" align="center" label="状态" />
      <el-table-column prop="" align="center" label="操作">
        <template #slot-scoped="scoped">
          <el-button type="text" @click="onCheck(scoped.row)">查看</el-button>
          <el-button type="text" @click="onEdit(scoped.row)">编辑</el-button>
          <el-button type="text" @click="onDel(scoped.row)">删除</el-button>
        </template>
      </el-table-column>
    </qxs-table>
    <el-pagination background style="margin-top: 20px;" :current-page="pagination.pageNo" :page-sizes="pagination.sizes" :page-size="pagination.pageSize" :layout="pagination.layout" :total="pagination.total" @current-change="onCurrentChange" @size-change="onSizeChange" />
    <el-dialog v-model="dataMap.dialogVisible" title="Tips" width="30%" :before-close="handleClose">
      <span>This is a message</span>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="dialogVisible = false">Cancel</el-button>
          <el-button type="primary" @click="dialogVisible = false">Confirm</el-button>
        </span>
      </template>
    </el-dialog>
  </page-main>
</template>

<script setup>
import { usePagination } from '@/composables/pagination'
import { globalvariable } from '@/util/global.properties'
import APIURL from '@/api/urls'
const { $api } = globalvariable
let tableData = ref([])
const dataMap = reactive({
  activeName: 'first',
  dialogVisible: false
})
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

const handleClose = () => {
  console.log('handleClose')

}
const { loading, pagination, onSortChange, onCurrentChange, onSizeChange, getParams } = usePagination(getDataList)

</script>

<style lang="scss" scoped>
.search-bar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 15px;
  .input-box {
    width: 250px;
    :deep(.el-input__inner) {
      border-radius: 20px;
    }
  }
}
</style>
