// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: true,
  css: ["@/assets/css/main.css"],
  postcss: {
    plugins: {
      tailwindcss: {},
    },
  },
  app: {
    head: {
      htmlAttrs: {
        "data-theme": "synthwave",
      },
    },
  },
  devtools: { enabled: true }
})
