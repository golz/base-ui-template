import Vue from 'vue'
import Router from 'vue-router'
import beforeEachHooks from './beforeEachHooks'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  linkActiveClass: 'active',
  scrollBehavior: () => ({ y: 0 }),
  routes: [
    {
      path: '/',
      name: 'home',
      meta: {
        title: 'Welcome to Home, Yay!',
        ignoreAuth: true
      },
      component: () => import(/* webpackChunkName: "home" */ '@/views/Home.vue')
    },
    {
      path: '/about',
      name: 'about',
      meta: {
        ignoreAuth: true,
        title: 'About'
      },
      component: () =>
        import(/* webpackChunkName: "about" */ '@/views/About.vue')
    },
    {
      path: '*',
      name: 'notFound',
      meta: {
        title: 'Page Not Found',
        ignoreAuth: true
      },
      component: () =>
        import(/* webpackChunkName: "not-found" */ '@/views/partials/NotFound.vue')
    }
  ]
})

Object.values(beforeEachHooks).forEach(hook => {
  router.beforeEach(hook)
})

export default router
