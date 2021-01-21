<template>
  <div>
    <ul>
      <li
        v-for="item in exampleList"
        :key="item.title"
        @click="$router.push({ name: item.routeTo })"
      >
        {{ item.title }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'ExampleList',
  data () {
    return {
      exampleList: [
        { routeTo: 'tree1', title: 'tree1 - vanilla JS' },
        { routeTo: '', title: 'tree2 - Vue JS' },
        { routeTo: '', title: 'tree3 - Typescript' },
        { routeTo: '', title: 'Infinite Scroll' }
      ]
    }
  }
}
</script>

<style scoped>

</style>
