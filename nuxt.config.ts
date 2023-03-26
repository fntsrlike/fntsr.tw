// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: '深藏若虛',
      meta: [{ name: 'description', content: 'My amazing site.' }],
      link: [{ rel: 'icon', type: 'image/png', href: '/favicon.png' }],
    },
  },
  modules: ['@nuxtjs/tailwindcss', '@nuxt/content'],
  typescript: {
    shim: false,
    strict: true,
    typeCheck: true,
  },
  content: {
    // https://content.nuxtjs.org/api/configuration

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
