<template>
    <div class="nav-wrap">
        <div class="left">Echarts 示例</div>
        <div class="user">
            <el-avatar> user </el-avatar>
            <i class="switch-slide" :class="isHide?'el-icon-s-unfold':'el-icon-s-fold'" @click="onSwitch" />
        </div>
    </div>
</template>

<script>
export default {
    name: 'Nav',
    data() {
        return {
            isHide: false
        }
    },
    methods: {
        onSwitch() {
            this.isHide = !this.isHide
        }
    }
}
</script>

<style lang="scss" scoped>
// scss
.nav-wrap {
	display: flex;
	height: 100%;
	justify-content: space-between;
	align-items: center;
	padding: 0 30px;
	.switch-slide {
		font-size: 30px;
		color: #92969c;
		margin-left: 20px;
		overflow: hidden;
		transition: all 0.3s;
	}
}
</style>