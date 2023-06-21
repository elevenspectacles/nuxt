import en from "./en";
import bg from "./bg";

export default defineI18nConfig(() => ({
  baseUrl: "https://my-nuxt-app.com",
  strategy: "prefix_except_default",
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
  // https://i18n.nuxtjs.org/browser-language-detection
  detectBrowserLanguage: {
    useCookie: true,
    cookieKey: "i18n_eleven",
    cookieSecure: true,
    redirectOn: "root",
  },
  messages: {
    ...en,
    ...bg,
  },
}));
