// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  pages: true,
  devtools: { enabled: true },
  modules: ["@nuxt/icon", "@pinia/nuxt", "@pinia-plugin-persistedstate/nuxt"],
  build: {
    transpile: ["pinia-plugin-persistedstate"],
  },
  css: ["~/assets/css/main.css"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
});
