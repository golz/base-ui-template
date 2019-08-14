import Vue from 'vue'
import VueI18n from 'vue-i18n'
import config from '@/config'
import messages from '@/i18n/locale'

Vue.use(VueI18n)

const langDefault = config.app.default.locale
const loadedLanguages = [langDefault]

const i18n = new VueI18n({
  locale: langDefault,
  messages
})

function setI18nLanguage(lang) {
  i18n.locale = lang
  document.querySelector('html').setAttribute('lang', lang)
  return lang
}

export function loadLanguageAsync(lang) {
  // todo: lang still undefined
  if (typeof lang === 'undefined') lang = config.app.default.locale
  if (i18n.locale !== lang) {
    if (!loadedLanguages.includes(lang)) {
      return import(/* webpackChunkName: "lang-[request]" */ `@/i18n/locale/${lang}`).then(
        msgs => {
          i18n.setLocaleMessage(lang, msgs.default)
          loadedLanguages.push(lang)
          return setI18nLanguage(lang)
        }
      )
    }
    return Promise.resolve(setI18nLanguage(lang))
  }
  return Promise.resolve(lang)
}

export default i18n
