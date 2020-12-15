<!--
 * @Author: trry
 * @Date: 2020-11-09 17:00:16
 * @LastEditors: trry
 * @LastEditTime: 2020-11-09 17:23:53
 * @Description: file content
-->
<template>
    <div>
        <van-index-bar>
            <van-index-anchor index="热门" />
            <van-index-anchor index="A" />
            <van-cell title="文本" />
            <van-cell title="文本" />
            <van-cell title="文本" />

            <van-index-anchor index="B" />
            <van-cell title="文本" />
            <van-cell title="文本" />
            <van-cell title="文本" />
        </van-index-bar>
    </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
    name: 'Singer',
    setup() {
        
    }
})
</script>

<style lang="scss">
// scss
</style>