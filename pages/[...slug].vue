<template>
  <ContentDoc class="prose dark:prose-invert">
    <template #not-found>
      <p>404 not found</p>
      <p>back to <nuxt-link to="/">index</nuxt-link>.</p>
    </template>
  </ContentDoc>
</template>

<style>
.prose li {
  margin-top: 0em;
  margin-bottom: 0em;
}
</style>
