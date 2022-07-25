import Vue from 'vue'
import VueRouter from 'vue-router'
import ChatMain from '../views/ChatMain.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'ChatMain',
    component: ChatMain,
    redirect: 'app/chat',
    children : [
      {
        path: '/app/chat',
        name: 'Chat',
        component: () => import('../views/ChatFlow/Chat.vue')
      },
      {
        path: '/app/profile',
        name: 'Profile',
        component: () => import('../views/ChatFlow/Profile.vue')
      },
      {
        path: '/app/contacts',
        name: 'Contact',
        component: () => import('../views/ChatFlow/Contact.vue')
      },
      {
        path: '/app/bookmark',
        name: 'Bookmark',
        component: () => import('../views/ChatFlow/Bookmark.vue')
      },
      {
        path: '/app/settings',
        name: 'Settings',
        component: () => import('../views/ChatFlow/Settings.vue')
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
