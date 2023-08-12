<template>
  <div>
    <div>
      <h1>Routes overview</h1>
      <NuxtLink to="/">Go back to index</NuxtLink>
    </div>
    <RouteList :data="data" />
  </div>
</template>

<script setup>
definePageMeta({
  layout: 'info',
})

const { data } = await useAsyncData('home', () =>
  queryContent('/').sort({ _dir: 1, _source: 1 }).find()
)
</script>
