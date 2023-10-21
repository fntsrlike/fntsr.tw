<template>
  <div>
    <LayoutPage />
  </div>
</template>
<script setup lang="ts">
useHead({
  bodyAttrs: {
    class:
      'bg-white text-black antialiased dark:bg-neutral-900 dark:text-gray-300',
  },
  htmlAttrs: {
    lang: 'zh-Hant-TW',
  },
  title: '深藏若虛',
})
</script>
<style>
@import '@unocss/reset/tailwind.css';
</style>
