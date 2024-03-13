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
      title: "Takahito Suzuki",
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        { name: "description", content: "Takahito Suzuki's portfolio" },
      ],
      htmlAttrs: {
        "data-theme": "lite",
      },
    },
  },
  devtools: { enabled: true }
})
