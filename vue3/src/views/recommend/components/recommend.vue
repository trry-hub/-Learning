<template>
    <div class="slide-wrapper">
        <div class="slide-content">
            234234测试
            <div class="slide-page" />
            <div class="slide-page" />
            <div class="slide-page" />
            <div class="slide-page" />
            <div class="parent">
                <div class="item child-0" />
                <div class="item child-1" />
                <div class="item child-1" />
                <div class="item child-0" />
                <div class="item child-0" />
                <div class="item child-0" />
                <div class="item child-1" />
            </div>
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
.parent {
	width: 100%;
	.item {
		width: 100%;
		height: 30px;
		margin: 5px 0;
		background-color: #898989;
	}
}
.parent .child-0:nth-child(even) {
	background-color: red;
}
</style>