<template>
  <div class="prose dark:prose-invert">
    <section>
      <h2>Digital Garden</h2>
      Digital Garden 的一番介紹
    </section>
    <RecentlyArticles :count="5"></RecentlyArticles>
    <RecentlyNotes :count="5"></RecentlyNotes>
  </div>
</template>
