<template>
    <div>
        <page-header title="创建课程" back />
        <page-main>
            <el-form ref="ruleForm" :model="ruleForm" label-suffix="：" :rules="rules" label-width="120px" class="demo-ruleForm">
                <el-row>
                    <el-col :offset="7" :span="8">
                        <el-form-item label="课程标题" prop="name">
                            <qxs-input v-model.trim="ruleForm.name" show-word-limit placeholder="请输入课程标题" size="small" :max-length="40" />
                        </el-form-item>
                        <el-form-item label="课程简介" prop="name">
                            <qxs-input v-model.trim="ruleForm.name" :rows="5" show-word-limit type="textarea" placeholder="请输入课程标题" size="small" :max-length="300" />
                        </el-form-item>
                        <el-form-item label="课程标题" prop="name">
                            <qxs-input v-model.trim="ruleForm.name" placeholder="请输入课程标题" size="small" :max-length="40" />
                        </el-form-item>
                        <el-form-item label="课程讲者" prop="name">
                            <qxs-input v-model.trim="ruleForm.name" placeholder="请输入课程标题" size="small" :max-length="40" />
                        </el-form-item>
                    </el-col>
                </el-row>
                <el-divider />
                <el-row>
                    <el-col :offset="7">
                        <el-form-item label="选择视频">
                            <file-upload action="http://www.baidu.com" :ext="['mp4','avi','wmv','rm','ram']" :size="600">
                                <qxs-button size="small">
                                    上传视频
                                    <svg-icon name="el-svg-plus" />
                                </qxs-button>
                            </file-upload>
                            <p class="">备注：可上传多个视频，建议将较长视频分段排序上传，每段视频为本课程的一小节。</p>
                        </el-form-item>
                    </el-col>
                </el-row>
            </el-form>
            <qxs-table v-loading="loading" :data="tableData" stripe highlight-current-row empty-text="暂无数据" @sort-change="onSortChange">
                <el-table-column prop="" align="center" label="节数" width="180" />
                <el-table-column prop="" align="center" label="视频名称" width="180" />
                <el-table-column prop="" align="center" label="视频时长" />
                <el-table-column prop="" align="center" label="排序" />
                <el-table-column prop="" align="center" label="操作">
                    <template #slot-scoped="scoped">
                        <el-button type="link" :href="scoped.row">预览</el-button>
                        <el-button type="text" @click="onEdit(scoped.row)">编辑</el-button>
                        <el-button type="danger" @click="onDel(scoped.row)">删除</el-button>
                    </template>
                </el-table-column>
            </qxs-table>
            <el-pagination background style="margin-top: 20px;" :current-page="pagination.pageNo" :page-sizes="pagination.sizes" :page-size="pagination.pageSize" :layout="pagination.layout" :total="pagination.total" @current-change="onCurrentChange" @size-change="onSizeChange" />
        </page-main>
        <fixed-action-bar>
            <el-button @click="$router.back()">取消</el-button>
            <el-button>保存</el-button>
            <el-button type="primary">提交上架申请</el-button>
        </fixed-action-bar>
    </div>
</template>

<script setup>
import { usePagination } from '@/composables/pagination'
import { globalvariable } from '@/util/global.properties'
import APIURL from '@/api/urls'
const { $api } = globalvariable

const ruleForm = reactive({
    name: ''
})
const rules = reactive({})

const search = reactive({
    type: '',
    date: []
})

const getDataList = async() => {
    const params = getParams(search)
    try {
        const res = await $api.get(APIURL.courseList, { params })
        console.log(res)
    } catch (error) {
        console.log(error)
    }
}

const { loading, tableData, pagination, onSortChange, onCurrentChange, onSizeChange, getParams } = usePagination(getDataList)
</script>
