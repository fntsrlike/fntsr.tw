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
import { isoToDateTime, isoToDate } from '@/libraries/datetime'

defineProps<{
  isoDateTime: string | null
}>()
</script>
