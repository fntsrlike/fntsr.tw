<template>
  <div class="my-4 break-word flex flex-col md:flex-row-reverse">
    <div class="md:basis-1/4">
      <TableOfContent
        class="my-4 prose dark:prose-invert"
        :toc="post.body.toc.links"
      ></TableOfContent>
    </div>
    <div class="md:basis-3/4 md:mr-4">
      <ContentRenderer :value="post" class="prose dark:prose-invert" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { Post } from '@/types/index'

defineProps<{
  post: Post
}>()
</script>
