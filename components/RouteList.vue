<template>
  <div>
    <div>
      There are {{ data.length }} available routes by nuxtjs
    </div>
    <div>
      <table class="table-auto border-collapse">
        <thead>
          <tr>
            <th class="text-lg text-center border">#</th>
            <th class="text-lg text-center border">source</th>
            <th class="text-lg text-center border">path</th>
            <th class="text-lg text-center border">title</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(content, index) in data" :key="content.id">
            <td class="px-3 border">
              {{ index }}
            </td>
            <td class="px-3 border">
              {{ content.source }}
            </td>
            <td class="px-3 border">
              <NuxtLink :to="content.path">
                {{ decodeURIComponent(content.path) }}
              </NuxtLink>
            </td>
            <td class="px-3 border">
              <NuxtLink :to="content.path">
                {{ content.name ? content.name : 'Undefined' }}
              </NuxtLink>
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
