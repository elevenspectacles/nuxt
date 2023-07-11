require("dotenv").config();

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      charset: "utf-16",
      viewport: "width=device-width, initial-scale=1",
      title: "Eleven spectacles",
      meta: [
        { name: "description", content: "Eleven Spectacles" },
        { name: "msapplication-TileColor", content: "#da532c" },
        { name: "theme-color", content: "#ffffff" },
      ],
      link: [
        {
          rel: "apple-touch-icon",
          sizes: "180x180",
          href: "/favicon/apple-touch-icon.png",
        },
        {
          rel: "icon",
          type: "image/png",
          sizes: "32x32",
          href: "/favicon/favicon-32x32.png",
        },
        {
          rel: "icon",
          type: "image/png",
          sizes: "16x16",
          href: "/favicon/favicon-16x16.png",
        },
        { rel: "manifest", href: "/favicon/site.webmanifest" },
        {
          rel: "mask-icon",
          href: "/favicon/safari-pinned-tab.svg",
          color: "#000000",
        },
      ],
    },
    pageTransition: { name: "page", mode: "out-in" },
    layoutTransition: { name: "layout", mode: "out-in" },
  },
  modules: [
    "nuxt-purgecss",
    "@nuxtjs/tailwindcss",
    "nuxt-icon",
    "@vueuse/nuxt",
    "@nuxtjs/i18n",
    "@formkit/nuxt",
    [
      "@pinia/nuxt",
      {
        autoImports: ["defineStore", "acceptHMRUpdate"],
      },
    ],
    // [
    //   "@storyblok/nuxt",
    //   {
    //     accessToken: process.env.STORY_BLOK,
    //   },
    // ],
  ],
  imports: {
    dirs: ["stores"],
  },
  css: ["~/assets/css/main.css"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  i18n: {
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
    defaultLocale: "bg",
    strategy: "prefix_except_default",
    // https://i18n.nuxtjs.org/browser-language-detection
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: "i18n_eleven",
      cookieSecure: true,
      redirectOn: "root",
    },
    vueI18n: './utils/dictionary/i18n.config.ts'
  },
  // vite: {
  //   optimizeDeps: { exclude: ['fsevents'] }
  // },
  devtools: { enabled: true }
});
