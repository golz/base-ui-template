import Vue from 'vue'
import VueResource from 'vue-resource'
import config from '@/config'

// only on non testing mode
if (process.env.NODE_ENV !== 'testing') {
  Vue.use(VueResource)
}

export default {
  getDataViaApi(path, callback, errorHandler, headerParams) {
    let headerObject = { 'Cache-Control': 'no-cache' }
    Vue.http
      .get(config.getApiPath(path), {
        headers:
          typeof headerParams !== 'undefined'
            ? Object.assign(headerObject, headerParams)
            : headerObject
      })
      .then(
        response => callback(response),
        error => {
          if (typeof errorHandler === 'function') errorHandler(error)
        }
      )
  },

  postDataViaApi(path, callback, errorHandler, data, headerParams) {
    let headerObject = { 'Cache-Control': 'no-cache' }
    Vue.http
      .post(config.getApiPath(path), data, {
        headers:
          typeof headerParams !== 'undefined'
            ? Object.assign(headerObject, headerParams)
            : headerObject
      })
      .then(
        response => callback(response),
        error => {
          if (typeof errorHandler === 'function') errorHandler(error)
        }
      )
  },

  putDataViaApi(path, callback, errorHandler, data, headerParams) {
    let headerObject = { 'Cache-Control': 'no-cache' }
    Vue.http
      .put(config.getApiPath(path), data, {
        headers:
          typeof headerParams !== 'undefined'
            ? Object.assign(headerObject, headerParams)
            : headerObject
      })
      .then(
        response => callback(response),
        error => {
          if (typeof errorHandler === 'function') errorHandler(error)
        }
      )
  },

  deleteDataViaApi(path, callback, errorHandler, headerParams) {
    let headerObject = { 'Cache-Control': 'no-cache' }
    Vue.http
      .delete(config.getApiPath(path), {
        headers:
          typeof headerParams !== 'undefined'
            ? Object.assign(headerObject, headerParams)
            : headerObject
      })
      .then(
        response => callback(response),
        error => {
          if (typeof errorHandler === 'function') errorHandler(error)
        }
      )
  }
}
