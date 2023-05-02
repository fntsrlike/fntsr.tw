<template>
  <ListPage :posts="data" />
</template>
<script setup>
const { data } = await useAsyncData(() =>
  queryContent('articles')
    .where({ slug: { $ne: 'articles' } })
    .find()
)
</script>
