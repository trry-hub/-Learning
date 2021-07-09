<template>
    <div>
        <template v-if="isChildKey(item,'children')">
            <el-submenu :index="item.path">
                <template slot="title">
                    <svg-icon class="icon" :name="item.meta.icon" />
                    <span>{{ item.meta.title }}</span>
                </template>
                <el-menu-item v-for="itemChild in item.children" :key="itemChild.path" :index="item.path+'/'+itemChild.path">
                    <template v-if="isChildKey(itemChild, 'meta')">
                        <svg-icon class="icon" :name="itemChild.meta.icon" />
                        <span>{{ itemChild.meta.title }}</span>
                    </template>
                </el-menu-item>
            </el-submenu>
        </template>
        <el-menu-item v-else-if="isChildKey(item,'meta')&&item.meta.sideBar" :index="item.path">
            <svg-icon class="icon" :name="item.meta.icon" />
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
            default: '/'
        }
    },
    mounted() {
        console.log('mounted', this.item)
    },
    methods: {
        // 验证meta中是否包含某个字段
        isChildKey(data, key) {
            console.log(data[key])
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
::v-deep .el-menu-item,
::v-deep .el-menu-item span,
::v-deep .el-submenu__title,
::v-deep .el-submenu__title span {
	vertical-align: inherit;
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
}
.el-menu-vertical {
	border: none;
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