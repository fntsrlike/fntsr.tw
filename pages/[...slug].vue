<template>
  <ContentDoc>
    <template #default="{ doc }">
      <PostPage :post="doc" />
    </template>
    <template #not-found>
      <p>404 not found</p>
      <p>back to <nuxt-link to="/">index</nuxt-link>.</p>
    </template>
  </ContentDoc>
</template>
