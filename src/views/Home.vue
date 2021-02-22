<template>
  <div class="home">
    <section :class="['router-wrap', { '-home': !isHome }]">
      <lists class="router-list" />

      <article class="router-view">
        <router-view />
      </article>
    </section>
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
	watch: {
		'$route' (curr) {
			this.isHome = curr === 'home'
		}
	},
	created () {
		console.log(this.$route)
	},
	methods: {
	},
	data () {
		return {
			isHome: true
		}
	}
})

export default class Home extends Vue {}
</script>

<style lang="scss" scoped>
.home {
	width: 100vw;
	height: 100vh;
	overflow: hidden;
	.router-wrap {
		display: flex;
		align-items: center;
		&.-home {
			transition: transform .3s ease; 
			transform: translateX(-100vw);
		}
		> * {
			// flex: 0 0 50vw;
			flex: 0 0 100vw;
			height: 100vh;
			border: 1px solid cadetblue;
		}
	}
}
</style>
