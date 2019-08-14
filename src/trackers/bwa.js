import browser from '../utils/browser'
window.deferscriptlist = window.deferscriptlist || []

var loadBWA = function() {
  var bwaScript = 'https://www.blibli.com/wcsstore/bwa.js'
  if (process.env.NODE_ENV !== 'testing') {
    browser.getScript('trackers', bwaScript, function() {
      // var bwa = new BWA()
    })
  }
}

window.deferscriptlist.push(loadBWA)
