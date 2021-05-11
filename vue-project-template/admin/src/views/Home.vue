<template>
    <div class="home">
        <img alt="Vue logo" src="../assets/logo.png">
        <HelloWorld msg="Welcome to Your Vue.js App" />
    </div>
</template>

<script>
import HelloWorld from '@/components/HelloWorld.vue'

export default {
    name: 'Home',
    components: {
        HelloWorld
    },
    mounted() {
        this.getData()
    },
    methods: {
        async getData() {
            try {
                // const res = await this.$get('/login', { params: { name: 'zhangsan' } })
                // console.log(res)
            
                console.log(this.$store)
            
                const postres = await this.$post('/login', { name: 'zhangsan' })
                console.log(postres)
            } catch (error) {
                console.log(error)
                
            }
        }
    }
}
</script>
