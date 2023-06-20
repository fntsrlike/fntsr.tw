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
    <RecentlyDateList
      title="Announce"
      type="announce"
      :count="5"
    ></RecentlyDateList>
    <RecentlyDateList
      title="Articles"
      type="articles"
      :count="5"
    ></RecentlyDateList>
    <RecentlyNameList title="Notes" type="notes" :count="5"></RecentlyNameList>
  </div>
</template>
