<template>
    <div>
        <page-main>
            <div>经纬度：{{ lnglat }}</div>
            <!-- 注意这里替换高德地图的appkey -->
            <amap-marker appkey="8f7844cc502e17bb549c04c9aaadaf94" :lnglat.sync="lnglat" :height="600" />
        </page-main>
    </div>
</template>

<script>
export default {
    name: 'ComponentExampleAmap',
    inject: ['reload'],
    props: {},
    data() {
        return {
            lnglat: [120.068384, 30.290939]
        }
    },
    created() {},
    mounted() {},
    methods: {}
}
</script>

<style lang="scss" scoped>
// scss
</style>
