<template>
  <header class="mb-4">
    <h1
      class="text-gray-900 dark:text-gray-100 tracking-tight font-extrabold text-3xl sm:text-4xl leading-9 sm:leading-10 mb-2"
    >
      {{ post.title }}
    </h1>
    <h2
      v-if="post.title_en"
      lang="en"
      class="text-gray-700 dark:text-gray-300 tracking-tight font-extrabold text-xl sm:text-2xl leading-9 sm:leading-10 mb-2"
    >
      {{ post.title_en }}
    </h2>
    <time :datetime="post.created_at">
      發表於
      {{ DateTime.fromISO(post.published_at).toFormat('yyyy-LL-dd') }}
    </time>
    <time v-if="post.updated_at" :datetime="post.updated_at">
      更新於 {{ DateTime.fromISO(post.updated_at).toFormat('yyyy-LL-dd') }}
    </time>
  </header>
</template>
<script setup lang="ts">
import { DateTime } from 'luxon'
import { Post } from '@/types/index'

defineProps<{
  post: Post
}>()
</script>
