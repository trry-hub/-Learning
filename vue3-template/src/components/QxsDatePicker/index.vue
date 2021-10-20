<template>
    <div class="qxs-date-picker"><el-date-picker style="border-radius: 0; background: #fbfbfb;" v-bind="$attrs" /></div>
</template>

<script setup>
</script>

<style lang="scss" scoped>
// scss
.qxs-date-picker {
    font-size: 0;
    display: inline-block;
    background-color: #ff6700;
    :deep(.el-range-input) {
        background-color: transparent;
    }
}
</style>
