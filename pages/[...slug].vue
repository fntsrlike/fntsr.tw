<template>
  <main class="mx-auto max-w-2xl px-6 py-6">
    <ContentDoc class="prose">
      <template #not-found>
        <p>404 not found</p>
        <p>back to <nuxt-link to="/">index</nuxt-link>.</p>
      </template>
    </ContentDoc>
  </main>
</template>
