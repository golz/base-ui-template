// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueAnalytics from 'vue-analytics'
import VueGtm from 'vue-gtm'
import VueMeta from 'vue-meta'
import App from './App.vue'
import router from './router'
import store from './store'
import i18n from '@/i18n'
import '@/libs'
import './registerServiceWorker'

Vue.use(VueMeta)

Vue.config.productionTip = false
//
// if (process.env.NODE_ENV !== 'testing') loadTrackers()
// if (process.env.NODE_ENV !== 'production' && process.env.MOCK_ENV !== 'false')
//   loadMock()
//
// function loadTrackers() {
//   Vue.use(VueAnalytics, { id: 'UA-21718848-1', router })
//   Vue.use(VueGtm, { debug: false, vueRouter: router })
//   require('./trackers')
// }
//
// function loadMock() {
//   require('@vue-mock')
// }

new Vue({
  router,
  store,
  i18n,
  render: h => h(App),
  mounted: () => document.dispatchEvent(new Event('x-app-rendered'))
}).$mount('#app')
