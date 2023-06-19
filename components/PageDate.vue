<template>
  <div class="text-sm text-gray-600 dark:text-gray-400">
    <time
      v-if="publishedAt"
      :datetime="publishedAt"
      :title="DateTime.fromISO(publishedAt).toLocal().toFormat(dateTimeFormat)"
    >
      發表於
      {{ DateTime.fromISO(publishedAt).toLocal().toFormat(dateFormat) }}
    </time>
    <span v-if="publishedAt && updatedAt"> ，並 </span>
    <time
      v-if="updatedAt"
      :datetime="updatedAt"
      :title="DateTime.fromISO(updatedAt).toLocal().toFormat(dateTimeFormat)"
    >
      於
      {{ DateTime.fromISO(updatedAt).toLocal().toFormat(dateFormat) }}
      更新
    </time>
  </div>
</template>
<script setup lang="ts">
import { DateTime } from 'luxon'

defineProps<{
  publishedAt: string | null
  updatedAt: string | null
}>()

const dateFormat = 'yyyy-LL-dd HH:mm'
const dateTimeFormat = `${dateFormat} HH:mm`
</script>
