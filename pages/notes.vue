<script setup></script>

<template>
  <div class="container mx-auto">
    <div class="text-center">
      <h1 class="text-4xl">Notes</h1>
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
