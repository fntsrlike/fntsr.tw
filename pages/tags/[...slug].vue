<template>
  <ListLayout>
    <ListHeader>
      <PageTitle> {{ route.params.slug.toString() }} </PageTitle>
      <SearchBar v-model="searchValue" placeholder-text="Search" />
    </ListHeader>
    <ul>
      <li v-for="item in filteredBlogPosts" :key="item._path" class="py-4">
        <PostItem :item="item" />
      </li>
    </ul>
  </ListLayout>
</template>
<script setup>
import { ref } from 'vue'
import { DateTime } from 'luxon'

const route = useRoute()
const searchValue = ref('')
const tag = route.params.slug.toString()

const { data } = await useAsyncData(() => queryContent('articles').find())

const tagPosts = data.value.filter((post) => {
  const tags = post.tags.map((tag) => tag.split(' ').join('-').toLowerCase())
  return tags.includes(tag)
})

const filteredBlogPosts = computed(() => {
  return tagPosts.filter((post) => {
    const searchContent =
      post.title +
      post.title_en +
      post.description +
      post.tags.map((tag) => tag.split(' ').join('-')) +
      DateTime.fromISO(post.published_at).toFormat('yyyy-LL-dd')
    return searchContent.toLowerCase().includes(searchValue.value.toLowerCase())
  })
})
</script>
