// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: '深藏若虛',
      meta: [{ name: 'description', content: 'My amazing site.' }],
      link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    },
  },
  modules: ['@nuxtjs/tailwindcss', '@nuxt/content', '@nuxt/image-edge'],
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
  image: {
    staticFilename: '[publicPath]/images/[name]-[hash][ext]',
  },
})
