<template>
  <div class="prose dark:prose-invert">
    <section>
      <h2>Digital Garden</h2>
      Digital Garden 的一番介紹
    </section>
    <section>
      <h2>近期新增文章：</h2>
      <ol>
        <li v-for="content in articles" :key="content._path">
          {{ DateTime.fromISO(content.created_at).toLocaleString() }}
          <nuxt-link :to="content._path">{{ content.title }}</nuxt-link>
        </li>
      </ol>
    </section>
    <section>
      <h2>近期更新的筆記：</h2>
      <div>
        <span v-for="content in notes" :key="content._path">
          <nuxt-link :to="content._path">
            {{ DateTime.fromISO(content.created_at).toLocaleString() }}
            {{ content.title }}</nuxt-link
          >、
        </span>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { DateTime } from 'luxon'

const notes = await useAsyncData(() => queryContent('notes').find()).data
const articles = await useAsyncData(() => queryContent('articles').find()).data
</script>
