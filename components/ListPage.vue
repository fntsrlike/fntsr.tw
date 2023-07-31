<template>
  <section class="pb-24">
    <div class="divide-y divide-gray-200 dark:divide-gray-700">
      <header class="pb-8 space-y-2 md:space-y-5">
        <div>
          <PageTitle>
            {{ page.title }}
          </PageTitle>
          <PageSubtitle v-if="page.title_en" lang="en">
            {{ page.title_en }}
          </PageSubtitle>
        </div>
        <PostContent :post="page" />
        <SearchBar v-model="searchValue" placeholder-text="Search announce" />
      </header>
      <main>
        <ul>
          <li v-for="item in filteredPosts" :key="item._path" class="py-4">
            <ListItem :item="item" />
          </li>
        </ul>
      </main>
    </div>
  </section>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import { DateTime } from 'luxon'
import { Post } from '@/types/index'
import { usePost } from '@/composables/usePost'

const props = defineProps<{
  page: Post
  posts: Post[]
}>()

const { isDraft } = usePost()
const searchValue = ref('')

const list = props.posts.map((post) => {
  const hasPostTags = !!post.tags
  if (!hasPostTags) {
    post.tags = []
  }
  return post
})

const filteredPosts = computed(() => {
  return list.filter((post: Post) => {
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
