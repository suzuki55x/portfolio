// https://nuxt.com/docs/api/configuration/nuxt-config
const { API_KEY, SERVICE_DOMAIN } = process.env

// yarn devだとdevelopmentになる。yarn generateなどはproductionに自動的になる
console.log(process.env.NODE_ENV)

export default defineNuxtConfig({
  runtimeConfig: {
    apiKey: API_KEY,// production用。フロント側に非公開。.envに記載
    public: {
      apiKey: process.env.NODE_ENV !== 'production' ? API_KEY : undefined,// dev用
      apiDomain: SERVICE_DOMAIN
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
  devtools: { enabled: true },
})
