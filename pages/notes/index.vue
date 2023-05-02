<template>
  <ListPage :posts="data" />
</template>
<script setup>
const { data } = await useAsyncData(() =>
  queryContent('notes')
    .where({ slug: { $ne: 'notes' } })
    .find()
)
</script>
