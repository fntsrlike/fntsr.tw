<template>
  <ListLayout>
    <ListHeader>
      <PageTitle> Legacy Articles </PageTitle>
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
import { ref } from 'vue'
import { DateTime } from 'luxon'

const searchValue = ref('')

const { data } = await useAsyncData(() =>
  queryContent('legacy-articles').find()
)

const filteredBlogPosts = computed(() => {
  return data.value.filter((post) => {
    const searchContent =
      post.title +
      post.title_en +
      post.description +
      post.tags.map((tag) => tag.split(' ').join('-')) +
      DateTime.fromISO(post.created_at).toFormat('yyyy-LL-dd')
    return searchContent.toLowerCase().includes(searchValue.value.toLowerCase())
  })
})
</script>
