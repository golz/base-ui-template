import browser from '../utils/browser'

const imageStaticSrcPath = browser.getStaticPath(
  typeof window === 'undefined' ? '/' : null
)
const contextPath = '/'

const config = {
  api: {
    basePath: '',
    dummy: '/dummy'
  },
  paths: {
    img_static_src: imageStaticSrcPath
  },
  getApiPath: apiPath => `${config.api.basePath}${apiPath}`,
  app: {
    contextPath: contextPath,
    pages: {
      home: contextPath,
      about: '/about'
    },
    default: {
      locale: 'id'
    }
  }
}

export default config
