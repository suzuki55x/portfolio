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
  nitro: {
    output: {
      dir: '.output',
      publicDir: '.output/public'
    }
  },
  ssr: true,
  css: ["@/assets/css/main.css"],
  postcss: {
    plugins: {
      tailwindcss: {},
    },
  },
  modules: [
    "nuxt-particles"
  ],
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
        "lang": "ja",
      },
    },
  },
  devtools: { enabled: true },
})
