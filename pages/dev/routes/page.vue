<template>
  <div class="my-5">
    <div class="my-5">
      <h1 class="text-2xl">Page Routes Overview</h1>
      <ul>
        <li><NuxtLink to="/">Go back to index</NuxtLink>.</li>
        <li><NuxtLink to="/routes/content">Go to content routes</NuxtLink>.</li>
      </ul>
    </div>
    <RouteList :data="$router.options.routes" />
  </div>
</template>
<script setup>
definePageMeta({
  layout: 'info',
})
</script>
