<template>
  <header class="mb-4">
    <PageTitle>
      {{ post.title }}
    </PageTitle>
    <PageSubtitle v-if="post.title_en" lang="en">
      {{ post.title_en }}
    </PageSubtitle>
    <PageDate :published-at="post.published_at" :updated-at="post.updated_at" />
  </header>
</template>
<script setup lang="ts">
import { Post } from '@/types/index'

defineProps<{
  post: Post
}>()
</script>
