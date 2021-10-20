<template>
  <el-table class="qxs-table" v-bind="$attrs" style="width: 100%;">
    <slot />
  </el-table>
</template>

<script setup>
</script>

<style lang="scss" scoped>
.qxs-table {
  border: 1px solid #eee;
  :deep(th.el-table__cell) {
    background-color: rgba($color: #eee, $alpha: 0.6);
    color: #5a5a5a;
  }
}
</style>
