<template>
  <section>
    <h3>{{ title }}</h3>
    <div>
      <ul class="list-none px-0">
        <li
          v-for="(post, index) in posts"
          :key="post._path"
          class="inline-block px-0"
        >
          <NuxtLink :to="post._path"> {{ post.title }}</NuxtLink
          ><span v-if="index + 1 < posts.length">、</span>
        </li>
      </ul>
    </div>
  </section>
</template>

<script setup>
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
