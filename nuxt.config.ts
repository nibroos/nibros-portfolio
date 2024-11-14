// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  css: [
    '~/assets/css/main.css',
    'viewerjs/dist/viewer.css',
  ],
  image: {
    format: ['webp'],
    screens: {
      'xs': 320,
      'sm': 640,
      'md': 768,
      'lg': 1024,
      'xl': 1280,
      'xxl': 1536,
      '2xl': 1536
    },
    dir: 'assets/images'
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  modules: [
    '@nuxtjs/tailwindcss',
    '@formkit/auto-animate/nuxt',
    '@nuxt/image',
    '@pinia/nuxt',
    '@pinia-plugin-persistedstate/nuxt',
  ],
  app: {
    rootId: 'nibros',
    head: {
      title: 'Nibros Ari Wibowo',
      meta: [
        {
          name: 'description',
          content: 'Portfolio Nibros Ari Wibowo'
        }
      ],
      link: [
        {
          rel: 'icon',
          type: 'image/x-icon',
          href: 'https://github.com/nibroos/nibros-portfolio/assets/73767596/bd25f0ec-634b-48dd-a30d-c11869f4045b'
        }
      ]
    },
  },
  runtimeConfig: {
    public: {
      APP_NAME: process.env.APP_NAME,
      BASE_URL: process.env.NUXT_PUBLIC_BASE_URL,
      DOCS_URL: process.env.DOCS_URL,
      FRONTEND_URL: process.env.FRONTEND_URL,
      DOMAIN: process.env.DOMAIN,
    },
  },
})
