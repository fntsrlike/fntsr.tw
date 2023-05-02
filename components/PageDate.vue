<template>
  <div class="text-sm text-gray-600 dark:text-gray-400">
    <time
      v-if="publishedAt"
      :datetime="publishedAt"
      :title="DateTime.fromISO(publishedAt).toFormat(dateTimeFormat)"
    >
      發表於
      {{ DateTime.fromISO(publishedAt).toFormat(dateFormat) }}
    </time>
    <time
      v-if="updatedAt"
      :datetime="updatedAt"
      :title="DateTime.fromISO(updatedAt).toFormat(dateTimeFormat)"
    >
      ，並於
      {{ DateTime.fromISO(updatedAt).toFormat(dateFormat) }}
      更新
    </time>
  </div>
</template>
<script setup lang="ts">
import { DateTime } from 'luxon'

defineProps<{
  publishedAt: string
  updatedAt: string
}>()

const dateFormat = 'yyyy-LL-dd hh:mm'
const dateTimeFormat = `${dateFormat} hh:mm`
</script>
