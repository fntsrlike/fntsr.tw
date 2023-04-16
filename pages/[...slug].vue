<template>
  <main>
    <article class="prose">
      <ContentDoc>
        <template #not-found>
          <p>404 not found</p>
          <p>back to <nuxt-link to="/">index</nuxt-link>.</p>
        </template>
      </ContentDoc>
    </article>
  </main>
</template>
