<template>
    <div class="layout-wrap">
        <div class="nav">
            <Nav v-model="hideMenu" />
        </div>
        {{ hideMenu }}
        <div class="content">
            <div class="container">
                <router-view />
            </div>
            <div class="menu">
                <Menu />
            </div>
        </div>
    </div>
</template>

<script>
import Menu from './components/Menu.vue'
import Nav from './components/Nav.vue'
export default {
    name: 'Layout',
    components: { Menu, Nav },
    data() {
        return {
            hideMenu: true
        }
    }
}
</script>

<style lang="scss" scoped>
//scss
$nav-height: 60px;
.layout-wrap {
	display: flex;
	flex-direction: column;
	.nav {
		height: $nav-height;
		box-shadow: 2px 2px 4px 0px rgba(234, 236, 240, 0.5);
		position: sticky;
		top: 0;
		z-index: 10;
		background-color: #fff;
	}
	.content {
		display: flex;
		flex: 1;
		.container {
			width: 100%;
		}
		.menu {
			width: 300px;
			height: calc(100vh - #{$nav-height});
			flex-shrink: 0;
			position: sticky;
			top: $nav-height;
			overflow-y: scroll;
			overflow-x: hidden;
			border-radius: 4px;
			box-shadow: 0 4px 5px 1px rgba(234, 236, 240, 0.5);
			order: -1;
			&::-webkit-scrollbar {
				display: none;
			}
		}
	}
}
</style>