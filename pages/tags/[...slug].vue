<template>
  <section>
    <div class="divide-y divide-gray-200 dark:divide-gray-700">
      <header class="pt-6 pb-8 space-y-2 md:space-y-5">
        <div>
          <PageTitle>
            {{ route.params.slug.toString().toUpperCase() }}
          </PageTitle>
        </div>
        <SearchBar v-model="searchValue" placeholder-text="Search" />
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
<script setup>
import { ref } from 'vue'
import { isoToDate } from '@/libraries/datetime'
import { useQuery } from '@/composables/useQuery'

const route = useRoute()
const searchValue = ref('')
const tag = route.params.slug.toString()

const { queryPostsByTag } = useQuery()
const { data } = await useAsyncData(() => queryPostsByTag(tag))

const tagPosts = data.value.filter((post) => {
  const tags = post.tags.map((tag) => tag.split(' ').join('-').toLowerCase())
  return tags.includes(tag)
})

const filteredPosts = computed(() => {
  return tagPosts.filter((post) => {
    const searchContent =
      post.title +
      post.title_en +
      post.description +
      post.tags.map((tag) => tag.split(' ').join('-')) +
      isoToDate(post.published_at)
    return searchContent.toLowerCase().includes(searchValue.value.toLowerCase())
  })
})
</script>
