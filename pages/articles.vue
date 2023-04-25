<template>
  <div class="divide-y divide-gray-200 dark:divide-gray-700">
    <div class="space-y-2 pt-6 pb-8 md:space-y-5">
      <PageTitle>
        {{ title }}
      </PageTitle>
      <SearchBar v-model="searchValue" placeholder-text="Search articles" />
    </div>
    <ul>
      <li v-for="item in filteredBlogPosts" :key="item._path" class="py-4">
        <PostItem :item="item" />
      </li>
    </ul>
  </div>
</template>
<script setup>
import { ref } from 'vue'
import { DateTime } from 'luxon'

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
