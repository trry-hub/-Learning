<template>
    <div class="page-content">
        <keep-alive>
            <DraggableResizable :active="true" :resizable="true" />
            <!-- <draggable v-model="list" group="people" :animation="0" active :disabled="false" fallback-on-body @start="drag = true" @end="drag = false">
                    <component :is="item.componentName" class="draggable-item component-wrapper" :class="id === item.id ? 'active' : ''" v-bind="item.bindDataTotag" v-on="item.bindToMethodss">
                        {{ item.name }}
                    </component>
                </draggable> -->
        </keep-alive>
    </div>
</template>

<script>
export default {
    name: 'PageContent',
    data() {
        return {
            id: '',
            list: [
                {
                    name: 'container',
                    componentName: 'el-input',
                    dataTotag: {
                        placeholder: '请输入内容',
                        'v-model': 'value',
                        style: {
                            width: '100%',
                            height: '100%',
                            padding: '20px',
                            'background-color': '#fff'
                        }
                    },
                    data: {
                        value: ''
                    },
                    methods: {},
                    computed: {}
                }
            ],
            width: 0,
            height: 0,
            x: 0,
            y: 0
        }
    },
    watch: {
        list() {
            sessionStorage.setItem('list', JSON.stringify(this.list))
        }
    },
    mounted() {
        this.list = JSON.parse(sessionStorage.getItem('list')) || this.list
    },
    methods: {
        getList() {
            return this.list
        },
        onResize(x, y, width, height) {
            this.x = x
            this.y = y
            this.width = width
            this.height = height
        },
        onDrag(x, y) {
            this.x = x
            this.y = y
        }
    }
}
</script>

<style scoped lang="scss">
// scss
.page-content {
    height: 100%;
    padding: 10px;
    box-sizing: border-box;
    .component-wrapper {
        display: inline-block;
        border: 1px solid transparent;
        &active {
            border: 1px solid $theme-color;
        }
    }

    ::v-deep .draggable-item:active {
        border: 1px solid $theme-color;
        cursor: move;
    }
}
</style>
