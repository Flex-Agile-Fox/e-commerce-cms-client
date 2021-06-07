import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'LoginPage',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/LoginPage.vue')
  },
  {
    path: '/main',
    name: 'MainPage',
    component: () => import('../views/MainPage.vue')
  },
  {
    path: '/add',
    name: 'AddPage',
    component: () => import('../views/AddPage.vue')
  },
  {
    path: '/edit/:id',
    name: 'EditPage',
    component: () => import('../views/EditPage.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  if (to.path === '/') next({ name: 'LoginPage' })
  else if (to.name !== 'LoginPage' && !localStorage.getItem('access_token')) next({ name: 'LoginPage' })
  else next()
})

export default router
