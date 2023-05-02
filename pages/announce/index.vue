<template>
  <ListPage :posts="data" />
</template>
<script setup>
const { data } = await useAsyncData(() =>
  queryContent('announce')
    .where({ slug: { $ne: 'announce' } })
    .find()
)
</script>
