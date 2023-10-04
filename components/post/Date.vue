<template>
  <div class="text-sm text-gray-600 dark:text-gray-400">
    <PostTime :isoDateTime="publishedAt" >
      <span>發表於</span>
    </PostTime>
    <span v-if="publishedAt"> ，並</span>
    <PostTime :isoDateTime="updatedAt" >
      <span>更新於</span>
    </PostTime>
    。
  </div>
</template>
<script setup lang="ts">
defineProps<{
  publishedAt: string | null
  updatedAt: string | null
}>()
</script>
