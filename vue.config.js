module.exports = {
  devServer: {
    proxy: {
      '^/api': {
        target: 'facebook.com',
        changeOrigin: true
      },
      '^/foo': {
        target: 'twitter.com'
      }
    }
  }
}