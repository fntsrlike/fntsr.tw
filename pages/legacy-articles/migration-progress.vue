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
            v-for="(article, index) in data"
            :key="article.slug"
            :class="
              article.published_at ? '' : 'text-gray-400 dark:text-gray-500'
            "
          >
            <td>{{ index + 1 }}</td>
            <td>
              {{
                DateTime.fromISO(article.created_at)
                  .toLocal()
                  .toFormat('yyyy-LL-dd')
              }}
            </td>
            <td>
              <NuxtLink
                v-if="article.published_at"
                :href="`/${article.direct_to}/${DateTime.fromISO(
                  article.created_at
                )
                  .toLocal()
                  .toFormat('yyyy-LL-dd')}-${article.slug}`"
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
<script setup>
import { DateTime } from 'luxon'

const { data } = await useAsyncData(() =>
  queryContent('legacy-articles').sort({ created_at: -1 }).find()
)

const getStatus = (article) => {
  return article.published_at ? '已發表' : '待整理'
}
</script>
