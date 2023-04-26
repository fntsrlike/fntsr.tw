<template>
  <section>
    <h2>近期新增文章：</h2>
    <ol>
      <li v-for="content in articles" :key="content._path">
        {{ DateTime.fromISO(content.created_at).toLocaleString() }}
        <nuxt-link :to="content._path">{{ content.title }}</nuxt-link>
      </li>
    </ol>
  </section>
</template>

<script setup>
import { DateTime } from 'luxon'

const props = defineProps({
  count: {
    type: Number,
    default: 5,
  },
})

const articles = await useAsyncData(() =>
  queryContent('articles').limit(props.count).find()
).data
</script>
