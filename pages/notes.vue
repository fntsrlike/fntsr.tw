<template>
  <ListLayout>
    <ListHeader>
      <PageTitle> Notes </PageTitle>
      <SearchBar v-model="searchValue" placeholder-text="Search notes" />
    </ListHeader>
    <ul>
      <li v-for="item in filteredPosts" :key="item._path" class="py-4">
        <PostItem :item="item" />
      </li>
    </ul>
  </ListLayout>
</template>
<script setup>
import { ref } from 'vue'
import { DateTime } from 'luxon'

const searchValue = ref('')

const { data } = await useAsyncData(() => queryContent('notes').find())

const filteredPosts = computed(() => {
  return data.value.filter((post) => {
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
