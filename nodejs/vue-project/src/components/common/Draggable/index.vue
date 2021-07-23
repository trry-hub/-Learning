<template>
    <draggable class="draggable" v-bind="$attrs" v-on="$listeners">
        <transition-group>
            <slot />
        </transition-group>
    </draggable>
</template>

<script>
import draggable from 'vuedraggable'
export default {
    name: 'Draggable',
    components: {
        draggable
    },
    props: {
        arr: {
            type: Array,
            default: Array
        }
    },
    data() {
        return {

        }
    },
    computed: {

    },
    watch: {

    },
    created() {

    },
    mounted() {

    },
    methods: {

    }
}
</script>

<style scoped lang="scss">
// scss
.draggable {
}
</style>
