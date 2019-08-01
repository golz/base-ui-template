module.exports = {
  devServer: {
    port: 8181,
    proxy: {
      '/api/workshop/**': {
        target: 'localhost:8080',
        changeOrigin: true
      }
    }
  }
}