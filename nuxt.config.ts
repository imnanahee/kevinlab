// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  app: {
    head: {
      title: 'KevinLAB',
      htmlAttrs: {
        lang: 'ko',
      },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no' },
        { name: 'format-detection', content: 'telephone=no' },
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      ],
      script: [
      ],
    },
    baseURL: '/', // 설정된 정적 파일의 기본 경로
  },

  // global CSS is imported in app/app.vue to avoid virtual css resolution issues on Windows

  css: ['~/assets/css/style.css'],

  postcss: {
    plugins: {
      '@tailwindcss/postcss': {},
    },
  },
  
  ssr: false,
  
  vite: {
    server: {
      hmr: {
        protocol: "http",
        host: 'localhost',
        clientPort: 3000,
        port: 3000,
      },
    },
  },
  compatibilityDate: '2025-07-15',
})
