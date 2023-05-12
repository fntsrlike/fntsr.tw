<template>
  <div
    class="flex flex-col items-start justify-start divide-y divide-gray-200 dark:divide-gray-700 md:mt-24 md:flex-row md:items-center md:justify-center md:space-x-6 md:divide-y-0"
  >
    <div class="space-x-2 pt-6 pb-8 md:space-y-5">
      <h1
        class="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:border-r-2 md:px-6 md:text-6xl md:leading-14"
      >
        Tags
      </h1>
    </div>
    <div class="flex max-w-lg flex-wrap">
      <div v-for="tag in articleTags" :key="tag" class="mt-2 mb-2 mr-5">
        <PostTag :text="tag" />
        <NuxtLink
          :href="'/tags/' + kebabCase(tag)"
          class="-ml-2 text-sm font-semibold uppercase text-gray-600 dark:text-gray-300"
          aria-label="
          posts
          tagged
          ${tag}`"
        >
          ({{ tagsCount[tag] }})
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup>
import { kebabCase, toLower } from 'lodash-es/string'

const tagsCount = {}

const flatten = (tags, key) => {
  const _tags = tags
    .map((tag) => {
      let _tag = tag
      if (tag[key]) {
        const flattened = flatten(tag[key])
        _tag = flattened
      }

      if (typeof key === 'undefined') {
        _tag = toLower(_tag)
        tagsCount[_tag] = tagsCount[_tag] ? tagsCount[_tag] + 1 : 1
      }

      return _tag
    })
    .flat(1)
  return _tags
}

const { data } = await useAsyncData('tags', () =>
  queryContent('articles').only(['tags']).find()
)

const articleTags = [...new Set(flatten(data.value, 'tags'))].filter(
  (tag) => !!tag
)
</script>
