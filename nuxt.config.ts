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
      {
        code: "en",
        name: "English",
      },
      {
        code: "bg",
        name: "Български",
      },
    ],
    defaultLocale: "bg",
    strategy: "prefix_except_default",
    // https://i18n.nuxtjs.org/browser-language-detection
    detectBrowserLanguage: {
      cookieKey: "i18n_eleven",
    },

    vueI18n: {
      messages: {
        en: {
          home: "Home",
          store: "Collections",
          aboutUs: "About us",
          contactUs: "Contact us",
          ourCompany: "Our company",
          legal: "Legal",
          privacy: "Privacy & Policy",
          cookies: "Cookies",
          needHelp: "Need help",
          shipping: "Shipping services",
          payment: "Payment Options",
          returnAndExchange: "Returns & Exchanges",
          faq: "FAQs",
          sitemap: "Sitemap",
          followUs: "Follow us",
          copyright: "Eleven spectacles - All rights reserved.",
        },
        bg: {
          home: "Начало",
          store: "Колекции",
          aboutUs: "За нас",
          ourCompany: "За компанията",
          contactUs: "Контакти",
          legal: "Legal",
          privacy: "Политика за поверителност",
          cookies: "Бисквитки",
          needHelp: "Нужда от помощ",
          shipping: "Доставка",
          payment: "Начин на плащане",
          returnAndExchange: "Връщане и замяна",
          faq: "Често задавани въпроси",
          sitemap: "Карта на сайта",
          followUs: "Последвайте ни",
          copyright: "Eleven spectacles - All rights reserved.",
        },
      },
    },
  },
});
