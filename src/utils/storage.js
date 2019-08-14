const data = {}
const customLocalStorage = {
  setItem: (k, v) => {
    data[k] = v
  },
  getItem: k => data[k]
}

const defaultLocalStorage = window.localStorage || customLocalStorage

function getData(key) {
  const data = defaultLocalStorage.getItem(key) || ''
  try {
    return JSON.parse(data)
  } catch (e) {}
  return data
}

function setData(key, value) {
  const newValue = typeof value === 'string' ? value : JSON.stringify(value)
  defaultLocalStorage.setItem(key, newValue)
}

export default {
  getData,
  setData,
  _customLocalStorage: customLocalStorage
}
