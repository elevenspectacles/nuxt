// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // 'nuxt-purgecss',
  modules: ["nuxt-purgecss", "nuxt-icon", "@vueuse/nuxt", "@nuxtjs/i18n"],
  css: ["~/assets/css/main.css"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  i18n: {
    locales: ["en", "bg"], // used in URL path prefix+
    defaultLocale: "bg",
  },
});
