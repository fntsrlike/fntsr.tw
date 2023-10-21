<template>
  <section>
    <h3>{{ title }}</h3>
    <div>
      <ul class="list-disc md:list-none md:px-2">
        <li
          v-for="(post, index) in posts"
          :key="post._path"
          class="md:inline-block md:px-0"
        >
          <NuxtLink :to="post._path" class="text-white"> {{ post.title }}</NuxtLink
          ><span v-if="index + 1 < posts.length">、</span>
        </li>
      </ul>
    </div>
  </section>
</template>

<script setup lang="ts">
import { fetch, queryPostsRecently } from '@/api/queryContent'

const props = defineProps({
  title: {
    type: String,
    default: 'default title',
  },
  type: {
    type: String,
    default: '',
  },
  count: {
    type: Number,
    default: 5,
  },
})

const posts = await fetch(`recently-${props.type}`, () => queryPostsRecently(props.type, props.count))
</script>
