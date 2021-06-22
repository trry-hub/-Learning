<template>
    <div class="layout-wrap">
        <div class="nav">
            {{ hideMenu }}
            <Nav v-model="hideMenu" />
        </div>
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
.layout-wrap {
	display: flex;
	flex-direction: column;
	.nav {
		height: 60px;
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
			min-height: calc(100vh - 60px);
			flex-shrink: 0;
			position: sticky;
			border-radius: 4px;
			box-shadow: 0 4px 5px 1px rgba(234, 236, 240, 0.5);
			order: 0;
		}
	}
}
</style>