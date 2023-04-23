<template>
  <header class="flex items-center justify-between py-10">
    <div>
      <NuxtLink href="/" :aria-label="siteMetadata.headerTitle">
        <div class="flex items-center justify-between">
          <div class="h-6 text-2xl font-semibold sm:block">
            {{ siteMetadata.headerTitle }}
          </div>
        </div>
      </NuxtLink>
      <p class="hidden mt-2 text-xs sm:block">Digital Garden of @fntsr</p>
    </div>
    <div class="flex items-center text-base leading-5">
      <nav class="hidden sm:block">
        <NuxtLink
          v-for="link in headerNavLinks"
          :key="link.title"
          :to="link.href"
          class="p-1 font-medium text-gray-900 dark:text-gray-100 sm:p-4"
        >
          {{ link.title }}
        </NuxtLink>
      </nav>
      <!-- TODO: ThemeSwitch component -->
      <MobileNav />
    </div>
  </header>
</template>

<script setup>
import siteMetadata from '@/_write/siteMetadata'
import headerNavLinks from '@/_write/headerNavLinks'
</script>
