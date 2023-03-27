<script setup>
const { data } = await useAsyncData(() => queryContent('notes').find())
</script>

<template>
  <div class="container mx-auto">
    <div class="text-center">
      <h1 class="text-4xl">Notes</h1>
    </div>
    <div>
      <h1>There are {{ data.length }} available notes</h1>
    </div>
    <div class="my-5">
      <ul v-for="content in data" :key="content._path">
        <li>
          <nuxt-link :to="content._path"
            >{{ content.created_at }} {{ content.title }}</nuxt-link
          >
        </li>
      </ul>
    </div>
  </div>
</template>
