<template>
  <NuxtLink class="dark:text-white" :href="href" :target="theTarget">
    <slot />
    <NewWindowIcon v-if="isOutGoingLink" :size="3" class="ml-px" />
  </NuxtLink>
</template>

<script setup lang="ts">
const props = defineProps({
  href: {
    type: String,
    default: '',
  },
  target: {
    type: String,
    default: undefined,
    required: false,
  },
})

const isOutGoingLink = computed(() => {
  return props.href.startsWith('http')
})

const theTarget = props.target ?? (isOutGoingLink.value ? '_blank' : undefined)
</script>
