import en from './en'
import bg from './bg'

export default defineI18nConfig(() => ({
  legacy: false,
  i18n: {
    // baseUrl: "https://my-nuxt-app.com",
    locales: [
      {
        code: "en",
        name: "English",
        iso: "en",
      },
      {
        code: "bg",
        name: "Български",
        iso: "bg",
      },
    ],
    defaultLocale: "bg",
    strategy: "prefix_except_default",
    // https://i18n.nuxtjs.org/browser-language-detection
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: "i18n_eleven",
      cookieSecure: true,
      redirectOn: "root",
    },
    messages: {
      ...en,
      ...bg
    },
  },
}))