<template>
  <article class="pb-4">
    <PostHeader :post="post" class="pb-6" />
    <PostContent :post="post" />
    <PostFooter :post="post" class="pt-10" />
  </article>
</template>
<script setup lang="ts">
import { Post } from '@/types/index'

defineProps<{
  post: Post
}>()
</script>
