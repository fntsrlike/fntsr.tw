<template>
  <div class="my-5">
    <div class="my-5">
      <h1 class="text-2xl">Content Routes Overview</h1>
      <ul>
        <li><NuxtLink to="/">Go back to index</NuxtLink>.</li>
        <li><NuxtLink to="/routes/page">Go to page routes</NuxtLink>.</li>
      </ul>
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
