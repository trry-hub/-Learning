<template>
    <div>
        <page-header title="SVG 动画" content="svg 文件从 SVG-Loaders 中提取，需要注意，svg 均为白色，需要增加底色才能看到效果。如需封装成加载组件，可参考 SpinkitLoading 组件">
            <el-button icon="el-icon-link" @click="open('http://samherbert.net/svg-loaders/')">SVG-Loaders 官网</el-button>
        </page-header>
        <page-main style="background-color: #34495e;">
            <svg-icon name="loading-audio" />
            <svg-icon name="loading-ball-triangle" />
            <svg-icon name="loading-bars" />
            <svg-icon name="loading-circles" />
            <svg-icon name="loading-grid" />
            <svg-icon name="loading-hearts" />
            <svg-icon name="loading-oval" />
            <svg-icon name="loading-puff" />
            <svg-icon name="loading-rings" />
            <svg-icon name="loading-spinning-circles" />
            <svg-icon name="loading-tail-spin" />
            <svg-icon name="loading-three-dots" />
        </page-main>
    </div>
</template>

<script>
export default {
    methods: {
        open(url) {
            window.open(url, 'top')
        }
    }
}
</script>

<style lang="scss" scoped>
.svg-icon {
    margin: 20px;
    font-size: 50px;
}
</style>
