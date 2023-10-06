<!-- eslint-disable prettier/prettier -->
<template>
  <h4>Outside in Slot</h4>
  <div>
    <slot />
  </div>
</template>

<script setup lang="ts">
import mermaid from 'mermaid'
import { onMounted } from 'vue'

onMounted(() => {
  mermaid.initialize({
    startOnLoad: true,
  })
  mermaid.init()
})
</script>
