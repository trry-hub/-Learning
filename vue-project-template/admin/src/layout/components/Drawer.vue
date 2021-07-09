<template>
    <!-- :visible.sync="visibleStatus" -->
    <el-drawer v-bind="$attrs" title="我是标题" v-on="$listeners">
        <span>我来啦!</span>
    </el-drawer>
</template>

<script>
export default {
    name: 'Drawer'
}
</script>

<style>
</style>