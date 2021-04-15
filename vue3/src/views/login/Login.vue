<template>
    <div class="login">
        <!-- 页面：Login -->
    </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue'
export default defineComponent({
    name: 'Login',
    setup() {
        const age: number = 18
        console.log(age)
        
        return {
            name: 123
        }
    }
})
</script>

<style lang="scss" scoped>
// scss
.login {
	// login 页面
}
</style>
