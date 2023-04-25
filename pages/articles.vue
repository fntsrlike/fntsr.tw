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
        <article
          class="space-y-2 xl:grid xl:grid-cols-4 xl:items-baseline xl:space-y-0"
        >
          <dl>
            <dt class="sr-only">Published on</dt>
            <dd
              class="text-base font-medium leading-6 text-gray-500 dark:text-gray-400"
            >
              <time v-if="item.published_at" dateTime="{{item.published_at}}">
                {{ DateTime.fromISO(item.published_at).toFormat('yyyy-LL-dd') }}
              </time>
            </dd>
          </dl>
          <div class="space-y-3 xl:col-span-3">
            <div>
              <NuxtLink :href="item._path">
                <h3
                  class="text-2xl font-bold leading-8 tracking-tight text-gray-900 dark:text-gray-100"
                >
                  {{ item.title }}
                </h3>
                <p class="text-gray-800 dark:text-gray-200">
                  {{ item.title_en }}
                </p>
              </NuxtLink>
              <div class="flex flex-wrap">
                <PostTag v-for="tag in item.tags" :key="tag" :text="tag" />
              </div>
            </div>
            <div class="prose max-w-none text-gray-500 dark:text-gray-400">
              {{ item.description }}
            </div>
          </div>
        </article>
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
