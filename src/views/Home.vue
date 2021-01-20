<template>
  <div class="home">
    <example-list />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import HelloWorld from '@/components/HelloWorld.vue' // @ is an alias to /src
import ExampleList from '@/components/ExampleList.vue'

@Options({
  components: {
    HelloWorld,
    ExampleList
  }
})
export default class Home extends Vue {}
</script>
