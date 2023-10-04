<template>
  <time
    v-if="isoDateTime"
    :datetime="isoDateTime"
    :title="isoToDateTime(isoDateTime)"
  >
    <slot />
    {{ isoToDate(isoDateTime) }}
  </time>
</template>
<script setup lang="ts">
import { useDateTime } from '@/composables/useDateTime'

const { isoToDateTime, isoToDate } = useDateTime()

defineProps<{
  isoDateTime: string | null
}>()
</script>
