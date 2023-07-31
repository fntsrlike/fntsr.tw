<template>
  <div v-if="toc.length > 0">
    <div class="text-2xl">ToC</div>

    <ul class="list-disc list-inside">
      <template v-for="link of toc" :key="link.id">
        <li class="toc2">
          <NuxtLink :to="`#${link.id}`">{{ link.text }}</NuxtLink>
        </li>
        <li
          v-for="depth3Link of link.children"
          :key="depth3Link.id"
          class="pl-4"
        >
          <NuxtLink :to="`#${depth3Link.id}`">{{ depth3Link.text }}</NuxtLink>
        </li>
      </template>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { ToC } from '@/types/index'

defineProps<{
  toc: ToC[]
}>()
</script>
