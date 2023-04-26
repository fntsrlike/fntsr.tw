<template>
  <section>
    <h2>近期更新的筆記：</h2>
    <div>
      <ul>
        <li v-for="content in notes" :key="content._path">
          <nuxt-link :to="content._path"> {{ content.title }}</nuxt-link>
        </li>
      </ul>
    </div>
  </section>
</template>

<script setup>
const props = defineProps({
  count: {
    type: Number,
    default: 5,
  },
})

const notes = await useAsyncData(() =>
  queryContent('notes').limit(props.count).find()
).data
</script>
