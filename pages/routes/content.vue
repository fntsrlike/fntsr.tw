<script setup>
const { data } = await useAsyncData('home', () => queryContent('/').find())
</script>

<template>
  <div>
    <div class="header">
      <h1>Routes overview</h1>
      <NuxtLink to="/">Go back to index</NuxtLink>
    </div>
    <div class="info">
      <h1>There are {{ data.length }} available routes by nuxtjs</h1>
    </div>
    <div class="wrapper">
      <table id="routes">
        <tr>
          <th class="text-lg text-center">content._id</th>
          <th class="text-lg text-center">content._path</th>
        </tr>
        <tr v-for="content in data" :key="content._path">
          <td>
            <NuxtLink :to="content._id">{{ content._id }}</NuxtLink>
          </td>
          <td>
            <NuxtLink :to="content._path">{{ content._path }}</NuxtLink>
          </td>
        </tr>
      </table>
    </div>
    <div class="info">
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
  layout: 'pure',
})
</script>

<style>
.header {
  padding: 30px;
  background-color: rgba(5, 150, 105, 1);
}
.header h1 {
  color: white;
  font-size: 2rem;
}
.header a {
  color: white;
  font-size: 1rem;
  text-decoration: underline;
}
.info {
  padding: 30px;
}
.info h1 {
  font-size: 1.2rem;
}
.info a {
  color: blue;
}
.wrapper {
  margin: 0 15px;
}
#routes {
  border-collapse: collapse;
  width: 100%;
}
#routes td,
#routes th {
  border: 1px solid #ddd;
  padding: 8px;
}
#routes tr:nth-child(even) {
  background-color: #f2f2f2;
}
#routes tr:hover {
  background-color: #ddd;
}
#routes th {
  background-color: rgba(5, 150, 105, 1);
  padding-top: 12px;
  padding-bottom: 12px;
  text-align: left;
  color: white;
}
</style>
