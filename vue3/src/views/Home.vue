<template>
    <div class="home">
        <Nav />
        <van-tabs v-model="activeName" color="#fff" background="#D5453A" line-width="30px" line-height="2px" title-inactive-color="#fff" title-active-color="#fff">
            <van-tab title="推荐" name="a">
                <recommend />
            </van-tab>
            <van-tab title="排行" name="b">排行</van-tab>
            <van-tab title="歌手" name="c">
                <Singer />
            </van-tab>
        </van-tabs>
    </div>
</template>

<script lang='ts' scoped>
import { defineComponent, ref } from 'vue'
import Recommend from './recommend/components/recommend.vue'
// import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src

export default defineComponent({
    name: 'Home',
    components: {
        Recommend
    },
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
