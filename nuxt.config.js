// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      charset: "utf-16",
      viewport: "width=device-width, initial-scale=1",
      meta: [
        { property: "og:type", content: "website" },
        { name: "msapplication-TileColor", content: "#da532c" },
        { name: "theme-color", content: "#ffffff" },
        {
          property: "og:image",
          content: "https://elevenspectacles.com/images/socials.jpg",
        },
        {
          property: "og:image:secure_url",
          content: "https://elevenspectacles.com/images/socials.jpg",
        },
        {
          property: "og:image:width",
          content: "200",
        },
        {
          property: "og:image:height",
          content: "90",
        },
        {
          property: "og:image:alt",
          content: "Eleven Spectacles Black logo on a white background",
        },
        {
          name: "twitter:image",
          content: "https://elevenspectacles.com/images/socials.jpg",
        },
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
    // "nuxt-purgecss",
    "@nuxtjs/seo",
    "@nuxt/image",
    "nuxt-icon",
    "@vueuse/nuxt",
    "@nuxtjs/i18n",
    "@nuxt/ui",
    "@unlok-co/nuxt-stripe",
    [
      "@pinia/nuxt",
      {
        autoImports: ["defineStore", "acceptHMRUpdate"],
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
        shortName: "EN",
      },
      {
        shortName: "BG",
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
    vueI18n: "./utils/dictionary/i18n.config.ts",
  },
  vite: {
    optimizeDeps: { exclude: ["fsevents", "ohash"] },
  },
  colorMode: {
    preference: "light",
  },
  runtimeConfig: {
    public: {
      posthogURL: process.env.NUXT_POSTHOG_URL,
      posthogKey: process.env.NUXT_POSTHOG_KEY,
      nodeEnv: process.env.NODE_ENV,
    },
  },
  site: {
    url: "https://elevenspectacles.com",
    name: "Eleven Spectacles",
    description: "TODO - add description!",
  },
  seo: {
    redirectToCanonicalSiteUrl: true,
    debug: true,
  },
  image: {
    format: ["webp"],
  },
  nitro: {
    prerender: {
      routes: [
        "/_ipx/w_400/images/logo-white.svg",
        "/_ipx/w_400/images/logo.svg",
        "/_ipx/w_336/images/logo-white.svg",
        "/_ipx/w_336/images/logo.svg",
        "/_ipx/w_256/images/logo-white.svg",
        "/_ipx/w_256/images/logo.svg",
      ],
    },
  },
  stripe: {
    client: {
      key: process.env.NUXT_STRIPE_PUBLIC_KEY,
      // your api options override for stripe client side
      options: {},
    },
  },
  strapi: {
    url: process.env.STRAPI_URL || "http://localhost:1337",
  },
});
