<template>
  <div>
    <LayoutWrapper>
      <NuxtPage />
    </LayoutWrapper>
  </div>
</template>
<script setup>
useHead({
  bodyAttrs: {
    class:
      'bg-white text-black antialiased dark:bg-neutral-900 dark:text-white',
  },
  htmlAttrs: {
    lang: 'zh-Hant-TW',
  },
  title: '深藏若虛',
})
</script>
