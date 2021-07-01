<template>
    <div>
        <page-header title="加载动画" content="基于 SpinKit ，已封装成全局组件，请查看源码">
            <el-button icon="el-icon-link" @click="open('https://tobiasahlin.com/spinkit/')">SpinKit 官网</el-button>
        </page-header>
        <page-main>
            <el-form>
                <el-form-item label="类型">
                    <el-radio-group v-model="type">
                        <el-radio-button label="plane">Plane</el-radio-button>
                        <el-radio-button label="chase">Chase</el-radio-button>
                        <el-radio-button label="wave">Wave</el-radio-button>
                        <el-radio-button label="pulse">Pulse</el-radio-button>
                        <el-radio-button label="flow">Flow</el-radio-button>
                        <el-radio-button label="swing">Swing</el-radio-button>
                        <el-radio-button label="circle">Circle</el-radio-button>
                        <el-radio-button label="circle-fade">Circle Fade</el-radio-button>
                        <el-radio-button label="grid">Grid</el-radio-button>
                        <el-radio-button label="fold">Fold</el-radio-button>
                        <el-radio-button label="wander">Wander</el-radio-button>
                    </el-radio-group>
                </el-form-item>
                <el-form-item label="尺寸">
                    <el-input-number v-model="size" controls-position="right" :min="20" :max="200" :step="10" />
                </el-form-item>
                <el-form-item label="颜色">
                    <el-color-picker v-model="color" />
                </el-form-item>
            </el-form>
            <el-button @click="loading">加载 Loading（演示控制在 2 秒后关闭）</el-button>
        </page-main>
    </div>
</template>

<script>
import 'spinkit/spinkit.min.css'

export default {
    data() {
        return {
            type: 'plane',
            size: 50,
            color: '#ffffff'
        }
    },
    methods: {
        loading() {
            // 提供 3 个参数
            this.$SpinkitLoading({
                type: this.type,
                size: this.size,
                color: this.color
            })
            setTimeout(() => {
                this.$SpinkitLoading.close()
            }, 2000)
        },
        open(url) {
            window.open(url, 'top')
        }
    }
}
</script>
