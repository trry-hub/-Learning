<template>
    <div>
        <page-header title="Remix Icon" content="图标由 Remix Icon 提供，更多使用技巧请前往官网查看">
            <el-button icon="el-icon-link" @click="open('https://remixicon.com/')">Remix Icon 官网</el-button>
        </page-header>
        <page-main v-for="(category, key) in icons" :key="key" :title="key" collaspe height="200px" style="padding-bottom: 5px;">
            <template>
                <el-row :gutter="20">
                    <el-col v-for="(icon, iconKey) in category" :key="iconKey" :xs="6" :sm="8" :md="3" :lg="2">
                        <el-card shadow="hover" @click.native="showInfo(key == 'Editor' ? `ri-${iconKey}` : `ri-${iconKey}-${style}`)">
                            <i :class="key == 'Editor' ? `ri-${iconKey}` : `ri-${iconKey}-${style}`" />
                        </el-card>
                    </el-col>
                </el-row>
            </template>
        </page-main>
        <fixed-action-bar>
            <el-radio-group v-model="style">
                <el-radio-button label="line">线条</el-radio-button>
                <el-radio-button label="fill">填充</el-radio-button>
            </el-radio-group>
        </fixed-action-bar>
        <el-dialog :visible.sync="dialog.visible" :show-close="false" width="500px">
            <el-row type="flex" :gutter="20">
                <el-col style="width: 100px;">
                    <div class="icon-box">
                        <i :class="dialog.iconName" />
                    </div>
                </el-col>
                <el-col style="flex: 1;">
                    <div class="icon-info">
                        <div class="title">{{ dialog.iconName }}</div>
                        <el-input :value="code">
                            <el-button slot="append" type="primary" @click="copy">复制</el-button>
                        </el-input>
                    </div>
                </el-col>
            </el-row>
            <div class="more-info">
                <el-divider content-position="left">结合 Element UI 使用场景</el-divider>
                <el-button :icon="dialog.iconName">Icon 按钮</el-button>
                <el-button @click="loading">Loading 加载，点我试试</el-button>
            </div>
        </el-dialog>
    </div>
</template>

<script>
import icons from './remix.json'
import Vue from 'vue'
import VueClipboard from 'vue-clipboard2'
Vue.use(VueClipboard)

export default {
    data() {
        return {
            style: 'line',
            icons: icons,
            dialog: {
                visible: false,
                iconName: ''
            }
        }
    },
    computed: {
        code() {
            return `<i class="${this.dialog.iconName}"></i>`
        }
    },
    methods: {
        showInfo(iconName) {
            this.dialog.iconName = iconName
            this.dialog.visible = true
        },
        copy() {
            this.$copyText(this.code).then(() => {
                this.$message.success(`复制成功：${this.code}`)
            })
        },
        loading() {
            const loading = this.$loading({
                lock: true,
                text: 'Loading',
                spinner: this.dialog.iconName,
                background: 'rgba(0, 0, 0, 0.7)'
            })
            setTimeout(() => {
                loading.close()
            }, 2000)
        },
        open(url) {
            window.open(url, 'top')
        }
    }
}
</script>

<style lang="scss" scoped>
.el-card {
    margin-bottom: 15px;
    ::v-deep .el-card__body {
        display: flex;
        justify-content: center;
        cursor: pointer;
    }
    i {
        font-size: 24px;
    }
}
::v-deep .el-dialog {
    .el-dialog__body {
        padding: 0 30px 30px;
    }
    .icon-box {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 80px;
        height: 80px;
        border: 1px solid #e0e8ef;
        cursor: pointer;
        i {
            font-size: 60px;
            color: #333;
        }
    }
    .icon-info {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        height: 100%;
        .title {
            font-size: 24px;
            font-weight: bold;
            color: #333;
        }
    }
}
</style>
