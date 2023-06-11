<template>
  <div class="my-4 break-word">
    <ContentRenderer :value="post" class="prose dark:prose-invert" />
  </div>
</template>

<script setup lang="ts">
import { Post } from '@/types/index'

defineProps<{
  post: Post
}>()
</script>
