<template>
  <main class="divide-y divide-gray-200 dark:divide-gray-700">
    <SearchBar v-model="searchValue" placeholder-text="Search announce" class="pb-8"/>
    <ul>
      <li v-for="item in filteredPosts" :key="item._path" class="py-4">
        <ListItem :item="item" />
      </li>
    </ul>
  </main>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import { DateTime } from 'luxon'
import { Post } from '@/types/index'
import { usePost } from '@/composables/usePost'

const props = defineProps<{
  posts: Post[]
}>()

const { isDraft } = usePost()
const searchValue = ref('')

const filteredPosts = computed(() => {
  return props.posts.filter((post: Post) => {
    const isProduct = !process.dev
    if (isProduct && isDraft(post)) {
      return false
    }

    const tags = post.tags.filter((tag) => !!tag)
    const searchContent =
      post.title +
      post.title_en +
      post.description +
      tags.map((tag: string) => (tag ? tag.split(' ').join('-') : '')) +
      DateTime.fromISO(post.published_at).toFormat('yyyy-LL-dd')
    return searchContent.toLowerCase().includes(searchValue.value.toLowerCase())
  })
})
</script>
