<template>
    <div>
        <page-header title="管理员管理" />
        <page-main>
            <el-button type="primary" icon="el-icon-plus" @click="onCreate">新增管理员</el-button>
            <search-bar>
                <el-form :model="search" size="small" label-width="100px" label-suffix="：">
                    <el-row>
                        <el-col :span="8">
                            <el-form-item label="帐号">
                                <el-input v-model="search.account" placeholder="请输入帐号，支持模糊查询" clearable @keydown.enter.native="getDataList" @clear="getDataList" />
                            </el-form-item>
                        </el-col>
                        <el-col :span="8">
                            <el-form-item label="姓名">
                                <el-input v-model="search.name" placeholder="请输入姓名，支持模糊查询" clearable @keydown.enter.native="getDataList" @clear="getDataList" />
                            </el-form-item>
                        </el-col>
                        <el-col :span="8">
                            <el-form-item label="手机号">
                                <el-input v-model="search.mobile" placeholder="请输入手机号" clearable @keydown.enter.native="getDataList" @clear="getDataList" />
                            </el-form-item>
                        </el-col>
                    </el-row>
                    <el-form-item>
                        <el-button type="primary" icon="el-icon-search" @click="getDataList">筛 选</el-button>
                    </el-form-item>
                </el-form>
            </search-bar>
            <batch-action-bar v-if="batch.enable" :data="dataList" :selection-data="batch.selectionDataList" @check-all="$refs.table.toggleAllSelection()" @check-null="$refs.table.clearSelection()">
                <el-button size="small">单个批量操作按钮</el-button>
                <el-button-group>
                    <el-button size="small">批量操作按钮组1</el-button>
                    <el-button size="small">批量操作按钮组2</el-button>
                </el-button-group>
            </batch-action-bar>
            <el-table ref="table" v-loading="loading" class="list-table" :data="dataList" border stripe highlight-current-row @sort-change="onSortChange" @selection-change="batch.selectionDataList = $event">
                <el-table-column v-if="batch.enable" type="selection" width="40" />
                <el-table-column prop="account" label="帐号" />
                <el-table-column prop="name" label="姓名" width="100" align="center" />
                <el-table-column prop="mobile" label="手机号" width="150" align="center" />
                <el-table-column label="状态" width="100" align="center">
                    <template slot-scope="scope">
                        <el-switch v-model="scope.row.status" @change="onChangeStatus($event, scope.row)" />
                    </template>
                </el-table-column>
                <el-table-column label="操作" width="200" align="center">
                    <template slot-scope="scope">
                        <el-button type="primary" size="mini" plain @click="onEdit(scope.row)">编辑</el-button>
                        <el-dropdown @command="handleMoreOperating($event, scope.row)">
                            <el-button size="mini">
                                更多操作<i class="el-icon-arrow-down el-icon--right" />
                            </el-button>
                            <el-dropdown-menu slot="dropdown">
                                <el-dropdown-item command="resetPassword">重置密码</el-dropdown-item>
                                <el-dropdown-item command="delete" divided>删除</el-dropdown-item>
                            </el-dropdown-menu>
                        </el-dropdown>
                    </template>
                </el-table-column>
            </el-table>
            <el-pagination :current-page="pagination.page" :total="pagination.total" :page-size="pagination.size" :page-sizes="pagination.sizes" :layout="pagination.layout" :hide-on-single-page="false" class="pagination" background @size-change="onSizeChange" @current-change="onCurrentChange" />
        </page-main>
        <FormDialog :id="detailFormDialog.id" :visible.sync="detailFormDialog.visible" @success="getDataList" />
    </div>
</template>

<script>
import paginationMixin from '@/mixins/pagination'
import FormDialog from './components/FormDialog/index'

