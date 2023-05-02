<template>
  <section>
    <ContentDoc v-slot="{ doc }">
      <div class="divide-y divide-gray-200 dark:divide-gray-700">
        <header class="pt-6 pb-8 space-y-2 md:space-y-5">
          <div>
            <PageTitle>
              {{ doc.title }}
            </PageTitle>
            <PageSubtitle v-if="doc.title_en" lang="en">
              {{ doc.title_en }}
            </PageSubtitle>
          </div>
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
    </ContentDoc>
  </section>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import { DateTime } from 'luxon'
import { Post } from '@/types/index'

const props = defineProps<{
  posts: Post[]
}>()

const searchValue = ref('')

const filteredPosts = computed(() => {
  return props.posts.filter((post: Post) => {
    const searchContent =
      post.title +
      post.title_en +
      post.description +
      post.tags.map((tag: string) => tag.split(' ').join('-')) +
      DateTime.fromISO(post.published_at).toFormat('yyyy-LL-dd')
    return searchContent.toLowerCase().includes(searchValue.value.toLowerCase())
  })
})
</script>
