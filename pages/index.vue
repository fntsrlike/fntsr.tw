<template>
  <div class="prose dark:prose-invert mb-48">
    <ContentDoc>
      <template #default="{ doc }">
        <ContentRenderer :value="doc" />
      </template>
      <template #not-found>
        <p>There has no markdown file for index.</p>
      </template>
    </ContentDoc>
    <h2>Recently</h2>
    <RecentlyAnnounce :count="3"></RecentlyAnnounce>
    <RecentlyArticles :count="5"></RecentlyArticles>
    <RecentlyNotes :count="5"></RecentlyNotes>
  </div>
</template>
