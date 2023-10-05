<template>
  <article
    class="space-y-2 xl:grid xl:grid-cols-4 xl:items-baseline xl:space-y-0"
  >
    <ListItemDate :isoDateTime="item.published_at || item.created_at" />
    <div class="space-y-3 xl:col-span-3">
      <div>
        <NuxtLink :href="item._path">
          <h3
            class="text-xl font-bold leading-8 tracking-tight text-gray-900 dark:text-gray-100"
          >
            {{ item.title }}
            <DraftBadge v-if="isDraft(item)"></DraftBadge>
          </h3>
          <p class="text-gray-800 dark:text-gray-200">
            {{ item.title_en }}
          </p>
        </NuxtLink>
        <div class="flex flex-wrap">
          <PostTag v-for="tag in item.tags" :key="tag" :text="tag" />
        </div>
      </div>
      <div class="prose max-w-none text-gray-500 dark:text-gray-400">
        {{ item.description }}
      </div>
    </div>
  </article>
</template>
<script setup lang="ts">
import { Post } from '@/types/index'
import { usePost } from '@/composables/usePost'

const { isDraft } = usePost()

defineProps<{
  item: Post
}>()
</script>
