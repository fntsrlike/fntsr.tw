<template>
  <NuxtLink
    :href="'/tags/' + kebabCase(text)"
    class="mr-3 text-sm font-medium uppercase text-teal-500 hover:text-teal-600 dark:hover:text-teal-400"
  >
    {{ text.split(' ').join('-') }}
  </NuxtLink>
</template>
<script setup lang="ts">
import { kebabCase } from '~/libraries/formater'

defineProps({
  text: {
    type: String,
    default: '',
  },
})
</script>
