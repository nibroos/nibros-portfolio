// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  modules: [
    '@nuxtjs/tailwindcss',
    '@formkit/auto-animate/nuxt'
  ],
  app:{
    rootId: 'nibros',
    head:{
      title: 'Nibros Ari Wibowo',
      meta:[
        { name: 'description', content: 'Portfolio Nibros Ari Wibowo' }
      ],
    },
  },
  runtimeConfig: {
    public: {
      APP_NAME: process.env.APP_NAME,
      BASE_URL: process.env.NUXT_PUBLIC_BASE_URL,
    },
  },
})
