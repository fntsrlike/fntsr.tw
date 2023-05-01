<template>
  <div class="prose dark:prose-invert">
    <ContentDoc>
      <template #default="{ doc }">
        <PageTitle>{{ doc.title }}</PageTitle>
        <ContentRenderer :value="doc" />
      </template>
      <template #not-found>
        <p>There has no markdown file for index.</p>
      </template>
    </ContentDoc>
    <RecentlyArticles :count="5"></RecentlyArticles>
    <RecentlyNotes :count="5"></RecentlyNotes>
  </div>
</template>
