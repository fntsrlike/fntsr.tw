<template>
  <div class="my-4 break-word">
    <TableOfContent :toc="post.body.toc.links"></TableOfContent>
    <ContentRenderer :value="post" class="prose dark:prose-invert" />
  </div>
</template>

<script setup lang="ts">
import { Post } from '@/types/index'

defineProps<{
  post: Post
}>()
</script>
