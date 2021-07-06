<template>
    <div class="nav-wrap">
        <div class="left">Echarts 示例</div>
        <div class="user">
            <el-avatar> user </el-avatar>
            <svg-icon class="switch-slide-icon" name="layout" :style="value?`transform: rotate3d(0, 1, 0, 180deg)`:``" @click="$emit('input', !value)" />
            <i class="switch-slide-icon el-icon-edit-outline" @click="$emit('open-drawer', true)" />
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
		color: #ddd;
		margin-left: 20px;
		transition: all 0.3s;
		cursor: pointer;
		&:hover {
			color: #333;
		}
	}
	.el-icon-edit-outline {
		font-weight: 500;
	}
	.user {
		height: 100%;
		display: flex;
		align-items: center;
	}
}
</style>