<template>
  <article class="comp-wrapper">
    <div
      class="root-list-wrap"
      id="root-list"
    >
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
  </article>
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
.comp-wrapper {
  display: grid;
  justify-content: center;
  align-items: center;
  height: 90vh;
  border: 1px solid salmon;
  .root-list-wrap {
    padding: 10px 20px;
    overflow: auto;
    height: 90%;
    border: 1px solid chartreuse;
    .root-list {
      display: grid;
      grid-gap: 15px;
      align-items: center;
      margin: 5vh;
      box-sizing: border-box;
      // border: 1px solid slateblue;
      li {
        border: 1px solid rgba($color: white, $alpha: 0.4);
        line-height: 70px;
        width: 60vw;
        display: grid;
        justify-content: center;
        align-items: center;
        border-radius: clamp(1.5rem, 2.5vw, 2rem);
        color: #884c9b;
        cursor: pointer;
        background: rgb(255,255,255);
        background: radial-gradient(circle, rgba(255,255,255,0.4906512946975666) 0%, rgba(255,255,255,0.39289219105610995) 247%);
        box-shadow: 0px 2px 33px -2px #bfa4c9;
        // transition: background .2s ease;
        overflow: hidden;
        position: relative;
        &:last-child {
          margin-bottom: 12.5vh;
        }

        // @mixin () {}

        &:after {
          content: '';
          position: absolute;
          top: 0; left: 100%;
          width: 100%;
          background: rgb(147, 73, 243);
          height: 100%;
          border-radius: 50px;
          transition: all .4s ease;
          z-index: -1;
          opacity: 0.6;
        }

        &:hover {
          &:after {
            left: 0;
            border-radius: 0px;
            opacity: 0.2;
            background: rgb(235, 135, 165);
          }
        }
      }
    }
  }
}
</style>
