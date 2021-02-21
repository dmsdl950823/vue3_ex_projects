<template>
	<div class="home">
		<example-list />

		<div class="router-view">
			<router-view />
		</div>
	</div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import ExampleList from '@/components/ExampleList.vue'

@Options({
	name: 'Home',
	components: {
		ExampleList,
	},
	methods: {
		ddd() {
			const ddd = 'dddd'
			console.log(ddd)
			// const dd = (aa: any) => aa
		},
	},
	data() {
		return {}
	},
})
export default class Home extends Vue {}
</script>

<style lang="scss" scoped>
.home {
	background: skyblue;
}
.router-view {
	border: 1px solid red;
	min-height: 20px;
}
</style>
