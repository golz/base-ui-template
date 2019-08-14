// import or set specific api for this
// import api from '@/api'
import config from '@/config'
import storage from '@/utils/storage'
import { loadLanguageAsync } from '@/i18n'

const state = {
  activeLang: storage.getData('lang') || config.app.default.locale,
  isLoading: false,
  isMobile: false
}

const getters = {
  activeLang(state) {
    return state.activeLang
  },
  isLoading(state) {
    return state.isLoading
  },
  isMobile: state => {
    return state.isMobile
  }
}

const mutations = {
  setActiveLang(state, value) {
    state.activeLang = value
    storage.setData('lang', value)
  },
  setLoading(state, value) {
    state.isLoading = value
  },
  setIsMobile(state, value) {
    state.isMobile = value
  }
}

const actions = {
  setActiveLang({ commit }, value) {
    loadLanguageAsync(value)
    commit('setActiveLang', value)
  },
  showLoading: ({ commit }) => {
    commit('setLoading', true)
  },
  hideLoading: ({ commit }) => {
    commit('setLoading', false)
  },
  setMobileDeviceStatus: ({ commit }, data) => {
    commit('setIsMobile', data)
  }
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
}
