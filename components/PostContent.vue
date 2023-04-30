<template>
  <div class="my-4">
    <ContentRenderer :value="post" class="prose dark:prose-invert" />
  </div>
</template>

<script setup lang="ts">
import { Post } from '@/types/index'

defineProps<{
  post: Post
}>()
</script>

<style>
.prose li {
  margin-top: 0em;
  margin-bottom: 0em;
}
</style>
