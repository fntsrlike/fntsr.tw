<template>
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
        <time
          v-if="!item.published_at && item.created_at"
          dateTime="{{item.created_at}}"
        >
          {{ DateTime.fromISO(item.created_at).toFormat('yyyy-LL-dd') }}
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
</template>
<script setup>
import { DateTime } from 'luxon'

defineProps({
  item: {
    type: Object,
    default: () => ({
      title: '',
      title_en: '',
      slug: '',
      aliases: [],
      description: '',
      created_at: '',
      published_at: '',
      updated_at: '',
      tags: [],
    }),
  },
})
</script>
