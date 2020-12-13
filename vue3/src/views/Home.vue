<!--
 * @Author: trry
 * @Date: 2020-11-29 21:27:08
 * @LastEditors: trry
 * @LastEditTime: 2020-11-29 22:00:42
 * @Description: file content
-->
<template>
    <div class="home">
        <img alt="Vue logo" src="../assets/logo.png">
        <div>{{ count }} --- {{ obj.name }}</div>
        <button @click="onClick">按钮</button>
        <tab />
        <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" />
    </div>
</template>

<script lang='ts' scoped>
import { defineComponent, ref, reactive } from 'vue'
// import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src

export default defineComponent({
    name: 'Home',
    setup() {
        const count = ref(0)
        const obj = reactive({ name: 'xiaoli' })
        
        /**
         * ref 返回一个对象 使用时可用 .value 获取值以及更改
         * reactive 
         */
        function onClick() {
            console.log(count)
            
            count.value = count.value + 1
            
            console.log(count.value)
        }
        
        return {
            count,
            obj,
            onClick
        }
    }
})
</script>
<style lang='scss' scoped>
// scss
</style>
