<template>
  <article class="max-w-full">
    <ContentDoc v-slot="{ doc }" path="_pages/migration-progress">
      <PostHeader :post="doc"></PostHeader>
      <PostContent :post="doc"></PostContent>
    </ContentDoc>
    <div class="prose dark:prose-invert max-w-full py-6">
      <h2>Progress Table</h2>
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th class="w-28">Published At</th>
            <th>Title</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="(article, index) in posts"
            :key="article.slug"
            :class="
              article.published_at ? '' : 'text-gray-400 dark:text-gray-500'
            "
          >
            <td>{{ index + 1 }}</td>
            <td>
              {{ isoToDate(article.created_at) }}
            </td>
            <td>
              <NuxtLink
                v-if="article.published_at"
                :href="`/${article.direct_to}/${isoToDate(article.created_at)}-${article.slug}`"
                >{{ article.title }}</NuxtLink
              >
              <span v-else>
                {{ article.title }}
              </span>
            </td>
            <td>{{ getStatus(article) }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </article>
</template>
<script setup lang="ts">
import { Post } from '@/types/index'
import { isoToDate } from '@/libraries/datetime'
import { fetch, queryLegacyArticles } from '@/api/queryContent'

const posts = await fetch('legacies', () => queryLegacyArticles())

const getStatus = (article : Post) => {
  return article.published_at ? '已發表' : '待整理'
}
</script>
