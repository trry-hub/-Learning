<template>
    <div>
        <page-header title="计数器" content="CountTo" />
        <page-main>
            <count-to ref="count-to" class="count-to" :start-val="form.startVal" :end-val="form.endVal" :duration="form.duration" :decimals="form.decimals" :separator="form.separator" :prefix="form.prefix" :suffix="form.suffix" :autoplay="false" />
            <el-form ref="form" :model="form" size="small" label-width="80px" style="width: 300px;">
                <el-form-item label="startVal">
                    <el-input-number v-model="form.startVal" controls-position="right" />
                </el-form-item>
                <el-form-item label="endVal">
                    <el-input-number v-model="form.endVal" controls-position="right" />
                </el-form-item>
                <el-form-item label="duration">
                    <el-input-number v-model="form.duration" controls-position="right" />
                </el-form-item>
                <el-form-item label="decimals">
                    <el-input-number v-model="form.decimals" controls-position="right" />
                </el-form-item>
                <el-form-item label="separator">
                    <el-input v-model="form.separator" />
                </el-form-item>
                <el-form-item label="prefix">
                    <el-input v-model="form.prefix" />
                </el-form-item>
                <el-form-item label="suffix">
                    <el-input v-model="form.suffix" />
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="start">开始</el-button>
                    <el-button @click="pause">暂停</el-button>
                </el-form-item>
            </el-form>
        </page-main>
    </div>
</template>

<script>
import countTo from 'vue-count-to'

export default {
    components: {
        countTo
    },
    data() {
        return {
            form: {
                startVal: 0,
                endVal: 2017,
                duration: 4000,
                decimals: 0,
                separator: ',',
                prefix: '¥ ',
                suffix: ' 元'
            }
        }
    },
    methods: {
        start() {
            this.$refs['count-to'].start()
        },
        pause() {
            this.$refs['count-to'].pauseResume()
        }
    }
}
</script>

<style lang="scss" scoped>
.count-to {
    display: inline-block;
    margin-bottom: 20px;
    font-size: 60px;
    color: #f6416c;
}
</style>
