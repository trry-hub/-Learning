<template>
    <div class="components-list">
        基础组件区
        <draggable :list="baseList" class="dragArea list-group" :sort="false" fallback-on-body :group="{name: 'people',pull:'clone',put: false}" :clone="cloneDog" @start="drag=true" @end="drag=false">
            <!-- <component :is="item.componentName" v-for="(item,index) in baseList" :key="item+index" v-bind="item.propsToData">
                {{ item.name }}
            </component> -->
            
            <el-button v-for="(item,index) in baseList" :key="index">{{ item.name }}</el-button>
        </draggable>
    </div>
</template>

<script>
import {deepClone} from '@/utils'
export default {
    name: 'BaseTemp',
    computed: {
        baseList() {
            return this.$store.state.basecomponent.baseList
        }
    },
    methods: {
        cloneDog(item) {
            const copyItem = deepClone(item)
            copyItem.id = this.$nanoid()
            return copyItem
        }
    }
}
</script>

<style scoped lang="scss">
// scss
.components-list {
}
</style>
