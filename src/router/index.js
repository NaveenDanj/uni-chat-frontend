import Vue from 'vue'
import VueRouter from 'vue-router'
import ChatMain from '../views/ChatMain.vue'
import store from '../store'

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
        component: () => import('../views/ChatFlow/Chat.vue'),
        meta: { requiresAuth: true} 
      },
      {
        path: '/app/profile',
        name: 'Profile',
        component: () => import('../views/ChatFlow/Profile.vue'),
        meta: { requiresAuth: true} 
      },
      {
        path: '/app/contacts',
        name: 'Contact',
        component: () => import('../views/ChatFlow/Contact.vue'),
        meta: { requiresAuth: true} 
      },
      {
        path: '/app/bookmark',
        name: 'Bookmark',
        component: () => import('../views/ChatFlow/Bookmark.vue'),
        meta: { requiresAuth: true} 
      },
      {
        path: '/app/settings',
        name: 'Settings',
        component: () => import('../views/ChatFlow/Settings.vue'),
        meta: { requiresAuth: true} 
      }
    ]
  },
  {
    path: '/auth/login',
    name: 'Login',
    component: () => import('../views/Auth/Login.vue')
  }
  ,{
    path: '/auth/register',
    name: 'Register',
    component: () => import('../views/Auth/Register.vue')
  }
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

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (store.state.currentUser == null || localStorage.getItem('token') == null ) {
      next({
        path: '/auth/login',
        query: {
          redirect: to.fullPath,
        },
      });
    } else {
      next();
    }
  } else {
    next();
  }
})


export default router
