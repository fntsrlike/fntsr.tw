<template>
  <footer>
    <div
      class="sm:relative flex flex-col items-center gap-3 sm:flex-row sm:justify-between py-6"
    >
      <div
        class="flex flex-col-reverse items-center gap-3 sm:flex-row sm:w-56 md:w-60"
      >
        <div class="flex flex-col items-center">
          <div class="flex space-x-2 text-sm text-gray-500 dark:text-gray-400">
            <div>© 2013 - {{ new Date().getFullYear() }}</div>
            <div>{{ ' • ' }}</div>
            <NuxtLink href="/">深藏若虛</NuxtLink>
          </div>
          <div class="text-sm text-gray-500 dark:text-gray-400 items-left">
            <div>Yuehu Lin</div>
          </div>
        </div>
      </div>
      <ul class="flex flex-wrap justify-center text-sm gap-x-6 gap-y-2">
        <DevOnly>
          <li>
            <NuxtLink
              to="/sandbox"
              class="font-medium text-gray-500 hover:text-gray-900 focus:text-gray-900 dark:text-gray-400 dark:hover:text-gray-300 dark:focus:text-gray-300"
            >
              Sandbox
            </NuxtLink>
          </li>
        </DevOnly>
        <li v-for="link in footerNavLinks" :key="link.title">
          <NuxtLink
            :to="link.href"
            class="font-medium text-gray-500 hover:text-gray-900 focus:text-gray-900 dark:text-gray-400 dark:hover:text-gray-300 dark:focus:text-gray-300"
          >
            {{ link.title }}
          </NuxtLink>
        </li>
      </ul>
      <div class="flex items-center justify-end gap-3 z-10 sm:w-40 md:w-60">
        <div>
          <SocialIcon
            v-for="(item, kind) in socialMedias"
            :key="kind"
            :href="item"
            :kind="kind"
            :size="6"
            class="mr-6"
          />
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import siteMetadata from '@/_write/siteMetadata'
import footerNavLinks from '@/_write/footerNavLinks'

const { socialMedias } = siteMetadata
</script>
