<template>
  <a :href="refinedSrc" target="_blank">
    <img :src="refinedSrc" :alt="alt" :style="style" />
  </a>
</template>

<script setup lang="ts">
import { withBase } from 'ufo'
import { useRuntimeConfig, computed } from '#imports'

const props = defineProps({
  src: {
    type: String,
    default: '',
  },
  alt: {
    type: String,
    default: '',
  },
  width: {
    type: [String, Number],
    default: undefined,
  },
  height: {
    type: [String, Number],
    default: undefined,
  },
})

const refinedSrc = computed(() => {
  if (!props.src) {
    return ''
  }

  let src = props.src.replaceAll(/^public\//g, '/')

  if (src.startsWith('/') && !src.startsWith('//')) {
    return withBase(src, useRuntimeConfig().app.baseURL)
  }

  return src
})

const style = computed(() => {
  const width = props.width ? `width:${props.width};` : ''
  const height = props.height ? `height:${props.height};` : ''
  return `${width} ${height};`
})
</script>
