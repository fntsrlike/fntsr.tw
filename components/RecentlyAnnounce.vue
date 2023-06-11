<template>
  <section>
    <h3>Announce</h3>
    <ol>
      <li v-for="content in articles" :key="content._path">
        {{ DateTime.fromISO(content.created_at).toFormat('yyyy-LL-dd') }}
        <NuxtLink :to="content._path">{{ content.title }}</NuxtLink>
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
  queryContent('announce').limit(props.count).find()
).data
</script>
