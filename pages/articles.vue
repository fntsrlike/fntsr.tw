<template>
  <div class="container mx-auto">
    <div class="text-center">
      <h1 class="text-4xl">Articles</h1>
    </div>
    <div>There are {{ data.length }} available articles</div>
    <div class="my-5">
      <ul>
        <li v-for="content in data" :key="content._path">
          <nuxt-link :to="content._path">{{ content.title }}</nuxt-link>
        </li>
      </ul>
    </div>
  </div>
</template>
<script setup>
const { data } = await useAsyncData(() => queryContent('articles').find())
</script>
