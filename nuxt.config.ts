require("dotenv").config();

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      charset: "utf-16",
      viewport: "width=500, initial-scale=1",
      title: "Eleven spectacles",
      meta: [{ name: "description", content: "My amazing site." }],
      link: [
        {
          rel: "apple-touch-icon",
          sizes: "180x180",
          href: "/favicon/apple-touch-icon.png",
        },
        { rel: "icon", type: "image/png", href: "/favicon/favicon-32x32.png" },
        { rel: "icon", type: "image/png", href: "/favicon/favicon-16x16.png" },
        { rel: "manifest", href: "/favicon/site.webmanifest" },
      ],
    },
  },
  modules: [
    "nuxt-purgecss",
    "@nuxtjs/tailwindcss",
    "nuxt-icon",
    "@vueuse/nuxt",
    "@nuxtjs/i18n",
    "@formkit/nuxt",
    // "@nuxtjs/sitemap",
    [
      "@storyblok/nuxt",
      {
        accessToken: process.env.STORY_BLOK,
      },
    ],
  ],
  css: ["~/assets/css/main.css"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  i18n: {
    locales: [
      { name: "English", code: "en" },
      { name: "Български", code: "bg" },
    ],
    strategy: "prefix_except_default",
    // used in URL path prefix+
    defaultLocale: "en",
    skipSettingLocaleOnNavigate: false,
    // https://i18n.nuxtjs.org/browser-language-detection
    detectBrowserLanguage: {
      alwaysRedirect: true,
      useCookie: false,
      cookieKey: "eleven_i18n_redirected",
      redirectOn: "root", // recommended
    },
    vueI18n: {
      fallbackLocale: "en",
      messages: {
        en: {
          home: "Home",
        },
        bg: {
          home: "Начало",
        },
      },
    },
  },
});
