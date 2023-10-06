<template>
  <ContentDoc v-slot="{ doc }">
    <ListPage :page="doc" :posts="posts" />
  </ContentDoc>
</template>
<script setup lang="ts">
import { fetch, queryPosts } from '@/api/queryContent'

const route = useRoute()
const slug = route.fullPath
const posts = await fetch(`${slug}-list`, () => queryPosts(slug))
</script>
