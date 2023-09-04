// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: ["@/assets/css/main.css"],
  postcss: {
    plugins: {
      tailwindcss: {},
    },
  },
  app: {
    head: {
      htmlAttrs: {
        "data-theme": "retro",
      },
    },
  },
  devtools: { enabled: true }
})
