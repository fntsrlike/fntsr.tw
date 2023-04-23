<template>
  <div>
    <LayoutWrapper>
      <NuxtLayout>
        <NuxtPage />
      </NuxtLayout>
    </LayoutWrapper>
  </div>
</template>
<script setup>
useHead({
  bodyAttrs: {
    class:
      'bg-white text-black antialiased dark:bg-neutral-900 dark:text-white',
  },
})
</script>
