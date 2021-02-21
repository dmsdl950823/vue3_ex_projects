<template>
  <div id="root-list">
    <ul class="root-list">
      <li
        v-for="item in rootList"
        :key="item.title"
        @click="$router.push({ name: item.routeTo })"
      >
        {{ item.title }}
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import Scrollbar from 'smooth-scrollbar'

export default {
  name: 'RootList',
  mounted () {
    const element: HTMLElement | null = document.querySelector('#root-list')
    if (element) Scrollbar.init(element, { damping: 1 })
  },
  data () {
    return {
      rootList: [
        { routeTo: 'tree1', title: 'tree1 - vanilla JS' },
        { routeTo: '', title: 'tree2 - Vue JS' },
        { routeTo: '', title: 'tree3 - Typescript' },
        { routeTo: '', title: 'Infinite Scroll' },
        { routeTo: '', title: 'Infinite Scroll' },
        { routeTo: '', title: 'Infinite Scroll' },
        { routeTo: '', title: 'Infinite Scroll' },
        { routeTo: '', title: 'Infinite Scroll' }
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
.root-list {
  display: grid;
  grid-gap: 10px;
  height: 65vh;
  width: 100vw;
  justify-content: center;
  box-sizing: border-box;
  li {
    border: 1px solid rgba($color: white, $alpha: 0.4);
    line-height: 70px;
    width: 60vw;
    display: grid;
    justify-content: center;
    align-items: center;
    border-radius: clamp(1rem, 2.5vw, 1.5rem);
    color: #423761;
    cursor: pointer;
    background: rgb(255,255,255);
    background: radial-gradient(circle, rgba(255,255,255,0.4906512946975666) 0%, rgba(255,255,255,0.39289219105610995) 247%);
    box-shadow: 0px 2px 33px -2px #a689b1;
    &:first-child { margin-top: 30px; }
    &:last-child { margin-bottom: 30px; }
  }
}
</style>
