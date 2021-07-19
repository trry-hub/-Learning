<template>
    <div class="page-content">
        <keep-alive>
            <draggable v-model="list" group="people" :animation="0" :disabled="false" fallback-on-body @start="drag=true" @end="drag=false">
                <component :is="item.componentName" v-for="(item,index) in list" :key="item.id+index" class="component-wrapper" :class="id === item.id?'active':''" v-bind="item.propsToData">
                    {{ item.name }}{{ item.id }}
                </component>
            <!-- <div v-for="element in list" :key="element.id">{{ element.name }}</div> -->
            </draggable>
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
                    componentName: 'div',
                    children: <PageContent/>,
                    propsToData: {
                        placeholder: '请输入内容',
                        'v-model': 'value',
                        style: {
                            width: '100%',
                            // minHeight: '100vh',
                            padding: '20px',
                            backgroundColor: '#ff6700'
                        }
                    },
                    data: {
                        value: ''
                    },
                    methods: {},
                    computed: {}
                }
            ]
        }
    },
    watch: {
        // 'layoutComponent': {
        //     handler(newVal, oldVal) {
        //         console.log(newVal, oldVal)

        //     },
        //     deep: true
        // }
    },
    mounted() {
		
    },
    methods: {

    }
}
</script>

<style scoped lang="scss">
// scss
.page-content {
	padding: 10px;
	box-sizing: border-box;
	.component-wrapper{
		display: inline-block;
		&active{
			border: 1px solid $theme-color;
		}
	}
}
</style>
