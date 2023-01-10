<!-- eslint-disable prettier/prettier -->
<template>
  <pre class="mermaid">
    graph TD
    A[Client] --> B[Load Balancer]
        B --> C[Server01]
        B --> D[Server02]
  </pre>
</template>

<script setup>
import mermaid from 'mermaid'
import { onMounted } from 'vue'

onMounted(() => {
  mermaid.initialize({
    startOnLoad: true,
  })
  mermaid.init()
})
</script>

<style>
pre.mermaid {
  background-color: rgba(0, 0, 0, 0);
  padding: 0;
  margin: 0;
  border-radius: 0;
  box-sizing: border-box;
  border-width: 0;
  border-style: solid;
  border-color: #e5e7eb;
  color: var(--tw-prose-body);
}
</style>
