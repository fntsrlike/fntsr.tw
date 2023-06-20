<template>
  <Icon
    name="fluent:window-new-24-regular"
    class="fill-current text-gray-500 dark:text-gray-300"
    :size="size / 4 + 'em'"
    style="vertical-align: text-top"
  />
</template>

<script setup>
defineProps({
  size: {
    type: Number,
    default: 3,
  },
})
</script>
