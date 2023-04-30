<template>
  <footer>
    <div>
      <p class="inline mr-2">Tags:</p>
      <ul class="inline">
        <li v-for="tag in post.tags" :key="tag" class="inline">
          <PostTag :text="tag" />
        </li>
      </ul>
    </div>
  </footer>
</template>
<script setup lang="ts">
import { Post } from '@/types/index'

defineProps<{
  post: Post
}>()
</script>
