<template>
  <div class="divide-y divide-gray-200 dark:divide-gray-700">
    <div class="space-y-2 pt-6 pb-8 md:space-y-5">
      <PageTitle>
        {{ title }}
      </PageTitle>
      <div class="relative max-w-lg">
        <label>
          <span class="sr-only">Search articles</span>
          <input
            v-model="searchValue"
            aria-label="Search articles"
            type="text"
            placeholder="Search articles"
            class="block w-full rounded-md border border-gray-300 bg-white px-4 py-2 text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-900 dark:bg-gray-800 dark:text-gray-100"
          />
        </label>
        <svg
          class="absolute right-3 top-3 h-5 w-5 text-gray-400 dark:text-gray-300"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="{2}"
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      </div>
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
// const meetingEvents = computed(() => selectedEvents.value.filter((event) => (!unsprint.includes(event.title))));

const filteredBlogPosts = computed(() => {
  return posts.filter((post) => {
    const searchContent =
      post.title + post.description + post.published_at + post.created_at
    return searchContent.toLowerCase().includes(searchValue.value.toLowerCase())
  })
})
</script>
