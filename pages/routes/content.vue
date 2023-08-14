<template>
  <div>
    <div>
      <h1>Routes overview</h1>
      <NuxtLink to="/">Go back to index</NuxtLink>
    </div>
    <RouteList :data="items" />
  </div>
</template>

<script setup>
definePageMeta({
  layout: 'info',
})

const { data } = await useAsyncData('home', () =>
  queryContent('/').sort({ _dir: 1, _source: 1 }).find()
)

const items = data.value.map((content) => {
  return {
    id: content._id,
    source: content._source,
    path: content._path.split('/').slice(0, -1).join('/'),
    name: content.title,
  }
})
</script>
