<template>
    <div class="home">
        <img alt="Vue logo" src="../assets/logo.png">
        <HelloWorld msg="Welcome to Your Vue.js App" />
    </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
    name: 'Home',
    components: {
        HelloWorld
    },
    mounted() {
        let nihao = 123
        const a = 1
        nihao = 456
        console.log(nihao, a)
    }
}
</script>
