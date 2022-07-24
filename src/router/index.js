import Vue from 'vue'
import VueRouter from 'vue-router'
import ChatMain from '../views/ChatMain.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'ChatMain',
    component: ChatMain,
    children : [
      {
        path: '/app/chat',
        name: 'Chat',
        component: () => import('../views/ChatFlow/Chat.vue')
      }
    ]
  },
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
