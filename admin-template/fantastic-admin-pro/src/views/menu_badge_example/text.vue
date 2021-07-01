<template>
    <div>
        <page-header title="文字标记" content="搭配 Vuex 可实现动态设置。请控制文字展示长度，避免导航标记覆盖导航标题" />
        <page-main>
            <div>当前 badge 值：'{{ $store.state.menuBadge.text }}'</div>
            <el-button @click="change">切换</el-button>
            <el-button @click="clear">清空</el-button>
        </page-main>
    </div>
</template>

<script>
export default {
    methods: {
        change() {
            this.$store.commit('menuBadge/setText', this.$store.state.menuBadge.text == '热门' ? '促销' : '热门')
        },
        clear() {
            this.$store.commit('menuBadge/setText')
        }
    }
}
</script>
