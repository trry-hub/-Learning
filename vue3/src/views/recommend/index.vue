<template>
    <!-- 推荐 -->
    <div>
        <recommend />
        推荐
    </div>
</template>

<script lang="ts">
import Recommend from '@/views/recommend/components/recommend.vue'
import { defineComponent } from 'vue'
export default defineComponent({
    components: {
        Recommend
    },
    setup() {
        
    }
})
</script>