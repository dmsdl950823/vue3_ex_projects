import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
// import { createRouter, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '',
    name: 'home',
    component: () => import(/* webpackChunkName: "home" */ './views/Home.vue'),
    children: [
      {
        path: '/tree1',
        name: 'tree1',
        component: () => import(/* webpackChunkName: "tree1" */ './components/Tree1.vue'),
        children: [
          {
            path: 'tree2',
            name: 'tree2',
            component: () => import(/* webpackChunkName: "tree2" */ './components/Tree2.vue')
          }
        ]
      }
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

console.log(createWebHashHistory)

export default router
