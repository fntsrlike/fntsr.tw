<template>
  <div>
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
    <div
      class="flex flex-col items-start justify-start mt-10 md:mt-16 md:flex-row md:items-center md:justify-center md:space-x-6"
    >
      <ContentDoc v-slot="{ doc }">
        <ContentRenderer :value="doc" class="prose dark:prose-invert" />
      </ContentDoc>
    </div>
  </div>
</template>

<script setup>
import { kebabCase, toLower } from 'lodash-es/string'

const tagsCount = {}

// [TODO]: extract to composable
const flatten = (tagsList, key) => {
  const _tags = tagsList
    .map((element) => {
      let _e = element

      const whenElementIsPost = typeof element === 'object'
      if (whenElementIsPost) {
        if (!element[key]) {
          // eslint-disable-next-line no-console
          console.log(`[WARN] "${element._path}" has no "${key}" property`)
          element[key] = []
        }
        const tags = element[key]
        const flattened = flatten(tags)
        _e = flattened
      }

      const whenElementIsTag = typeof key === 'undefined'
      if (whenElementIsTag) {
        const tag = toLower(_e)
        tagsCount[tag] = tagsCount[tag] ? tagsCount[tag] + 1 : 1
        _e = tag
      }
      return _e
    })
    .flat(1)
  return _tags
}

const { data } = await useAsyncData('tags', () =>
  queryContent('/')
    .only(['tags'])
    .where({ tags: { $exists: true } })
    .where({ published_at: { $ne: null } })
    .find()
)

const flat = [...new Set(flatten(data.value, 'tags'))]
const articleTags = flat.filter((tag) => {
  return typeof tag === 'string' && tag.length > 0
})
</script>
