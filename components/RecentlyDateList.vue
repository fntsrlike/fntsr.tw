<template>
  <section>
    <h3>{{ title }}</h3>
    <ol>
      <li v-for="post in posts" :key="post._path">
        {{ DateTime.fromISO(post.created_at).toLocal().toFormat('yyyy-LL-dd') }}
        <NuxtLink :to="post._path">{{ post.title }}</NuxtLink>
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
