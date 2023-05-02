<template>
  <ListPage :posts="tagPosts" />
</template>
<script setup>
const { data } = await useAsyncData(() =>
  queryContent('articles', 'notes')
    .where({ slug: { $nin: ['articles', 'notes'] } })
    .find()
)

const tagPosts = data.value.filter((post) => {
  const tags = post.tags.map((tag) => tag.split(' ').join('-').toLowerCase())
  return tags.includes(tag)
})
</script>
