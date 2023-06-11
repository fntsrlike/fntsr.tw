<template>
  <section>
    <h3>Articles</h3>
    <ol>
      <li v-for="content in articles" :key="content._path">
        {{ DateTime.fromISO(content.created_at).toFormat('yyyy-LL-dd') }}
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
  queryContent('articles')
    .only(['title', 'title_en', 'created_at', 'published_at', '_path'])
    .limit(props.count)
    .find()
).data
</script>
