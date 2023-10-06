<template>
  <div v-if="isProduction() && isPostDraft(post)">
    <p>Haven't published.</p>
    <p>back to <NuxtLink to="/">index</NuxtLink>.</p>
  </div>
  <article v-else class="pb-4">
    <PostHeader :post="post" :show-date="true" class="pb-6" />
    <PostContent :post="post" />
    <PostFooter :post="post" class="pt-10" />
  </article>
</template>
<script setup lang="ts">
import { Post } from '@/types/index'
import { isProduction } from '@/libraries/environment'
import { isPostDraft } from '@/libraries/post'

defineProps<{
  post: Post
}>()
</script>
