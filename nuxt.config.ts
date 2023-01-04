// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss', '@nuxt/content'],
  typescript: {
    shim: false,
    strict: true,
    typeCheck: true,
  },
  content: {
    // https://content.nuxtjs.org/api/configuration
  },
})
