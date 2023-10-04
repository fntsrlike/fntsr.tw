<template>
  <ContentDoc v-slot="{ doc }">
    <ListPage :page="doc" :posts="data" />
  </ContentDoc>
</template>
<script setup>
const route = useRoute()
const slug = route.fullPath

const { data } = await useAsyncData(() =>
  queryContent(slug)
    .where({ slug: { $ne: slug }, _file: { $not: { $contains: 'index' } } })
    .sort({ created_at: -1, published_at: -1 })
    .find()
)
</script>
