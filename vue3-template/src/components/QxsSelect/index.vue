<template>
  <el-select class="qxs-select" v-bind="$attrs">
    <slot />
  </el-select>
</template>

<script setup>
</script>

<style scoped lang="scss">
// scss
.qxs-select {
  :deep(input) {
    border-radius: 1px;
    background: #fbfbfb;
  }
  &.el-input--samll {
    :deep(input) {
      height: 38px;
    }
  }
}
</style>
