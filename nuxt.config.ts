// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  modules: [
    "@nuxtjs/tailwindcss",
    "@morev/vue-transitions/nuxt",
    "@nuxtjs/i18n",
  ],
  i18n: {
    lazy: true,
    langDir: "locales/",
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: "i18n_redirected",
      redirectOn: "root",
    },
    strategy: "prefix_except_default",
    defaultLocale: "es-ES",
    locales: [
      {
        code: "es-ES",
        iso: "es-ES",
        file: "es.json",
        name: "es-ES",
      },
    ],
  },
});
