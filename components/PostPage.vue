<template>
  <article>
    <PostHeader :post="post" />
    <PostContent :post="post" />
    <PostFooter :post="post" />
  </article>
</template>
<script setup lang="ts">
import { Post } from '@/types/index'

defineProps<{
  post: Post
}>()
</script>
