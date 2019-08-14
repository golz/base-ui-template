import Vue from 'vue'
import Router from 'vue-router'
import { loadLanguageAsync } from '@/i18n'
import store from '@/store'
import config from '@/config'
import beforeEachHooks from './beforeEachHooks'

const Home = () => import('@/pages/Home')
const About = () => import('@/pages/About')
const NotFound = () => import('@/pages/partials/NotFound')

Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  linkActiveClass: 'active',
  scrollBehavior: () => ({ y: 0 }),
  routes: [
    {
      path: config.app.pages.home,
      name: 'home',
      meta: { title: 'Welcome to Home, Yay!', ignoreAuth: true },
      component: Home
    },
    {
      path: config.app.pages.about,
      name: 'about',
      meta: { title: 'Welcome to About, Yay!', ignoreAuth: true },
      component: About
    },
    {
      path: '*',
      name: 'not-found',
      meta: { title: 'Not found!', ignoreAuth: true },
      component: NotFound
    }
  ]
})

Object.values(beforeEachHooks).forEach(hook => {
  router.beforeEach(hook)
})

router.beforeEach((to, from, next) => {
  loadLanguageAsync(store.getters['main/activeLang']).then(() => next())
})

export default router
