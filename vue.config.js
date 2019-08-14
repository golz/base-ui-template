const path = require('path')
const SizePlugin = require('size-plugin')

function resolveRealPath(dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  devServer: {
    port: 8181,
    proxy: {
      '/api/*': {
        target: 'http://localhost:8080',
        changeOrigin: true
      }
    }
  },
  // eslint-disable-next-line no-unused-vars
  configureWebpack: config => {
    if (process.env.NODE_ENV === 'production') {
      // mutate config for production...
    } else {
      // mutate for development...
      return {
        plugins: [new SizePlugin()]
      }
    }
  },
  // tweak internal webpack configuration
  // see https://github.com/vuejs/vue-cli/blob/dev/docs/webpack.md
  chainWebpack: config => {
    config.resolve.alias
      .set('@', resolveRealPath('src'))
      .set('@helper', resolveRealPath('src/helper'))
      .set('@views', resolveRealPath('src/views'))
      .set('@assets', resolveRealPath('src/assets'))
      .set('@router', resolveRealPath('src/router'))
      .set('@mixins', resolveRealPath('src/mixins'))
      .set('@components', resolveRealPath('src/components'))
  },
  // use thread-loader for babel & TS in production build
  // enabled by default if the machine has more than 1 cores
  parallel: require('os').cpus().length > 1,
  pluginOptions: {
    prerenderSpa: {
      registry: undefined,
      // Required - Routes to render.
      renderRoutes: [
        '/'
      ],
      useRenderEvent: true,
      headless: true,
      onlyProduction: true
    },
    'style-resources-loader': {
      preProcessor: 'scss',
      patterns: [
        path.resolve(__dirname, "./src/styles/global.scss")
      ],
    }
  }
}
