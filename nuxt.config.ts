// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    "nuxt-purgecss",
    "@nuxtjs/tailwindcss",
    "nuxt-icon",
    "@vueuse/nuxt",
    "@nuxtjs/i18n",
    "@formkit/nuxt",
  ],
  // buildModules: ["@nuxtjs/google-fonts"],
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
  // googleFonts: {
  //   display: "swap",
  //   families: {
  //     Roboto: true,
  //   },
  // },
});
