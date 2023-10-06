<template>
  <main class="divide-y divide-gray-200 dark:divide-gray-700">
    <SearchBar :keyword="searchValue" @changeKeyword="changeKeyword" placeholder-text="Search announce" class="pb-8"/>
    <ul>
      <li v-for="item in filteredPosts" :key="item._path" class="py-4">
        <ListItem :item="item" />
      </li>
    </ul>
  </main>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import { Post } from '@/types/index'
import { isPostDraft } from '@/libraries/post'
import { isoToDate } from '@/libraries/datetime'

const props = defineProps<{
  posts: Post[]
}>()

const searchValue = ref('')
const changeKeyword = (keyword: string) => {
  searchValue.value = keyword
}

const filteredPosts = computed(() => {
  return props.posts.filter((post: Post) => {
    const isProduct = !process.dev
    if (isProduct && isPostDraft(post) ) {
      return false
    }

    const tags = post.tags || []
    const searchContent =
      post.title +
      post.title_en +
      post.description +
      tags.map((tag: string) => (tag ? tag.split(' ').join('-') : '')) +
      isoToDate(post.published_at)
    return searchContent.toLowerCase().includes(searchValue.value.toLowerCase())
  })
})
</script>
