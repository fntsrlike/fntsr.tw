<template>
  <div v-if="toc.length > 0">
    <div class="text-2xl">ToC</div>

    <ol class="list-outside text-sm">
      <template v-for="primaryLink of toc" :key="primaryLink.id">
        <li class="toc2">
          <NuxtLink
            class="font-normal text-slate-700 dark:text-gray-400"
            :to="`#${primaryLink.id}`"
          >
            {{ primaryLink.text }}
          </NuxtLink>
        </li>
        <ol v-if="primaryLink.children" class="list-outside text-sm">
          <li
            v-for="secondaryLink of primaryLink.children"
            :key="secondaryLink.id"
          >
            <NuxtLink
              class="font-normal text-slate-700 dark:text-gray-400"
              :to="`#${secondaryLink.id}`"
            >
              {{ secondaryLink.text }}
            </NuxtLink>
          </li>
        </ol>
      </template>
    </ol>
  </div>
</template>

<script setup lang="ts">
import { ToC } from '@/types/index'

defineProps<{
  toc: ToC[]
}>()
</script>
