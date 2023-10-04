<template>
  <section class="pb-24">
    <PageHeader :post="page" />
    <PostContent :post="page"/>
    <ListSection :posts="posts"/>
  </section>
</template>
<script setup lang="ts">
import { Post } from '@/types/index'

defineProps<{
  page: Post
  posts: Post[]
}>()
</script>
