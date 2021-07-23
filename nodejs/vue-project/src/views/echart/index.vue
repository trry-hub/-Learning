<template>
    <div>
        123
        <!-- <Echarts /> -->
        <!-- <line-bar-chart /> -->
        <draggable v-model="myArray" group="people" animation="300" @start="drag=true" @end="drag=false">
            <div v-for="element in myArray" :key="element.id">{{ element.name }}</div>
        </draggable>
    </div>
</template>

<script>
export default {
    name: 'Echarts',
    data() {
        return {
            myArray: [{
                name: 'nihao1',
                id: 'id1'
            }, {
                name: 'nihao2',
                id: 'id2'
            }, {
                name: 'nihao3',
                id: 'id3'
            }, {
                name: 'nihao4',
                id: 'id4'
            }]
        }
    },
    mounted() {
    },
    methods: {}
}
</script>

<style lang="scss" scoped>
// scss
</style>