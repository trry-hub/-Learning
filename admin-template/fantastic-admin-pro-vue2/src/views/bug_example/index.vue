<template>
    <div>
        <page-header title="错误日志" content="错误日志通过 Vue 提供的全局错误钩子 errorHandler 进行拦截，如果需要上报给后端，需自行实现">
            <el-button icon="el-icon-link" @click="open('https://cn.vuejs.org/v2/api/index.html#errorHandler')">Vue errorHandler 说明</el-button>
        </page-header>
        <page-main>
            <div v-if="env != 'development'">
                <div v-if="!$store.state.settings.enableErrorLog">请到 seeting.js 里打开错误日志功能，再进入该页面查看演示</div>
                <div v-else>
                    <el-button type="danger" @click="bugTest(1)">模拟触发错误1</el-button>
                    <el-button type="danger" @click="bugTest(2)">模拟触发错误2</el-button>
                    <el-table :data="errorLogInfo" border>
                        <el-table-column label="错误信息" width="200" align="center">
                            <template slot-scope="scope">
                                <div>{{ scope.row.err.message }}</div>
                                <el-tag type="danger">{{ scope.row.info }}</el-tag>
                            </template>
                        </el-table-column>
                        <el-table-column label="错误详情">
                            <template slot-scope="scope">
                                <div style="white-space: pre-wrap;">{{ scope.row.err.stack }}</div>
                            </template>
                        </el-table-column>
                        <el-table-column label="错误链接" width="200" align="center">
                            <template slot-scope="scope">
                                <el-link :href="scope.row.url" target="_blank">{{ scope.row.url }}</el-link>
                            </template>
                        </el-table-column>
                        <el-table-column prop="datetime" label="时间" width="200" align="center" />
                    </el-table>
                </div>
            </div>
            <div v-else>当前为开发环境，该功能关闭演示</div>
        </page-main>
    </div>
</template>

<script>
export default {
    data() {
        return {
            env: process.env.NODE_ENV,
            errorLog: ''
        }
    },
    computed: {
        errorLogInfo() {
            let errorLog = JSON.parse(this.errorLog || null)
            return [errorLog]
        }
    },
    methods: {
        bugTest(type) {
            this.$nextTick(() => {
                this.errorLog = sessionStorage.getItem('errorLog')
            })
            switch (type) {
                case 1:
                    // eslint-disable-next-line no-undef
                    this.a = a
                    break
                case 2:
                    this.testMethod()
                    break
            }
        },
        open(url) {
            window.open(url, 'top')
        }
    }
}
</script>
