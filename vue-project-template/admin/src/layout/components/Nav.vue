<template>
    <div class="nav-wrap">
        <div class="left" @click="$router.push({name: 'Index'})">Echarts 示例</div>
        <div class="user">
            <el-avatar> user </el-avatar>
            <svg-icon class="switch-slide-icon" name="layout" :style="value?`transform: rotate3d(0, 1, 0, 180deg)`:``" @click="$emit('input', !value)" />
            <svg-icon class="switch-slide-icon" name="el-icon-edit-outline" @click="$emit('open-drawer', true)" />
            <svg-icon class="switch-slide-icon" :name="isFullScreen?'exit-screen':'full-screen'" @click="onScreen" />
        </div>
    </div>
</template>

<script>
import {toFullScreen, exitFullscreen} from '@/utils'
export default {
    name: 'Nav',
    props: {
        value: {
            type: Boolean
        }
    },
    computed: {
        isFullScreen() {
            return this.$store.state.global.isFullScreen
        }
    },
    methods: {
        onScreen() {
            if (this.isFullScreen) {
                exitFullscreen()
            } else {
                toFullScreen()
            }
        }
    }
}
</script>

<style lang="scss" scoped>
// scss
.nav-wrap {
	width: 100%;
	height: 100%;
	display: flex;
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