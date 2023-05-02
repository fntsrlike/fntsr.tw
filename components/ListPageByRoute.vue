<template>
  <ContentDoc v-slot="{ doc }" :path="`_pages/${slug}`">
    <ListPage :page="doc" :posts="data" />
  </ContentDoc>
</template>
<script setup>
const route = useRoute()
const slug = route.name

const { data } = await useAsyncData(() =>
  queryContent(slug)
    .where({ slug: { $ne: slug } })
    .sort({ created_at: -1, published_at: -1 })
    .find()
)
</script>
