<template>
  <div>
    <div class="header">
      <h1>Routes overview</h1>
      <NuxtLink to="/">Go back to index</NuxtLink>
    </div>
    <RouteList :data="$router.options.routes" />
  </div>
</template>
<script setup>
definePageMeta({
  layout: 'info',
})
</script>
