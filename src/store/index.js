import Vue from 'vue'
import Vuex from 'vuex'
import main from './modules/main'

Vue.use(Vuex)

let store = new Vuex.Store({
  strict: process.env.NODE_ENV !== 'production',
  state: main.state,
  getters: main.getters,
  mutations: main.mutations,
  actions: main.actions
})

export default store
