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
  modules: ['@nuxtjs/tailwindcss', '@nuxt/content', 'nuxt-icon'],
  typescript: {
    shim: false,
    strict: true,
    typeCheck: true,
  },
  content: {
    // https://content.nuxtjs.org/api/configuration
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
