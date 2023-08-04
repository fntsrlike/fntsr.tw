import { resolve } from 'path'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: '深藏若虛',
      meta: [{ name: 'description', content: 'My amazing site.' }],
      link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    },
  },
  appConfig: {
    buildTime: process.env.BUILD_TIME || '',
  },
  modules: [
    '@nuxt/content',
    '@nuxtjs/color-mode',
    '@nuxtjs/tailwindcss',
    'nuxt-icon',
  ],
  typescript: {
    shim: false,
    strict: true,
    typeCheck: true,
  },
  colorMode: {
    classSuffix: '',
  },
  content: {
    // https://content.nuxtjs.org/api/configuration
    documentDriven: true,
    sources: {
      garden: {
        driver: 'fs',
        base: resolve(__dirname, '_write/content'),
      },
    },

    highlight: {
      // Theme used in all color schemes.
      preload: [
        'javascript',
        'typescript',
        'vue',
        'vue-html',
        'ruby',
        'mermaid',
      ],
    },
    markdown: {
      remarkPlugins: ['remark-breaks'],
    },
  },
})
