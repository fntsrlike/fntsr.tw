<template>
  <ListLayout>
    <ListHeader>
      <PageTitle>
        {{ title }}
      </PageTitle>
      <SearchBar v-model="searchValue" placeholder-text="Search articles" />
    </ListHeader>
    <ul>
      <li v-for="item in filteredBlogPosts" :key="item._path" class="py-4">
        <PostItem :item="item" />
      </li>
    </ul>
  </ListLayout>
</template>
<script setup>
import { DateTime } from 'luxon'
import { ref } from 'vue'

const { data } = await useAsyncData(() => queryContent('articles').find())
const title = 'Articles'
const searchValue = ref('')
const posts = data.value

const filteredBlogPosts = computed(() => {
  return posts.filter((post) => {
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
