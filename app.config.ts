// app.config.ts
export interface NuxtIconModuleOptions {
  size?: string | false
  class?: string
  aliases?: { [alias: string]: string }
}

export default defineAppConfig({
  nuxtIcon: {
    size: '24px', // default <Icon> size applied
    class: 'icon', // default <Icon> class applied
    aliases: {},
  } as NuxtIconModuleOptions,
})
