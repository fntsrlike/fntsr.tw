<template>
  <a
    v-if="isValid"
    class="text-sm text-gray-500 transition hover:text-gray-600"
    target="_blank"
    rel="noopener noreferrer"
    :href="kind === 'mail' ? 'mailto:' + href : href"
  >
    <span class="sr-only">{{ kind }}</span>
    <Icon
      :name="iconCode"
      class="fill-current text-gray-700 hover:text-blue-500 dark:text-gray-200 dark:hover:text-blue-400"
      :size="size / 4 + 'em'"
    />
  </a>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const props = defineProps({
  kind: {
    type: String,
    default: '',
  },
  href: {
    type: String,
    default: '',
  },
  size: {
    type: Number,
    default: 8,
  },
})

const components = new Map([
  ['email', 'mdi:email'],
  ['github', 'mdi:github'],
  ['facebook', 'mdi:facebook'],
  ['youtube', 'mdi:youtube'],
  ['linkedin', 'mdi:linkedin'],
  ['twitter', 'mdi:twitter-circle'],
  ['mastodon', 'mdi:mastodon'],
  ['hourglass', 'ic:baseline-hourglass-top'],
])

const isValid = ref(true)
const iconCode = components.get(props.kind) || ''
const mailRex = /^\w+([.-]?\w+)@\w+([.-]?\w+)(.\w{2,3})+$/

if (
  !props.href ||
  (props.kind === 'mail' && !mailRex.test(props.href)) ||
  !iconCode
) {
  isValid.value = false
}
</script>
