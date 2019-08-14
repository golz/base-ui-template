export default {
  getScript(targetId, src, callback) {
    // embed script to target
    let script = document.createElement('script')
    script.src = src
    script.type = 'text/javascript'
    let targetEl = document.getElementById(targetId)
    if (!targetEl) {
      targetEl = document.createElement('div')
      targetEl.id = targetId
      document.body.appendChild(targetEl)
    }
    targetEl.appendChild(script)
    script.onload = function() {
      if (callback && typeof callback === 'function') {
        callback(script)
      }
    }
  },

  getStaticPath() {
    return window._static_image_path
  },

  // get public static path from injected function
  getPublicStaticPath(publicPathFunc) {
    publicPathFunc = publicPathFunc || window._main_staticPublicPath
    return publicPathFunc()
  },

  goUrl(url) {
    if (process.env.NODE_ENV !== 'testing') {
      window.location.href = url
    } else {
      window.history.pushState({}, '', url)
    }
  },

  scrollToTop() {
    const scrollStep = window.scrollY / (1000 / 30)
    const scrollInterval = setInterval(() => {
      if (window.scrollY > 0) {
        window.scrollTo(0, window.scrollY - scrollStep)
      } else {
        clearInterval(scrollInterval)
      }
    }, 15)
  }
}