export default {
    name: 'PagesExampleManagerList',
    components: {
        FormDialog
    },
    mixins: [paginationMixin],
    beforeRouteEnter(to, from, next) {
        // 进入页面时，先将当前页面的 name 信息存入 keep-alive 全局状态
        next(vm => {
            if (!vm.$store.state.settings.enableTabbar && !vm.dialogMode) {
                vm.$store.commit('keepAlive/add', 'PagesExampleManagerList')
            }
        })
    },
    beforeRouteLeave(to, from, next) {
        if (!this.$store.state.settings.enableTabbar && !this.dialogMode) {
            // 因为并不是所有的路由跳转都需要将当前页面进行缓存，例如最常见的情况，从列表页进入详情页，则需要将列表页缓存，而从列表页跳转到其它页面，则不需要将列表页缓存
            // 所以下面的代码意思就是，如果目标路由的 name 不在指定的数组内，则将当前页面的 name 从 keep-alive 中删除
            if (!['pagesExampleGeneralManagerCreate', 'pagesExampleGeneralManagerEdit'].includes(to.name)) {
                // 注意：上面校验的是路由的 name ，下面记录的是当前页面的 name
                this.$store.commit('keepAlive/remove', 'PagesExampleManagerList')
            }
        }
        next()
    },
    data() {
        return {
            // 是否开启详情弹框模式
            dialogMode: true,
            // 详情弹框
            detailFormDialog: {
                visible: false,
                id: ''
            },
            // 搜索
            search: {
                account: '',
                name: '',
                mobile: ''
            },
            // 批量操作
            batch: {
                enable: true,
                selectionDataList: []
            },
            // 列表数据
            dataList: []
        }
    },
    mounted() {
        this.getDataList()
        if (!this.dialogMode) {
            this.$eventBus.$on('get-data-list', () => {
                this.getDataList()
            })
        }
    },
    beforeDestroy() {
        if (!this.dialogMode) {
            this.$eventBus.$off('get-data-list')
        }
    },
    methods: {
        getDataList() {
            this.loading = true
            let params = this.getParams()
            this.search.account && (params.account = this.search.account)
            this.search.name && (params.name = this.search.name)
            this.search.mobile && (params.mobile = this.search.mobile)
            this.$api.get('mock/pages_example/manager/list', {
                params
            }).then(res => {
                this.loading = false
                this.dataList = res.data.list
                this.pagination.total = res.data.total
            })
        },
        onCreate() {
            if (!this.dialogMode) {
                this.$router.push({
                    name: 'pagesExampleGeneralManagerCreate'
                })
            } else {
                this.detailFormDialog.id = ''
                this.detailFormDialog.visible = true
            }
        },
        onEdit(row) {
            if (!this.dialogMode) {
                this.$router.push({
                    name: 'pagesExampleGeneralManagerEdit',
                    params: {
                        id: row.id
                    }
                })
            } else {
                this.detailFormDialog.id = row.id
                this.detailFormDialog.visible = true
            }
        },
        onChangeStatus(val, row) {
            this.$confirm(`确认${val ? '启用' : '停用'}「${row.account}」吗？`, '确认信息').then(() => {
                this.$api.post('mock/pages_example/manager/change/status', {
                    id: row.id,
                    status: val
                }).then(() => {
                    this.$message.success({
                        message: `模拟${val ? '启用' : '停用'}成功`,
                        center: true
                    })
                })
            }).catch(() => {
                row.status = !val
            })
        },
        onResetPassword(row) {
            this.$confirm(`确认将「${row.account}」的密码重置为 “123456” 吗？`, '确认信息').then(() => {
                this.$api.post('mock/pages_example/manager/password/reset', {
                    id: row.id
                }).then(() => {
                    this.$message.success({
                        message: '模拟重置成功',
                        center: true
                    })
                })
            }).catch(() => {})
        },
        onDel(row) {
            this.$confirm(`确认删除「${row.account}」管理员吗？`, '确认信息').then(() => {
                this.$api.post('mock/pages_example/manager/delete', {
                    id: row.id
                }).then(() => {
                    this.getDataList()
                    this.$message.success({
                        message: '模拟删除成功',
                        center: true
                    })
                })
            }).catch(() => {})
        },
        handleMoreOperating(command, row) {
            switch (command) {
                case 'resetPassword':
                    this.onResetPassword(row)
                    break
                case 'delete':
                    this.onDel(row)
                    break
            }
        }
    }
}
</script>

<style lang="scss" scoped>
.el-pagination {
    margin-top: 20px;
}
</style>
