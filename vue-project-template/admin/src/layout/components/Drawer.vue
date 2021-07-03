<template>
    <el-drawer title="我是标题" :visible.sync="visible" :direction="direction" :before-close="handleClose">
        <span>我来啦!</span>
    </el-drawer>
</template>

<script>
export default {
    name: 'Drawer',
    props: {
        value: {
            type: Boolean
        }
    },
    computed: {
        value: {
            get() {
                return this.value
            },
            set(newVal) {
                this.visible = newVal
            }
        }
    }
}
</script>

<style>
</style>