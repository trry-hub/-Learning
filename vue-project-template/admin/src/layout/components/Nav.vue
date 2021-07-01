<template>
    <div class="nav-wrap">
        <div class="left">Echarts 示例</div>
        <div class="user">
            <el-avatar> user </el-avatar>
            <i class="switch-slide-icon" :class="value?'el-icon-s-unfold':'el-icon-s-fold'" @click="$emit('input', !value)" />
            <i class="switch-slide-icon el-icon-s-operation" />
        </div>
    </div>
</template>

<script>
export default {
    name: 'Nav',
    props: {
        value: {
            type: Boolean
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
	.switch-slide-icon {
		font-size: 30px;
		color: #92969c;
		margin-left: 20px;
		overflow: hidden;
	}
	.user{
		height: 100%;
		display: flex;
		align-items: center;
	}
}
</style>