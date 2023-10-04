<template>
  <header class="mb-4">
    <PostTitle>
      {{ post.title }}
    </PostTitle>
    <PostSubtitle v-if="post.title_en" lang="en">
      {{ post.title_en }}
    </PostSubtitle>
    <PostDate v-if="showDate" :published-at="post.published_at" :updated-at="post.updated_at" />
  </header>
</template>
<script setup lang="ts">
import { Post } from '@/types/index'

defineProps<{
  post: Post
  showDate?: boolean
}>()
</script>
