<template>
    <el-input class="qxs-input" v-bind="$attrs" />
</template>

<script setup>
</script>

<style scoped lang="scss">
// scss
.qxs-input {
    :deep(input) {
        border-radius: 3px;
    }
    &.el-input--small {
        :deep(input) {
            border-radius: 3px;
            height: 38px;
            line-height: 38px;
        }
    }
}
</style>
