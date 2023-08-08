<template>
  <section>
    <h3>{{ title }}</h3>
    <ol>
      <li v-for="post in posts" :key="post._path" class="mb-2 md:mb-0 leading-6 md:leading-7">
        <span class="block md:inline md:mr-2">{{ DateTime.fromISO(post.created_at).toLocal().toFormat('yyyy-LL-dd') }}</span>
        <span class="md:mb-0  "><NuxtLink :to="post._path">{{ post.title }}</NuxtLink></span>
      </li>
    </ol>
  </section>
</template>

<script setup>
import { DateTime } from 'luxon'
import { useQuery } from '@/composables/useQuery'

const { queryRecentlyPosts } = useQuery()

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

const posts = await queryRecentlyPosts(props.type, props.count)
</script>
