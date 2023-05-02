<template>
  <ListPage :posts="data" />
</template>
<script setup>
const { data } = await useAsyncData(() =>
  queryContent('moc')
    .where({ slug: { $ne: 'moc' } })
    .find()
)
</script>
