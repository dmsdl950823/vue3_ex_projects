<template>
  <div class="home">
    <lists />

    <div class="router-view">
      <router-view />
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import Lists from './Lists.vue'

@Options({
	name: 'Home',
	components: {
		Lists,
	},
	methods: {
		ddd () {
			const ddd = 'dddd'
			console.log(ddd)
			// const dd = (aa: any) => aa
		}
	},
	data () {
		return {}
	}
})

export default class Home extends Vue {}
</script>

<style lang="scss" scoped>
.home {
	width: inherit;
	height: 100vh;
	display: grid;
  justify-content: center;
  align-content: center;
	border: 2px solid slateblue;
}
</style>
