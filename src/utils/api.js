export default {
  objectToQueryString(object = {}) {
    return Object.keys(object)
      .map(k => `${encodeURIComponent(k)}=${encodeURIComponent(object[k])}`)
      .join('&')
  },

  arrayToQueryString(array = [], key = 'key') {
    const strings = array.map(element => `${key}=${element}`)
    return strings.join('&')
  },

  arrayObjectToQueryString(array = []) {
    const strings = array.map(element => this.objectToQueryString(element))
    return strings.join('&')
  }
}
