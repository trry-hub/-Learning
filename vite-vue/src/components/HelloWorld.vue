<template>
    <h1>{{ msg }}</h1>
    <button @click="inCrement"> count is: </button>
    <p>{{ count }}</p>
</template>

<script lang="ts" setup>
import { defineComponent, computed } from 'vue'
import { useStore } from 'vuex'
import { key } from '../store'

export default defineComponent({
	name: 'HelloWorld',
	props: {
		msg: {
			type: String,
			default: '',
		},
	},
	setup() {
		const store = useStore(key)

		console.log(store)

		const count = computed(() => store.state.count)

		return {
			count,
			inCrement: () => store.commit('increment'),
		}
	},
})
</script>