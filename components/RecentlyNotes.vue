<template>
  <section>
    <h3>Notes</h3>
    <div>
      <ul class="list-none px-0">
        <li
          v-for="(content, index) in notes"
          :key="content._path"
          class="inline-block px-0"
        >
          <NuxtLink :to="content._path"> {{ content.title }}</NuxtLink
          ><span v-if="index + 1 < notes.length">、</span>
        </li>
      </ul>
    </div>
  </section>
</template>

<script setup>
import { useQuery } from '@/composables/useQuery'

const { quertRecentlyPosts } = useQuery()

const props = defineProps({
  count: {
    type: Number,
    default: 5,
  },
})

const notes = await useAsyncData(() => quertRecentlyPosts('notes', props.count))
  .data
</script>
