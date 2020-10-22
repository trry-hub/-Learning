<template>
    <div class="hello">
        <van-button color="#7232dd">单色按钮</van-button>
        <van-button color="#7232dd" plain>单色按钮</van-button>
        <van-button color="linear-gradient(to right, #ff6034, #ee0a24)">
            渐变色按钮
        </van-button>
    </div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from 'vue'

export default defineComponent({
    name: 'tab',
    setup() {
        onMounted(() => {
            console.log(this)
            
        })
    }
})
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.hello {
    font-size: 64px;
}
</style>
