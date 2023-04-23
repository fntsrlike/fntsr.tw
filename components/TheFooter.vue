<template>
  <footer>
    <div class="mt-16 flex flex-col items-center">
      <div class="mb-3 flex space-x-2 text-sm text-gray-500 dark:text-gray-400">
        <DevOnly>
          <SocialIcon kind="hourglass" href="/sandbox" :size="6" />
        </DevOnly>
        <SocialIcon
          kind="mail"
          :href="'mailto:' + siteMetadata.email"
          :size="6"
        />
        <SocialIcon kind="github" :href="siteMetadata.github" :size="6" />
        <SocialIcon kind="facebook" :href="siteMetadata.facebook" :size="6" />
        <SocialIcon kind="youtube" :href="siteMetadata.youtube" :size="6" />
        <SocialIcon kind="linkedin" :href="siteMetadata.linkedin" :size="6" />
        <SocialIcon kind="twitter" :href="siteMetadata.twitter" :size="6" />
      </div>
      <div class="mb-2 flex space-x-2 text-sm text-gray-500 dark:text-gray-400">
        <div>Yuehu Lin</div>
        <div>{{ ' • ' }}</div>
        <div>© {{ new Date().getFullYear() }}</div>
        <div>{{ ' • ' }}</div>
        <NuxtLink href="/">深藏若虛</NuxtLink>
      </div>
      <div class="mb-8 text-sm text-gray-500 dark:text-gray-400">
        <NuxtLink href="https://github.com/timlrx/tailwind-nextjs-starter-blog">
          Tailwind Nextjs Theme
        </NuxtLink>
      </div>
    </div>
  </footer>
</template>

<script setup>
import siteMetadata from '@/_write/siteMetadata'
</script>
