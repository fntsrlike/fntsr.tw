<template>
  <ListPage :posts="data" />
</template>
<script setup>
const { data } = await useAsyncData(() =>
  queryContent('sandbox')
    .where({ slug: { $ne: 'sandbox' } })
    .find()
)
</script>
