import http from './http'
import config from '@/config'

export default {
  getDummy(callback, errorHandler) {
    http.getDataViaApi(config.api.dummy, callback, errorHandler)
  }
}
