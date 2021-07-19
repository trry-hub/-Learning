<template>
    <div class="menu-item-wrap">
        <template v-if="isChildKey(item,'children')">
            <el-submenu :index="item.path">
                <template slot="title">
                    <svg-icon v-if="isChildKey(item.meta,'icon')" class="icon" :name="item.meta.icon" />
                    <span>{{ item.meta.title }}</span>
                </template>
                <template v-for="itemChild in item.children">
                    <SideBarItem :key="itemChild.path" :item="itemChild" :base-path="item.path+'/'" />
                </template>
            </el-submenu>
        </template>
        <el-menu-item v-else-if="isChildKey(item,'meta')&&item.meta.sideBar" :index="basePath+item.path">
            <svg-icon v-if="isChildKey(item.meta,'icon')" class="icon" :name="item.meta.icon" />
            <span>{{ item.meta.title }}</span>
        </el-menu-item>
    </div>
</template>

<script>
export default {
    name: 'SideBarItem',
    props: {
        item: {
            type: Object,
            default: Object
        },
        basePath: {
            type: String,
            default: ''
        }
    },
    methods: {
        // 验证meta中是否包含某个字段
        isChildKey(data, key) {
            try {
                return !!data[key]
            } catch (error) {
                return false
            }
        }
    }
}
</script>

<style lang="scss" scoped>
//scss
.menu-item-wrap {
	.el-menu-item {
		width: 300px;
	}
}
::v-deep .el-menu-item,
::v-deep .el-menu-item span,
::v-deep .el-submenu__title,
::v-deep .el-submenu__title span {
	vertical-align: inherit;
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
}
.icon {
	font-size: 18px;
	margin-right: 5px;
	width: 24px !important;
}
.el-menu-item.is-active,
.el-submenu .el-menu--inline .el-menu-item.is-active {
	background-color: rgba(65, 184, 131, 0.2);
}
</style>