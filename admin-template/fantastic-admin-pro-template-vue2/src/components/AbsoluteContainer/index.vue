<template>
    <div class="absolute-container">
        <slot />
    </div>
</template>

<script>
export default {
    name: 'AbsoluteContainer',
    props: {},
    data() {
        return {}
    },
    mounted() {},
    methods: {}
}
</script>

<style lang="scss" scoped>
.absolute-container {
    position: absolute;
    width: 100%;
    transition: 0.3s;
}
.main-container {
    .breadcrumb-container + .main .absolute-container {
        height: calc(100% - #{$g-breadcrumb-height});
    }
    .tabbar-container + .breadcrumb-container + .main .absolute-container {
        height: calc(100% - #{$g-tabbar-height} - #{$g-breadcrumb-height});
    }
}
</style>
