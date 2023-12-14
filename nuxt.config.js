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
    // "@nuxtjs/tailwindcss",
    "nuxt-simple-sitemap",
    "nuxt-icon",
    "@vueuse/nuxt",
    "@nuxtjs/i18n",
    "@nuxt/ui",
    "@formkit/nuxt",
    [
      "@pinia/nuxt",
      {
        autoImports: ["defineStore", "acceptHMRUpdate"],
      },
    ],
    [
      "@storyblok/nuxt",
      {
        accessToken: process.env.NUXT_STORY_BLOK,
      },
    ],
    "@nuxtjs/strapi",
  ],
  imports: {
    dirs: ["stores"],
  },
  css: ["~/assets/css/main.css"],
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
    vueI18n: "./utils/dictionary/i18n.config.ts",
    stapi: {
      url: process.env.NUXT_STRAPI_URL || "http://localhost:1337",
      prefix: "/api",
      version: "v4",
      cookie: {},
      cookieName: "strapi_jwt",
      devtools: true,
    },
  },
  vite: {
    optimizeDeps: { exclude: ["fsevents", "ohash"] },
  },
  devtools: { enabled: true },
  colorMode: {
    preference: "light",
  },
  ui: {
    primary: "red",
    container: {
      constrained: "max-w-5xl",
    },
  },
  runtimeConfig: {
    public: {
      posthogURL: process.env.NUXT_POSTHOG_URL,
      posthogKey: process.env.NUXT_POSTHOG_KEY,
    },
  },
  site: {
    url: "https://elevenspectacles.com",
  },
  sitemap: {
    sources: ["https://elevenspectacles.com/st/legal"],
  },
  routeRules: {
    // Don't add any /cart/** URLs to the sitemap.xml
    "/cart/**": { index: false },
  },
});
