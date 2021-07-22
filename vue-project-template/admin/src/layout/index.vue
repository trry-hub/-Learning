<template>
    <div class="layout-wrap">
        <div class="nav">
            <Nav v-model="hideMenu" @open-drawer="showOption = true" />
        </div>
        <div class="content">
            <div class="container">
                <transition name="slide-fade">
                    <router-view />
                </transition>
            </div>
            <div class="menu" :style="`order:${hideMenu?-1:1}`">
                <el-menu :collapse="isCollapse" router :default-active="$route.path" class="el-menu-vertical" unique-opened>
                    <template v-for="item in $store.getters['menu/GETROUTES']">
                        <SideBarItem :key="item.path" :item="item" />
                    </template>
                </el-menu>
            </div>
        </div>
        <Drawer v-model="showOption" :visible.sync="showOption" :direction="hideMenu?'rtl':'ltr'" />
    </div>
</template>

<script>
import SideBarItem from './components/SideBarItem.vue'
import Nav from './components/Nav.vue'
import Drawer from './components/Drawer.vue'

export default {
    name: 'Layout',
    components: { SideBarItem, Nav, Drawer },
    data() {
        return {
            hideMenu: true,
            showOption: false,
            isCollapse: false
        }
    }
}
</script>

<style lang="scss" scoped>
//scss
.layout-wrap {
	display: flex;
	flex-direction: column;
	.nav {
		height: $layout-header-height;
		box-shadow: 2px 2px 4px 0px rgba(234, 236, 240, 0.5);
		position: sticky;
		top: 0;
		z-index: 1001;
		background-color: #fff;
	}
	.content {
		display: flex;
		flex: 1;
		.container {
			width: 100%;
			padding: 20px;
			box-sizing: border-box;
		}
		.menu {
			height: calc(100vh - #{$layout-header-height});
			flex-shrink: 0;
			position: sticky;
			top: $layout-header-height;
			overflow-y: scroll;
			overflow-x: hidden;
			box-shadow: 0 4px 5px 1px rgba(234, 236, 240, 0.5);
			order: -1;
			transition: all 0.3s;
			&::-webkit-scrollbar {
				display: none;
			}
		}
	}
}
::v-deep .el-menu {
	border-right: none;
}
/* 可以设置不同的进入和离开动画 */
/* 设置持续时间和动画函数 */
.slide-fade-enter-active {
	transition: all 0.4s 0.45s ease;
}
.slide-fade-leave-active {
	transition: all 0.4s ease;
}
.slide-fade-enter,
.slide-fade-leave-to {
	opacity: 0;
}
.slide-fade-enter {
	transform: translateX(20px);
}
.slide-fade-leave-to {
	transform: translateX(-20px);
}
</style>