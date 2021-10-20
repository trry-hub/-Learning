<template>
    <el-button class="qxs-button" v-bind="$attrs">
        <slot />
    </el-button>
</template>

<script setup>
</script>

<style scoped lang="scss">
// scss
.qxs-button {
    border-radius: 1px;
    background: #fbfbfb;
}
</style>
