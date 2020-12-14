<!--
 * @Author: trry
 * @Date: 2020-10-15 10:12:22
 * @LastEditors: trry
 * @LastEditTime: 2020-11-09 17:29:43
 * @Description: file content
-->
<template>
    <div class="home">
        <Nav />
        <van-tabs v-model="activeName" color="#fff" background="#D5453A" line-width="30px" line-height="2px" title-inactive-color="#fff" title-active-color="#fff">
            <van-tab title="推荐" name="a">
                <Recommend />
            </van-tab>
            <van-tab title="排行" name="b">排行</van-tab>
            <van-tab title="歌手" name="c">
                <Singer />
            </van-tab>
        </van-tabs>
    </div>
</template>

<script lang='ts'>
import { defineComponent, ref } from 'vue'

export default defineComponent({
    name: 'Home',
    setup() {
        let activeName = ref('a')
        
        return {
            activeName
        }
    }
})
</script>
<style lang='scss' scoped>
// scss
::v-deep .van-tabs__nav--line{
    padding-bottom: 6px;
}
</style>
