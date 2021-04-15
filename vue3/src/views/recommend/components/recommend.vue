<template>
    <div class="slide-wrapper">
        <div class="slide-content">
            234234测试
            <div class="slide-page" />
            <div class="slide-page" />
            <div class="slide-page" />
            <div class="slide-page" />
        </div>
    </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import BetterScroll from 'better-scroll'

export default defineComponent({
    name: 'Recommend',
    setup() {
        new BetterScroll('.bs-wrapper', {
            scrollX: true,
            scrollY: false,
            slide: {
                threshold: 100
            },
            momentum: false,
            bounce: false,
            stopPropagation: true
        })
    }
})
</script>

<style lang="scss">
// scss
</style>