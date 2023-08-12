<template>
  <div>
    <div>
      <h1>There are {{ data.length }} available routes by nuxtjs</h1>
    </div>
    <div>
      <table class="table-auto border-collapse">
        <thead>
          <tr>
            <th class="text-lg text-center border">source</th>
            <th class="text-lg text-center border">path</th>
            <th class="text-lg text-center border">title</th>
          </tr>
        </thead>
        <tbody>
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
        </tbody>
      </table>
    </div>
  </div>
</template>
<script setup>
defineProps({
  data: {
    type: Array,
    required: true,
  },
})
</script>
