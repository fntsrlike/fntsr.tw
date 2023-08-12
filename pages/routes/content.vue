<script setup>
const { data } = await useAsyncData('home', () => queryContent('/').find())
</script>

<template>
  <div>
    <div>
      <h1>Routes overview</h1>
      <NuxtLink to="/">Go back to index</NuxtLink>
    </div>
    <div>
      <h1>There are {{ data.length }} available routes by nuxtjs</h1>
    </div>
    <div>
      <table class="table-auto border-collapse">
        <tr>
          <th class="text-lg text-center border">source</th>
          <th class="text-lg text-center border">path</th>
          <th class="text-lg text-center border">title</th>
        </tr>
        <tr v-for="content in data" :key="content._id">
          <td class="px-3 border">
            {{ content._source }} ::
            {{ content._path.split('/').slice(0, -1).join('/') }}
          </td>
          <td class="px-3 border">
            <span>{{ content._path.split('/').pop() }}</span>
          </td>
          <td class="px-3 border">
            <NuxtLink :to="content._path">{{ content.title }}</NuxtLink>
          </td>
        </tr>
      </table>
    </div>
    <div>
      The implementaion of this page is reference by
      <a
        href="https://wri7e.medium.com/view-all-routes-in-a-nuxtjs-application-193f38a715ac"
        target="_blank"
      >
        "42 - View all routes in a nuxtjs application"
      </a>
      .
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  layout: 'info',
})
</script>
