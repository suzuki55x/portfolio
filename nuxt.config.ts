// https://nuxt.com/docs/api/configuration/nuxt-config
const { API_KEY, SERVICE_DOMAIN } = process.env

export default defineNuxtConfig({
  runtimeConfig: {
    apiKey: API_KEY,
    apiDomain: SERVICE_DOMAIN,
    public: {
      apiKey: process.env.NODE_ENV !== 'production' ? API_KEY : undefined,
      apiDomain: process.env.NODE_ENV !== 'production' ? SERVICE_DOMAIN : undefined,
    },
  },
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
