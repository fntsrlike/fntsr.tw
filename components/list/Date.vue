<template>
  <dl v-if="isoDateTime" >
    <dt class="sr-only">Published on</dt>
    <dd
      class="text-base font-medium leading-6 text-gray-500 dark:text-gray-400"
    >
      <time dateTime="{{isoDateTime}}" :title="isoToDateTime(isoDateTime)">
        {{ isoToDate(isoDateTime) }}
      </time>
    </dd>
  </dl>
</template>
<script setup lang="ts">
import { useDateTime } from '@/composables/useDateTime'

const { isoToDateTime, isoToDate } = useDateTime()

defineProps<{
  isoDateTime: string | null
}>()
</script>
