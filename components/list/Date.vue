<template>
  <dl>
    <dt class="sr-only">Published on</dt>
    <dd
      class="text-base font-medium leading-6 text-gray-500 dark:text-gray-400"
    >
      <time v-if="item.published_at" dateTime="{{item.published_at}}">
        {{
          DateTime.fromISO(item.published_at).toLocal().toFormat('yyyy-LL-dd')
        }}
      </time>
      <time
        v-if="!item.published_at && item.created_at"
        dateTime="{{item.created_at}}"
      >
        {{
          DateTime.fromISO(item.created_at).toLocal().toFormat('yyyy-LL-dd')
        }}
      </time>
    </dd>
  </dl>
</template>
<script setup lang="ts">
import { DateTime } from 'luxon'
import { Post } from '@/types/index'

defineProps<{
  item: Post
}>()
</script>
