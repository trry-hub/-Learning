<template>
    <div>
        <page-header title="SVG Icon" content="除了使用 Element-UI 提供的图标外，你还可以使用自己的 SVG 图标" />
        <page-main>
            <svg-icon name="example-emotion-line" class="example-icon" />
            <svg-icon name="example-emotion-laugh-line" class="example-icon" />
            <svg-icon name="example-emotion-unhappy-line" class="example-icon" />
            <p>也支持彩色 SVG Icon</p>
            <svg-icon name="example-crown" class="example-icon" />
            <svg-icon name="example-star" class="example-icon" />
            <svg-icon name="example-vip" class="example-icon" />
            <p>使用方法：</p>
            <ol>
                <li>上 <a href="https://www.iconfont.cn/" target="_blank">Iconfont</a> 下载需要的 svg 图标</li>
                <li>将 svg 文件放入 .src/assets/icons 目录，文件名即为 name</li>
            </ol>
        </page-main>
    </div>
</template>

<style scoped>
.example-icon {
    font-size: 48px;
}
</style>
