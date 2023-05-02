<template>
  <section>
    <h3>Notes</h3>
    <div>
      <ul class="list-none px-0">
        <li
          v-for="(content, index) in notes"
          :key="content._path"
          class="inline-block px-0"
        >
          <nuxt-link :to="content._path"> {{ content.title }}</nuxt-link
          ><span v-if="index + 1 < notes.length">、</span>
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
