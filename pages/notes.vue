<script setup></script>

<template>
  <div class="divide-y divide-gray-200 dark:divide-gray-700">
    <div class="space-y-2 pt-6 pb-8 md:space-y-5">
      <PageTitle> Notes </PageTitle>
    </div>
    <div>There are {{ data.length }} available notes</div>
    <div class="my-5">
      <ul>
        <li v-for="content in data" :key="content._path">
          <nuxt-link :to="content._path">
            {{ content.created_at }}
            {{ content.title }}</nuxt-link
          >
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import { DateTime } from 'luxon'

const { data } = await useAsyncData(() => queryContent('notes').find())
</script>
