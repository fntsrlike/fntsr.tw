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
        <div v-for="(count, tag) in tagsRecord" :key="tag" class="mt-2 mb-2 mr-5">
          <PostTag :text="tag" />
          <NuxtLink
            :href="'/tags/' + kebabCase(tag)"
            class="-ml-2 text-sm font-semibold uppercase text-gray-600 dark:text-gray-300"
            aria-label="
          posts
          tagged
          ${tag}`"
          >
            ({{ count }})
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

<script setup lang="ts">
import { Post } from '@/types/index'
import { kebabCase } from '~/libraries/formater'
import { fetch, queryTags } from '@/api/queryContent'

const postsToTags = (posts: Post[]) => {
  return posts.map((post) => post.tags).flat().map((tag) => tag.toLowerCase())
}

const tagsToRecord = (tags: string[]) => {
  return tags.reduce((acc: Record<string, number>, item: string) => {
    acc[item] = (acc[item] || 0) + 1;
    return acc;
  }, {})
}

const posts = await fetch('tags', () => queryTags())
const tags = postsToTags(posts.value)
const tagsRecord = tagsToRecord(tags)
</script>
