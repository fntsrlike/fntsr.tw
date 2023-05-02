<template>
  <ListPage :posts="data" />
</template>
<script setup>
const { data } = await useAsyncData(() =>
  queryContent('legacy-articles')
    .where({ slug: { $ne: 'legacy-articles' } })
    .find()
)
</script>
